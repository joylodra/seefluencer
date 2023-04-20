// Custom Components
import Hero from "../components/Global/Hero";
import Cta from "../components/Global/Cta";

export const metadata = {
  title: "case studies",
  keywords: [
    "case studies page",
    "social media",
    "influencer marketing platform",
    "successful stories",
  ],
  description: "see the difference influencers can make with seefluencer 💙",
};

const CaseStudies = () => {
  return (
    <div className="flex flex-col gap-16">
      <Hero
        customTitle={
          <>
            case{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
              studies
            </span>
          </>
        }
        description="Seefluencer has a proven track record of helping businesses achieve their marketing objectives through customized influencer campaigns. With our platform, businesses can expect significant growth in brand awareness, website traffic, and sales conversions."
      />

      <Cta
        title="so, what are you waiting for?"
        description="Ready to achieve your marketing goals? Sign up for Seefluencer today and start your own success story!"
        href="https://wa.me/6285174259955"
        buttonText="get in touch"
      />
    </div>
  );
};

export default CaseStudies;
