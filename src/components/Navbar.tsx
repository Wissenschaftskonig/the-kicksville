"use client";

import { LOGO } from "@/images";
import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import ThemeController from "./ThemeController";
import { useRouter } from "next/navigation";
import { Permanent_Marker } from "next/font/google";

interface NavBarProps {
  numOfCartItems?: string;
}
const permanentMarker = Permanent_Marker({
  weight: ["400"],
  subsets: ["latin"],
});

const Navbar = ({ numOfCartItems }: NavBarProps) => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };
  const goToCart = () => {
    router.push("/cart");
  };

  return (
    <>
      <nav className="flex items-center justify-between px-4 md:px-8 bg-white/14 rounded-lg shadow-lg backdrop-blur-[6.8px] border-white/2 mb-6">
        <div className="hover:rotate-[20deg] duration-300 transition-all ease-in-out">
          <Image
            alt="logo"
            src={LOGO}
            height={70}
            width={70}
            onClick={goHome}
            className="hover:cursor-pointer brightness-100 contrast-100"
          />
        </div>

        <p className={`${permanentMarker.className} text-3xl hidden md:block`}>
          KicksVille
        </p>

        <div className="flex gap-3 items-center">
          <div className="flex">
            <Icon
              icon="material-symbols:shopping-cart-outline-rounded"
              className="h-7 w-7 hover:cursor-pointer"
              onClick={goToCart}
            />

            {numOfCartItems && (
              <span className="text-sm font-bold text-red-600">
                {numOfCartItems}
              </span>
            )}
          </div>

          <div>
            <ThemeController />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
