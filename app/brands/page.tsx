// Custom Components
import Hero from "../components/Global/Hero";
import Cta from "../components/Global/Cta";
import Feature from "../components/Global/Feature";

export const metadata = {
  title: "for brands & agencies",
  keywords: ["brands page", "social media", "business", "influencer marketing"],
  description: "see the difference influencers can make with seefluencer 💙",
};

const Influencers = () => {
  return (
    <div className="flex flex-col gap-16">
      <Hero
        customTitle={
          <>
            exceptional service,{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
              world-class
            </span>{" "}
            results
          </>
        }
        description="We build every campaign to meet your needs, no matter the complexity."
        buttonText="get in touch"
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
        title="ready to start growing your business with us?"
        description="At Seefluencer, we understand that every business has unique needs. get in touch today to discuss how we can develop a customized influencer campaign to help your business succeed."
        href="https://wa.me/6285174259955"
        buttonText="get in touch"
      />
    </div>
  );
};

export default Influencers;
