"use client";

// Custom Components
import Text from "./ui/Text";

interface IconCardProps {
  icon: React.ReactNode;
  iconColor?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

const IconCard = ({ icon, iconColor, title, description }: IconCardProps) => {
  return (
    <div className="flex flex-row gap-4">
      <div className={`text-3xl ${iconColor}`}>{icon}</div>

      <div className="flex flex-col gap-2">
        <Text text={title} bold heading />
        <Text text={description} secondaryColor paragraph />
      </div>
    </div>
  );
};

export default IconCard;
