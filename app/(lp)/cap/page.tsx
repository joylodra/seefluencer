"use client";

// Next & React Components
import Image from "next/image";
import { useEffect } from "react";

// Custom Components
import Container from "@/app/components/ui/Container";
import IconCardReverse from "@/app/components/shared/IconCardReverse";
import Accordion from "@/app/components/ui/Accordion";
import FeatureCard from "@/app/components/shared/FeatureCard";
import FaqSection from "@/app/components/sections/FaqSection";
import Chip from "@/app/components/ui/Chip";
import GoogleReview from "@/app/components/sections/GoogleReview";
import SlidingMedia from "@/app/components/sections/SlidingMedia";
import YouTubeModal from "@/app/components/ui/YouTubeModal";
import Navbar from "@/app/components/layout/Navbar";
import Jadwal from "@/app/components/sections/Jadwal";
import SlidingMenu from "@/app/components/ui/SlidingMenu";
import MovingBanner from "@/app/components/shared/MovingBanner";

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
import Button from "@/app/components/ui/Button";
import {
  FaChalkboard,
  FaEye,
  FaGraduationCap,
  FaPencilAlt,
  FaStar,
} from "react-icons/fa";
import { RiUserFollowFill } from "react-icons/ri";
import { MdMeetingRoom } from "react-icons/md";
import { BiCertification, BiMoneyWithdraw, BiRepeat } from "react-icons/bi";

