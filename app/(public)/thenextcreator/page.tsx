// React & Next Components
import Image from "next/image";

// Custom Components
import Container from "@/app/components/ui/Container";
import Hero from "@/app/components/Hero";
import Text from "@/app/components/ui/Text";
import IconCard from "@/app/components/IconCard";
import FeatureCard from "@/app/components/FeatureCard";
import CtaBox from "@/app/components/CtaBox";
import Button from "@/app/components/ui/Button";
import SideBox from "@/app/components/SideBox";
import Accordion from "@/app/components/Accordion";

// Icons & Images
import { ImSad } from "react-icons/im";
import { BsClock, BsCalendar } from "react-icons/bs";

export const metadata = {
  title: "The Next Creator",
  keywords: [
    "konsultasi",
    "konten kreator",
    "media sosial",
    "influencer marketing",
  ],
  description: "Indonesia’s #1 Live Online Learning For Creators 💙",
};

const IntroductionClass = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Container>
        <Hero
          title="WEBINAR GRATIS: The Next Creator"
          description={
            <div className="flex flex-col gap-5">
              <div>
                Samuel Christ akan bongkar rahasianya bisa viral sebagai content
                creator melalui webinar GRATIS ini!
              </div>

              <div className="text-base flex flex-col gap-3">
                <div className="text-xl font-bold text-black">Batch #2</div>

                <div>
                  <div className="text-black">🗓 Jumat, 12 Juli 2024</div>
                  <div className="text-black">⏰ 19:00 WIB s.d. Selesai</div>
                </div>
              </div>
            </div>
          }
          withImage
          imageSrc="/images/ocwe-seberapakaya.png"
          buttonText="join now"
          buttonHref="https://forms.gle/jaXdFGJUdE3VCA71A"
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

      {/* Introduction */}
      <Container>
        <FeatureCard
          title="Memperkenalkan, webinar The Next Creator yang dirancang oleh Seefluencer University"
          description="Webinar buat Kamu yang mau belajar bagaimana caranya bikin konten yang bisa viral."
          src="/images/imcc-imcc.png"
          buttonText="join now"
          href="https://forms.gle/jaXdFGJUdE3VCA71A"
          external
        />
      </Container>

      {/* Solution */}
      <Container>
        <div className="text-center flex flex-col gap-2">
          <Text text="Meet Your Instructor, Samuel Christ!" title bold />

          <Text
            text="Samuel Christ sudah memiliki jutaan followers dan pengalaman di dunia konten kreator selama bertahun-tahun."
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
            title="6.5 Juta+ Followers"
            description="Samuel memiliki 2,7M subscribers di YouTube, 3M di TikTok, dan 760K followers di Instagram. Semua sosial medianya sudah verified."
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

        <div className="flex justify-center">
          <Button
            buttonText="join now"
            hrefLink="https://forms.gle/jaXdFGJUdE3VCA71A"
            external
            regular
          />
        </div>
      </Container>

      {/* Curriculum */}
      <Container>
        <Text
          text={"Apa Saja Yang Akan Kamu Pelajari Selama Webinar Ini?"}
          title
          bold
        />

        <div className="flex flex-wrap gap-3">
          <div className="flex flex-row gap-2 items-center">
            <BsCalendar className="text-gray-400 text-xl" />
            <Text text="DIUNDUR ke Kamis, 18 Juli 2024" paragraph />
          </div>

          <div className="flex flex-row gap-2 items-center">
            <BsClock className="text-gray-400 text-xl" />
            <Text text="19:00 WIB s.d. Selesai" paragraph />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-3">
          <div className="flex flex-col gap-5 md:col-span-3">
            <Accordion
              number="01"
              question="Potensi GILA Konten Kreator Di Masa Depan"
              answer="Bedah tuntas peluang untuk menjadi content creator sukses di Indonesia dan sekaligus penghasilannya."
            />
            <Accordion
              number="03"
              question="Cara AMPUH Bikin Konten VIRAL"
              answer="Pelajari komponen-komponen dan strategi yang dibutuhkan untuk membuat sebuah konten bisa viral."
            />
          </div>

          <div className="col-span-1">
            <SideBox
              content={
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row gap-3">
                    <div className="text-blue-400 text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Pelajari proses pembuatan konten yang viral dari awal hingga akhir."
                    />
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="text-blue-400 text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Maksimalkan pembelajaran dengan bertanya di sesi Q&A yang disediakan."
                    />
                  </div>
                </div>
              }
              ctaButtonHref="https://forms.gle/jaXdFGJUdE3VCA71A"
              ctaButtonText="join now"
            />
          </div>
        </div>
      </Container>

      {/* Pricing */}
      <Container
        id="pricing"
        bgColor="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 text-center"
      >
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="text-white">
            <Text text="Berapa Investasi Kursus Ini?" title bold />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <CtaBox
            priceBefore="Rp2.499.000"
            priceAfter="GRATIS!"
            ctaButtonText="join now"
            ctaButtonHref="https://forms.gle/jaXdFGJUdE3VCA71A"
            additionalNotes="*Slot webinar sangat terbatas!"
            benefits={
              <>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row gap-3">
                    <div className="text-blue-400 text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Pelajari proses pembuatan konten yang viral dari awal hingga akhir."
                    />
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="text-blue-400 text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Maksimalkan pemebelajaranmu dengan bertanya di sesi Q&A yang disediakan."
                    />
                  </div>
                </div>
              </>
            }
          />
        </div>
      </Container>
    </div>
  );
};

export default IntroductionClass;
