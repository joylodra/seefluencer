// Custom Components
import Hero from "../../components/public/Hero";
import Cta from "../../components/public/Cta";
import Feature from "../../components/public/Feature";

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
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfN7m2fWZ3gaJqmghzot0gr2pmc0C1HJw1Q7RYpy6G0kWA7XQ/viewform?embedded=true"
        height="3320"
      />
    </div>
  );
};

export default Influencers;
