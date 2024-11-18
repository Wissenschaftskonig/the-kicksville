"use client";

import { LOGO } from "@/images";
import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import ThemeController from "./ThemeController";
import { useRouter } from "next/navigation";
import { Permanent_Marker } from "next/font/google";
import { useCart } from "@/context/CartContextProvider";

const permanentMarker = Permanent_Marker({
  weight: ["400"],
  subsets: ["latin"],
});

const Navbar = () => {
  const router = useRouter();
  const { addedToCart } = useCart();

  const goHome = () => {
    router.push("/");
    // router.refresh();
  };

  const goToCart = () => {
    router.push("/cart");
  };

  return (
    <>
      <nav className="flex items-center justify-between px-4 md:px-8 bg-white/14 rounded-lg shadow-lg backdrop-blur-[6.8px] border-white/2 mb-6 sticky top-0 z-50">
        <div className="hover:-rotate-[20deg] duration-300 transition-all ease-in-out">
          <Image
            alt="logo"
            src={LOGO}
            height={70}
            width={70}
            onClick={goHome}
            className="hover:cursor-pointer brightness-100 contrast-100 rotate-[20deg]"
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
            {addedToCart && (
              <span className="badge badge-error rounded-full badge-xs "></span>
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
