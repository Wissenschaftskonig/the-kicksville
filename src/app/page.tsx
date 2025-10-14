"use client";

import Image from "next/image";
import "./globals.css";
import Card from "@/components/Card";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "./fliptimer.css";
import { useEffect, useState } from "react";
import { SALE_ITEMS } from "@/utils";
import { checkoutFlow } from "@/images";
import Link from "next/link";

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
								<h1 className="lg:text-3xl text-xl font-black mt-6 md:mt-0">
									Welcome to Our Store, Powered by RedPay
								</h1>
							</div>
							<p>
								Experience seamless shopping with RedPay , a secure, flexible
								e-commerce payment gateway trusted by businesses worldwide.
								Accept payments effortlessly, offer your customers more ways to
								pay, and grow your sales with ease.
							</p>
							<Link
								href={"https://redpay.africa/"}
								className="text-lg font-bold -mt-3 shadow-md border border-black/20 w-fit px-4 py-2 rounded-lg text-[#ff0303]"
							>
								Explore RedPay
							</Link>
						</aside>
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
								height={500}
								width={500}
								className="rounded-2xl lg:hidden animate-zoom"
							/>
						</div>
					</aside>
				</section>

				<div className="text-center space-y-2 lg:mt-0 mt-7">
					<h2 className={`text-2xl font-black`}>Exciting Offers</h2>
					<p>Do not miss these amazing deals!</p>
				</div>

				<section className="w-full flex flex-col gap-10 lg:items-center justify-center lg:flex-row ">
					<div className="hidden lg:flex gap-2 justify-evenly w-full mt-10">
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

					<div className="lg:hidden grid grid-cols-2 gap-4 mt-10">
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
