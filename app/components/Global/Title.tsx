"use client";

interface TitleProps {
  title: string;
  description?: string;
  secondary?: boolean;
}

const Title = ({ title, description, secondary }: TitleProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h2
        className={`font-bold font-serif ${secondary ? "text-xl" : "text-4xl"}`}
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
