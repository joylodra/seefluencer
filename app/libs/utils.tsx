"use client";

// Icons & Images
import {
  FaTwitter,
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
    platform: "twitter",
    icon: <FaTwitter className="text-white" size={20} />,
    iconBlack: <FaTwitter size={20} />,
    url: "https://twitter.com/seefluencer",
  },
  {
    platform: "email",
    icon: <MdEmail className="text-white" size={20} />,
    iconBlack: <MdEmail size={20} />,
    url: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=seefluencer@gmail.com",
  },
];

export const benefits = [
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
