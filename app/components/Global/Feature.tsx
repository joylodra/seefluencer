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
    <div
      className={`text-center items-center flex flex-col-reverse gap-6 md:text-left
        ${reverse ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      <div
        className={`flex-1 flex flex-col gap-7 justify-center items-center md:items-start ${
          reverse ? "text-left" : "text-right"
        }`}
      >
        <Title title={title} description={description} />

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

      <Image
        src={src}
        alt="Feature Description Image"
        width={250}
        height={250}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Feature;
