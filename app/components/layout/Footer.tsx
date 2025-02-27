"use client";

// React & Next Hooks
import Link from "next/link";
import Image from "next/image";

// Custom Components
import { socials } from "@/app/libs/utils";

interface FooterProps {
  complete?: boolean;
}

const Footer = ({ complete }: FooterProps) => {
  return (
    <footer className="flex flex-col px-5 mx-auto max-w-6xl gap-3 z-30 relative">
      {complete && (
        <>
          <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-4 gap-8 md:gap-3 py-12">
            <div className="flex flex-col gap-4">
              <Link
                className="flex gap-2 text-2xl items-center justify-center md:justify-start"
                href={`/`}
              >
                <Image
                  src="/images/logo-trans.png"
                  alt="Logo Seefluencer"
                  width={170}
                  height={170}
                />
              </Link>

              <p className="text-sm">
                Indonesia's #1 Social Media Learning Platform 💙
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="font-bold">Products & Services</div>

              <Link href="/university" className="text-sm">
                Seefluencer University
              </Link>

              <Link href="/community" className="text-sm">
                Seefluencer Community
              </Link>

              <Link href="/agency" className="text-sm">
                Social Media Agency
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              <div className="font-bold">Information</div>
              <Link href="/terms-and-conditions" className="text-sm">
                Terms & Conditions
              </Link>

              <Link href="/privacy-policy" className="text-sm">
                Privacy Policy
              </Link>
            </div>

            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="font-bold">Get in Touch</div>

              <p className="text-sm">seefluencer@gmail.com</p>

              <p className="text-sm">
                Seefluencer Headquarters, Ruko Apartemen Saveria, Jl. Damai
                Foresta No.12 Unit SR 10, Sampora, Kec. Cisauk, Kabupaten
                Tangerang, Banten 15345
              </p>
            </div>
          </div>
        </>
      )}

      <div className="flex flex-col md:flex-row md:justify-between text-center py-5 items-center gap-3">
        <div className="flex flex-row gap-2 justify-center items-center">
          {socials.map((item) => (
            <Link
              key={item.url}
              target="_blank"
              className="p-2 rounded-full bg-brand hover:shadow-lg transition-all"
              href={item.url}
            >
              {item.icon}
            </Link>
          ))}
        </div>

        <p className="text-sm">
          Copyright © 2025 PT Seefluencer Digital Kreatif // Made with 💙 in 🇮🇩
        </p>
      </div>
    </footer>
  );
};

export default Footer;
