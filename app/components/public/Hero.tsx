"use client";

// React & Next Hooks
import Link from "next/link";

interface HeroProps {
  href?: string;
  secondaryHref?: string;
  buttonText?: string;
  secondaryButtonText?: string;
  description?: string;
  title?: string;
  customTitle?: React.ReactNode;
  external?: boolean;
}

const Hero = ({
  description,
  href,
  secondaryHref,
  buttonText,
  secondaryButtonText,
  title,
  customTitle,
  external,
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

      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        {href && buttonText && (
          <Link
            target={external ? "_blank" : ""}
            href={href}
            className="px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
          >
            {buttonText}
          </Link>
        )}

        {secondaryHref && secondaryButtonText && (
          <Link
            target={external ? "_blank" : ""}
            href={secondaryHref}
            className="px-5 py-2 border-2 border-blue-400 text-blue-400 rounded-lg transition-all font-bold"
          >
            {secondaryButtonText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
