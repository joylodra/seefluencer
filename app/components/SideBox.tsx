"use client";

// Custom Components
import Button from "./ui/Button";
import Text from "./ui/Text";

interface SideBoxProps {
  children: React.ReactNode;
  ctaButtonText: string;
  ctaButtonHref: string;
  additionalNotes?: string;
}

const SideBox = ({
  children,
  ctaButtonText,
  ctaButtonHref,
  additionalNotes,
}: SideBoxProps) => {
  return (
    <div className="md:sticky top-24 border border-blue-200 shadow-sm h-fit rounded-sm w-full flex flex-col">
      <div className="p-3">{children}</div>

      <div className="flex flex-col gap-2 p-3">
        <Button
          full
          buttonText={ctaButtonText}
          hrefLink={ctaButtonHref}
          external
        />

        <Text small secondaryColor children={additionalNotes} />
      </div>
    </div>
  );
};

export default SideBox;
