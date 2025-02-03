"use client";

// Custom Components
import Button from "./ui/Button";
import Text from "./ui/Text";
import WhatsAppButton from "../libs/WhatsappRotator";

interface SideBoxProps {
  content: React.ReactNode;
  ctaButtonText?: string;
  ctaButtonHref?: string;
  additionalNotes?: string;
  whatsappNumbers?: string[];
  whatsappText?: string;
  onClick?: () => void;
}

const SideBox = ({
  content,
  ctaButtonText,
  ctaButtonHref,
  additionalNotes,
  whatsappNumbers,
  whatsappText,
  onClick,
}: SideBoxProps) => {
  return (
    <div className="md:sticky top-5 border border-blue-200 shadow-sm h-fit rounded-sm w-full flex flex-col">
      <div className="p-3">{content}</div>

      <div className="p-3">
        <hr />
      </div>

      <div className="flex flex-col gap-2 p-3">
        {whatsappNumbers && (
          <WhatsAppButton
            whatsappText={whatsappText}
            numbers={whatsappNumbers}
            buttonText="Apply Now"
            full
          />
        )}

        {ctaButtonText && ctaButtonHref && (
          <Button
            full
            buttonText={ctaButtonText}
            hrefLink={ctaButtonHref}
            external
            onClick={onClick}
          />
        )}

        <Text small secondaryColor text={additionalNotes} />
      </div>
    </div>
  );
};

export default SideBox;
