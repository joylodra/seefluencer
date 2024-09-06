// Next & React Components
import Image from "next/image";

// Custom Components
import Hero from "@/app/components/Hero";
import Text from "@/app/components/ui/Text";
import CtaBox from "@/app/components/CtaBox";
import BenefitsSection from "@/app/components/BenefitsSection";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";

export const metadata = {
  title: "KOL Marketing Agency",
  keywords: [
    "brands",
    "media sosial",
    "digital marketing",
    "influencer marketing",
  ],
  description: "Indonesia’s #1 Live Online Learning For Creators 💙",
};

const Influencers = () => {
  return (
    <div className="flex flex-col">
      <Container>
        <Hero
          withImage
          imageSrc="/images/cap-endorse-2.png"
          title="KOL Marketing Agency"
          description="Layanan kami sangat mengutamakan transparansi & kualitas dalam memberikan hasil yang terbaik kepada para klien kami."
          buttonHref="https://forms.gle/k6AH5gwyE6iAEZcaA"
          buttonText="contact us"
          external
        />
      </Container>

      <Container bgColor="bg-gradient-to-r from-neutral-200 via-neutral-50 to-neutral-100 text-center">
        <Text text="Brand Yang Sudah Pernah Bekerja Sama" title bold />

        <Image
          className="flex w-full"
          src="/images/kol-brands.png"
          alt="Brand Yang Sudah Pernah Bekerja Sama"
          width={800}
          height={800}
        />
      </Container>

      <Container>
        <div className="flex flex-col gap-8 text-center justify-center items-center">
          <div className="flex flex-col gap-2">
            <Text text="Kenapa Harus Menggunakan Jasa Kami?" title bold />
            <Text
              text="Di Seefluencer, kita mengutamakan hasil akhir, transparansi, dan evaluasi tanpa henti."
              secondaryColor
              paragraph
            />
          </div>

          <BenefitsSection />

          <Button
            regular
            hrefLink="https://forms.gle/k6AH5gwyE6iAEZcaA"
            buttonText="contact us"
            external
          />
        </div>
      </Container>

      <Container bgColor="bg-gradient-to-r from-[#0b64be] to-[#117de9] text-center">
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="text-white">
            <Text
              text="Jadwalkan sesi konsultasi gratis bersama tim kami sekarang juga sebelum menggunakan jasa kami."
              title
              bold
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <CtaBox
            ctaButtonText="contact us"
            ctaButtonHref="https://forms.gle/k6AH5gwyE6iAEZcaA"
            benefits={
              <>
                <div className="flex flex-row gap-3">
                  <div className="text-[#0b64be] text-xl font-bold">✓</div>
                  <Text text="Kami selalu berusaha untuk memaksimalkan dana yang dialokasikan untuk mendapatkan hasil influencer marketing yang terbaik." />
                </div>
                <div className="flex flex-row gap-3">
                  <div className="text-[#0b64be] text-xl font-bold">✓</div>
                  <Text text="Transparansi dalam setiap kerja sama ataupun kampanye adalah kunci utama yang selalu kami pegang." />
                </div>
              </>
            }
          />
        </div>
      </Container>
    </div>
  );
};

export default Influencers;
