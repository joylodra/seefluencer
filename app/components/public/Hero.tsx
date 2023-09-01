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
  downArrow?: boolean;
  fullWidth?: boolean;
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
  downArrow,
  fullWidth,
}: HeroProps) => {
  return (
    <div
      className={`mt-5 mx-auto ${
        fullWidth ? "max-w-full" : "max-w-2xl"
      } flex flex-col gap-4 justify-center items-center text-center`}
    >
      {title && <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>}

      {customTitle && (
        <h1 className="text-3xl md:text-5xl font-bold">{customTitle}</h1>
      )}

      <p>{description}</p>

      {href && buttonText && (
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Link
            target={external ? "_blank" : ""}
            href={href}
            className="px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
          >
            {buttonText}
          </Link>

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
      )}

      {downArrow ? (
        <p className="animate-pulse text-4xl font-bold text-blue-400">↓</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Hero;
