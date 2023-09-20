// Custom Components
import Hero from "@/app/components/Hero";
import Text from "@/app/components/ui/Text";
import CtaBox from "@/app/components/CtaBox";
import BenefitsSection from "@/app/components/BenefitsSection";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";

export const metadata = {
  title: "KOL Management",
  keywords: [
    "brands",
    "media sosial",
    "digital marketing",
    "influencer marketing",
  ],
  description: "See the difference influencers can make with seefluencer 💙",
};

const Influencers = () => {
  return (
    <div className="flex flex-col">
      <Container>
        <Hero
          withImage
          imageSrc="/images/cap-endorse-2.png"
          title="KOL Management"
          description="Layanan kami sangat mengutamakan transparansi & kualitas dalam memberikan hasil yang terbaik kepada para klien kami."
          buttonHref="https://wa.wizard.id/e702f2"
          buttonText="contact us"
          external
        />
      </Container>

      <Container>
        <div className="flex flex-col gap-8 text-center justify-center items-center">
          <div className="flex flex-col gap-2">
            <Text text="Pengalaman Pitching Kami" title bold />
            <Text
              secondaryColor
              text="Video di bawah menggambarkan cara kami secara profesional mengunjungi korporat-korporat untuk pitching."
            />
          </div>

          <iframe
            allow="fullscreen;"
            src="https://www.youtube.com/embed/bfQrBQAk1Ks"
            className="aspect-video w-full"
          />
        </div>
      </Container>

      <Container>
        <div className="flex flex-col gap-8 text-center justify-center items-center">
          <div className="flex flex-col gap-2">
            <Text text="Kenapa Harus Menggunakan Jasa Kami?" title bold />
            <Text
              text="Di Seefluencer, transparansi dan kejujuran menjadi prioritas utama dalam setiap kemitraan yang kami bangun."
              secondaryColor
            />
          </div>

          <BenefitsSection />

          <Button
            regular
            hrefLink="https://wa.wizard.id/e702f2"
            buttonText="contact us"
            external
          />
        </div>
      </Container>

      <Container bgColor="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 text-center">
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
            ctaButtonHref="https://wa.wizard.id/e702f2"
            benefits={
              <>
                <div className="flex flex-row gap-3">
                  <div className="text-blue-400 text-xl font-bold">✓</div>
                  <Text text="Kami selalu berusaha untuk memaksimalkan dana yang dialokasikan untuk mendapatkan hasil influencer marketing yang terbaik." />
                </div>
                <div className="flex flex-row gap-3">
                  <div className="text-blue-400 text-xl font-bold">✓</div>
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
