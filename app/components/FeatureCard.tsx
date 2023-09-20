// Next & React Hooks
import Image from "next/image";
import Link from "next/link";

// Custom Components
import Text from "./ui/Text";
import Button from "./ui/Button";

interface FeatureCardProps {
  title?: React.ReactNode;
  src: string;
  reverse?: boolean;
  href?: string;
  buttonText?: string;
  description?: React.ReactNode;
  external?: boolean;
}

const FeatureCard = ({
  title,
  src,
  reverse,
  href,
  buttonText,
  description,
  external,
}: FeatureCardProps) => {
  return (
    <div
      className={`grid grid-cols-1 gap-5 md:gap-20 items-center md:grid-cols-2`}
    >
      <div
        className={`col-span-1 order-last flex flex-col gap-5
        ${reverse ? "" : "md:order-first md:text-left"}`}
      >
        <div className="flex flex-col gap-3">
          <Text children={title} subtitle bold />
          <div className="ml-3 md:ml-5">
            <Text children={description} secondaryColor />
          </div>
        </div>

        {href && buttonText && (
          <Button
            hrefLink={href}
            buttonText={buttonText}
            external={external}
            regular
          />
        )}
      </div>

      <div className={`col-span-1`}>
        <Image
          src={src}
          alt="Feature Description Image"
          width={250}
          height={250}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
