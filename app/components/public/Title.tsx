"use client";

interface TitleProps {
  title: string;
  description?: string;
  secondary?: boolean;
  underline?: boolean;
  center?: boolean;
}

const Title = ({
  title,
  description,
  secondary,
  underline,
  center,
}: TitleProps) => {
  return (
    <div className={`flex flex-col gap-2 ${center ? "text-center" : ""}`}>
      <div
        className={`font-bold 
        ${secondary ? "text-2xl" : "text-4xl"} 
        ${underline ? "underline decoration-4 decoration-blue-400 " : ""}`}
      >
        {title}
      </div>

      <div className={secondary ? "text-neutral-600" : ""}>{description}</div>
    </div>
  );
};

export default Title;
