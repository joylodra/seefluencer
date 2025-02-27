"use client";

// Custom Components
import Button from "../ui/Button";
import Text from "../ui/Text";

interface SideBoxProps {
  content: React.ReactNode;
  ctaButtonText?: string;
  ctaButtonHref?: string;
  additionalNotes?: string;
  onClick?: () => void;
}

const SideBox = ({
  content,
  ctaButtonText,
  ctaButtonHref,
  additionalNotes,
  onClick,
}: SideBoxProps) => {
  return (
    <div className="sticky top-12 bg-white border border-gray-200 shadow-sm h-fit rounded-xl w-full flex flex-col">
      <div className="p-3">{content}</div>

      <div className="p-3">
        <hr />
      </div>

      <div className="flex flex-col gap-2 p-3">
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
