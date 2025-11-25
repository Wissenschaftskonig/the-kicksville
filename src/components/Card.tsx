import { Icon } from "@iconify/react/dist/iconify.js";
import Image, { StaticImageData } from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import { SALE_ITEMS } from "@/utils";
import { useCart } from "@/context/CartContextProvider";

interface CardProps {
	imageSource: StaticImageData;
	cardTitle: string;
	onButtonClick?: () => void;
	price: string;
	cardId: string;
}

const Card = ({ imageSource, cardTitle, price, cardId }: CardProps) => {
	const router = useRouter();
	const { addToCart } = useCart();

	const item = SALE_ITEMS.find((item) => item.id === cardId);

	const handleCardClick = () => {
		const cartItems = [
			"redtech-bottle-water",
			"redtech-face-cap",
			"redtech-key-holder",
			"redtech-hand-fan",
		];

		if (item?.id && cartItems.includes(item.id)) {
			addToCart({
				id: item.id,
				name: item.cardTitle,
				price: item.price,
				image: item.displayPics[0].pic,
				quantity: 1,
			});
			router.push("/cart");
		} else {
			router.push(`/product/${cardId}`);
		}
	};

	if (!item) {
		return <p>Item not found!</p>;
	}

	return (
		<div className="border-2 rounded-md border-black lg:w-[15rem] shadow-custom hover:shadow-underlay dark:hover:shadow-darkUnderlay transition-all duration-500 ease-in-out text-center group p-0">
			<div className="overflow-hidden">
				<Image
					height={250}
					width={250}
					alt="product"
					loading="lazy"
					src={imageSource}
					className="transition-transform duration-500 ease-in-out brightness-100 w-full"
				/>
			</div>

			<div>
				<p className="font-semibold">{cardTitle}</p>
			</div>

			<div className="divider px-2 text-gray-600"></div>

			<div className="text-sm flex flex-col justify-center items-center gap-5">
				<div className="flex flex-col gap-3">
					<p className="flex items-center justify-center">
						<span className="flex items-center">
							<Icon icon="tabler:currency-naira" className="text-lg" />
							<span className="text-base font-bold">{price}</span>
						</span>
					</p>
				</div>

				<CustomButton
					onClick={handleCardClick}
					buttonText="Order Now"
					buttonSize="btn-sm"
					buttonTypeOne
				/>
			</div>
		</div>
	);
};

export default Card;
