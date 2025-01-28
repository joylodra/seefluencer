"use client";

// React & Next Components
import Image from "next/image";

// Custom Components
import Text from "./ui/Text";
import Button from "./ui/Button";
import WhatsAppButton from "../libs/WhatsappRotator";

interface TitleProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
  withImage?: boolean;
  imageDescription?: React.ReactNode;
  imageSrc?: string;
  external?: boolean;
  additionalNotes?: string;
  whatsappNumbers?: string[];
  reverse?: boolean;
  whatsappText?: string;
}

const Hero = ({
  title,
  description,
  buttonText,
  buttonHref,
  withImage,
  imageDescription,
  imageSrc,
  external,
  additionalNotes,
  whatsappNumbers,
  reverse,
  whatsappText,
}: TitleProps) => {
  return (
    <>
      {withImage && imageSrc ? (
        <div
          className={`grid grid-cols-1 gap-3 text-center md:grid-cols-3 md:gap-8 md:text-left`}
        >
          <div
            className={`order-last col-span-2 flex flex-col gap-5 ${
              reverse ? "" : "md:order-first md:text-left"
            }`}
          >
            <Text text={title} title bold />
            {description && <Text text={description} heading />}
            <div className="flex flex-col gap-2 w-full">
              {buttonText && buttonHref && (
                <Button
                  regular
                  hrefLink={buttonHref}
                  buttonText={buttonText}
                  external={external}
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

              {additionalNotes && (
                <Text secondaryColor small text={additionalNotes} />
              )}
            </div>
          </div>

          <div
            className={`col-span-1 text-center flex flex-col gap-3 items-center mt-10 md:mt-0`}
          >
            <Image
              className="flex w-full max-w-sm rounded-lg shadow-xl"
              src={imageSrc}
              alt="Hero Image"
              width={400}
              height={400}
            />

            {imageDescription}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-5 items-center justify-center text-center">
          <Text text={title} title bold />
          {description && <Text text={description} heading />}

          <div className="flex flex-col justify-center text-center items-center gap-2 w-full">
            {buttonText && buttonHref && (
              <Button
                regular
                hrefLink={buttonHref}
                buttonText={buttonText}
                external={external}
              />
            )}

            {whatsappNumbers && (
              <WhatsAppButton
                whatsappText={whatsappText}
                numbers={whatsappNumbers}
                buttonText="Apply Now"
              />
            )}

            {additionalNotes && (
              <Text secondaryColor small text={additionalNotes} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
