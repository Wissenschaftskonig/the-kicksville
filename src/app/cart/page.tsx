/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCart } from "@/context/CartContextProvider";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "next/navigation";
import { showToast } from "@/utils";
import { useState } from "react";

export default function CartPage() {
	const {
		cartItems,
		removeFromCart,
		updateQuantity,
		clearCart,
		calculateTotal,
	} = useCart();
	const router = useRouter();
	const [showModal, setShowModal] = useState(false);
	const [email, setEmail] = useState("");
	const [reference, setReference] = useState<string | null>(null);

	const goToShop = () => {
		router.push("/");
	};

	const handleRemoveFromCart = (id: string, size: string) => {
		removeFromCart(id, size);
		showToast("success", "Item removed from cart");
	};

	const verifyRedPayPayment = async (ref: string) => {
		try {
			console.log("Verifying payment for:", ref);
			showToast("success", "Payment Successful", { autoClose: 3000 });
		} catch (err: any) {
			showToast("error", err.message || "Payment verification failed", {
				autoClose: 3000,
			});
		}
	};

	console.log({ reference });

	const redPayCallback = async (response: any, ref: string) => {
		if (response.status === "success" || response.status === "completed") {
			await verifyRedPayPayment(ref);
			return;
		}
	};

	const payWithRedpay = async () => {
		if (typeof window === "undefined" || !window.RedPayPop) {
			console.log("RedPay SDK not loaded yet.");
			return;
		}

		// Generate reference and store it for later verification
		const ref = `REF-${Math.ceil(Math.random() * 10e10)}`;
		setReference(ref);

		try {
			const handler = await window.RedPayPop.setup({
				key: "TPK_BEDFDB10250C9A8DF45C20250319110107", // Test Key
				amount: calculateTotal() * 100,
				email,
				currency: "NGN",
				channels: ["CARD", "USSD", "TRANSFER", "MOMO", "OPAY"],
				ref,
				onClose: function () {
					console.log("Window closed.");
				},
				callback: function (response: any) {
					redPayCallback(response, ref);
				},
				onError: function (error: any) {
					console.error("RedPay error", error);
				},
			});

			await handler.openIframe();
		} catch (err: any) {
			console.error("Error initializing RedPay:", err);
		}
	};

	return (
		<div className="container mx-auto px-4 py-8 relative">
			{/* ✅ Wrap everything in a div that can be blurred */}
			<div
				className={`${
					showModal ? "blur-sm pointer-events-none select-none" : ""
				}`}
			>
				{cartItems.length > 0 && (
					<div className="flex justify-between items-center mb-6">
						<h1 className="text-3xl font-bold">Your Cart</h1>

						<CustomButton
							buttonText={"Shop For More"}
							buttonTypeOne
							buttonSize="btn-sm"
							style="uppercase font-thin"
							onClick={goToShop}
						/>
					</div>
				)}

				{cartItems.length === 0 ? (
					<div className="h-[80vh] w-full m-auto flex flex-col gap-8 justify-center items-center">
						<Icon icon="game-icons:shopping-cart" className="h-32 w-32" />
						<div className="text-center space-y-2">
							<h3 className="text-xl">Seems your cart is empty,</h3>
							<p className="text-lg">
								You are just a few clicks away from great discounts!
							</p>
						</div>
						<CustomButton
							buttonText={"Shop Here"}
							buttonTypeOne
							buttonSize="btn-wide"
							style="uppercase font-thin"
							onClick={goToShop}
						/>
					</div>
				) : (
					<>
						{cartItems.map((item) => (
							<div
								key={`${item.id}-${item.size}`}
								className="flex items-center justify-between border-b py-4"
							>
								<div className="flex items-center space-x-4">
									<Image
										src={item.image}
										alt={item.name}
										width={100}
										height={100}
										className="object-cover"
									/>
									<div>
										<h2 className="text-xl font-semibold">{item.name}</h2>
										{item.size && <p>Size: {item.size}</p>}
										{item.price && <p>Price: ₦{item.price}</p>}
									</div>
								</div>

								<div className="flex items-center space-x-4">
									<div className="flex items-center">
										<button
											onClick={() =>
												updateQuantity(
													item.id,
													item.size ?? "",
													Math.max(1, item.quantity - 1)
												)
											}
											className="px-2 py-1 bg-gray-200"
										>
											-
										</button>
										<span className="px-4">{item.quantity}</span>
										<button
											onClick={() =>
												updateQuantity(
													item.id,
													item.size ?? "",
													item.quantity + 1
												)
											}
											className="px-2 py-1 bg-gray-200"
										>
											+
										</button>
									</div>

									<button
										onClick={() =>
											handleRemoveFromCart(item.id, item.size ?? "")
										}
										className="text-red-500 hover:text-red-700"
									>
										<Icon icon="ep:delete" className="h-6 w-6" />
									</button>
								</div>
							</div>
						))}

						<p className="text-xl font-bold text-right">
							Total: ₦{calculateTotal()}
						</p>

						<div className="mt-6 flex justify-between items-center">
							<CustomButton
								buttonText="Clear Cart"
								buttonTypeOne
								onClick={clearCart}
							/>

							<button
								onClick={() => setShowModal(true)}
								className="btn btn-outline disabled:cursor-not-allowed"
							>
								Proceed to Checkout
							</button>
						</div>
					</>
				)}
			</div>

			{/* ✅ Modal overlay */}
			{showModal && (
				<div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
					<div className="p-3 border w-[500px] border-gray-200 shadow-md bg-white rounded-md z-10">
						<h3 className="text-lg font-semibold mb-4">Enter your email</h3>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="enter your email address"
							className="border border-gray-300 px-3 py-2 w-full outline-none rounded-[8px] mb-4"
						/>
						<div className="flex justify-between">
							<button
								onClick={() => setShowModal(false)}
								className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
							>
								Cancel
							</button>
							<button
								onClick={payWithRedpay}
								className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
							>
								Pay Now
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
