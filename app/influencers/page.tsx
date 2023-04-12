// Custom Components
import Hero from "../components/Global/Hero";
import Cta from "../components/Global/Cta";

export const metadata = {
  title: "for influencers",
  keywords: ["joyplannr", "social media", "scheduling", "planning"],
  description:
    "elevate your social media game with joyplannr, a powerful social media management tool 💥",
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
        buttonText="join now"
        href="/"
      />

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
};

export default Influencers;
