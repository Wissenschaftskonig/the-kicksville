import React, { MouseEventHandler } from "react";

interface ButtonProps {
  buttonSize:
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
}

const CustomButton = ({
  buttonText,
  buttonSize,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <>
      <button
        className={`btn btn-outline ${buttonSize} text-xs font-thin`}
        onClick={onClick}
        disabled={disabled}
      >
        {buttonText}
      </button>
    </>
  );
};

export default CustomButton;
