import { Icon } from "@iconify/react/dist/iconify.js";
import Image, { StaticImageData } from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

interface CardProps {
  imageSource: StaticImageData;
  cardTitle: string;
  cardDescription: string;
  onButtonClick?: () => void;
  price: string;
  discountedPrice: string;
  discountRate: string;
  cardId: string;
}

const Card = ({
  imageSource,
  cardTitle,
  cardDescription,
  price,
  discountedPrice,
  discountRate,
  cardId,
}: CardProps) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/product/${cardId}`);
  };
  return (
    <div className="border-2 rounded-md border-black h-[25rem] w-[15rem] shadow-custom hover:shadow-underlay dark:hover:shadow-darkUnderlay transition-all duration-500 ease-in-out text-center group p-2">
      <div className="overflow-hidden">
        <Image
          height={250}
          width={250}
          alt="product"
          loading="lazy"
          src={imageSource}
          className="transition-transform duration-500 ease-in-out brightness-100"
        />
      </div>

      <div>
        <p className="font-semibold">{cardTitle}</p>
        <p className="text-xs italic">{cardDescription}</p>
      </div>

      <div className="divider px-2 text-gray-600"></div>

      <div className="text-sm flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col gap-3">
          <p className="flex items-center justify-center">
            {/* <span className="flex items-center text-gray-400 line-through">
              <Icon icon="tabler:currency-naira" className="text-sm" />
              <span className="text-xs">{price}</span>
            </span> */}
            <span className="flex items-center">
              <Icon icon="tabler:currency-naira" className="text-lg" />
              <span className="text-base font-bold">{discountedPrice}</span>
            </span>
          </p>

          <div>
            <p>
              Enjoy <span className="text-red-600">{discountRate}%</span> off!
            </p>
            <span>Offer valid till May 1.</span>
          </div>
        </div>

        <CustomButton
          onClick={handleCardClick}
          buttonText="Order Now"
          buttonSize="btn-sm"
          buttonTypeOne
        />
      </div>
    </div>
  );
};

export default Card;
