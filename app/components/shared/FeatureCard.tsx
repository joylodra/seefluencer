// Next & React Hooks
import Image from "next/image";
import Link from "next/link";

// Custom Components
import Text from "../ui/Text";
import Button from "../ui/Button";

interface FeatureCardProps {
  title?: React.ReactNode;
  src: string;
  reverse?: boolean;
  href?: string;
  buttonText?: string;
  description?: React.ReactNode;
  external?: boolean;
  onClick?: () => void;
}

const FeatureCard = ({
  title,
  src,
  reverse,
  href,
  buttonText,
  description,
  external,
  onClick,
}: FeatureCardProps) => {
  return (
    <div
      className={`grid grid-cols-1 gap-5 md:gap-15 items-start md:grid-cols-2`}
    >
      <div
        className={`col-span-1 order-last flex flex-col gap-5
        ${reverse ? "" : "md:order-first md:text-left"}`}
      >
        <div className="flex flex-col gap-3">
          <h4>{title}</h4>
          <div className="ml-3 md:ml-5">
            <Text text={description} paragraph />
          </div>
        </div>

        {href && buttonText && (
          <Button
            hrefLink={href}
            buttonText={buttonText}
            external={external}
            regular
            onClick={onClick}
          />
        )}
      </div>

      <div className={`col-span-1`}>
        <Image
          src={src}
          alt="Feature Description Image"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
