// Custom Components
import Hero from "../components/public/Hero";
import Feature from "../components/public/Feature";
import Title from "../components/public/Title";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-10">
        <Hero
          customTitle={
            <>
              see the difference{" "}
              <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
                influencers
              </span>{" "}
              can make with seefluencer 💙
            </>
          }
          description="Seefluencer adalah sebuah all-in-one platform yang membantu konten kreator mendapatkan penghasilan lebih."
        />

        <iframe
          allow="fullscreen;"
          src="https://www.youtube.com/embed/M5PLJeb2Oz0"
          className="aspect-video w-full"
        />
      </div>

      <div className="flex flex-col gap-5">
        <Title
          title="Our Products & Services"
          description="Temukan dan terhubung dengan brand-brand terbaik melalui Seefluencer. Platform kami memberikan akses mudah ke jaringan luas brand-brand ternama."
          center
          underline
        />

        <Feature
          title="Seefluencer University"
          description="Sekolah konten kreator yang dijalankan selama 12 minggu secara live."
          src="/images/create-sam.png"
          reverse
          href="/university"
          buttonText="lihat selengkapnya"
        />

        <Feature
          title="KOL Management"
          description="Layanan kami sangat mengutamakan kualitas untuk memberikan hasil terbaik kepada para klien kami."
          src="/images/collaborate-sam.png"
          href="/kol"
          buttonText="lihat selengkapnya"
        />
      </div>
    </div>
  );
}