const CreatorAcceleratorProgram = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "ViewContent", {
        content_name: "Bootcamp Offline Landing Page",
        content_category: "Lead Generation",
        value: 7999000,
        currency: "IDR",
      });
    }
  }, []);

  return (
    <div className="flex flex-col">
      {/* Moving Banner */}
      <MovingBanner hrefLink="/registration" />

      {/* Navigation Bar */}
      <Navbar
        withBanner
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
          <Button hrefLink="/registration" buttonText="Apply Now" external />
        }
      />

      {/* Hero Section */}
      <Container tighter>
        <div className="flex flex-col text-center gap-5 items-center justify-center">
          <small className="text-brand uppercase font-bold">
            Seefluencer University
          </small>

          <div className="flex flex-col gap-3">
            <h1>
              Bikin Konten Yang Selalu Viral Dan Dapatkan{" "}
              <span className="text-brand">1M+ Views</span>
            </h1>

            <p>
              10X media sosial kamu hanya dalam 2 bulan belajar di Seefluencer
              University!
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <Chip text="Reward 100% Cashback" />
            <Chip text="30 Slots Only!" />
            <Chip text="Beginner-Friendly" />
            <Chip text="Live Class" />
            <Chip text="1-On-1 Mentoring" />
          </div>

          <div className="flex flex-col items-center gap-2">
            <Button
              buttonText="Apply Now"
              hrefLink="/registration"
              regular
              external
            />
            <small>Program selanjutnya akan dimulai di bulan Maret 2025</small>
          </div>

          <GoogleReview />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white shadow-lg border border-gray-200 flex flex-row gap-4 p-5 rounded-xl">
              <div className="text-brand text-4xl">
                <FaGraduationCap />
              </div>

              <div className="flex flex-col text-left">
                <h4 className="text-brand">350+</h4>
                <small>Lulus dari Seefluencer University</small>
              </div>
            </div>

            <div className="bg-white shadow-lg border border-gray-200 flex flex-row gap-4 p-5 rounded-xl">
              <div className="text-brand text-4xl">
                <FaStar />
              </div>

              <div className="flex flex-col text-left">
                <h4 className="text-brand">9.1</h4>
                <small>
                  Tingkat kepuasan murid-murid Seefluencer University
                </small>
              </div>
            </div>

            <div className="bg-white shadow-lg border border-gray-200 flex flex-row gap-4 p-5 rounded-xl">
              <div className="text-brand text-4xl">
                <RiUserFollowFill />
              </div>

              <div className="flex flex-col text-left">
                <h4 className="text-brand">20M+</h4>
                <small>Akumulasi followers alumni Seefluencer University</small>
              </div>
            </div>

            <div className="bg-white shadow-lg border border-gray-200 flex flex-row gap-4 p-5 rounded-xl">
              <div className="text-brand text-4xl">
                <FaEye />
              </div>

              <div className="flex flex-col text-left">
                <h4 className="text-brand">10B+</h4>
                <small>Akumulasi views alumni Seefluencer University</small>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-5">
          <SlidingMenu withNav />

          <div className="col-span-3 flex flex-col gap-10">
            <div id="program" className="flex flex-col gap-8 pt-5 md:pt-0">
              <div className="flex flex-col gap-5">
                <YouTubeModal videoId="h6lnvWgQKmo" aspectRatio="long" />
                <h2>
                  Program Yang Didesain Untuk{" "}
                  <span className="text-brand">Mengubah Hidupmu</span>
                </h2>
                <p>
                  Selamat datang di era attention economy, dimana konten yang
                  viral memiliki dampak yang dampak besar dalam perekonomian
                  dunia.
                </p>
                <p>
                  Inilah kenapa kamu harus join bootcamp Seefluencer University.
                  Di dalam bootcamp ini, kamu akan belajar secara live dan akan
                  dibimbing secara pribadi 1-on-1 untuk mendapatkan jutaan views
                  dalam waktu 2 bulan.
                </p>
                <p>
                  Di program ini, kamu juga akan belajar semua yang kamu
                  butuhkan untuk bikin konten yang viral dari A sampai Z. Selama
                  program, kami mendorong kamu untuk membuat 30 video yang akan
                  diupload di semua media sosialmu.
                </p>
                <p>
                  Kami sangat yakin program yang kami ciptakan ini, juga bisa
                  mengubah hidupmu selamanya. Slot sangat terbatas! Jadi, tunggu
                  apa lagi? Daftarkan dirimu sekarang!
                </p>
              </div>

              <div className="flex flex-wrap gap-8">
                <IconCardReverse
                  iconColor="text-brand"
                  icon={<BsClock />}
                  title="Maret 2025"
                  description="Tanggal Mulai"
                />

                <IconCardReverse
                  iconColor="text-brand"
                  icon={<BsCalendar />}
                  title="2 Bulan"
                  description="Durasi"
                />

                <IconCardReverse
                  iconColor="text-brand"
                  icon={<BsPersonBadge />}
                  title="30 Murid"
                  description="Slot Kelas"
                />

                <IconCardReverse
                  iconColor="text-brand"
                  icon={<BsGraphUp />}
                  title="Beginner"
                  description="Skill Level"
                />
              </div>

              <div className="grid md:grid-cols-1 gap-3">
                <div className="w-full h-fit p-3 bg-white border border-gray-200 rounded-xl flex flex-col md:flex-row gap-4">
                  <div className={`p-3 rounded-xl bg-brand w-fit h-fit`}>
                    <BiMoneyWithdraw className="w-10 h-10 text-white" />
                  </div>

                  <div>
                    <h6 className="font-bold">Reward Cashback 100%</h6>
                    <p>
                      Seefluencer akan memberikan reward cashback 100% kepada
                      siapapun yang bisa mencapai atau menambah 100 ribu
                      followers selama 2 bulan ini.
                    </p>
                  </div>
                </div>

                <div className="w-full h-fit p-3 bg-white border border-gray-200 rounded-xl flex flex-col md:flex-row gap-4">
                  <div className={`p-3 rounded-xl bg-brand w-fit h-fit`}>
                    <BiCertification className="w-10 h-10 text-white" />
                  </div>

                  <div>
                    <h6 className="font-bold">
                      Sertifikasi Seefluencer & BNSP
                    </h6>
                    <p>
                      Seefluencer University akan memberikan setifikat kelulusan
                      untuk setiap murid agar bisa lebih mudah untuk diterima
                      oleh perusahaan. Murid juga ada opsi untuk mengambil ujian
                      negara dan mendapatkan sertifikasi BNSP profesi Content
                      Creator yang sudah diakui oleh negara Indonesia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="alumni" className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h2>
                  <span className="text-brand">Alumni Sukses</span> Seefluencer
                  University
                </h2>

                <p>
                  Before & after alumni-alumni Seefluencer setelah lulus dari
                  bootcamp.
                </p>
              </div>

              <Image
                src="/images/change-edwin.png"
                alt="Testimoni"
                width={500}
                height={500}
                className="rounded-xl w-full h-full object-cover"
              />

              <Image
                src="/images/change-merry.png"
                alt="Testimoni"
                width={500}
                height={500}
                className="rounded-xl w-full h-full object-cover"
              />

              <Image
                src="/images/change-yohanes.png"
                alt="Testimoni"
                width={500}
                height={500}
                className="rounded-xl w-full h-full object-cover"
              />

              <Image
                src="/images/change-jecelline.png"
                alt="Testimoni"
                width={500}
                height={500}
                className="rounded-xl w-full h-full object-cover"
              />

              <Image
                src="/images/change-vanat.png"
                alt="Testimoni"
                width={500}
                height={500}
                className="rounded-xl w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h2>
                  Apa <span className="text-brand">Kata Mereka...</span>
                </h2>

                <p>
                  Testimoni alumni Seefluencer yang sudah sukses menjadi content
                  creator berpenghasilan dari batch-batch sebelumnya.
                </p>
              </div>

              <YouTubeModal videoId="89bpqaNF_BY" aspectRatio="long" />
            </div>

            <div id="siapa" className="flex flex-col gap-5 pt-5 md:pt-0">
              <div className="flex flex-col gap-2">
                <h2>
                  Apakah Kamu <span className="text-red-500">Merasa...</span>
                </h2>

                <p>Hal-hal yang sering dirasakan ketika mulai bikin konten.</p>
              </div>

              <div className="col-span-3">
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="border border-red-500 shadow-sm rounded-xl p-3 flex flex-row gap-3 h-fit">
                    <div className="text-red-500 text-4xl">
                      <ImSad />
                    </div>

                    <div className="flex flex-col gap-3">
                      <h6 className="font-bold ">
                        Kesusahan bikin konten viral
                      </h6>

                      <p>
                        Gak tahu gimana caranya PD ngomong depan kamera, gak
                        tahu gimana caranya ngedit video yang bagus.
                      </p>
                    </div>
                  </div>

                  <div className="border border-red-500 shadow-sm rounded-xl p-3 flex flex-row gap-3 h-fit">
                    <div className="text-red-500 text-4xl">
                      <ImSad />
                    </div>

                    <div className="flex flex-col gap-3">
                      <h6 className="font-bold ">
                        Bikin konten tapi susah viral
                      </h6>

                      <p>
                        Gak tahu gimana caranya PD ngomong depan kamera, gak
                        tahu gimana caranya ngedit video yang bagus, dan gak
                        tahu cara penulisan script yang viral
                      </p>
                    </div>
                  </div>

                  <div className="border border-red-500 shadow-sm rounded-xl p-3 flex flex-row gap-3 h-fit">
                    <div className="text-red-500 text-4xl">
                      <ImSad />
                    </div>

                    <div className="flex flex-col gap-3">
                      <h6 className="font-bold ">
                        Bikin konten tapi susah viral
                      </h6>

                      <p>
                        Gak tahu gimana caranya PD ngomong depan kamera, gak
                        tahu gimana caranya ngedit video yang bagus, dan gak
                        tahu cara penulisan script yang viral
                      </p>
                    </div>
                  </div>

                  <div className="border border-red-500 shadow-sm rounded-xl p-3 flex flex-row gap-3 h-fit">
                    <div className="text-red-500 text-4xl">
                      <ImSad />
                    </div>

                    <div className="flex flex-col gap-3">
                      <h6 className="font-bold ">
                        Bikin konten tapi susah viral
                      </h6>

                      <p>
                        Gak tahu gimana caranya PD ngomong depan kamera, gak
                        tahu gimana caranya ngedit video yang bagus, dan gak
                        tahu cara penulisan script yang viral
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h2>
                  <span className="text-brand">Orang-Orang Yang Cocok</span>{" "}
                  Masuk Program Ini
                </h2>

                <p>
                  Jika kamu adalah salah satu orang di bawah, kamu sangat cocok
                  untuk ikut pelatihan ini.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-3">
                <div className="w-full h-fit p-3 bg-white border border-gray-200 rounded-xl flex flex-col gap-4">
                  <h1>🤳🏽</h1>

                  <div>
                    <h6 className="font-bold">Full-Time Content Creator</h6>
                    <p>
                      Kamu ingin hidup dan menghasilkan uang sebagai full-time
                      content creator.
                    </p>
                  </div>
                </div>

                <div className="w-full h-fit p-3 bg-white border border-gray-200 rounded-xl flex flex-col gap-4">
                  <h1>🧑‍💻</h1>

                  <div>
                    <h6 className="font-bold">Founder & Business Owner</h6>
                    <p>
                      Kamu ingin mengembangkan personal branding kamu sebagai
                      founder atau business owner agar bisa melakukan marketing
                      gratis untuk produk kamu.
                    </p>
                  </div>
                </div>

                <div className="w-full h-fit p-3 bg-white border border-gray-200 rounded-xl flex flex-col gap-4">
                  <h1>💼</h1>

                  <div>
                    <h6 className="font-bold">Brand</h6>
                    <p>
                      Kamu ingin mengembangkan media sosial bisnis atau brand
                      kamu agar bisa meningkatkan omzet.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="metode" className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h2>
                  <span className="text-brand">Metode Belajar</span> Di
                  Seefluencer University
                </h2>

                <p>
                  Setiap minggu, kamu akan melewati 4 step ini agar pembelajaran
                  kamu bisa efektif!
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div className="w-full h-fit p-3 bg-white border border-gray-200 rounded-xl flex flex-col gap-4">
                  <div className={`p-3 rounded-xl bg-brand w-fit`}>
                    <FaChalkboard className="w-10 h-10 text-white" />
                  </div>

                  <div>
                    <h6 className="font-bold">Step 1: Live Class</h6>
                    <p>
                      Live class akan diadakan 8 kali selama program, 1 minggu 1
                      kali. Dengan pengalaman 7+ tahun para founders, materi
                      yang akan diajarkan di live class akan memudahkan kamu
                      untuk belajar cara bikin konten yang viral.
                    </p>
                  </div>
                </div>

                <div className="w-full h-fit p-3 bg-white border border-gray-200 rounded-xl flex flex-col gap-4">
                  <div className={`p-3 rounded-xl bg-brand w-fit`}>
                    <FaPencilAlt className="w-10 h-10 text-white" />
                  </div>

                  <div>
                    <h6 className="font-bold">Step 2: Kerjakan PR</h6>
                    <p>
                      Kamu wajib mengerjakan PR sebelum sesi mentoring 1-on-1
                      bersama mentor Seefluencer. Mentoring tidak akan efektif
                      jika kamu belum mengerjakan PR!
                    </p>
                  </div>
                </div>

                <div className="w-full h-fit p-3 bg-white border border-gray-200 rounded-xl flex flex-col gap-4">
                  <div className={`p-3 rounded-xl bg-brand w-fit`}>
                    <MdMeetingRoom className="w-10 h-10 text-white" />
                  </div>

                  <div>
                    <h6 className="font-bold">Step 3: Mentoring 1-On-1</h6>
                    <p>
                      Kami sangat mengerti, setiap orang punya pemahaman dan
                      tantangan yang berbeda-beda. Maka dari itu, Kamu bisa
                      mendapatkan 8 kali konsultasi langsung bersama
                      mentor-mentor pilihan Seefluencer.
                    </p>
                  </div>
                </div>

                <div className="w-full h-fit p-3 bg-white border border-gray-200 rounded-xl flex flex-col gap-4">
                  <div className={`p-3 rounded-xl bg-brand w-fit`}>
                    <BiRepeat className="w-10 h-10 text-white" />
                  </div>

                  <div>
                    <h6 className="font-bold">Step 4: Repeat</h6>
                    <p>
                      Kamu akan mengulang proses ini selama 8 minggu kedepan
                      agar pembelajaran kamu bisa efektif!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="kurikulum" className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h2>
                  <span className="text-brand">Kurikulum</span> Bikin Konten
                  Viral
                </h2>

                <p>
                  Kami sudah mengajar lebih dari 300+ murid dengan kurikulum
                  yang selalu kami update setiap batch!
                </p>
              </div>

              <div className="flex flex-wrap gap-5">
                <div className="flex flex-row gap-2 items-center">
                  <BsCalendar className="text-brand text-xl" />
                  <p>2 Bulan</p>
                </div>

                <div className="flex flex-row gap-2 items-center">
                  <BsLaptop className="text-brand text-xl" />
                  <p>2 Live Session Per Minggu</p>
                </div>

                <div className="flex flex-row gap-2 items-center">
                  <BsStopwatch className="text-brand text-xl" />
                  <p>Komitmen 6-8 Jam Per Minggu</p>
                </div>
              </div>

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
              </div>
            </div>

            <div id="instruktur" className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h2>
                  <span className="text-brand">Instruktur Utama</span>{" "}
                  Seefluencer University
                </h2>

                <p>
                  Instruktur yang mengajar sudah memiliki pengalaman lebih dari
                  7+ tahun di industri media sosial.
                </p>
              </div>

              <FeatureCard
                reverse
                src="/images/sam-instructor.png"
                title="Samuel Christ"
                description={
                  <ul className="list-disc flex flex-col gap-3">
                    <li>
                      Sudah memiliki pengalaman{" "}
                      <span className="font-bold">7 tahun</span> sebagai content
                      creator, dan pernah Trending #1 di YouTube.
                    </li>
                    <li>
                      Memiliki total{" "}
                      <span className="font-bold">7+ juta followers</span> di{" "}
                      YouTube, Instagram, dan TikTok.
                    </li>
                    <li>
                      Konten mencapai{" "}
                      <span className="font-bold">150M+ views</span> per
                      bulannya.
                    </li>
                    <li>
                      Pemenang{" "}
                      <span className="font-bold">
                        TikTok Award The Most Favorite Education Creator 2022
                      </span>{" "}
                      1st Half.
                    </li>
                    <li>
                      Co-founder dari Seefluencer,{" "}
                      <span className="font-bold">
                        Platform Pembelajaran Media Sosial No.1 Di Indonesia.
                      </span>
                    </li>
                  </ul>
                }
              />

              <FeatureCard
                src="/images/joy-instructor.png"
                title="Joy Lodra"
                description={
                  <ul className="list-disc flex flex-col gap-3">
                    <li>
                      <span className="font-bold">Ex-Microsoft</span>, pernah
                      kerja sebagai professional dalam bidang IT di Microsoft
                      Amerika Serikat.
                    </li>
                    <li>
                      Co-founder dari Seefluencer,{" "}
                      <span className="font-bold">
                        Platform Pembelajaran Media Sosial No.1 Di Indonesia.
                      </span>
                    </li>
                    <li>
                      <span className="font-bold">Manager Samuel Christ</span>,{" "}
                      berhasil scale up followers Samuel Christ dan menambah 3
                      juta+ followers!
                    </li>
                  </ul>
                }
              />
            </div>

            <div id="pricing" className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h2>
                  <span className="text-brand">Jadwal & Biaya Investasi</span>{" "}
                  Program Seefluencer University
                </h2>

                <p>
                  Temukan jadwal kelas yang tersedia sesuai dengan metode
                  belajar yang kamu inginkan!
                </p>
              </div>
            </div>

            <Jadwal />

            <div id="graduation" className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h2>
                  Seefluencer{" "}
                  <span className="text-brand">Graduation Night</span>
                </h2>

                <p>
                  Acara tahunan untuk para alumni Seefluencer yang sudah
                  mengikuti program di tahun ini.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <YouTubeModal videoId="gJY9EBHqugU" />
                <YouTubeModal videoId="ep4lYK5UfuU" />
                <YouTubeModal videoId="VF4KMJ2KjkQ" />
                <YouTubeModal videoId="Gw65j7JI0F8" />
              </div>

              <YouTubeModal videoId="9dlLMJisKhM" aspectRatio="long" />
            </div>
          </div>
        </div>
      </Container>

      <Container bgColor="bg-gradient-to-b from-sky-100 to-white py-20">
        <FeatureCard
          external
          src="/images/student-card.png"
          href="/registration"
          buttonText="Apply Now"
          title="Semua Murid Seefluencer Akan Mendapatkan Creator Kit"
          description="Kamu akan dikirimkan langsung Creator Kit yang berisikan Fine Gold 24K Student ID, stabilo, dan buku limited edition Mega Creator."
        />
      </Container>

      <Container>
        <div className="grid md:grid-cols-4 gap-3">
          <h2 className="text-center md:text-left">
            Frequently Asked <span className="text-brand">Questions</span>
          </h2>

          <div className="flex flex-col gap-1 md:col-span-3">
            <FaqSection />
          </div>
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
        <div className="p-3 md:p-5 rounded-xl border border-gray-200 shadow-lg">
          <div className="mx-auto max-w-2xl flex flex-col gap-5 text-center items-center ">
            <div>
              <h2>
                Slot Sangat <span className="text-brand">Terbatas!</span>
              </h2>

              <p>
                Kami hanya menerima 30 orang setiap batch-nya. Jadi, tunggu apa
                lagi? Daftarkan dirimu sekarang juga!
              </p>
            </div>

            <Button
              hrefLink="/registration"
              buttonText="Apply Now"
              external
              regular
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CreatorAcceleratorProgram;
