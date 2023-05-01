// Icons & Images
import Title from "../components/public/Title";

// Custom Components
import Hero from "../components/public/Hero";
import Cta from "../components/public/Cta";
import BenefitsSection from "../components/public/brands/BenefitsSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
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
        description="Kami hadir untuk membantu bisnis anda mencapai hasil yang optimal dengan influencer marketing. Dan juga, kami membantu influencer dalam mendapatkan tawaran kerja sama dengan brand-brand terbaik."
        href="/brands"
        buttonText="saya pemilik brand"
        secondaryHref="/influencers"
        secondaryButtonText="saya influencer"
      />

      <div className="aspect-w-16 aspect-h-9">
        <iframe
          allow="fullscreen;"
          src="https://www.youtube.com/embed/M5PLJeb2Oz0"
        />
      </div>
    </div>
  );
}
