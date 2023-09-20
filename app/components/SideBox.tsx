"use client";

// Custom Components
import Button from "./ui/Button";
import Text from "./ui/Text";

interface SideBoxProps {
  content: React.ReactNode;
  ctaButtonText: string;
  ctaButtonHref: string;
  additionalNotes?: string;
}

const SideBox = ({
  content,
  ctaButtonText,
  ctaButtonHref,
  additionalNotes,
}: SideBoxProps) => {
  return (
    <div className="md:sticky top-24 border border-blue-200 shadow-sm h-fit rounded-sm w-full flex flex-col">
      <div className="p-3">{content}</div>

      <div className="flex flex-col gap-2 p-3">
        <Button
          full
          buttonText={ctaButtonText}
          hrefLink={ctaButtonHref}
          external
        />

        <Text small secondaryColor text={additionalNotes} />
      </div>
    </div>
  );
};

export default SideBox;
