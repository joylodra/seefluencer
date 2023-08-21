// React & Next Components
import Link from "next/link";

// Custom Components
import Hero from "../../components/public/Hero";
import Cta from "../../components/public/Cta";
import Title from "@/app/components/public/Title";
import Feature from "../../components/public/Feature";
import Accordion from "@/app/components/public/faq/Accordion";

// Icons & Images
import { BiUser } from "react-icons/bi";

export const metadata = {
  title: "for influencers",
  keywords: [
    "influencer page",
    "social media",
    "influencer marketing platform",
    "community",
  ],
  description: "see the difference influencers can make with seefluencer 💙",
};

const Influencers = () => {
  return (
    <div className="flex flex-col gap-16">
      <Hero
        customTitle={
          <>
            bantu kamu capai{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
              10.000 followers
            </span>{" "}
            dalam 3 bulan secara organik 💙
          </>
        }
        description="Seefluencer adalah pilihan terbaik bagi kamu yang ingin punya penghasilan sebagai konten kreator."
        href="https://wa.me/6282330423003"
        buttonText="daftar sekarang"
        external
      />

      {/* TITLE */}
      <div className="flex flex-col gap-10 text-center justify-center items-center">
        <Title
          title="Penghasilan Konten Kreator"
          underline
          description="Video di bawah merupakan bukti nyata tentang bagaimana cara Samuel Christ, salah satu instruktur Seefluencer, mendapatkan salah satu sumber penghasilan sebagai konten kreator."
        />

        <iframe
          allow="fullscreen;"
          src="https://www.youtube.com/embed/bfQrBQAk1Ks"
          className="aspect-video w-full"
        />
      </div>

      {/* PROGRAM OVERVIEW */}
      <div className="flex flex-col gap-10">
        <Title
          title="12-Week Launch Track Program"
          description="Temukan dan terhubung dengan brand-brand terbaik melalui Seefluencer. Platform kami memberikan akses mudah ke jaringan luas brand-brand ternama."
          center
          underline
        />

        <Feature
          title="live class"
          description="Temukan dan terhubung dengan brand-brand terbaik melalui Seefluencer. Platform kami memberikan akses mudah ke jaringan luas brand-brand ternama, sehingga kamu dapat terhubung dengan mereka dengan lebih cepat dan efektif. Dapatkan lebih banyak kesempatan kerja sama dengan bergabung bersama kami."
          src="/images/connect-sam.png"
          reverse
        />

        <Feature
          title="homework"
          description="Berkarya dan kembangkan kemampuan kamu sebagai influencer dengan platform Seefluencer. Dapatkan kesempatan untuk membuat konten-konten yang kreatif dan unik untuk brand-brand terbaik. Kami memberikan kebebasan dalam berekspresi, sehingga kamu dapat membuat konten dengan gaya yang sesuai dengan kepribadian kamu sendiri."
          src="/images/create-sam.png"
        />

        <Feature
          title="office hour"
          description="Temukan dan terhubung dengan brand-brand terbaik melalui Seefluencer. Platform kami memberikan akses mudah ke jaringan luas brand-brand ternama, sehingga kamu dapat terhubung dengan mereka dengan lebih cepat dan efektif. Dapatkan lebih banyak kesempatan kerja sama dengan bergabung bersama kami."
          src="/images/collaborate-sam.png"
          reverse
        />
      </div>

      {/* CURRICULUM */}
      <div className="flex flex-col gap-10">
        <Title
          title="Curriculum"
          description="Temukan dan terhubung dengan brand-brand terbaik melalui Seefluencer. Platform kami memberikan akses mudah ke jaringan luas brand-brand ternama."
          center
          underline
        />

        <div className="flex flex-col gap-3">
          <Accordion
            question="Live Class #1: Program Overview"
            answer="Temukan dan terhubung dengan brand-brand terbaik melalui Seefluencer. Platform kami memberikan akses mudah ke jaringan luas brand-brand ternama."
          />

          <Accordion
            question="Live Class #2: Program Overview"
            answer="Temukan dan terhubung dengan brand-brand terbaik melalui Seefluencer. Platform kami memberikan akses mudah ke jaringan luas brand-brand ternama."
          />

          <Accordion
            question="Live Class #3: Program Overview"
            answer="Temukan dan terhubung dengan brand-brand terbaik melalui Seefluencer. Platform kami memberikan akses mudah ke jaringan luas brand-brand ternama."
          />

          <Accordion
            question="Live Class #4: Program Overview"
            answer="Temukan dan terhubung dengan brand-brand terbaik melalui Seefluencer. Platform kami memberikan akses mudah ke jaringan luas brand-brand ternama."
          />

          <Accordion
            question="Live Class #5: Program Overview"
            answer="Temukan dan terhubung dengan brand-brand terbaik melalui Seefluencer. Platform kami memberikan akses mudah ke jaringan luas brand-brand ternama."
          />

          <Accordion
            question="Live Class #6: Program Overview"
            answer="Temukan dan terhubung dengan brand-brand terbaik melalui Seefluencer. Platform kami memberikan akses mudah ke jaringan luas brand-brand ternama."
          />
        </div>
      </div>

      {/* INSTRUCTORS */}
      <div className="flex flex-col gap-10">
        <Title
          title="Meet Your Instructors"
          description="Temukan dan terhubung dengan brand-brand terbaik melalui Seefluencer. Platform kami memberikan akses mudah ke jaringan luas brand-brand ternama."
          center
          underline
        />

        <Feature
          title="Samuel Christ"
          description="Berkarya dan kembangkan kemampuan kamu sebagai influencer dengan platform Seefluencer. Dapatkan kesempatan untuk membuat konten-konten yang kreatif dan unik untuk brand-brand terbaik. Kami memberikan kebebasan dalam berekspresi, sehingga kamu dapat membuat konten dengan gaya yang sesuai dengan kepribadian kamu sendiri."
          src="/images/create-sam.png"
          reverse
        />

        <Feature
          title="Instruktur CapCut"
          description="Berkarya dan kembangkan kemampuan kamu sebagai influencer dengan platform Seefluencer. Dapatkan kesempatan untuk membuat konten-konten yang kreatif dan unik untuk brand-brand terbaik. Kami memberikan kebebasan dalam berekspresi, sehingga kamu dapat membuat konten dengan gaya yang sesuai dengan kepribadian kamu sendiri."
          src="/images/collaborate-sam.png"
        />
      </div>

      {/* APA KATA MEREKA? */}
      <div className="flex flex-col gap-10">
        <Title
          title="Apa Kata Mereka?"
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
      </div>

      {/* PRICING */}
      <div id="pricing" className="flex flex-col gap-10">
        <Title
          title="Pricing"
          description="Temukan dan terhubung dengan brand-brand terbaik melalui Seefluencer. Platform kami memberikan akses mudah ke jaringan luas brand-brand ternama."
          center
          underline
        />

        <Feature
          title="apa yang kamu akan dapatkan?"
          description="Temukan dan terhubung dengan brand-brand terbaik melalui
          Seefluencer. Platform kami memberikan akses mudah ke jaringan luas
          brand-brand ternama. Platform kami memberikan akses mudah ke
          jaringan luas brand-brand ternama."
          src="/images/connect-sam.png"
          reverse
        />

        <div className="text-center p-5 flex justify-center items-center flex-col gap-5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 rounded-lg text-white">
          <div className="flex flex-col gap-2">
            <div className="font-bold tracking-widest text-xl">
              PROMO PRE-ORDER
            </div>
            <div className="max-w-md">
              Temukan dan terhubung dengan brand-brand terbaik melalui
              Seefluencer. Platform kami memberikan akses mudah ke jaringan luas
              brand-brand ternama.
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="line-through italic text-lg">Rp. 7.499.999</p>
            <h1 className="text-4xl text-white font-bold rounded-lg text-center animate-bounce">
              Rp. 4.999.999
            </h1>
          </div>

          <div className="flex flex-col gap-3">
            <div className="animate-pulse text-3xl font-bold">↓</div>

            <div className="flex flex-col items-center justify-center">
              <Link
                target="_blank"
                href="https://wa.me/6282330423003"
                className="text-blue-400 bg-white px-5 py-2 font-bold rounded-md hover:shadow-lg transition-all"
              >
                daftar sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Influencers;
