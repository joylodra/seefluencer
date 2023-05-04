"use client";

interface TitleProps {
  title: string;
  description?: string;
  secondary?: boolean;
  underline?: boolean;
}

const Title = ({ title, description, secondary, underline }: TitleProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h2
        className={`font-bold font-serif 
        ${secondary ? "text-xl" : "text-4xl"} 
        ${underline ? "underline decoration-4 decoration-blue-400 " : ""}`}
      >
        {title}
      </h2>

      <p className={secondary ? "text-sm text-neutral-600" : ""}>
        {description}
      </p>
    </div>
  );
};

export default Title;
