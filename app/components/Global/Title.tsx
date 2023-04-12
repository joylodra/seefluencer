"use client";

interface TitleProps {
  title: string;
  description?: string;
}

const Title = ({ title, description }: TitleProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-4xl font-bold font-serif">{title}</h2>

      <p>{description}</p>
    </div>
  );
};

export default Title;
