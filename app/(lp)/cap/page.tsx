// React & Next Components
import Image from "next/image";

// Custom Components
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Container from "@/app/components/ui/Container";
import Text from "@/app/components/ui/Text";
import Button from "@/app/components/ui/Button";
import IconCardReverse from "@/app/components/IconCardReverse";
import IconCard from "@/app/components/IconCard";
import Accordion from "@/app/components/Accordion";
import CtaBox from "@/app/components/CtaBox";
import SideBox from "@/app/components/SideBox";
import FeatureCard from "@/app/components/FeatureCard";
import FaqSection from "@/app/components/FaqSection";

// Icons & Images
import {
  BsPersonBadge,
  BsClock,
  BsCalendar,
  BsLaptop,
  BsGraphUp,
  BsStopwatch,
} from "react-icons/bs";
import { ImSad } from "react-icons/im";

export const metadata = {
  title: "12-Week Creator Accelerator Program",
  keywords: ["kelas konten kreator", "kelas intensif", "bootcamp", "community"],
  description: "Indonesia’s #1 Live Online Learning For Creators 💙",
};

const CreatorAcceleratorProgram = () => {
  return (
    <div className="flex flex-col">
      {/* Navigation Bar */}
      <Navbar
        landingNav
        logo={
          <div className="flex flex-col">
            <div className="font-bold">
              <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
                see
              </span>
              fluencer
            </div>

            <div className="italic text-sm">University</div>
          </div>
        }
        button={
          <Button
            noFull
            buttonText="apply now"
            hrefLink="https://forms.gle/SeZZTdw45YnBUbcg8"
            external
          />
        }
      />

      {/* Hero Section */}
      <Container>
        <Hero
          title="Dapatkan 10.000 FOLLOWERS Pertamamu & Hasilkan CUAN Dalam 3 Bulan Dengan Creator Accelerator Program Kami!"
          description={
            <div className="flex flex-col gap-5 items-center">
              <div>
                Garansi bimbingan 1-on-1 SELAMANYA hingga mencapai 10K
                followers. Jaminan UANG KEMBALI 100% jika mencapai target.
              </div>

              <div className="text-base flex flex-row gap-5 py-2 px-4 rounded-lg border-blue-400 border w-fit bg-blue-50">
                <div className="text-right">
                  <div className="font-bold">Batch #1</div>
                  <div className="">FULL SLOT 🛑</div>
                </div>

                <div className="border-r border-blue-400 border-2" />

                <div className="text-left">
                  <div className="">Next Batch Starts on</div>
                  <div className="font-bold">Jan 2024 🗓</div>
                </div>
              </div>
            </div>
          }
          buttonHref="https://forms.gle/SeZZTdw45YnBUbcg8"
          buttonText="apply now"
          additionalNotes="Program selanjutnya akan dimulai di bulan Januari 2024"
          external
        />
      </Container>

      <Container bgColor="bg-gradient-to-r from-neutral-200 via-neutral-50 to-neutral-100 text-center">
        <Text text="We are Officially Supported by" title bold />

        <Image
          className="flex w-full"
          src="/images/partners.png"
          alt="Brand Yang Sudah Pernah Bekerja Sama"
          width={800}
          height={800}
        />
      </Container>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-5">
          <div className="col-span-1 order-last md:order-first">
            <SideBox
              content={
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row gap-3">
                    <div className="text-blue-400 text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Sekolah konten kreator yang dijalankan selama 12 minggu secara live."
                    />
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="text-blue-400 text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Dibimbing hingga bisa menghasilkan minimal 50 konten yang diupload."
                    />
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="text-blue-400 text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="12 kali sesi 1-on-1 coaching selama kelas berlangsung, 1 minggu 1 kali."
                    />
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="text-blue-400 text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Garansi bimbingan 1-on-1 SELAMANYA hingga mencapai 10K followers."
                    />
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="text-blue-400 text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Jaminan UANG KEMBALI 100% jika mencapai target."
                    />
                  </div>
                </div>
              }
              ctaButtonHref="https://forms.gle/SeZZTdw45YnBUbcg8"
              ctaButtonText="apply now"
            />
          </div>

          <div className="md:col-span-3 flex flex-col gap-8">
            <iframe
              allow="fullscreen;"
              src="https://www.youtube.com/embed/xWj31cFdzt0"
              className="aspect-video w-full rounded-lg"
            />

            <Text
              title
              bold
              text="Program yang Didesain Untuk Mengubah Hidupmu"
            />

            <Text
              paragraph
              text="Selamat datang di era kreator ekonomi, dimana konten kreator memiliki dampak yang dampak besar dalam perekonomian dunia. Untuk pertama kalinya, kamu bisa menghidupi hidup impianmu tanpa harus terikat oleh waktu dan lokasi."
            />
            <Text
              paragraph
              text="Inilah kenapa kamu harus join Creator Accelerator Program by Seefluencer University. Program ini bukan seperti kelas online pada umumnya di Indonesia. Di Creator Accelerator Program ini kamu akan belajar secara live dan akan dibimbing secara pribadi 1-on-1 sampai mencapai 10.000 ribu followers dalam waktu 3 bulan."
            />
            <Text
              paragraph
              text="Di program ini, kamu akan belajar semua yang kamu butuhkan untuk menjadi konten kreator dari A sampai Z. Kamu juga akan menulis minimal 60 script dan menghasilkan lebih dari 50 video yang akan diupload di semua sosial mediamu."
            />
            <Text
              paragraph
              text="Kami sangat yakin program yang kami ciptakan ini, juga bisa mengubah hidupmu selamanya. Slot sangat terbatas jadi tunggu apa lagi daftarkan dirimu dan ikuti proses seleksinya sekarang!"
            />

            <div className="flex flex-wrap gap-8">
              <IconCardReverse
                iconColor="text-blue-400"
                icon={<BsClock />}
                title="Januari 2024"
                description="Tanggal Mulai"
              />

              <IconCardReverse
                iconColor="text-blue-400"
                icon={<BsCalendar />}
                title="3 Bulan"
                description="Durasi"
              />

              <IconCardReverse
                iconColor="text-blue-400"
                icon={<BsPersonBadge />}
                title="50 Murid"
                description="Slot Kelas"
              />

              <IconCardReverse
                iconColor="text-blue-400"
                icon={<BsLaptop />}
                title="Live Online Class"
                description="Format"
              />

              <IconCardReverse
                iconColor="text-blue-400"
                icon={<BsGraphUp />}
                title="Beginner"
                description="Skill Level"
              />
            </div>

            <FeatureCard
              reverse
              src="/images/cap-bimbingan.png"
              title="Bimbingan Seumur Hidup"
              description="Kami akan kasih garansi bimbingan seumur hidup sampai kamu capai 10.000 followers pertamamu dengan catatan kamu harus hadir di setiap pertemuan, mengerjakan semua PR, dan mentaati peraturan-peraturan yang sudah kami tetapkan."
            />
            <FeatureCard
              reverse
              src="/images/cap-100k.png"
              title="Get Your Money Back 100%"
              description="Kami yakin bahwa siapa pun bisa sukses dengan berkomitmen pada program ini! Samuel Christ berhasil mendapatkan 100 ribu followers di TIkTok dalam waktu 1 bulan, dan kami memberikan hadiah uang kembali 100% kepada siapapun yang bisa mencapai 100 ribu followers selama 3 bulan ini."
            />
            <FeatureCard
              reverse
              src="/images/cap-50.png"
              title="Slot Terbatas"
              description="Sayangnya, program ini tidak untuk semua orang. Slot kami sangat terbatas hanya untuk 50 ORANG saja. Untuk itu, setiap kamu yang mau bergabung didalam program ini, akan melewati proses seleksi. Kami memilih orang-orang yang punya tekad yang kuat, pekerja keras, dan tidak gampang menyerah."
            />
            <FeatureCard
              reverse
              src="/images/cap-sert.png"
              title="Seefluencer Certification"
              description="Seefluencer University akan memberikan setifikat kelulusan untuk setiap murid agar bisa lebih mudah untuk diterima oleh perusahaan."
            />
          </div>
        </div>
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
          title="Memperkenalkan, 12-Week Creator Accelerator Program yang dirancang oleh Seefluencer University"
          description="Kelas intensif buat Kamu yang mau mendapatkan bimbingan selama 3 bulan & jadi content creator berpenghasilan."
          src="/images/cap-cap.png"
          buttonText="apply now"
          href="https://forms.gle/SeZZTdw45YnBUbcg8"
          external
        />
      </Container>

      <Container>
        <div className="flex flex-col gap-2">
          <Text text="Begini Solusinya..." title bold />
          <Text
            text="Kami sudah mempersiapkan semua sistem dan materi pembelajaran yang dibutuhkan seorang konten kreator."
            paragraph
            secondaryColor
          />
        </div>

        <FeatureCard
          src="/images/cap-kurikulum.png"
          title="Materi Eksklusif"
          description="Dengan pengalaman 6+ tahun Samuel Christ, materi & kurikulum kami akan memudahkan Kamu untuk belajar bagaimana membuat konten yang lebih efektif & persuasif."
        />
        <FeatureCard
          reverse
          src="/images/cap-bimbingan-2.png"
          title="1-On-1 Live Coaching"
          description="Kami sangat mengerti, setiap orang punya pemahaman dan tantangan yang berbeda-beda. Maka dari itu, Kamu bisa mendapatkan 12 kali konsultasi langsung bersama Samuel Christ & expert lainnya."
        />
        <FeatureCard
          src="/images/cap-report.png"
          title="Rapot & Penugasan"
          description="Perlu diingat, ini bukan Kelas Online biasa, yang mana Kamu hanya menonton video dan belajar mandiri. Semua kelas & coaching berlangsung secara live. Agar perkembanganmu bisa lebih efektif, Kami akan memantau secara intensif."
        />
      </Container>

      {/*Instructors */}
      <Container bgColor="bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-500 text-white text-white">
        <Text text={"Meet Your Instructors"} title bold />

        <FeatureCard
          reverse
          src="/images/cap-instruktur-1.png"
          title="Samuel Christ"
          description={
            <ul className="list-disc flex flex-col gap-3">
              <li>
                <Text
                  text="Sudah memiliki pengalaman 6 tahun sebagai konten kreator, dan pernah Trending #1 di YouTube."
                  paragraph
                />
              </li>
              <li>
                <Text
                  text="Memiliki total 5+ juta followers di YouTube, Instagram, dan TikTok."
                  paragraph
                />
              </li>
              <li>
                <Text
                  text="Konten mencapai 150M+ views per bulannya."
                  paragraph
                />
              </li>
              <li>
                <Text
                  text="Pemenang TikTok Award The Most Favorite Education Creator 2022 1st Half."
                  paragraph
                />
              </li>
              <li>
                <Text
                  text="Co-founder dari Seefluencer, Indonesia’s #1 Live Online Learning For Creators."
                  paragraph
                />
              </li>
              <li>
                <Text
                  text="Samuel Christ akan mengajar sebagai instruktur utama dan mentor di Seefluencer University."
                  paragraph
                />
              </li>
            </ul>
          }
        />

        <FeatureCard
          src="/images/cap-instruktur-3.png"
          title="Joy Lodra"
          description={
            <ul className="list-disc flex flex-col gap-3">
              <li>
                <Text
                  text="Ex-Microsoft, pernah kerja sebagai professional dalam bidang IT di Microsoft Amerika Serikat."
                  paragraph
                />
              </li>
              <li>
                <Text
                  text="Co-founder dari Seefluencer, Indonesia’s #1 Live Online Learning For Creators."
                  paragraph
                />
              </li>
              <li>
                <Text
                  text="Manager Samuel Christ, membantu dalam strategi pengembangan media sosial Samuel Christ dan kerja sama dengan brand."
                  paragraph
                />
              </li>
              <li>
                <Text
                  text="Joy Lodra akan menjadi instruktur sekaligus mentor di dalam Seefluencer University."
                  paragraph
                />
              </li>
            </ul>
          }
        />

        <FeatureCard
          reverse
          src="/images/cap-instruktur-2.png"
          title="Anjas Maradita"
          description={
            <ul className="list-disc flex flex-col gap-3">
              <li>
                <Text
                  text="Founder dari Daunnet Films, sebuah production house yang sudah bekerja sama dengan brand-brand besar."
                  paragraph
                />
              </li>
              <li>
                <Text
                  text="Founder dari Daunnet Media, media pembelajaran video editing, yang memiliki hampir 700K subscribers di YouTube."
                  paragraph
                />
              </li>
              <li>
                <Text
                  text="Co-Founder dari Neuron, media edukasi seputar fakta, berita, dan apapun yang berkaitan dengan dunia kesehatan, yang memiliki 1M+ subscribers di YouTube."
                  paragraph
                />
              </li>
              <li>
                <Text
                  text="Anjas Maradita akan mengajar sebagai instruktur CapCut di Seefluencer University."
                  paragraph
                />
              </li>
            </ul>
          }
        />
      </Container>

      {/* Curriculum */}
      <Container>
        <Text
          text={"Apa Saja Yang Akan Kamu Pelajari Selama 84 Hari Ini?"}
          title
          bold
        />

        <div className="flex flex-wrap gap-5">
          <div className="flex flex-row gap-2 items-center">
            <BsCalendar className="text-gray-400 text-xl" />
            <Text text="3 Bulan" paragraph />
          </div>

          <div className="flex flex-row gap-2 items-center">
            <BsLaptop className="text-gray-400 text-xl" />
            <Text text="1-2 Live Session Per Minggu" paragraph />
          </div>

          <div className="flex flex-row gap-2 items-center">
            <BsStopwatch className="text-gray-400 text-xl" />
            <Text text="Komitmen 6-8 Jam Per Minggu" paragraph />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-3">
          <div className="flex flex-col gap-5 md:col-span-3">
            <Accordion
              number="01"
              question="Personal Branding"
              answer="Bagaimana memaksimalkan dan membangun personal branding yang unik, spesifik dan dilirik oleh brand/potensial klien."
            />
            <Accordion
              number="02"
              question="How To Write A Killer Script"
              answer="Strategi membuat script, membuat konten viral, dan membongkar teknik looping video yang dipakai oleh Samuel Christ."
            />
            <Accordion
              number="03"
              question="How to Properly Present Yourself In Front Of Camera"
              answer="Kamu belum PD berbicara di depan kamera? Kita akan berikan panduan dan cara memaksimalkannya."
            />
            <Accordion
              number="04"
              question="The Power Of CapCut"
              answer="Praktik dan tutorial editing untuk memaksimalkan konten Kamu menggunakan CapCut beserta studi kasusnya."
            />
            <Accordion
              number="05"
              question="How to Manage & Scale Your Content Creation"
              answer="Kamu punya aktivitas harian yang padat? Temukan cara yang lebih cepat & tepat dalam membuat konten meskipun Kamu punya sedikit waktu."
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
                      text="Dibimbing hingga bisa menghasilkan minimal 50 konten yang diupload."
                    />
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="text-blue-400 text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="12 kali sesi 1-on-1 coaching selama kelas berlangsung, 1 minggu 1 kali."
                    />
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="text-blue-400 text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Belajar semua yang kamu butuhkan untuk menjadi konten kreator dari A sampai Z."
                    />
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="text-blue-400 text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Bangun karir baru atau kembangkan bisnismu melalui content creation."
                    />
                  </div>
                </div>
              }
              ctaButtonHref="https://forms.gle/SeZZTdw45YnBUbcg8"
              ctaButtonText="apply now"
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
            priceBefore="Rp10.500.000"
            priceAfter="Rp4.999.000"
            ctaButtonText="apply now"
            ctaButtonHref="https://forms.gle/SeZZTdw45YnBUbcg8"
            additionalNotes="*Harga bisa naik sewaktu-waktu."
            benefits={
              <>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row gap-3">
                    <div className="text-blue-400 text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Kamu hanya perlu menyimpan Rp56.000/hari selama 3 bulan untuk bisa mengikuti kelas intensif ini."
                    />
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="text-blue-400 text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Perlu diingat, ini bukan Kelas Online biasa, yang mana Kamu hanya menonton video dan belajar mandiri. Semua kelas & coaching berlangsung secara live."
                    />
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="text-blue-400 text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Seefluencer University adalah Kelas Intensif yang akan memberikan tugas PR, dan membantu Kamu secara personal, sehingga konten & personal branding-mu bisa jauh lebih efektif."
                    />
                  </div>
                </div>
              </>
            }
          />
        </div>
      </Container>

      <Container>
        <FeatureCard
          external
          src="/images/cap-merch-2.png"
          buttonText="apply now"
          href="https://forms.gle/SeZZTdw45YnBUbcg8"
          title="Dapatkan Juga Merchandise Eksklusif untuk 50 Orang Pertama."
          description="Kamu akan dikirimkan langsung merchandise baju, lanyard, kartu, & topi. Ini khusus berlaku untuk 50 orang yang lolos ke dalam Creator Accelerator Program ini."
        />
      </Container>

      <Container bgColor="bg-neutral-200">
        <div className="text-center">
          <Text text={"FAQ"} title bold />
        </div>

        <div className="flex flex-col gap-1 md:col-span-3">
          <FaqSection />
        </div>
      </Container>
    </div>
  );
};

export default CreatorAcceleratorProgram;
