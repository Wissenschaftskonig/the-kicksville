import {
  IMG_FIVE,
  IMG_FOUR,
  IMG_ONE,
  IMG_SIX,
  IMG_THREE,
  IMG_TWO,
  SAMPLE,
  SNEAKER_ONE,
  SNEAKER_THREE,
  SNEAKER_TWO,
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

export const shoeOne = [
  {
    pic: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5406289e-f182-4abc-b0da-f8df888fa02d/AIR+MAX+DN+SE.png",
  },
  {
    pic: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/978c1e3b-30b2-4dbd-bb6e-26a0a2edd858/AIR+MAX+DN+SE.png",
  },
  {
    pic: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/503589b6-192a-4c1c-a0fd-c6cad25315ff/AIR+MAX+DN+SE.png",
  },
  {
    pic: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ebc3ec4e-a6e3-4c14-8a9b-4c595d549969/AIR+MAX+DN+SE.png",
  },
  {
    pic: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/420139f9-32b3-4e6b-a02c-c4b4c8fc9a43/AIR+MAX+DN+SE.png",
  },
  {
    pic: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a9f34a11-25ab-45e6-b726-91267dd30441/AIR+MAX+DN+SE.png",
  },
];

export const shoeTwo = [
  {
    pic: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3c315d5c-6892-4fb2-8f4d-7f0f98af092c/NIKE+DUNK+HI+RETRO.png",
  },
  {
    pic: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7a21a309-e75c-4158-a531-163e56b33441/NIKE+DUNK+HI+RETRO.png",
  },
  {
    pic: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8e5b35ea-fac0-4de7-aad2-7cd45c31e457/NIKE+DUNK+HI+RETRO.png",
  },
  {
    pic: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4f048e98-6dca-483a-b5b8-6432339f5c41/NIKE+DUNK+HI+RETRO.png",
  },
  {
    pic: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dfd52b5d-49f2-4c6e-ab58-b42981b32a01/NIKE+DUNK+HI+RETRO.png",
  },
  {
    pic: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1ea56fdd-299f-4853-bee0-2b5a94118ef3/NIKE+DUNK+HI+RETRO.png",
  },
];

export const shoeThree = [
  {
    pic: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/29528b76-0172-4574-86bb-66c12b161b12/AIR+JORDAN+1+RETRO+LOW+OG.png",
  },
  {
    pic: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d8f904f4-8ad0-45d8-a154-6805c9d8d57c/AIR+JORDAN+1+RETRO+LOW+OG.png",
  },
  {
    pic: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/765d7702-d118-4453-b87f-87243eff4c20/AIR+JORDAN+1+RETRO+LOW+OG.png",
  },
  {
    pic: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a9876c00-fa15-412d-bb05-1f263f4497e0/AIR+JORDAN+1+RETRO+LOW+OG.png",
  },
  {
    pic: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/65dc8ad4-08ec-436a-916c-5c486b8563e9/AIR+JORDAN+1+RETRO+LOW+OG.png",
  },
  {
    pic: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d2070b4f-353b-478c-b167-f737f6a01e91/AIR+JORDAN+1+RETRO+LOW+OG.png",
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

export const formatAmount = (amount: number): string => {
  return amount?.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const SALE_ITEMS = [
  {
    id: "jordan-true-flight",
    imageSource: SAMPLE,
    cardTitle: "Jordan True Flight",
    cardDescription: "White Sail, Lightning & Chlorophyll",
    price: "16,393.44",
    discountRate: "39",
    discountedPrice: "10,000",
    displayPics: slideShow,
  },
  {
    id: "nike-air-max-dn",
    imageSource: SNEAKER_ONE,
    cardTitle: "Nike Air Max Dn SE",
    cardDescription: "Laser Orange & Black",
    price: "18,000",
    discountRate: "25",
    discountedPrice: "13,500",
    displayPics: shoeOne,
  },
  {
    id: "nike-dunk-retro",
    imageSource: SNEAKER_TWO,
    cardTitle: "Nike Dunk Hi Retro",
    cardDescription: "Summit White & Concord",
    price: "21,500",
    discountRate: "16",
    discountedPrice: "18,060",
    displayPics: shoeTwo,
  },
  {
    id: "air-jordan-one",
    imageSource: SNEAKER_THREE,
    cardTitle: "Air Jordan 1 Low OG",
    cardDescription: "Dark Mocha & Black",
    price: "19,500",
    discountRate: "32",
    discountedPrice: "13,260",
    displayPics: shoeThree,
  },
];
