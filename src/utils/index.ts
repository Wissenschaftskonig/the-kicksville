import {
	IMG_ONE,
	PRODUCT_FIVE,
	PRODUCT_FOUR,
	PRODUCT_THREE,
	PRODUCT_TWO,
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
		pic: IMG_ONE,
	},
];

export const slideShowTwo = [
	{
		pic: PRODUCT_TWO,
	},
];

export const slideShowThree = [
	{
		pic: PRODUCT_THREE,
	},
];

export const slideShowFour = [
	{
		pic: PRODUCT_FOUR,
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

export const colors = [
	{
		color: "Red",
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
		id: "redtech-beanie",
		imageSource: IMG_ONE,
		cardTitle: "Redtech Beanie",
		price: "200",
		displayPics: slideShow,
	},
	{
		id: "redtech-sweatshirt",
		imageSource: PRODUCT_TWO,
		cardTitle: "Redtech Sweatshirt",
		price: "500",
		displayPics: slideShowTwo,
	},
	{
		id: "redtech-bottle-water",
		imageSource: PRODUCT_THREE,
		cardTitle: "Redtech Bottle Water",
		price: "200",
		displayPics: slideShowThree,
	},
	{
		id: "redtech-book",
		imageSource: PRODUCT_FOUR,
		cardTitle: "Redtech Book",
		price: "200",
		displayPics: slideShowFour,
	},
	{
		id: "redtech-shirt",
		imageSource: PRODUCT_FIVE,
		cardTitle: "Redtech Shirt",
		price: "200",
		displayPics: slideShowFive,
	},
];

export interface VerifyPaymentRequest {
	reference: string;
	email: string;
}

export const dataService = {
	verifyPayments: async (data: VerifyPaymentRequest) => {
		// Simulate an async call delay
		await new Promise((resolve) => setTimeout(resolve, 1500));

		// Pretend to look up an item by "reference" or something similar
		const foundItem = SALE_ITEMS.find((item) => item.id === data.reference);

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
