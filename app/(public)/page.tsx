// Custom Components
import Container from "../components/ui/Container";
import YouTubeModal from "../components/ui/YouTubeModal";
import {
  FaArrowDown,
  FaPeopleArrows,
  FaUniversity,
  FaUsers,
  FaShareAlt,
  FaVideo,
  FaEye,
  FaMoneyBill,
  FaLaugh,
  FaBusinessTime,
} from "react-icons/fa";
import GoogleReview from "../components/sections/GoogleReview";
import SlidingMedia from "../components/sections/SlidingMedia";
import ProgramCard from "../components/shared/ProgramCard";
import IconBox from "../components/shared/IconBox";
import Button from "../components/ui/Button";
import CallToActionBox from "../components/shared/CTA";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Container tighter>
        <div className="flex flex-col text-center gap-5 items-center justify-center">
          <div className="flex flex-col gap-3">
            <h1>
              Platform Pembelajaran{" "}
              <span className="text-brand">Media Sosial</span> No.1 Di Indonesia
            </h1>

            <p>
              Seefluencer adalah sebuah all-in-one platform yang berfokus pada
              pengembangan creator economy di Indonesia!
            </p>
          </div>

          <div className="flex w-full flex-col md:w-fit md:flex-row gap-3">
            <a
              href="#product"
              className="flex flex-row gap-2 items-center justify-center text-center px-4 py-2 md:px-8 bg-brand text-white text-base md:text-lg rounded-full hover:shadow-md transition-all font-bold cursor-pointer capitalize w-full md:w-fit"
            >
              Lihat Program <FaArrowDown />
            </a>

            <a
              target="_blank"
              href="https://wa.wizard.id/91520e"
              className="flex flex-row gap-2 items-center justify-center text-center px-4 py-2 md:px-8 border-2 border-brand  text-brand text-base md:text-lg rounded-full hover:shadow-md transition-all font-bold cursor-pointer capitalize w-full md:w-fit"
            >
              Hubungi Kami
            </a>
          </div>

          <GoogleReview />
        </div>
      </Container>

      <Container bgColor="bg-gradient-to-b from-sky-100 to-white py-20">
        <div className="flex flex-col text-center gap-5">
          <div className="flex flex-col gap-2">
            <h2>
              Kami <span className="text-brand">Telah Diliput</span> Oleh{" "}
              Berbagai Media
            </h2>

            <p>
              Seefluencer telah mendapatkan perhatian dari berbagai media
              ternama di Indonesia.
            </p>
          </div>

          <SlidingMedia />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <YouTubeModal videoId="cyIYmzJvkrg" aspectRatio="long" />
            <YouTubeModal videoId="rncn_uKBJgA" aspectRatio="long" />
          </div>
        </div>
      </Container>

      <Container>
        <div className="flex flex-col text-center gap-5">
          <div className="flex flex-col gap-2">
            <h2>
              300+ Alumni & Brand Berhasil Bikin{" "}
              <span className="text-brand">Konten Viral</span>
            </h2>

            <p>
              Kurikulum kami sudah terbukti sukses membantu ratusan orang bikin
              konten viral.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <YouTubeModal videoId="575mWqEfjv8" />
            <YouTubeModal videoId="CqQsxR2sv2M" />
            <YouTubeModal videoId="xkzP7ngWujw" />
            <YouTubeModal videoId="nmEaH8sIbx8" />
          </div>
        </div>
      </Container>

      {/* Products */}
      <Container>
        <div id="product" className="text-center flex flex-col gap-2">
          <h2>
            Eksplor <span className="text-brand">Program Pembelajaran</span>{" "}
            Seefluencer
          </h2>

          <p>
            Temukan berbagai program eksklusif yang dirancang untuk membantumu
            bikin konten viral!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <ProgramCard
              hrefLink="/university"
              icon={FaUniversity}
              title="Seefluencer University"
              duration="Live Program · 2 Bulan"
              highlights={[
                "Seefluencer University adalah Kelas Intensif yang akan memberikan tugas PR, dan membantu kamu secara personal, sehingga pengembangan konten kamu bisa jauh lebih efektif.",
                "Perlu diingat, ini bukan Kelas Online biasa, yang mana Kamu hanya menonton video dan belajar mandiri. Semua kelas & mentoring berlangsung secara live.",
              ]}
              participants={300}
              participantsImages={[
                "/images/cap-instruktur-1.png",
                "/images/cap-instruktur-2.png",
                "/images/cap-instruktur-3.png",
              ]}
              primaryColor="bg-brand"
            />

            <ProgramCard
              hrefLink="/community"
              icon={FaPeopleArrows}
              title="Seefluencer Community"
              duration="Aplikasi Pembelajaran · 1 Tahun"
              highlights={[
                "Seefluencer Community menyediakan aplikasi pembelajaran yang bisa bantu kamu bikin konten viral",
                "Kami juga mengadakan live mingguan untuk teman-teman yang ingin bertanya",
                "Tentunya ada komunitas eksklusif juga agar kamu bisa networking dan belajar dengan yang lain",
              ]}
              participants={300}
              participantsImages={[
                "/images/sam-instructor.png",
                "/images/joy-instructor.png",
                "/images/cap-instruktur-2.png",
              ]}
              primaryColor="bg-brand"
            />
          </div>
        </div>
      </Container>

      {/* Social Media Agency */}
      <Container bgColor="bg-gradient-to-b from-sky-100 to-white py-20">
        <div className="flex flex-col gap-5 text-center items-center">
          <div>
            <h2>
              <span className="text-brand">Social Media Agency</span> by
              Seefluencer
            </h2>

            <p>10X media sosial bisnis anda bersama kami! </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            <IconBox
              icon={FaEye}
              title="Kami Ahlinya"
              description="Kami sudah melatih lebih dari 300+ murid untuk go viral, dan alumni-alumni kami sudah mengumpulkan 20 miliar views dan 10 juta followers."
            />

            <IconBox
              icon={FaMoneyBill}
              title="Hemat Biaya"
              description="Anda tidak perlu menghabiskan waktu, tenaga, dan uang merekrut 4
              karyawan untuk mengoperasikan media sosial anda. Kami siap bantu!"
            />

            <IconBox
              icon={FaBusinessTime}
              title="Fokus"
              description="Anda cukup fokus terhadap pengembangan bisnis anda. Kami handle semua media sosial anda!"
            />
          </div>

          <SlidingMedia />

          <Button buttonText="Cek Jasa" hrefLink="/agency" regular />
        </div>
      </Container>

      {/* CTA */}
      <Container>
        <CallToActionBox />
      </Container>
    </div>
  );
}
