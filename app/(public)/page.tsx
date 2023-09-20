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
          title="See the Difference Influencers Can Make with Seefluencer 💙"
          description="Seefluencer adalah sebuah all-in-one platform yang berfokus untuk membantu konten kreator agar bisa mendapatkan penghasilan lebih."
        />

        <iframe
          allow="fullscreen;"
          src="https://www.youtube.com/embed/M5PLJeb2Oz0"
          className="aspect-video w-full"
        />
      </Container>

      {/* Products */}
      <Container>
        <div className="text-center flex flex-col gap-2">
          <Text children="Apa Saja Yang Ada di Dalam Seefluencer?" title bold />
          <Text
            children="Kamu bisa tanyakan pertanyaan apapun seputar konten kreator kepada expertnya, Samuel Christ."
            secondaryColor
          />
        </div>

        <FeatureCard
          reverse
          title="12-Week Creator Accelerator Program"
          description={
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3">
                <div className="text-blue-400 text-xl font-bold">✓</div>
                <Text children="Sekolah konten kreator yang dijalankan selama 12 minggu secara live." />
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-blue-400 text-xl font-bold">✓</div>
                <Text children="Seefluencer University adalah Kelas Intensif yang akan memberikan tugas PR, dan membantu Kamu secara personal, sehingga konten & personal branding-mu bisa jauh lebih efektif." />
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-blue-400 text-xl font-bold">✓</div>
                <Text children="Kamu akan diberikan 12 kali sesi 1-on-1 coaching selama kelas berlangsung, 1 minggu 1 kali." />
              </div>
            </div>
          }
          src="/images/cap-cap.png"
          buttonText="learn more"
          href="/accelerator"
        />

        <FeatureCard
          title="3-Day Intensive Mini Creator Class"
          description={
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3">
                <div className="text-blue-400 text-xl font-bold">✓</div>
                <Text children="Kelas pendek cara jadi content creator yang dijalankan selama 3 hari secara live." />
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-blue-400 text-xl font-bold">✓</div>
                <Text children="3-Day Intensive Mini Creator Class adalah Kelas Intensif yang akan memberikan tugas PR, modul, dan membantu Kamu paham konsep content creation." />
              </div>
            </div>
          }
          src="/images/imcc-imcc.png"
          buttonText="learn more"
          href="/miniclass"
        />

        <FeatureCard
          reverse
          title="1-On-1 Creator Coaching with Samuel Christ"
          description={
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3">
                <div className="text-blue-400 text-xl font-bold">✓</div>
                <Text children="Sesi 45 menit bersama Samuel Christ, konten kreator dengan 4.5 juta+ followers." />
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-blue-400 text-xl font-bold">✓</div>
                <Text children="Bebas bertanya pertanyaan apa saja seputar dunia konten kreator." />
              </div>
            </div>
          }
          src="/images/cap-coaching.png"
          buttonText="learn more"
          href="/coaching"
        />

        <FeatureCard
          title="KOL Management"
          description={
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3">
                <div className="text-blue-400 text-xl font-bold">✓</div>
                <Text children="Pemilihan influencer yang berkualitas yang langsung dilakukan oleh expertnya!" />
              </div>
              <div className="flex flex-row gap-3">
                <div className="text-blue-400 text-xl font-bold">✓</div>
                <Text children="Pembuatan konsep marketing campaign yang sangat-sangat efektif dan efisien." />
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
