// Custom Components
import Hero from "../components/public/Hero";
import Feature from "../components/public/Feature";
import Title from "../components/public/Title";

// Icons & Images
import { BiUser } from "react-icons/bi";

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
        <Title title="Our Products & Services 💼" center underline />

        <Feature
          title="Seefluencer University 👩‍🏫"
          description="Sekolah konten kreator yang dijalankan selama 12 minggu secara live."
          src="/images/cap-cap.png"
          reverse
          href="/university"
          buttonText="lihat selengkapnya"
          notExternal
        />

        <Feature
          title="1-On-1 Creator Coaching with Samuel Christ 💁‍♂️"
          description="Sekolah konten kreator yang dijalankan selama 12 minggu secara live."
          src="/images/cap-coaching.png"
          href="/university"
          buttonText="lihat selengkapnya"
          notExternal
        />

        <Feature
          title="KOL Management 🤳🏽"
          description="Layanan kami sangat mengutamakan kualitas untuk memberikan hasil terbaik kepada para klien kami."
          src="/images/cap-rapot.png"
          href="/kol"
          buttonText="lihat selengkapnya"
          reverse
          notExternal
        />
      </div>

      {/* <div className="flex flex-col gap-10">
        <Title
          title="Apa Kata Mereka? 💬"
          description="Temukan dan terhubung dengan brand-brand terbaik melalui Seefluencer. Platform kami memberikan akses mudah ke jaringan luas brand-brand ternama."
          center
          underline
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center text-center gap-3">
            <div className="p-4 rounded-full bg-blue-400 shadow-lg">
              <BiUser className="text-white" size={40} />
            </div>

            <h2 className="text-2xl font-bold">Niko Julius</h2>

            <div className="italic text-gray-500">
              {`"Temukan dan terhubung dengan brand-brand terbaik melalui
              Seefluencer. Platform kami memberikan akses mudah ke jaringan luas
              brand-brand ternama."`}
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-3">
            <div className="p-4 rounded-full bg-blue-400 shadow-lg">
              <BiUser className="text-white" size={40} />
            </div>

            <h2 className="text-2xl font-bold">LeBron James</h2>

            <div className="italic text-gray-500">
              {`"Temukan dan terhubung dengan brand-brand terbaik melalui
              Seefluencer. Platform kami memberikan akses mudah ke jaringan luas
              brand-brand ternama."`}
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-3">
            <div className="p-4 rounded-full bg-blue-400 shadow-lg">
              <BiUser className="text-white" size={40} />
            </div>

            <h2 className="text-2xl font-bold">Vanessa Nathalie</h2>

            <div className="italic text-gray-500">
              {`"Temukan dan terhubung dengan brand-brand terbaik melalui
              Seefluencer. Platform kami memberikan akses mudah ke jaringan luas
              brand-brand ternama. Platform kami memberikan akses mudah ke
              jaringan luas brand-brand ternama. Platform kami memberikan akses
              mudah ke jaringan luas brand-brand ternama."`}
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-3">
            <div className="p-4 rounded-full bg-blue-400 shadow-lg">
              <BiUser className="text-white" size={40} />
            </div>

            <h2 className="text-2xl font-bold">Samuel Christ</h2>

            <div className="italic text-gray-500">
              {`"Temukan dan terhubung dengan brand-brand terbaik melalui
              Seefluencer. Platform kami."`}
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-3">
            <div className="p-4 rounded-full bg-blue-400 shadow-lg">
              <BiUser className="text-white" size={40} />
            </div>

            <h2 className="text-2xl font-bold">Joy Lodra</h2>

            <div className="italic text-gray-500">
              {`"Temukan dan terhubung dengan brand-brand terbaik melalui
              Seefluencer."`}
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-3">
            <div className="p-4 rounded-full bg-blue-400 shadow-lg">
              <BiUser className="text-white" size={40} />
            </div>

            <h2 className="text-2xl font-bold">Damian Lillard</h2>

            <div className="italic text-gray-500">
              {`"Temukan dan terhubung dengan brand-brand terbaik melalui
              Seefluencer. Platform kami memberikan akses mudah ke jaringan luas
              brand-brand ternama. Platform kami memberikan akses mudah ke
              jaringan luas brand-brand ternama."`}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
