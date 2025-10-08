"use client";

import { useRouter } from "next/navigation";
import { productSizes, SALE_ITEMS, showToast } from "@/utils";
import { use, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import { useCart } from "@/context/CartContextProvider";

interface ProductDetailsParams {
	params: Promise<{
		id: string;
	}>;
}

export default function ProductDetails({ params }: ProductDetailsParams) {
	const router = useRouter();
	const [mainPicIndex] = useState(0);
	const [selectedSize, setSelectedSize] = useState<string | undefined>();
	const { addToCart } = useCart();

	const { id } = use(params);

	const item = SALE_ITEMS.find((item) => item.id === id);

	if (!item) {
		return <p>Item not found!</p>;
	}

	const handleSizeSelect = (size: string) => {
		setSelectedSize(size);
	};

	const goBack = () => {
		router.back();
	};

	const proceedToCart = () => {
		if (selectedSize) {
			addToCart({
				id: item.id,
				name: item.cardTitle,
				size: selectedSize,
				price: item.price,
				image: item.displayPics[0].pic,
				quantity: 1,
			});

			showToast("success", `${item.cardTitle} added to cart`);

			setTimeout(() => {
				router.push("/cart");
			}, 1500);
		}
	};

	return (
		<main className="relative flex flex-col gap-4 lg:flex-row px-4 lg:px-8 pb-4">
			<Icon
				onClick={goBack}
				icon="mdi:arrow-left"
				className="h-10 w-10 absolute top-[28rem] left-4 md:top-4 lg:left-8 z-10"
			/>

			<section className="flex w-full lg:w-1/2 ml-10">
				<div>
					<Image
						src={item.displayPics[mainPicIndex].pic}
						alt="large display image"
						height={510}
						width={510}
					/>
				</div>
			</section>

			<section className="flex flex-col w-full items-center m-auto  lg:w-1/2">
				<div className="text-center">
					<div className="flex items-center gap-1 justify-center">
						<h1 className="text-3xl font-extrabold">{item.cardTitle}</h1>(
						<span className="flex items-center justify-center text-3xl">
							<Icon icon="tabler:currency-naira" className="" />
							<span className="text-xl font-bold">{item.price}</span>
						</span>
						)
					</div>
					<p className="text-md font-medium text-left mt-2">
						{item.description}
					</p>
				</div>

				<div className="border-gray-300 border h-0.5 w-full my-6" />

				<div className="">
					<div className="flex justify-between items-center">
						<div className="flex items-end mb-4">
							<h3>Available Sizes</h3>
							<Icon icon={"mdi:chevron-double-down"} className="h-5 w-5" />
						</div>
					</div>

					<ul className="grid grid-cols-5 gap-2 md:gap-4">
						{productSizes.map((size) => (
							<CustomButton
								key={size.size}
								buttonText={size.size}
								style={`w-14 text-sm md:w-28 ${
									selectedSize === size.size
										? "transition-all ease-in-out bg-gray-500 text-white"
										: ""
								}`}
								buttonTypeTwo
								onClick={() => handleSizeSelect(size.size)}
							/>
						))}
					</ul>
				</div>

				<div className="mt-0 lg:mt-10 w-5/6">
					<CustomButton
						buttonText="Add to Cart"
						buttonTypeOne
						buttonSize="btn-wide"
						style="text-md font-thin uppercase w-full"
						onClick={proceedToCart}
						disabled={!selectedSize}
					/>
				</div>
			</section>
		</main>
	);
}
