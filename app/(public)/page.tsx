// Custom Components
import Container from "../components/ui/Container";
import Hero from "../components/Hero";
import Text from "../components/ui/Text";
import FeatureCard from "../components/FeatureCard";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Container>
        <Hero
          title={`Indonesia’s #1 Live Online Learning For Creators 💙`}
          description="Seefluencer adalah sebuah all-in-one platform yang berfokus pada pengembangan kreator Indonesia agar bisa mendapatkan penghasilan yang terbaik."
        />

        <iframe
          allow="fullscreen;"
          src="https://www.youtube.com/embed/M5PLJeb2Oz0"
          className="aspect-video w-full rounded-lg"
        />
      </Container>

      {/* Products */}
      <Container>
        <div className="text-center flex flex-col gap-2">
          <Text text="Apa Saja Yang Ada di Dalam Seefluencer?" title bold />
        </div>

        <FeatureCard
          reverse
          title="8-week Creator Accelerator Program"
          description={
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3">
                <div className="text-blue-400 text-xl font-bold">✓</div>
                <Text
                  paragraph
                  text="Sekolah konten kreator yang dijalankan selama 8 minggu secara live."
                />
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-blue-400 text-xl font-bold">✓</div>
                <Text
                  paragraph
                  text="Kamu akan langsung dibimbing hingga bisa menghasilkan minimal 30 konten yang diupload."
                />
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-blue-400 text-xl font-bold">✓</div>
                <Text
                  paragraph
                  text="Kamu akan diberikan 8 kali sesi 1-on-1 coaching selama kelas berlangsung, 1 minggu 1 kali."
                />
              </div>
            </div>
          }
          src="/images/cap-bimbingan-2.png"
          buttonText="learn more"
          href="/accelerator"
        />

        <FeatureCard
          title="3-Day Introduction to Content Creation"
          description={
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3">
                <div className="text-blue-400 text-xl font-bold">✓</div>
                <Text
                  paragraph
                  text="Kursus pendek cara jadi content creator yang dijalankan selama 3 hari secara live."
                />
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-blue-400 text-xl font-bold">✓</div>
                <Text
                  paragraph
                  text="Kami sudah menyiapkan materi yang bisa langsung dipraktekkan."
                />
              </div>
            </div>
          }
          src="/images/ocwe-pertumbuhan.png"
          buttonText="learn more"
          href="/miniclass"
        />

        {/* <FeatureCard
          reverse
          title="1-On-1 Creator Coaching with Samuel Christ"
          description={
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3">
                <div className="text-blue-400 text-xl font-bold">✓</div>
                <Text
                  paragraph
                  text="Sesi 45 menit bersama Samuel Christ, konten kreator dengan 5 juta+ followers."
                />
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-blue-400 text-xl font-bold">✓</div>
                <Text
                  paragraph
                  text="Bebas bertanya pertanyaan apa saja seputar dunia konten kreator."
                />
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-blue-400 text-xl font-bold">✓</div>
                <Text
                  paragraph
                  text="Selesaikan semua masalah perkontenanmu dengan mendapatkan solusi yang tepat dari pakarnya."
                />
              </div>
            </div>
          }
          src="/images/cap-coaching.png"
          buttonText="learn more"
          href="/coaching"
        /> */}

        <FeatureCard
          reverse
          title="KOL Marketing Agency"
          description={
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3">
                <div className="text-blue-400 text-xl font-bold">✓</div>
                <Text
                  paragraph
                  text="Pemilihan influencer yang berkualitas dan terbaik di bidangnya berdasarkan data."
                />
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-blue-400 text-xl font-bold">✓</div>
                <Text
                  paragraph
                  text="Pembuatan konsep marketing campaign yang terbukti bisa meningkatkan performa perusahaan."
                />
              </div>
            </div>
          }
          src="/images/ocwe-150juta.png"
          buttonText="learn more"
          href="/kol"
        />
      </Container>
    </div>
  );
}
