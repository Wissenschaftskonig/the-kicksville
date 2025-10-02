"use client";

import { LOGO } from "@/images";
import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import ThemeController from "./ThemeController";
import { useRouter } from "next/navigation";
import { Permanent_Marker } from "next/font/google";
import { useCart } from "@/context/CartContextProvider";

export const permanentMarker = Permanent_Marker({
  weight: ["400"],
  subsets: ["latin"],
});

const Navbar = () => {
  const router = useRouter();
  const { cartItems } = useCart();

  const goHome = () => {
    router.push("/");
  };

  const goToCart = () => {
    router.push("/cart");
  };

  return (
    <>
      <nav className="flex items-center justify-between px-4 md:px-8 bg-white/14 rounded-lg h-[78px] shadow-lg backdrop-blur-[6.8px] border-white/2 sticky top-0 z-50">
        <div className="">
          <Image
            alt="logo"
            src={LOGO}
            height={50}
            width={50}
            onClick={goHome}
            className="hover:cursor-pointer brightness-100 contrast-100"
          />
        </div>

        <p className={`${permanentMarker.className} text-3xl hidden md:block`}>
          Redpay Store
        </p>

        <div className="flex gap-3 items-center">
          <div className="flex items-start">
            <Icon
              icon="material-symbols:shopping-cart-outline-rounded"
              className="h-7 w-7 hover:cursor-pointer"
              onClick={goToCart}
            />
            {cartItems.length > 0 && (
              <span className="rounded-full text-white font-bold bg-red-500 text-xs h-4 w-4 text-center">
                {cartItems.length}
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
