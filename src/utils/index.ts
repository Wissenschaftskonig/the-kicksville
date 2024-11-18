import {
  IMG_FIVE,
  IMG_FOUR,
  IMG_ONE,
  IMG_SIX,
  IMG_THREE,
  IMG_TWO,
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
  {
    pic: IMG_TWO,
  },
  {
    pic: IMG_THREE,
  },
  {
    pic: IMG_FOUR,
  },
  {
    pic: IMG_FIVE,
  },
  {
    pic: IMG_SIX,
  },
];

export const shoeSizes = [
  {
    num: "5",
  },
  {
    num: "5.5",
  },
  {
    num: "6",
  },
  {
    num: "6.5",
  },
  {
    num: "7",
  },
  {
    num: "7.5",
  },
  {
    num: "8",
  },
  {
    num: "8.5",
  },
  {
    num: "9",
  },
  {
    num: "9.5",
  },
  {
    num: "10",
  },
  {
    num: "10.5",
  },
  {
    num: "11",
  },
  {
    num: "11.5",
  },
  {
    num: "12",
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

  const year = expireAt.getFullYear();
  const month = String(expireAt.getMonth() + 1).padStart(2, "0");
  const day = String(expireAt.getDate()).padStart(2, "0");
  const hours = String(expireAt.getHours()).padStart(2, "0");
  const minutes = String(expireAt.getMinutes()).padStart(2, "0");
  const seconds = String(expireAt.getSeconds()).padStart(2, "0");
  const milliseconds = String(expireAt.getMilliseconds()).padStart(3, "0");

  const offset = expireAt.getTimezoneOffset();
  const offsetHours = Math.floor(Math.abs(offset) / 60)
    .toString()
    .padStart(2, "0");
  const offsetMinutes = Math.abs(offset % 60)
    .toString()
    .padStart(2, "0");
  const timezoneSign = offset > 0 ? "-" : "+";

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${timezoneSign}${offsetHours}:${offsetMinutes}`;
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

export const mockRequestData = {
  bvn: "09871545171",
  firstName: "James",
  lastName: "May",
  middleName: "Joseph",
  accountName: "KicksVille",
  email: "james@gmail.com",
  phone: "08101827000",
  productType: "TTO",
  customerReference: generateCustomerReference(),
  expireAt: generateExpireAt(),
  singleDepositLimit: "151890",
  merchant: {
    code: "A33E0",
  },
};

export const formatAmount = (amount: number): string => {
  return amount?.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
