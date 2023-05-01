"use client";

// Next & React Hooks
import Link from "next/link";

// Custom components
import { socials } from "@/app/libs/utils";

// Images & Icons
import { FiArrowUpRight } from "react-icons/fi";
import Title from "../Title";

const Sidebar = () => {
  return (
    <div className="md:sticky md:top-24 border border-neutral-200 h-fit rounded-lg w-full flex flex-col overflow-hidden">
      <div className="p-3">
        <Title
          secondary
          title="follow our socials 📱"
          description="Feel free to click one of the links below to follow our social media and stay up to date."
        />
      </div>

      <hr />

      <div>
        {socials.map((item) => (
          <Link
            target="_blank"
            key={item.url}
            href={item.url}
            className="flex flex-row items-center justify-between hover:bg-blue-400 hover:text-white px-3 py-2"
          >
            <div className="flex flex-row items-center gap-2">
              {item.iconBlack} {item.platform}
            </div>
            <FiArrowUpRight />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
