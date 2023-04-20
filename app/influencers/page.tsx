// Next & React Hooks
import Image from "next/image";

// Custom Components
import Hero from "../components/Global/Hero";
import Cta from "../components/Global/Cta";
import Title from "../components/Global/Title";
import Feature from "../components/Global/Feature";

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

const Influencers = () => {
  return (
    <div className="flex flex-col gap-16">
      <Hero
        customTitle={
          <>
            join our{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
              community
            </span>{" "}
          </>
        }
        description="We connect creators with the best brands in the world."
        buttonText="sign up now"
        href="/"
      />

      <Feature
        title="connect"
        description="Join our community of creators and unleash your creative potential. Connect with like-minded individuals, share your work, and take your craft to the next level. Let's collaborate and bring your ideas to life!"
        src="/images/influencer.png"
        reverse
      />

      <Feature
        title="create"
        description="Join our community of creators and unleash your creative potential. Connect with like-minded individuals, share your work, and take your craft to the next level."
        src="/images/influencer.png"
      />

      <Feature
        title="collaborate"
        description="Join our community of creators and unleash your creative potential. Connect with like-minded individuals, share your work, and take your craft to the next level."
        src="/images/influencer.png"
        reverse
      />

      <Cta
        title="join our creator community"
        description="Join our community of creators and unleash your creative potential. Connect with like-minded individuals, share your work, and take your craft to the next level. Let's collaborate and bring your ideas to life!"
        href="https://wa.me/6285174259955"
        buttonText="sign up now"
      />
    </div>
  );
};

export default Influencers;
