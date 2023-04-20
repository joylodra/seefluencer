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
      "Creators that have authentic affinity for your brand, anywhere in the world and with any size following.",
    icon: <FaMicrophoneAlt size={50} className="text-white" />,
  },
  {
    title: "campaign consulting",
    description:
      "Our full-service approach saves your team an average of 85% of their time per campaign.",
    icon: <IoPeopleCircle size={50} className="text-white" />,
  },
  {
    title: "high-quality content",
    description:
      "The captivating photo, video, and narrative content you need to tell your brand story.",
    icon: <BsFillCameraVideoFill size={50} className="text-white" />,
  },
  {
    title: "reporting & analysis",
    description:
      "We analyze every data point to develop robust insights that will improve your marketing.",
    icon: <HiDocumentReport size={50} className="text-white" />,
  },
];
