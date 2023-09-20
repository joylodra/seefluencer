"use client";

// React & Next Components
import Link from "next/link";

interface ButtonProps {
  onClick?: () => void;
  hrefLink?: string;
  buttonText: string;
  external?: boolean;
  full?: boolean;
  noFull?: boolean;
  regular?: boolean;
}

const Button = ({
  onClick,
  hrefLink,
  buttonText,
  external,
  full,
  noFull,
  regular,
}: ButtonProps) => {
  return (
    <div
      className={`
      ${regular && "w-full md:w-fit"}
      ${full && "w-full"}  
      ${noFull && "w-fit"}
      text-center px-4 py-2 md:px-8 bg-blue-400 text-white text-base md:text-lg rounded-sm hover:shadow-md transition-all font-bold cursor-pointer capitalize`}
    >
      {onClick && <div onClick={onClick}>{buttonText}</div>}
      {hrefLink && (
        <Link href={`${hrefLink}`} target={external ? "_blank" : ""}>
          {buttonText}
        </Link>
      )}
    </div>
  );
};

export default Button;
