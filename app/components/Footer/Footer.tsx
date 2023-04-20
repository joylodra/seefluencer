"use client";

// React & Next Hooks
import Link from "next/link";

// Custom Components
import { socials } from "@/app/libs/utils";

// Icons & Images
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="flex flex-col p-4 mx-auto max-w-5xl gap-3 z-30 relative">
      <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-4 gap-5 border-t py-10">
        <div>
          <Link className="text-3xl font-bold" href="/">
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
              see
            </span>
            fluencer
          </Link>

          <p>see the difference influencers can make with seefluencer</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-bold">seefluencers</h3>

          <Link
            href="/brands"
            className="hover:underline decoration-blue-400 decoration-4"
          >
            for brands & agencies
          </Link>

          <Link
            href="/influencers"
            className="hover:underline decoration-blue-400 decoration-4"
          >
            for influencers & creators
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-bold">information</h3>

          <Link
            href="/case-studies"
            className="hover:underline decoration-blue-400 decoration-4"
          >
            case studies
          </Link>

          <Link
            href="/blog"
            className="hover:underline decoration-blue-400 decoration-4"
          >
            blog
          </Link>

          <Link
            href="/terms-and-conditions"
            className="hover:underline decoration-blue-400 decoration-4"
          >
            terms and conditions
          </Link>

          <Link
            href="/privacy-policy"
            className="hover:underline decoration-blue-400 decoration-4"
          >
            privacy policy
          </Link>

          <Link
            href="/faq"
            className="hover:underline decoration-blue-400 decoration-4"
          >
            FAQ
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-start gap-3">
          <h3 className="font-bold">get in touch</h3>

          <p className="flex flex-row gap-2 items-center">
            <MdEmail size={24} /> seefluencers@gmail.com
          </p>

          <p className="flex flex-row gap-2 items-center">
            <FaWhatsapp size={24} /> +6285174259955
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between text-center border-t py-5 items-center gap-3">
        <div className="flex flex-row gap-2 justify-center items-center">
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

        <p>
          copyright © 2023{" "}
          <Link className="hover:opacity-75 font-semibold" href="/">
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
              see
            </span>
            fluencer
          </Link>{" "}
          {`// made with 💙 in 🇮🇩`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
