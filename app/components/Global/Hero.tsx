"use client";

// React & Next Hooks
import Link from "next/link";

interface HeroProps {
  href?: string;
  buttonText?: string;
  description: string;
  title?: string;
  customTitle?: React.ReactNode;
}

const Hero = ({
  description,
  href,
  buttonText,
  title,
  customTitle,
}: HeroProps) => {
  return (
    <div className="mt-5 mx-auto max-w-2xl flex flex-col gap-4 justify-center items-center text-center">
      {title && (
        <h1 className="text-4xl md:text-6xl font-bold font-serif">{title}</h1>
      )}

      {customTitle && (
        <h1 className="text-4xl md:text-6xl font-bold font-serif">
          {customTitle}
        </h1>
      )}

      <p>{description}</p>

      {href && buttonText && (
        <Link
          target="_blank"
          href={href}
          className="mt-5 px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
};

export default Hero;
