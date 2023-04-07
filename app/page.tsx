"use client";

// React & Next Hooks
import Link from "next/link";

// Icons & Images
import Title from "./components/Global/Title";
import { benefits } from "./libs/utils";
import Hero from "./components/Global/Hero";
import Cta from "./components/Global/Cta";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl flex flex-col py-5 gap-14">
      <Hero
        customTitle={
          <>
            see the difference{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
              influencers
            </span>{" "}
            can make with seefluencer
          </>
        }
        description="Our goal is to help your business increase brand awareness and sales through the power of influencer 
        marketing. With us, you can see the impact of your brand through our carefully selected network of influencers."
        href="https://wa.me/6285174259955"
        buttonText="contact us"
      />

      <div className="flex flex-col gap-10 text-center font-serif justify-center items-center">
        <Title
          title="why us? 👋"
          description="At seefluencer, we prioritize transparency and authenticity in all of our partnerships. 
          Our platform provides a seamless experience for brands to connect with the most relevant influencers 
          in their niche, ensuring that every collaboration is tailored to your unique needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {benefits.map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-3">
              <div className="p-4 rounded-full bg-blue-400 shadow-lg">
                {item.icon}
              </div>
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Cta
        title="so, what are you waiting for?"
        description="We understand that starting an influencer marketing campaign can be daunting, especially if 
        you're new to the industry. That's why we're here to guide you every step of the way. So, don't hesitate to 
        reach out and ask us anything."
        href="https://wa.me/6285174259955"
        buttonText="contact us"
      />
    </div>
  );
}
