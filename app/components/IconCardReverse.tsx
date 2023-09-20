"use client";

// Custom Components
import Text from "./ui/Text";

interface IconCardReverseProps {
  icon: React.ReactNode;
  iconColor?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

const IconCardReverse = ({
  icon,
  iconColor,
  title,
  description,
}: IconCardReverseProps) => {
  return (
    <div className="flex flex-row gap-4">
      <div className={`text-3xl ${iconColor}`}>{icon}</div>

      <div className="flex flex-col gap-0">
        <Text text={description} secondaryColor small />
        <Text text={title} bold />
      </div>
    </div>
  );
};

export default IconCardReverse;
