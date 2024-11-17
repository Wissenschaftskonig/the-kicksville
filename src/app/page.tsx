"use client";

import { MAIN_IMG, SAMPLE } from "@/images";
import Image from "next/image";
import "./globals.css";
import Card from "@/components/Card";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { useEffect, useState } from "react";
import { showToast } from "@/utils";
import { useRouter } from "next/navigation";

export default function Home() {
  const [targetTime, setTargetTime] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    setTargetTime(new Date("2025-01-01T00:00:00").getTime());
  }, []);

  const addToCart = () => {
    showToast("success", "Added to cart");
    setTimeout(() => {
      router.push("/cart");
    }, 2000);
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center px-4 lg:px-8 py-4">
        <section className="flex flex-col-reverse lg:flex lg:flex-row">
          <div className="flex flex-col justify-center items-center w-full lg:w-1/2 gap-10">
            <aside className="text-left flex flex-col gap-8">
              <div>
                <h1 className="text-3xl font-extrabold">Jordan True Flight</h1>
                <h2 className="italic">White Sail, Lightning & Chlorophyll</h2>
              </div>
              <p>
                {`With a design inspired by the AJ7, the True Flight brings a classic court look to your everyday 'fit. With premium materials, a look that's a breath of fresh air and an inner sleeve for a secure fit, these J's bring versatility to a signature style.`}
              </p>
            </aside>

            <Card imageSource={SAMPLE} onButtonClick={addToCart} />
          </div>

          <aside className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-6">
            <div className="hidden lg:block">
              {targetTime && <FlipClockCountdown to={targetTime} />}
            </div>

            <div className="block lg:hidden">
              {targetTime && (
                <FlipClockCountdown
                  to={targetTime}
                  digitBlockStyle={{ width: 30, height: 50, fontSize: 24 }}
                />
              )}
            </div>

            <div className="animate-zoom">
              <Image
                alt="main product photo"
                src={MAIN_IMG}
                height={500}
                width={500}
                className="drop-shadow-customDrop z-10"
              />
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}
