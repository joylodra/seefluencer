"use client";

// Next & React Hooks
import Image from "next/image";
import Link from "next/link";

// Icons & Images
import { RiArrowRightUpLine } from "react-icons/ri";

interface AudienceCardProps {
  href: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  key?: string;
}

const AudienceCard = ({
  href,
  src,
  alt,
  title,
  description,
  key,
}: AudienceCardProps) => {
  return (
    <div key={key} className="flex flex-col gap-3 rounded-lg">
      <Link href={href} className="hover:opacity-90 transition-all">
        <Image
          className="object-cover h-60 w-full rounded-lg shadow-lg"
          src={src}
          alt={alt}
          width={300}
          height={300}
        />
      </Link>

      <div className="flex flex-col gap-3 p-1">
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
