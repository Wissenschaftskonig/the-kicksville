"use client";
import React from "react";

const Checkout = () => {
	return (
		<div className="grid grid-cols-2 divide-x divide-gray-300 max-w-5xl mx-auto h-screen">
			<button className="text-2xl font-bold bg-red-500 p-2">
				Proceed To Payment
			</button>
			<div className="py-10 pr-16">
				<h1 className="text-3xl font-bold">Checkout</h1>
				<p className="mt-6 text-lg font-semibold">Shipping Information</p>
				<div className="flex items-center mt-4 gap-3">
					<div
						className={`border-2 border-gray-300 w-full rounded-[8px] px-5 py-3 cursor-pointer font-semibold text-sm flex items-center gap-2 `}
					>
						<div className="size-5 rounded-full border border-blue-200" />
						Delivery
					</div>
					<div className="border-2 border-gray-300 w-full rounded-[8px] px-5 py-3 cursor-not-allowed font-semibold text-sm flex items-center gap-2">
						<div className="size-5 rounded-full border border-gray-300" />
						Pick Up
					</div>
				</div>

				<div className="space-y-4 mt-10">
					<div className="flex flex-col gap-1">
						<label htmlFor="" className="text-lg font-medium">
							Email
						</label>
						<input
							type="text"
							placeholder="Enter email address"
							className="border border-gray-300 outline-none w-full py-3 px-2 rounded-[8px]"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="" className="text-lg font-medium">
							Currency
						</label>
						<input
							type="text"
							placeholder="Enter currency"
							className="border border-gray-300 outline-none w-full py-3 px-2 rounded-[8px]"
						/>
					</div>
				</div>
			</div>
			<div className="py-10 pl-16">
				<h1 className="text-lg mt-[calc(24px+36px)] font-semibold">
					Review your cart
				</h1>
			</div>
		</div>
	);
};

export default Checkout;
