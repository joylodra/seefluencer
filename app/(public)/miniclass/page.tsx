// React & Next Components
import Link from "next/link";
import Image from "next/image";

// Custom Components
import Hero from "../../components/public/Hero";
import Cta from "../../components/public/Cta";
import Title from "@/app/components/public/Title";
import Feature from "../../components/public/Feature";
import Accordion from "@/app/components/public/faq/Accordion";

export const metadata = {
  title: "for influencers",
  keywords: [
    "influencer page",
    "social media",
    "influencer marketing platform",
    "community",
  ],
  description: "see the difference influencers can make with seefluencer 💙",
};

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
    </div>
  );
};

export default MiniClass;
