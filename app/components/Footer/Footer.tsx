"use client";

// React & Next Hooks
import Link from "next/link";

// Custom Components
import { socials } from "@/app/libs/utils";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center text-center p-4 border-t mx-auto max-w-5xl gap-3">
      <div className="flex flex-row gap-2">
        {socials.map((item) => (
          <Link
            key={item.url}
            target="_blank"
            className="p-2 rounded-full bg-blue-400 hover:shadow-lg transition-all"
            href={item.url}
          >
            {item.icon}
          </Link>
        ))}
      </div>

      <p>copyright © 2023 seefluencer // made with 💙 in 🇮🇩</p>
    </footer>
  );
};

export default Footer;
