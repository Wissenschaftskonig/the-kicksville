import {
	// IMG_ONE,
	PRODUCT_FIVE,
	// PRODUCT_FOUR, 
	PRODUCT_THREE,
	// PRODUCT_TWO,
	FACE_CAP,
	HAND_FAN,
	KEY_HOLDER,
} from "@/images";
import { toast, ToastContent, ToastOptions, Slide, Id } from "react-toastify";

export const defaultToastOptions: ToastOptions = {
	position: "top-center",
	autoClose: 3000,
	hideProgressBar: true,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "dark",
	transition: Slide,
	bodyClassName: "text-sm text-center font-semibold max-w-xs",
};

type ToastType = "success" | "error" | "info" | "warning" | "default";

/**
 * Display toast
 *
 * @param {ToastType} type
 * @param {ToastContent} content
 * @param {ToastOptions} [options=defaultToastOption]
 * @return {Id}
 */
export const showToast = (
	type: ToastType,
	content: ToastContent,
	options: Partial<ToastOptions> = {}
): Id => {
	const optionsToApply = { ...defaultToastOptions, ...options };

	switch (type) {
		case "success":
			return toast.success(content, optionsToApply);
		case "error":
			return toast.error(content, optionsToApply);
		case "info":
			return toast.info(content, optionsToApply);
		case "warning":
			return toast.warn(content, optionsToApply);
		case "default":
			return toast(content, optionsToApply);
		default:
			return toast(content, optionsToApply);
	}
};

export const slideShow = [
	{
		pic: FACE_CAP,
	},
];

export const slideShowTwo = [
	{
		pic: HAND_FAN,
	},
];

export const slideShowThree = [
	{
		pic: PRODUCT_THREE,
	},
];

export const slideShowFour = [
	{
		pic: KEY_HOLDER,
	},
];
export const slideShowFive = [
	{
		pic: PRODUCT_FIVE,
	},
];

export const productSizes = [
	{
		size: "SMALL",
	},
	{
		size: "MEDIUM",
	},
	{
		size: "LARGE",
	},
];

export const generateCustomerReference = (length: number = 18): string => {
	const characters = "0123456789";
	let result = "";
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		result += characters[randomIndex];
	}
	return result;
};

export const generateExpireAt = (): string => {
	const now = new Date();
	const expireAt = new Date(now.getTime() + 24 * 60 * 60 * 1000);

	const year = expireAt.getUTCFullYear();
	const month = String(expireAt.getUTCMonth() + 1).padStart(2, "0");
	const day = String(expireAt.getUTCDate()).padStart(2, "0");
	const hours = String(expireAt.getUTCHours()).padStart(2, "0");
	const minutes = String(expireAt.getUTCMinutes()).padStart(2, "0");
	const seconds = String(expireAt.getUTCSeconds()).padStart(2, "0");
	const milliseconds = String(expireAt.getUTCMilliseconds()).padStart(3, "0");

	return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}+0000`;
};

export const getCurrentDate = (): string => {
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, "0");
	const day = String(today.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
};

export const getTomorrowDate = (): string => {
	const today = new Date();
	const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
	const year = tomorrow.getFullYear();
	const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
	const day = String(tomorrow.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
};

export const formatAmount = (amount: number): string => {
	return amount?.toLocaleString("en-US", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
};

export const SALE_ITEMS = [
  {
    id: "redtech-face-cap",
    imageSource: FACE_CAP,
    cardTitle: "Redtech Face Cap",
    price: "500",
    displayPics: slideShow,
    description:
      "Stay sharp and comfortable with the Redtech Beanie, designed for effortless style and all-day warmth. Its soft-knit fabric offers a snug fit that keeps you focused whether you’re working, training, or out in the city. Minimalist, durable, and made to complement every outfit — it’s everyday versatility redefined.",
  },
  {
    id: "redtech-hand-fan",
    imageSource: HAND_FAN,
    cardTitle: "Redtech Hand Fan",
    price: "200",
    displayPics: slideShowTwo,
    description:
      "Designed for those who value expression and elegance, the Redtech Biro turns everyday writing into an effortless experience. With its smooth ink flow and refined grip, it glides across the page with precision and ease. Lightweight, stylish, and reliable — it’s more than a pen; it’s a statement of confidence and creativity in your hand",
  },
  {
    id: "redtech-bottle-water",
    imageSource: PRODUCT_THREE,
    cardTitle: "Redtech Bottle",
    price: "200",
    displayPics: slideShowThree,
    description:
      "Elevate your hydration with the Redtech Water Bottle, designed for clarity, function, and sustainability. Featuring a durable, BPA-free build and ergonomic grip, this bottle keeps your drink fresh while reflecting Redtech’s modern aesthetic. Whether at the gym, office, or on the go — stay refreshed, Redtech style.",
  },
  {
    id: "redtech-key-holder",
    imageSource: KEY_HOLDER,
    cardTitle: "Redtech Keyholder",
    price: "100",
    displayPics: slideShowFour,
    description:
      "The Redtech Notepad is more than just pages — it’s a companion for thinkers, creators, and innovators. With a clean minimalist design, premium paper stock, and flexible binding, it’s perfect for notes, sketches, and big ideas. Bring structure and creativity together in one timeless notebook.",
  },
  {
    id: "redtech-shirt",
    imageSource: PRODUCT_FIVE,
    cardTitle: "Redtech Polo",
    price: "500",
    displayPics: slideShowFive,
    description:
      "Crafted for precision and comfort, the Redtech Polo blends lightweight fabric with a refined fit that moves with you. Whether for work, casual outings, or creative sessions, it embodies the Redtech balance of performance and style — where simplicity meets substance.",
  },
];

export interface VerifyPaymentRequest {
	amount: string;
}

export const dataService = {
	verifyPayments: async (data: VerifyPaymentRequest) => {
		// Simulate an async call delay
		await new Promise((resolve) => setTimeout(resolve, 1500));

		// Pretend to look up an item by "reference" or something similar
		const foundItem = SALE_ITEMS.find((item) => item.price === data.amount);

		if (foundItem) {
			return {
				status: "success",
				message: "Payment verified successfully",
				item: foundItem,
			};
		} else {
			throw new Error("Invalid reference — item not found");
		}
	},
};
