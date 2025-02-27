import Link from "next/link";
import { IconType } from "react-icons";

interface ProgramCardProps {
  icon: IconType;
  title: string;
  duration: string;
  highlights: string[];
  participants: number;
  participantsImages: string[];
  primaryColor: string;
  hrefLink: string;
}

export default function ProgramCard({
  icon: Icon,
  title,
  duration,
  highlights,
  participants,
  participantsImages,
  hrefLink,
}: ProgramCardProps) {
  return (
    <div className="w-full h-fit flex flex-col gap-3 bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-left">
      {/* Header */}
      <div className={`p-3 rounded-lg bg-brand w-fit`}>
        <Icon className="w-10 h-10 text-white" />
      </div>

      <div>
        <h4 className="font-bold text-gray-900">{title}</h4>
        <small className="text-gray-500">{duration}</small>
      </div>

      {/* Highlights */}
      <ul className="space-y-2 mb-4">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex gap-2 items-center text-gray-700">
            <div className="text-brand">✔</div> {highlight}
          </li>
        ))}
      </ul>

      {/* Participants */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="flex -space-x-2">
          {participantsImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="participant"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          ))}
        </div>

        <small className="text-gray-500">{participants}+ sudah gabung!</small>
      </div>

      {/* Buttons */}
      <Link
        href={hrefLink}
        className="flex flex-row gap-2 items-center justify-center text-center px-4 py-2 md:px-8  bg-brand text-white text-base md:text-lg rounded-full hover:shadow-md transition-all font-bold cursor-pointer capitalize w-full"
      >
        Cek Program
      </Link>
    </div>
  );
}
