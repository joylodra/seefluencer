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
  title: "8-week Creator Accelerator Program",
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-center">
            <Image
              src="/images/logo-trans.png"
              alt="Logo Seefluencer"
              width={110}
              height={110}
            />

            <div className="italic text-sm">University</div>
          </div>
        }
        button={
          <Button
            noFull
            buttonText="daftar sekarang"
            hrefLink="https://wa.me/6285176995535?text=Halo%20kak,%20saya%20mau%20tau%20info%20tentang%20Creator%20Accelerator%20Program%20(Offline)"
            external
          />
        }
      />

      {/* Hero Section */}
      <Container>
        <Hero
          title="Dapatkan Strategi Konten Viral Yang Menjual & Tingkatkan Omzet Bisnismu Dalam 2 Bulan Dengan Creator Accelerator Program OFFLINE Kami!"
          description={
            <div className="flex flex-col gap-5 items-center">
              <div>
                GARANSI UANG KEMBALI 100% jika mencapai target yang diberikan.
              </div>

              <div className="text-base flex flex-row gap-5 py-2 px-4 rounded-lg border-[#0b64be] border w-fit bg-blue-50">
                <div className="text-right">
                  <div className="font-bold">Batch #1</div>
                  <div className="">25 SLOTS ONLY! 🟢</div>
                </div>

                <div className="border-r border-[#0b64be] border-2" />

                <div className="text-left">
                  <div className="">Next Batch Starts on</div>
                  <div className="font-bold">19 Okt 2024 🗓</div>
                </div>
              </div>

              <div className="text-lg font-bold">
                📍 Lokasi Pembelajaran: BSD, Tangerang
              </div>
            </div>
          }
          buttonHref="https://wa.me/6285176995535?text=Halo%20kak,%20saya%20mau%20tau%20info%20tentang%20Creator%20Accelerator%20Program%20(Offline)"
          buttonText="daftar sekarang"
          additionalNotes="Bootcamp selanjutnya akan dimulai di bulan Januari 2025"
          external
        />
      </Container>

      {/* <Container bgColor="bg-gradient-to-r from-neutral-200 via-neutral-50 to-neutral-100 text-center">
        <Text text="We are Officially Supported by" title bold />

        <Image
          className="flex w-full"
          src="/images/partners.png"
          alt="Brand Yang Sudah Pernah Bekerja Sama"
          width={800}
          height={800}
        />
      </Container> */}

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-5">
          <div className="col-span-1 order-last md:order-first">
            <SideBox
              content={
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row gap-3">
                    <div className="text-[#0b64be] text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Bootcamp konten kreator yang dijalankan selama 8 minggu secara live."
                    />
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="text-[#0b64be] text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="5 minggu pertama OFFLINE hari Sabtu jam 9:00 - 16:00 WIB di BSD, Tangerang dan 3 minggu terakhir ONLINE"
                    />
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="text-[#0b64be] text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Dibimbing hingga bisa menghasilkan minimal 25 konten yang diupload."
                    />
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="text-[#0b64be] text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Jaminan UANG KEMBALI 100% jika mencapai target."
                    />
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="text-[#0b64be] text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Belajar semua yang kamu butuhkan untuk menjadi konten kreator dari A sampai Z."
                    />
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="text-[#0b64be] text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Bangun karir baru atau kembangkan bisnismu melalui content creation."
                    />
                  </div>
                </div>
              }
              ctaButtonHref="https://wa.me/6285176995535?text=Halo%20kak,%20saya%20mau%20tau%20info%20tentang%20Creator%20Accelerator%20Program%20(Offline)"
              ctaButtonText="daftar sekarang"
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
              text="Di program ini, kamu akan belajar semua yang kamu butuhkan untuk menjadi konten kreator dari A sampai Z. Kamu juga akan menulis minimal 25 script dan menghasilkan lebih dari 25 video yang akan diupload di semua sosial mediamu."
            />
            <Text
              paragraph
              text="Kami sangat yakin program yang kami ciptakan ini, juga bisa mengubah hidupmu selamanya. Slot sangat terbatas jadi tunggu apa lagi daftarkan dirimu dan ikuti proses seleksinya sekarang!"
            />

            <div className="flex flex-wrap gap-8">
              <IconCardReverse
                iconColor="text-[#0b64be]"
                icon={<BsClock />}
                title="Oktober 2024"
                description="Tanggal Mulai"
              />

              <IconCardReverse
                iconColor="text-[#0b64be]"
                icon={<BsCalendar />}
                title="2 Bulan"
                description="Durasi"
              />

              <IconCardReverse
                iconColor="text-[#0b64be]"
                icon={<BsPersonBadge />}
                title="50 Murid"
                description="Slot Kelas"
              />

              <IconCardReverse
                iconColor="text-[#0b64be]"
                icon={<BsLaptop />}
                title="Offline di BSD, Tangerang"
                description="Format"
              />

              <IconCardReverse
                iconColor="text-[#0b64be]"
                icon={<BsGraphUp />}
                title="Beginner"
                description="Skill Level"
              />
            </div>

            <FeatureCard
              reverse
              src="/images/seratus.png"
              title="Get Your Money Back 100%"
              description="Kami yakin bahwa siapa pun bisa sukses dengan berkomitmen pada program ini! Samuel Christ berhasil mendapatkan 100 ribu followers di TIkTok dalam waktu 1 bulan, dan kami memberikan hadiah uang kembali 100% kepada siapapun yang bisa mencapai 100 ribu followers selama 2 bulan ini."
            />
            <FeatureCard
              reverse
              src="/images/dualima.png"
              title="Slot Terbatas"
              description="Sayangnya, program ini tidak untuk semua orang. Slot kami sangat terbatas hanya untuk 25 ORANG saja. Untuk itu, setiap kamu yang mau bergabung didalam program ini, akan melewati proses seleksi. Kami memilih orang-orang yang punya tekad yang kuat, pekerja keras, dan tidak gampang menyerah."
            />
            <FeatureCard
              reverse
              src="/images/sertifikasi-bnsp.png"
              title="Seefluencer & BNSP Certification"
              description="Seefluencer University akan memberikan setifikat kelulusan untuk setiap murid agar bisa lebih mudah untuk diterima oleh perusahaan. Murid juga ada opsi untuk mengambil ujian negara dan mendapatkan sertifikasi BNSP profesi Konten Kreator yang sudah diakui oleh negara Indonesia."
            />
          </div>
        </div>
      </Container>

      <Container>
        <div>
          <Text text="Before & After Alumni Seefluencer 📈" title bold />
          <Text
            text="Perkembangan alumni-alumni Seefluencer setelah lulus dari Creator Accelerator Program."
            paragraph
            secondaryColor
          />
        </div>

        <Image
          src="/images/change-edwin.png"
          alt="Testimoni"
          width={500}
          height={500}
          className="rounded-lg w-full h-full object-cover"
        />

        <Image
          src="/images/change-merry.png"
          alt="Testimoni"
          width={500}
          height={500}
          className="rounded-lg w-full h-full object-cover"
        />

        <Image
          src="/images/change-josessca.png"
          alt="Testimoni"
          width={500}
          height={500}
          className="rounded-lg w-full h-full object-cover"
        />

        <Image
          src="/images/change-jecelline.png"
          alt="Testimoni"
          width={500}
          height={500}
          className="rounded-lg w-full h-full object-cover"
        />

        <Image
          src="/images/change-bangbili.png"
          alt="Testimoni"
          width={500}
          height={500}
          className="rounded-lg w-full h-full object-cover"
        />

        <Image
          src="/images/change-vanat.png"
          alt="Testimoni"
          width={500}
          height={500}
          className="rounded-lg w-full h-full object-cover"
        />

        <Image
          src="/images/change-raifah.png"
          alt="Testimoni"
          width={500}
          height={500}
          className="rounded-lg w-full h-full object-cover"
        />
      </Container>

      <Container>
        <div className="col-span-1 flex flex-col gap-2">
          <Text text="Apa kata mereka..." title bold />
          <Text
            text="Testimoni alumni Seefluencer yang sudah sukses menjadi content creator berpenghasilan dari batch-batch sebelumnya."
            paragraph
            secondaryColor
          />
        </div>

        <iframe
          allow="fullscreen;"
          src="https://www.youtube.com/embed/89bpqaNF_BY"
          className="aspect-video w-full rounded-lg"
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
          title="Memperkenalkan, 8-week Creator Accelerator Program yang dirancang oleh Seefluencer University"
          description="Kelas intensif buat Kamu yang mau mendapatkan bimbingan selama 2 bulan & jadi content creator berpenghasilan."
          src="/images/cap-cap.png"
          buttonText="daftar sekarang"
          href="https://wa.me/6285176995535?text=Halo%20kak,%20saya%20mau%20tau%20info%20tentang%20Creator%20Accelerator%20Program%20(Offline)"
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
          src="/images/materi-kurikulum.png"
          title="Materi Eksklusif"
          description="Dengan pengalaman 7+ tahun Samuel Christ, materi & kurikulum kami akan memudahkan Kamu untuk belajar bagaimana membuat konten yang lebih efektif & persuasif."
        />
        <FeatureCard
          reverse
          src="/images/one-on-one.png"
          title="Live Mentoring"
          description="Kami sangat mengerti, setiap orang punya pemahaman dan tantangan yang berbeda-beda. Maka dari itu, kami akan bantu mentoring kamu agar tidak salah jalan."
        />
        <FeatureCard
          src="/images/report-card.png"
          title="Rapor & Penugasan"
          description="Perlu diingat, ini bukan Kelas Online biasa, yang mana Kamu hanya menonton video dan belajar mandiri. Semua kelas & mentoring berlangsung secara live. Agar perkembanganmu bisa lebih efektif, Kami akan memantau secara intensif."
        />
      </Container>

      {/*Instructors */}
      <Container>
        <Text text={"Meet Your Instructors 🧑‍🏫"} title bold />

        <FeatureCard
          reverse
          src="/images/sam-instructor.png"
          title="Samuel Christ"
          description={
            <ul className="list-disc flex flex-col gap-3">
              <li>
                Sudah memiliki pengalaman{" "}
                <span className="font-bold">7 tahun</span> sebagai konten
                kreator, dan pernah Trending #1 di YouTube.
              </li>
              <li>
                Memiliki total{" "}
                <span className="font-bold">6.5+ juta followers</span> di{" "}
                YouTube, Instagram, dan TikTok.
              </li>
              <li>
                Konten mencapai <span className="font-bold">150M+ views</span>{" "}
                per bulannya.
              </li>
              <li>
                Pemenang{" "}
                <span className="font-bold">
                  TikTok Award The Most Favorite Education Creator 2022
                </span>{" "}
                1st Half.
              </li>
              <li>Co-founder dari Seefluencer</li>
            </ul>
          }
        />

        <FeatureCard
          src="/images/joy-instructor.png"
          title="Joy Lodra"
          description={
            <ul className="list-disc flex flex-col gap-3">
              <li>
                <span className="font-bold">Ex-Microsoft</span>, pernah kerja
                sebagai professional dalam bidang IT di Microsoft Amerika
                Serikat.
              </li>
              <li>Co-founder dari Seefluencer</li>
              <li>
                <span className="font-bold">Manager Samuel Christ</span>,{" "}
                membantu dalam strategi pengembangan media sosial Samuel Christ
                dan kerja sama dengan brand.
              </li>
            </ul>
          }
        />

        {/* <FeatureCard
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
        /> */}
      </Container>

      {/* Curriculum */}
      <Container>
        <Text
          text={"Apa Saja Yang Akan Kamu Pelajari Selama 56 Hari Ini?"}
          title
          bold
        />

        <div className="flex flex-wrap gap-5">
          <div className="flex flex-row gap-2 items-center">
            <BsCalendar className="text-[#0b64be] text-xl" />
            <Text text="2 bulan" paragraph />
          </div>

          <div className="flex flex-row gap-2 items-center">
            <BsLaptop className="text-[#0b64be] text-xl" />
            <Text text="1-2 Live Session Per Minggu" paragraph />
          </div>

          <div className="flex flex-row gap-2 items-center">
            <BsStopwatch className="text-[#0b64be] text-xl" />
            <Text text="Komitmen 6-8 Jam Per Minggu" paragraph />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-3">
          <div className="flex flex-col gap-5 md:col-span-3">
            <Accordion
              number="01"
              question="Find Your Personal Branding 👩🏻‍🔧"
              answer="Bagaimana memaksimalkan dan membangun personal branding yang unik, spesifik dan dilirik oleh brand/potensial klien."
            />
            <Accordion
              number="02"
              question="How to Write a Killer Script 📝"
              answer="Strategi membuat script, membuat konten viral, dan membongkar teknik looping video yang dipakai oleh Samuel Christ."
            />
            <Accordion
              number="03"
              question="How to Present Yourself to the World 🌏"
              answer="Maksimalkan semua potensi kamu di depan kamera. Kamu akan belajar bagaimana caranya ngomong di depan kamera, basic lighting, dll."
            />
            <Accordion
              number="04"
              question="CapCut Mobile & PC Fundementals 📲"
              answer="Praktik dan tutorial editing untuk memaksimalkan konten kamu menggunakan CapCut beserta studi kasusnya."
            />
            <Accordion
              number="05"
              question="How to Scale Up Your Content Creation 📈"
              answer="FYP itu tidak hoki dan bisa diprediksi. Cari winning content dan dapatkan jutaan views."
            />
            <Accordion
              number="06"
              question="The Long Game 🏄"
              answer="Kamu akan diajarkan bagaimana caranya jadi content creator yang bisa bertahan di industri yang kompetitif ini."
            />
          </div>

          <div className="col-span-1">
            <SideBox
              content={
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row gap-3">
                    <div className="text-[#0b64be] text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Bootcamp konten kreator yang dijalankan selama 8 minggu secara live."
                    />
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="text-[#0b64be] text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="5 minggu pertama OFFLINE hari Sabtu jam 9:00 - 16:00 WIB di BSD, Tangerang dan 3 minggu terakhir ONLINE"
                    />
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="text-[#0b64be] text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Dibimbing hingga bisa menghasilkan minimal 25 konten yang diupload."
                    />
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="text-[#0b64be] text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Jaminan UANG KEMBALI 100% jika mencapai target."
                    />
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="text-[#0b64be] text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Belajar semua yang kamu butuhkan untuk menjadi konten kreator dari A sampai Z."
                    />
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="text-[#0b64be] text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Bangun karir baru atau kembangkan bisnismu melalui content creation."
                    />
                  </div>
                </div>
              }
              ctaButtonHref="https://wa.me/6285176995535?text=Halo%20kak,%20saya%20mau%20tau%20info%20tentang%20Creator%20Accelerator%20Program%20(Offline)"
              ctaButtonText="daftar sekarang!"
            />
          </div>
        </div>
      </Container>

      {/* Pricing */}
      <Container
        id="pricing"
        bgColor="bg-gradient-to-r from-[#0b64be] to-[#117de9] text-center"
      >
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="text-white">
            <Text text="Berapa Investasi Kursus Ini?" title bold />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <CtaBox
            priceBefore="Rp14.999.000"
            priceAfter="Rp7.999.000"
            ctaButtonText="daftar sekarang"
            ctaButtonHref="https://wa.me/6285176995535?text=Halo%20kak,%20saya%20mau%20tau%20info%20tentang%20Creator%20Accelerator%20Program%20(Offline)"
            additionalNotes="*Harga bisa naik sewaktu-waktu."
            benefits={
              <>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row gap-3">
                    <div className="text-[#0b64be] text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="5 minggu pertama OFFLINE hari Sabtu jam 9:00 - 16:00 WIB di BSD, Tangerang dan 3 minggu terakhir ONLINE"
                    />
                  </div>

                  <div className="flex flex-row gap-3">
                    <div className="text-[#0b64be] text-xl font-bold">✓</div>
                    <Text
                      paragraph
                      text="Seefluencer University adalah Bootcamp Intensif yang akan memberikan tugas PR, dan membantu Kamu secara personal, sehingga pengembangan konten & personal branding-mu bisa jauh lebih efektif."
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
          src="/images/student-card.png"
          buttonText="daftar sekarang"
          href="https://wa.me/6285176995535?text=Halo%20kak,%20saya%20mau%20tau%20info%20tentang%20Creator%20Accelerator%20Program%20(Offline)"
          title="Semua Murid Seefluencer Akan Mendapatkan Fine Gold 24k Student ID dan Powerbank"
          description="Kamu akan dikirimkan langsung Creator Kit yang berisikan Fine Gold 24K Student ID dan Powerbank. Ini khusus berlaku untuk 25 orang yang lolos ke dalam Creator Accelerator Program ini."
        />
      </Container>

      <Container bgColor="bg-neutral-200">
        <div className="text-center">
          <Text text={"FAQ"} title bold primaryColor />
        </div>

        <div className="flex flex-col gap-1 md:col-span-3">
          <FaqSection />
        </div>
      </Container>
    </div>
  );
};

export default CreatorAcceleratorProgram;
