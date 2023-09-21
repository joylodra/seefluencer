// React & Next Components
import Image from "next/image";

// Custom Components
import Navbar from "@/app/components/Navbar";
import Button from "@/app/components/ui/Button";
import Text from "@/app/components/ui/Text";
import Container from "@/app/components/ui/Container";
import Hero from "@/app/components/Hero";
import IconCard from "@/app/components/IconCard";
import FeatureCard from "@/app/components/FeatureCard";
import CtaBox from "@/app/components/CtaBox";

// Icons & Images
import { ImSad } from "react-icons/im";
import { BsQuote } from "react-icons/bs";

const Coaching = () => {
  return (
    <div className="flex flex-col">
      {/* Navigation Bar */}
      <Navbar
        landingNav
        logo={
          <div className="flex flex-col">
            <div className="font-bold underline decoration-blue-400">
              1-on-1
            </div>

            <div className="italic text-sm">coaching</div>
          </div>
        }
        button={
          <Button
            buttonText="contact us"
            hrefLink="https://wa.wizard.id/95c3b6"
            external
            noFull
          />
        }
      />

      {/* Hero Section */}
      <Container>
        <Hero
          withImage
          title="Konsultasi 1-On-1 45 Menit Bersama Samuel Christ."
          description="Temukan solusi tentang bagaimana caranya bikin konten yang viral, bangun personal branding, & dapat 100K+ followers."
          buttonText="contact us"
          buttonHref="https://wa.wizard.id/95c3b6"
          imageSrc="/images/cap-coaching.png"
          imageDescription={
            <div>
              <div className="text-xl font-bold">Samuel Christ</div>
              <div className="italic text-gray-500">Content creator</div>
              <div className="italic text-gray-500">Co-founder Seefluencer</div>
            </div>
          }
          external
        />
      </Container>

      {/* Problems */}
      <Container bgColor="bg-red-50">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 flex flex-col gap-2">
            <Text text="Apakah kamu merasa..." title bold />
            <Text
              text="Hal-hal yang paling sering dirasakan orang-orang ketika mulai ngonten."
              paragraph
              secondaryColor
            />
          </div>

          <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5">
            <IconCard
              title="Ingin menjadi content creator tapi ga tau mulai dari mana"
              description="Gak tahu gimana caranya PD ngomong depan kamera, gak tahu gimana caranya ngedit video yang bagus, dan gak tahu cara penulisan script yang viral."
              icon={<ImSad />}
              iconColor="text-red-500"
            />

            <IconCard
              title="Udah konsisten ngonten tapi kok nggak viral-viral"
              description="Rasanya capek ngonten tiap hari udah konsisten tapi video jarang viral dan pertumbuhan followers stagnan."
              icon={<ImSad />}
              iconColor="text-red-500"
            />

            <IconCard
              title="Gak ada motivasi untuk bikin konten"
              description="Udah mulai ngonten tapi gak ada motivasi dan gak konsisten sama skali."
              icon={<ImSad />}
              iconColor="text-red-500"
            />

            <IconCard
              title="Kesulitan dalam mencari ide-ide konten"
              description="Kehabisan ide terus menerus, gak tau lagi mau bikin konten apa selanjutnya."
              icon={<ImSad />}
              iconColor="text-red-500"
            />
          </div>
        </div>
      </Container>

      {/* Solution */}
      <div>
        <Container>
          <div className="text-center flex flex-col gap-2">
            <Text text="Jangan Khawatir!" title bold />

            <Text
              text="Kamu bisa tanyakan pertanyaan apapun seputar konten kreator kepada expertnya, Samuel Christ."
              secondaryColor
              paragraph
            />
          </div>

          <div className="flex flex-col gap-4">
            <FeatureCard
              reverse
              title="Pemenang TikTok Award"
              description="Samuel Christ merupakan pemenang dari TikTok Award The Most Favorite Education Creator 2022 1st Half."
              src="/images/ocwe-award.png"
            />

            <FeatureCard
              title="5 Juta+ Followers"
              description="Samuel memiliki 2,3M subscribers di YouTube, 2,2M di TikTok, dan 535K followers di Instagram. Semua sosial medianya sudah verified."
              src="/images/ocwe-pertumbuhan.png"
            />

            <FeatureCard
              reverse
              title="Pengalaman 6 Tahun"
              description="Samuel memiliki lebih dari 6 tahun pengalaman sebagai konten kreator."
              src="/images/ocwe-6tahun.png"
            />

            <FeatureCard
              title="100 Juta+ Views Per Bulan"
              description={`Samuel bisa mendapatkan total 150M views setiap bulannya di sosial medianya. Bahkan, video "Seberapa Kaya" pernah trending nomor 1 di YouTube dengan total views 11M. Di TikTok, salah satu konten "Seberapa Kaya" berhasil menembus 21,5M views.`}
              src="/images/ocwe-150juta.png"
            />
          </div>

          <div className="flex items-center justify-center">
            <Button
              regular
              hrefLink="https://wa.wizard.id/95c3b6"
              buttonText="contact us"
              external
            />
          </div>
        </Container>

        {/* Pricing */}
        <Container bgColor="bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-500 text-white text-center text-white">
          <div className="flex flex-col items-center justify-center gap-8">
            <BsQuote className="text-5xl text-white" />
            <Text
              text="Setelah konsultasi dengan Samuel Christ, saya mendapatkan gambaran yang sangat-sangat jelas tentang apa yang saya harus lakukan kedepannya. Dua bulan setelah mengaplikasikan apa yang diajarkan beliau, reach konten saya naik hingga 1500%."
              heading
              bold
            />

            <div className="flex flex-row gap-2 items-center">
              <Image
                className="rounded-full"
                src="/images/profile.png"
                width={50}
                height={50}
                alt="Profile"
              />

              <div className="flex flex-col text-left">
                <Text paragraph text="Joy Lodra" bold />
                <Text text="Surabaya" small />
              </div>
            </div>
          </div>
        </Container>

        <Container
          id="pricing"
          bgColor="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 text-center"
        >
          <div className="flex flex-col gap-5 justify-center items-center">
            <div className="text-white">
              <Text
                text="Jadwalkan sesi konsultasi 1-on-1 selama 45 menit dengan Samuel Christ sekarang dan dapatkan untuk bisa sukses jadi content creator!"
                title
                bold
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <CtaBox
              priceBefore="Rp1.499.000"
              priceAfter="Rp449.000"
              ctaButtonText="contact us"
              ctaButtonHref="https://wa.wizard.id/95c3b6"
              additionalNotes="*Karena waktu Samuel Christ sangat terbatas, maka slot akan sangat terbatas dan harga dapat naik tiba tiba tanpa pemberitahuan."
              benefits={
                <>
                  <div className="flex flex-row gap-3">
                    <div className="text-blue-400 text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Konsultasi 1-on-1 bersama expertnya, Samuel Christ, selama 45 menit."
                    />
                  </div>
                  <div className="flex flex-row gap-3">
                    <div className="text-blue-400 text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Boleh bertanya pertanyaan apapun seputar dunia konten kreator."
                    />
                  </div>
                </>
              }
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Coaching;
