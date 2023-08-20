"use client";

// Next & React Hooks
import Link from "next/link";

// Icons & Images
import { RiArrowRightUpLine, RiPhoneCameraFill } from "react-icons/ri";
import { IoBusiness } from "react-icons/io5";

interface AudienceCardProps {
  href: string;
  title: string;
  description: string;
  key?: string;
}

const AudienceCard = ({ href, title, description, key }: AudienceCardProps) => {
  return (
    <div key={key} className="flex flex-col gap-3 rounded-lg shadow-3xl p-5">
      <div className="flex flex-col gap-3 p-1">
        {/* <IoBusiness size={32} /> */}

        <h2 className="font-bold text-2xl">{title}</h2>

        <p className="text-sm text-neutral-500">{description}</p>

        <Link
          className="w-fit flex flex-row gap-2 items-center mt-5 px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
          href={href}
        >
          find out more <RiArrowRightUpLine size={15} />
        </Link>
      </div>
    </div>
  );
};

export default AudienceCard;
