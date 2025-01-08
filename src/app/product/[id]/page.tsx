"use client";

import { useRouter } from "next/navigation";
import { SALE_ITEMS, shoeSizes, showToast } from "@/utils";
import { use, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import { useCart } from "@/context/CartContextProvider";

interface ProductDetailsParams {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductDetails({ params }: ProductDetailsParams) {
  const router = useRouter();
  const [mainPicIndex, setMainPicIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addToCart } = useCart();

  const { id } = use(params);

  const item = SALE_ITEMS.find((item) => item.id === id);

  if (!item) {
    return <p>Item not found!</p>;
  }

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const goBack = () => {
    router.back();
  };

  const proceedToCart = () => {
    if (selectedSize) {
      addToCart({
        id: item.id,
        name: item.cardTitle,
        size: selectedSize,
        price: item.discountedPrice,
        image: item.displayPics[0].pic,
        quantity: 1,
      });

      showToast("success", `${item.cardTitle} added to cart`);

      setTimeout(() => {
        router.push("/cart");
      }, 1500);
    }
  };

  return (
    <main className="relative flex flex-col gap-4 lg:flex-row px-4 lg:px-8 pb-4">
      <Icon
        onClick={goBack}
        icon="mdi:arrow-left"
        className="h-10 w-10 absolute top-[28rem] left-4 md:top-4 lg:left-8 z-10"
      />

      <section className="flex w-full lg:w-1/2 justify-center">
        <div>
          {item.displayPics.map((item, index) => (
            <Image
              key={index}
              src={item.pic}
              alt="display images"
              loading="lazy"
              onMouseEnter={() => setMainPicIndex(index)}
              height={85}
              width={85}
            />
          ))}
        </div>

        <div>
          <Image
            src={item.displayPics[mainPicIndex].pic}
            alt="large display image"
            height={510}
            width={510}
          />
        </div>
      </section>

      <section className="flex flex-col w-full items-center m-auto gap-8 lg:gap-10 lg:w-1/2">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold">{item.cardTitle}</h1>
          <h2 className="italic">{item.cardDescription}</h2>
          <span className="flex items-center justify-center">
            <Icon icon="tabler:currency-naira" className="text-xl" />
            <span className="text-base font-bold">{item.discountedPrice}</span>
          </span>
        </div>

        <div className="">
          <div className="flex justify-between items-center">
            <div className="flex items-end my-4">
              <h3>Available Sizes</h3>
              <Icon icon={"mdi:chevron-double-down"} className="h-5 w-5" />
            </div>
          </div>

          <ul className="grid grid-cols-5 gap-2 md:gap-4">
            {shoeSizes.map((size) => (
              <CustomButton
                key={size.num}
                buttonText={size.num}
                style={`w-14 text-sm md:w-28 ${
                  selectedSize === size.num
                    ? "transition-all ease-in-out bg-gray-500 text-white"
                    : ""
                }`}
                buttonTypeTwo
                onClick={() => handleSizeSelect(size.num)}
              />
            ))}
          </ul>
        </div>

        <div className="mt-0 lg:mt-10 w-5/6">
          <CustomButton
            buttonText="Add to Cart"
            buttonTypeOne
            buttonSize="btn-wide"
            style="text-md font-thin uppercase w-full"
            onClick={proceedToCart}
            disabled={!selectedSize}
          />
        </div>
      </section>
    </main>
  );
}
