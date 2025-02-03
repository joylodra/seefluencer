"use client";

// React & Next Components
import Link from "next/link";
import { useRouter } from "next/router";

interface ButtonProps {
  hrefLink?: string;
  buttonText: string;
  external?: boolean;
  full?: boolean;
  noFull?: boolean;
  regular?: boolean;
  onClick?: () => void;
}

const Button = ({
  hrefLink,
  buttonText,
  external,
  full,
  noFull,
  regular,
  onClick,
}: ButtonProps) => {
  return (
    <Link
      onClick={onClick}
      scroll={false}
      href={`${hrefLink}`}
      target={external ? "_blank" : ""}
      className={`
      ${regular && "w-full md:w-fit"}
      ${full && "w-full"}  
      ${noFull && "w-fit"}
      text-center px-4 py-2 md:px-8 bg-[#0b64be] text-white text-base md:text-lg rounded-sm hover:shadow-md transition-all font-bold cursor-pointer capitalize`}
    >
      {buttonText}
    </Link>
  );
};

export default Button;
