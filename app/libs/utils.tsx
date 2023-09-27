"use client";

// Icons & Images
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaMicrophoneAlt,
} from "react-icons/fa";
import { IoPeopleCircle } from "react-icons/io5";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { HiDocumentReport } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

export const socials = [
  {
    platform: "instagram",
    icon: <FaInstagram className="text-white" size={20} />,
    iconBlack: <FaInstagram size={20} />,
    url: "https://instagram.com/seefluencer",
  },
  {
    platform: "tiktok",
    icon: <FaTiktok className="text-white" size={20} />,
    iconBlack: <FaTiktok size={20} />,
    url: "https://tiktok.com/@seefluencer",
  },
  {
    platform: "youtube",
    icon: <FaYoutube className="text-white" size={20} />,
    iconBlack: <FaYoutube size={20} />,
    url: "https://youtube.com/@seefluencer",
  },
  {
    platform: "email",
    icon: <MdEmail className="text-white" size={20} />,
    iconBlack: <MdEmail size={20} />,
    url: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=seefluencer@gmail.com",
  },
];

export const kolBenefits = [
  {
    title: "influencer identification",
    description:
      "Kami akan memilih influencer yang memiliki keterikatan yang kuat dengan merek Anda dengan jumlah followers berapapun yang Anda butuhkan.",
    icon: <FaMicrophoneAlt size={50} className="text-white" />,
  },
  {
    title: "campaign consulting",
    description:
      "Pelayanan kami dapat menghemat waktu tim Anda rata-rata hingga 85% per campaign.",
    icon: <IoPeopleCircle size={50} className="text-white" />,
  },
  {
    title: "high-quality content",
    description:
      "Kami pastikan untuk menyediakan konten foto, video, dan naratif yang menarik yang Anda butuhkan untuk menciptakan story dari brand Anda.",
    icon: <BsFillCameraVideoFill size={50} className="text-white" />,
  },
  {
    title: "reporting & analysis",
    description:
      "Kami menganalisis setiap titik data untuk mengembangkan wawasan yang kuat dalam meningkatkan performa marketing brand Anda.",
    icon: <HiDocumentReport size={50} className="text-white" />,
  },
];

export const capFAQ = [
  {
    question:
      "Apakah kelas ini cocok untuk pengembangan sosial media bisnis juga?",
    answer:
      "Sangat cocok. Banyak sekali pembelajaran yang bisa diambil dari sini dan langsung diaplikasikan ke sosial media bisnis kamu!",
  },
  {
    question:
      "Apakah kelas ini cocok untuk karyawan professional yang bergerak di bidang sosial media?",
    answer:
      "Tentu sangat-sangat cocok! Kamu bisa mengaplikasikan banyak hal untuk pengembangan sosial media di perusahaan tempat kamu kerja. Kamu pun bisa coba ajukan untuk dibayarkan oleh perusahaan untuk mengikuti training ini.",
  },
  {
    question:
      "Gimana kalau followers saya sudah di atas 10K? Apakah masih bisa mengikuti program ini?",
    answer:
      "Materi kami tentunya bisa diimplementasikan untuk semua level kamu, dan ada sesi 1-on-1 yang bisa bantu kamu scale up level konten kamu!",
  },
  {
    question: "Bagaimana biar bisa dapat uang kembali 100%?",
    answer:
      "Kami memberikan hadiah uang kembali 100% kepada siapapun yang bisa mencapai 100 ribu followers selama program 3 bulan ini.",
  },
  {
    question: "Maksudnya garansi konsultasi 1-on-1 seumur hidup bagaimana?",
    answer:
      "Kami akan memberikan garansi konsultasi 1-on-1 seumur hidup hingga kamu mencapai followers 10K",
  },
  {
    question:
      "Apakah Creator Accelerator Program online, in-person, atau kelas yang sudah direkam?",
    answer:
      "Creator Accelerator Program adalah program 3 bulan yang dilakukan secara live dan online melalui platform Zoom.",
  },
  {
    question: "Dalam satu kelas, isinya berapa orang sih?",
    answer: "Setiap kelas akan diisi oleh maksimum 25 orang.",
  },
  {
    question: "Jadwal untuk live sessionnya itu kapan aja sih?",
    answer:
      "CS kami siap memberikan detail dari kurikulum dan semua penjadwalan. Langsung kirim pesan ke nomor WA +6285175449955",
  },
  {
    question: "Gimana kalo aku sibuk dan tidak bisa hadir ke kelas?",
    answer:
      "Tentunya, kamu perlu komitmen ketika sudah memutuskan untuk join program ini. Jika kamu tidak hadir kelas, maka bisa menurunkan nilai rapor dan berkesempatan untuk hilang garansi konsultasi 1-on-1 seumur hidup hingga followers 10K. Namun, semua kelas akan direkam, jadi kamu bisa ulang kembali di recordingnya.",
  },
  {
    question:
      "Saya tidak memiliki pengalaman dalam pembuatan konten, apakah program ini cocok untuk saya?",
    answer:
      "Ya, program ini dirancang untuk menerima orang dengan berbagai tingkat pengalaman dan mengubah mereka menjadi konten kreator!",
  },
  {
    question:
      "Apakah perlu peralatan-peralatan yang mahal untuk join kelas ini?",
    answer:
      "Tidak perlu peralatan yang mahal! Cukup dengan handphone kamu sudah bisa menjadi seorang konten kreator.",
  },
];
