"use client";

// React & Next Hooks
import Link from "next/link";

interface CtaProps {
  href: string;
  buttonText: string;
  title: string;
  description: string;
  external?: boolean;
}

const Cta = ({ title, description, href, buttonText, external }: CtaProps) => {
  return (
    <div className="text-center bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 rounded-lg text-white">
      <div className="mx-auto max-w-xl py-10 px-5 flex flex-col gap-6 items-center justify-center">
        <h2 className="text-3xl font-bold">{title}</h2>

        <div>
          <p>{description}</p>

          <p className="animate-pulse text-3xl font-bold">↓</p>
        </div>

        <Link
          target={external ? "_blank" : ""}
          href={href}
          className="text-blue-400 bg-white px-5 py-2 font-bold rounded-md hover:shadow-lg transition-all"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Cta;
