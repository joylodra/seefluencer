"use client";

interface HeadingProps {
  text: React.ReactNode;
  bold?: boolean;
  title?: boolean;
  subtitle?: boolean;
  heading?: boolean;
  paragraph?: boolean;
  secondaryColor?: boolean;
  primaryColor?: boolean;
  small?: boolean;
}

const Text = ({
  text,
  bold,
  title,
  subtitle,
  heading,
  paragraph,
  secondaryColor,
  primaryColor,
  small,
}: HeadingProps) => {
  return (
    <div
      className={`
      ${title && "text-3xl md:text-5xl"}
      ${subtitle && "text-2xl md:text-4xls"}
      ${heading && "text-xl md:text-2xl"} 
      ${paragraph && "text-base md:text-md"}
      ${small && "text-xs md:text-sm"}
      ${bold && "font-bold"}
      ${secondaryColor && "text-gray-500"}
      ${primaryColor && "text-brand"}
      font-helvetica`}
    >
      {text}
    </div>
  );
};

export default Text;
