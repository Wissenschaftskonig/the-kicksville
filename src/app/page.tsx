"use client";

import Image from "next/image";
import "./globals.css";
import Card from "@/components/Card";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "./fliptimer.css";
import { useEffect, useState } from "react";
import { SALE_ITEMS } from "@/utils";
import { checkoutFlow } from "@/images";

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
								<h1 className="text-3xl font-black">Redtech Checkout System</h1>
							</div>
							<p>
								{`Built for precision, performance, and trust, the Redtech Checkout System delivers a flawless payment experience from start to finish. Engineered for speed, security, and reliability, it seamlessly connects modern payment gateways with real time verification and intelligent session management. The result is a smooth, confident transaction process that feels effortless for users and powerful for businesses. With its elegant interface and advanced backend architecture, Redtech Checkout transforms online payments into a fast, secure, and seamless experience, redefining what it means to pay with confidence.`}
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
								src={checkoutFlow}
								height={500}
								width={500}
								className="rounded-2xl hidden lg:block animate-zoom"
							/>
							<Image
								src={checkoutFlow}
								alt="main product photo"
								height={300}
								width={300}
								className="rounded-2xl lg:hidden animate-zoom"
							/>
						</div>
					</aside>
				</section>

				<div className="text-center space-y-2 lg:mt-0 mt-7">
					<h2 className={`text-2xl font-black`}>Exciting Offers</h2>
					<p>Do not miss these amazing deals!</p>
				</div>

				<section className="w-full flex flex-col gap-10 lg:items-center justify-center lg:flex-row h-[90dvh] lg:h-[68dvh]">
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
