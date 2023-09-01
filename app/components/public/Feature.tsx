// Next & React Hooks
import Image from "next/image";
import Link from "next/link";

// Custom Components
import Title from "./Title";

interface FeatureProps {
  title?: string;
  src: string;
  reverse?: boolean;
  href?: string;
  buttonText?: string;
  description?: React.ReactNode;
  notExternal?: boolean;
}

const Feature = ({
  title,
  src,
  reverse,
  href,
  buttonText,
  description,
  notExternal,
}: FeatureProps) => {
  return (
    <div className={`grid grid-cols-1 gap-3 items-center md:grid-cols-2`}>
      <div
        className={`col-span-1 text-center order-last
        ${reverse ? "md:text-right" : "md:order-first md:text-left"}`}
      >
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">{title}</h2>
          {description}
        </div>

        <div className="mt-8">
          {href && buttonText && (
            <Link
              target={`${notExternal ? "" : "_blank"}`}
              href={href}
              className="w-fit px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>

      <div className="col-span-1">
        <Image
          src={src}
          alt="Feature Description Image"
          width={250}
          height={250}
          className="rounded-lg shadow-lg w-full hover:shadow-3xl hover:shadow-neutral-500 transition-all h-64 object-cover object-top"
        />
      </div>
    </div>
  );
};

export default Feature;
