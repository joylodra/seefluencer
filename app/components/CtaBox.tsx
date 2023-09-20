"use client";

// Custom Components
import Text from "./ui/Text";
import Button from "./ui/Button";

interface CtaBoxProps {
  priceBefore?: string;
  priceAfter?: string;
  ctaButtonText: string;
  ctaButtonHref: string;
  additionalNotes?: string;
  benefits: React.ReactNode;
}

const CtaBox = ({
  priceBefore,
  priceAfter,
  ctaButtonText,
  ctaButtonHref,
  additionalNotes,
  benefits,
}: CtaBoxProps) => {
  return (
    <div className="bg-white p-5 rounded-md max-w-xl w-full flex flex-col gap-5">
      <div className="flex flex-col gap-5 justify-center items-center">
        {priceBefore && priceAfter && (
          <div className="flex flex-col gap-1">
            <Text text="Hanya Untuk" heading bold />
            <div className="line-through text-xl">{priceBefore}</div>
            <h1 className="text-4xl text-red-500 font-bold rounded-lg animate-bounce">
              {priceAfter}
            </h1>
          </div>
        )}

        <div className="flex flex-col gap-2 w-full">
          <Button
            full
            buttonText={ctaButtonText}
            hrefLink={ctaButtonHref}
            external
          />

          {additionalNotes && (
            <Text small secondaryColor text={additionalNotes} />
          )}
        </div>
      </div>

      <hr />

      <div className="flex flex-col gap-2 text-left">{benefits}</div>
    </div>
  );
};

export default CtaBox;
