"use client";

import { POS, POS2 } from "@/images";
import Image from "next/image";
import "./globals.css";
import Card from "@/components/Card";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "./fliptimer.css";
import { useEffect, useState } from "react";
import { SALE_ITEMS } from "@/utils";

export default function Home() {
	const [targetTime, setTargetTime] = useState<number | null>(null);

	useEffect(() => {
		setTargetTime(new Date("2025-05-01T00:00:00").getTime());
	}, []);

	const [...otherItems] = SALE_ITEMS;
	return (
		<>
			<main className="overflow-x-hidden flex flex-col items-center justify-center px-4 lg:px-8 py-4">
				<section className="flex flex-col-reverse lg:flex lg:flex-row lg:h-[88dvh]">
					<div className="flex flex-col justify-center items-center w-full lg:w-1/2 gap-10">
						<aside className="text-left flex flex-col gap-8">
							<div>
								<h1 className="text-3xl font-extrabold">
									Redtech Checkout System
								</h1>
							</div>
							<p>
								{`Built with precision and performance in mind, the Redtech Checkout System delivers a seamless, reliable payment experience for every transaction. Designed for speed, security, and user confidence, it integrates modern payment gateways, real-time verification, and smart session management into one cohesive flow. With a clean, intuitive interface and robust backend logic, Redtech Checkout ensures that every purchase — from cart to confirmation — happens effortlessly and securely. It’s more than a payment solution; it’s a refined approach to digital transactions.`}
							</p>
						</aside>

						{/* {firstItem && (
							<Card
								imageSource={firstItem.imageSource}
								cardTitle={firstItem.cardTitle}
								cardId={firstItem.id}
								price={firstItem.price}
							/>
						)} */}
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

						<div className="">
							<Image
								alt="main product photo"
								src={POS}
								height={500}
								width={500}
								className="rounded-2xl hidden lg:block"
							/>
							<Image
								src={POS2}
								alt="main product photo"
								height={500}
								width={500}
								className="rounded-2xl lg:hidden animate-zoom"
							/>
						</div>
					</aside>
				</section>

				<div className="text-center space-y-2 lg:mt-0 mt-7">
					<h2 className={`text-2xl`}>Exciting Offers</h2>
					<p>Do not miss these amazing deals!</p>
				</div>

				<section className="w-full flex flex-col gap-10 lg:items-center justify-center lg:flex-row h-[90dvh] lg:h-[88dvh]">
					<div className="hidden lg:flex gap-2 justify-evenly w-full">
						{otherItems.map((item, index) => (
							<Card
								key={index}
								imageSource={item.imageSource}
								cardTitle={item.cardTitle}
								price={item.price}
								cardId={item.id}
							/>
						))}
					</div>

					<div className="lg:hidden grid grid-cols-2 gap-4 mt-[790px]">
						{otherItems.map((item, index) => (
							<div key={index} className="">
								<Card
									imageSource={item.imageSource}
									cardTitle={item.cardTitle}
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
