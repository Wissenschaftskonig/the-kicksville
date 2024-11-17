"use client";
import CustomButton from "@/components/CustomButton";
import { shoeSizes, slideShow } from "@/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Cart() {
  const router = useRouter();
  const [mainPicIndex, setMainPicIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const proceedToCheckout = () => {
    router.push("/checkout");
  };

  return (
    <>
      <main className="flex flex-col gap-4 lg:flex-row px-4 lg:px-8 pb-4">
        <section className="flex w-full lg:w-1/2 justify-center">
          <div>
            {slideShow.map((item, index) => (
              <Image
                key={index}
                src={item.pic}
                alt="display images"
                onMouseEnter={() => setMainPicIndex(index)}
                height={85}
                width={85}
              />
            ))}
          </div>

          <div>
            <Image
              src={slideShow[mainPicIndex].pic}
              alt="large display image"
              height={510}
              width={510}
            />
          </div>
        </section>

        <section className="flex flex-col w-full items-center m-auto gap-8 lg:gap-10 lg:w-1/2">
          <div className="text-left md:text-center">
            <h1 className="text-3xl font-extrabold">Jordan True Flight</h1>
            <h2 className="italic">White Sail, Lightning & Chlorophyll</h2>
            <span className="flex items-center justify-center">
              <Icon icon="tabler:currency-naira" className="text-xl" />
              <span className="text-base font-bold">151,890</span>
            </span>
          </div>

          <div className="">
            <div className="flex items-end my-4">
              <h3>Available Sizes</h3>
              <Icon icon={"mdi:chevron-double-down"} className="h-5 w-5" />
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
              buttonText="Checkout"
              buttonTypeOne
              buttonSize="btn-wide"
              style="text-md font-thin uppercase w-full"
              onClick={proceedToCheckout}
              disabled={!selectedSize}
            />
          </div>
        </section>
      </main>
    </>
  );
}
