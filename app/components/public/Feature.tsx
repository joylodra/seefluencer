// Next & React Hooks
import Image from "next/image";
import Link from "next/link";

// Custom Components
import Title from "./Title";

interface FeatureProps {
  title: string;
  description: string;
  src: string;
  reverse?: boolean;
  href?: string;
  buttonText?: string;
}

const Feature = ({
  title,
  description,
  src,
  reverse,
  href,
  buttonText,
}: FeatureProps) => {
  return (
    <div className={`grid grid-cols-1 gap-3 items-center md:grid-cols-2`}>
      <div
        className={`col-span-1 text-center order-last
        ${reverse ? "md:text-right" : "md:order-first md:text-left"}`}
      >
        <Title title={title} description={description} secondary />

        <div className="mt-5">
          {href && buttonText && (
            <Link
              target="_blank"
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
          className="rounded-lg shadow-lg h-52 w-full object-cover hover:shadow-3xl hover:shadow-neutral-500 transition-all"
        />
      </div>
    </div>
  );
};

export default Feature;
