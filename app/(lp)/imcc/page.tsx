"use client";

// React & Next Components
import Link from "next/link";
import Image from "next/image";

// Custom Components
import Hero from "../../components/public/Hero";
import Cta from "../../components/public/Cta";
import Title from "@/app/components/public/Title";
import Feature from "../../components/public/Feature";
import Accordion from "@/app/components/public/faq/Accordion";
import { socials } from "@/app/libs/utils";

const MiniClass = () => {
  return (
    <div className="flex flex-col gap-16">
      {/* TITLE */}
      <div className="flex flex-col gap-10">
        <Hero
          fullWidth
          customTitle={
            <div className="flex flex-col gap-8">
              <div>
                3-day intensive mini{" "}
                <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
                  creator class
                </span>
              </div>
              <div className="font-normal text-2xl">
                Coming soon. Kelas ini masih dalam proses pembuatan! 🛠"
              </div>
              <Image
                className="flex w-full"
                src="/images/cap-growth.png"
                alt="Sam Christ's social media growth"
                width={800}
                height={800}
              />
            </div>
          }
          buttonText="kembali ke home"
          href="/"
        />
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

        <div className="text-sm">
          copyright © 2023{" "}
          <span className="hover:opacity-75 font-semibold">
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
              see
            </span>
            fluencer
          </span>{" "}
          {`// made with 💙 in 🇮🇩`}
        </div>
      </div>
    </div>
  );
};

export default MiniClass;
