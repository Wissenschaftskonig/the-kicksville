"use client";

import { MAIN_IMG } from "@/images";
import Image from "next/image";
import "./globals.css";
import Card from "@/components/Card";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "./fliptimer.css";
import { useEffect, useState } from "react";
import { SALE_ITEMS } from "@/utils";
import { permanentMarker } from "@/components/Navbar";

export default function Home() {
  const [targetTime, setTargetTime] = useState<number | null>(null);

  useEffect(() => {
    setTargetTime(new Date("2025-05-01T00:00:00").getTime());
  }, []);

  const [firstItem, ...otherItems] = SALE_ITEMS;
  return (
    <>
      <main className="overflow-x-hidden flex flex-col items-center justify-center px-4 lg:px-8 py-4">
        <section className="flex flex-col-reverse lg:flex lg:flex-row lg:h-[88dvh]">
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

            {firstItem && (
              <Card
                imageSource={firstItem.imageSource}
                cardTitle={firstItem.cardTitle}
                cardDescription={firstItem.cardDescription}
                cardId={firstItem.id}
                price={firstItem.price}
                discountRate={firstItem.discountRate}
                discountedPrice={firstItem.discountedPrice}
              />
            )}
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

        <section className="w-full flex flex-col gap-10 items-center justify-center lg:flex-row h-[90dvh] lg:h-[88dvh]">
          <div className="text-center space-y-2">
            <h2 className={`${permanentMarker.className} text-2xl`}>
              Exciting Offers
            </h2>
            <p>Do not miss these amazing deals!</p>
          </div>

          <div className="hidden lg:flex justify-evenly w-full">
            {otherItems.map((item, index) => (
              <Card
                key={index}
                imageSource={item.imageSource}
                cardTitle={item.cardTitle}
                cardDescription={item.cardDescription}
                discountRate={item.discountRate}
                discountedPrice={item.discountedPrice}
                price={item.price}
                cardId={item.id}
              />
            ))}
          </div>

          <div className="lg:hidden carousel carousel-center max-w-sm space-x-6 p-4">
            {otherItems.map((item, index) => (
              <div key={index} className="carousel-item">
                <Card
                  imageSource={item.imageSource}
                  cardTitle={item.cardTitle}
                  cardDescription={item.cardDescription}
                  discountRate={item.discountRate}
                  discountedPrice={item.discountedPrice}
                  price={item.price}
                  cardId={item.id}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
