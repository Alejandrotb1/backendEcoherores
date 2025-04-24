import { ButtonHTMLAttributes } from "react";
import { twMerge } from "../utils/twMerge";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  colorBg?: "cream" | "white" | "green" | "black" | "gray";
  colorText?: "cream" | "white" | "green" | "black" | "gray";
  textAlign?: "left" | "center" | "right";
  textSize?: "big" | "medium" | "small";
  textFont?: "light" | "medium" | "bold";
  className?: string;
}

function Button({
  text,
  colorBg,
  colorText,
  textAlign,
  textSize,
  textFont,
  className,
  onClick,
}: Props) {
  const getColorText = () => {
    switch (colorText) {
      case "cream":
        return "text-[#CFC7C7]";
      case "white":
        return "text-[#FFFFFF]";
      case "green":
        return "text-[#49C44C]";
      case "gray":
        return "text-[#263238]";
      default:
        return "text-[#000000]";
    }
  };
  const getColorBg = () => {
    switch (colorBg) {
      case "cream":
        return "bg-[#CFC7C7]";
      case "white":
        return "bg-[#FFFFFF]";
      case "black":
        return "bg-[#000000]";
      case "gray":
        return "bg-[#263238]";
      default:
        return "bg-[#49C44C]";
    }
  };

  const getTextAlign = () => {
    switch (textAlign) {
      case "left":
        return "text-left";
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-left";
    }
  };

  const getTextSize = () => {
    switch (textSize) {
      case "big":
        return "text-2xl";
      case "medium":
        return "text-xl";
      case "small":
        return "text-base";
      default:
        return "text-lg";
    }
  };

  const getTextFont = () => {
    switch (textFont) {
      case "light":
        return "font-light";
      case "medium":
        return "font-medium";
      case "bold":
        return "font-bold";
      default:
        return "font-normal";
    }
  };
  return (
    <>
      <button
        onClick={onClick}
        className={twMerge(
          `rounded-md p-3 my-1 w-24 flex justify-center ${className}`,
          getColorBg()
        )}
      >
        <span
          className={twMerge(
            "text-center",
            getColorText(),
            getTextAlign(),
            getTextSize(),
            getTextFont()
          )}
        >
          {text}
        </span>
      </button>
    </>
  );
}

export default Button;
