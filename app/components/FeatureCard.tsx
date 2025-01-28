// Next & React Hooks
import Image from "next/image";
import Link from "next/link";

// Custom Components
import Text from "./ui/Text";
import Button from "./ui/Button";
import WhatsAppButton from "../libs/WhatsappRotator";

interface FeatureCardProps {
  title?: React.ReactNode;
  src: string;
  reverse?: boolean;
  href?: string;
  buttonText?: string;
  description?: React.ReactNode;
  external?: boolean;
  whatsappNumbers?: string[];
  whatsappText?: string;
}

const FeatureCard = ({
  title,
  src,
  reverse,
  href,
  buttonText,
  description,
  external,
  whatsappNumbers,
  whatsappText,
}: FeatureCardProps) => {
  return (
    <div
      className={`grid grid-cols-1 gap-5 md:gap-15 items-center md:grid-cols-2`}
    >
      <div
        className={`col-span-1 order-last flex flex-col gap-5
        ${reverse ? "" : "md:order-first md:text-left"}`}
      >
        <div className="flex flex-col gap-3">
          <Text text={title} subtitle bold />
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
          />
        )}

        {whatsappNumbers && (
          <WhatsAppButton
            whatsappText={whatsappText}
            numbers={whatsappNumbers}
            buttonText="Apply Now"
            regular
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
