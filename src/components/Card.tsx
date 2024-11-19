import { Icon } from "@iconify/react/dist/iconify.js";
import Image, { StaticImageData } from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

interface CardProps {
  imageSource: StaticImageData;
  onButtonClick: () => void;
}

const Card = ({ imageSource, onButtonClick }: CardProps) => {
  return (
    <div className="border-2 rounded-md border-black h-[25rem] w-[15rem] shadow-custom hover:shadow-underlay dark:hover:shadow-darkUnderlay transition-all duration-500 ease-in-out text-center group p-2">
      <div className="overflow-hidden">
        <Image
          height={250}
          width={250}
          alt="product"
          src={imageSource}
          className="transition-transform duration-500 ease-in-out group-hover:-rotate-[20deg] brightness-100"
        />
      </div>

      <div>
        <p className="font-semibold">Jordan True Flight</p>
        <p className="text-xs italic">White Sail, Lightning & Chlorophyll</p>
      </div>

      <div className="divider px-2 text-gray-600"></div>

      <div className="text-sm flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col gap-3">
          <p className="flex items-center">
            <span className="flex items-center text-gray-400 line-through">
              <Icon icon="tabler:currency-naira" className="text-sm" />
              <span className="text-xs">16,393.44</span>
            </span>
            <span className="flex items-center">
              <Icon icon="tabler:currency-naira" className="text-lg" />
              <span className="text-base font-bold">10,000</span>
            </span>
          </p>

          <div>
            <p>
              Enjoy <span className="text-red-600">39%</span> off!
            </p>
            <span>Offer valid till January 1.</span>
          </div>
        </div>

        <CustomButton
          onClick={onButtonClick}
          buttonText="Order Now"
          buttonSize="btn-sm"
          buttonTypeOne
        />
      </div>
    </div>
  );
};

export default Card;
