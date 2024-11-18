import { Icon, IconifyIcon } from "@iconify/react/dist/iconify.js";
import React, { MouseEventHandler } from "react";

interface ButtonProps {
  buttonSize?:
    | "btn-xs"
    | "btn-sm"
    | "btn-md"
    | "btn-lg"
    | "btn-wide"
    | "btn-block"
    | "btn-square";
  onClick?: MouseEventHandler;
  disabled?: boolean;
  style?: string;
  buttonText:
    | string
    | React.ReactNode
    | React.JSX.Element
    | React.JSX.Element[];
  buttonTypeOne?: boolean;
  buttonTypeTwo?: boolean;
  buttonIcon?: string | IconifyIcon;
  iconStyle?: string;
}

const CustomButton = ({
  buttonText,
  buttonSize,
  onClick,
  disabled,
  buttonTypeOne,
  buttonTypeTwo,
  style,
  buttonIcon,
  iconStyle,
}: ButtonProps) => {
  return (
    <>
      {buttonTypeOne && (
        <button
          className={`btn btn-outline disabled:cursor-not-allowed ${buttonSize} ${style}`}
          onClick={onClick}
          disabled={disabled}
        >
          {buttonIcon && <Icon icon={buttonIcon} className={iconStyle} />}

          {buttonText}
        </button>
      )}

      {buttonTypeTwo && (
        <button
          onClick={onClick}
          disabled={disabled}
          className={`bg-none p-2 border-2 border-black cursor-pointer hover:bg-black hover:text-white disabled:cursor-not-allowed ${style}`}
        >
          {buttonIcon && <Icon icon={buttonIcon} className={iconStyle} />}

          {buttonText}
        </button>
      )}
    </>
  );
};

export default CustomButton;
