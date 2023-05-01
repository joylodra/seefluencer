// Custom Components
import Hero from "../../components/public/Hero";
import Cta from "../../components/public/Cta";

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
        description="Seefluencer telah membuktikan diri dalam membantu bisnis mencapai tujuan marketing mereka dengan influencers kami. Dengan platform kami, bisnis dapat mengharapkan peningkatan signifikan dalam brand awareness dan konversi penjualan."
      />

      <Cta
        title="contact us to see our previous work"
        description="Jangan ragu untuk menghubungi kami dan melihat portofolio kerja kami sebelum memulai kerja sama. Kami siap memperlihatkan hasil kerja terbaik kami untuk memastikan bahwa Anda merasa percaya dan nyaman dalam memilih Seefluencer sebagai mitra bisnis Anda."
        href="https://wa.me/6285174259955"
        buttonText="contact us here"
      />
    </div>
  );
};

export default CaseStudies;
