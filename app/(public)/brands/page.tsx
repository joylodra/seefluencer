// Custom Components
import Hero from "../../components/public/Hero";
import Cta from "../../components/public/Cta";
import Title from "@/app/components/public/Title";
import BenefitsSection from "@/app/components/public/brands/BenefitsSection";

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
        description="Layanan kami sangat mengutamakan kualitas untuk memberikan hasil terbaik kepada para klien kami. Dengan menggunakan strategi yang efektif, kami bertekad untuk memberikan hasil yang memuaskan dan memuaskan kebutuhan bisnis Anda."
        buttonText="hubungi kami"
        href="https://wa.me/6285174259955"
      />

      <div className="flex flex-col gap-10 text-center justify-center items-center">
        <Title
          title="why us? 👋"
          description="Di Seefluencer, transparansi dan kejujuran menjadi prioritas utama dalam setiap kemitraan yang kami bangun."
        />

        <BenefitsSection />
      </div>

      <Cta
        title="ready to start growing your business with us?"
        description="Di Seefluencer, kami memahami bahwa setiap bisnis memiliki kebutuhan yang berbeda-beda. Hubungi kami sekarang untuk membicarakan bagaimana kami dapat mengembangkan bisnis Anda melalui influencer marketing."
        href="https://wa.me/6285174259955"
        buttonText="hubungi kami"
      />
    </div>
  );
};

export default Influencers;
