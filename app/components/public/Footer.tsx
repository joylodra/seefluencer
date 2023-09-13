"use client";

// React & Next Hooks
import Link from "next/link";
import Image from "next/image";

// Custom Components
import { socials } from "@/app/libs/utils";

const Footer = () => {
  return (
    <footer className="flex flex-col p-4 mx-auto max-w-5xl gap-3 z-30 relative">
      <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-4 gap-8 md:gap-3 border-t py-10">
        <div className="flex flex-col gap-2">
          <Link className="flex gap-2 text-2xl items-center" href={`/`}>
            <Image
              src="/images/logo-trans.png"
              alt="Logo Seefluencer"
              width={35}
              height={35}
            />
            <div>
              <span className="font-bold">see</span>
              fluencer
            </div>
          </Link>

          <p className="text-sm">
            see the difference influencers can make with seefluencer 💙
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold">products & services 🛠</h3>

          <div className="flex flex-col gap-1">
            <div className="text-sm">Seefluencer University</div>

            <Link
              href="/accelerator"
              className="text-sm hover:underline text-gray-500 ml-0 md:ml-3"
            >
              12-Week Creator Accelerator Program 👩‍🏫
            </Link>

            <Link
              href="/miniclass"
              className="text-sm hover:underline text-gray-500 ml-0 md:ml-3"
            >
              3-Day Intensive Mini Creator Class ✏️
            </Link>
          </div>

          <Link href="/coaching" className="text-sm hover:underline">
            1-On-1 Coaching
          </Link>

          <Link href="/kol" className="text-sm hover:underline">
            KOL Management
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold">information ℹ️</h3>
          <Link href="/blog" className="text-sm">
            blog
          </Link>

          <Link
            href="/terms-and-conditions"
            className="text-sm hover:underline"
          >
            terms and conditions
          </Link>

          <Link href="/privacy-policy" className="text-sm hover:underline">
            privacy policy
          </Link>

          {/* <Link href="/faq" className="text-sm hover:underline">
            FAQ
          </Link> */}
        </div>

        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="font-bold">get in touch 🗣</h3>

          <p className="text-sm">seefluencer@gmail.com</p>
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

        <p className="text-sm">
          copyright © 2023{" "}
          <Link className="hover:opacity-75" href="/">
            <span className="font-bold">see</span>
            fluencer
          </Link>{" "}
          {`// made with 💙 in 🇮🇩`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
