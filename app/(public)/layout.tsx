// React & Next Hooks
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";

// Custom Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Styles
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "Seefluencer",
    template: "%s | Seefluencer",
  },
  keywords: [
    "Seefluencer",
    "social media",
    "influencer marketing platform",
    "content creator",
    "live online learning",
  ],
  description: "Indonesia’s #1 Live Online Learning For Creators 💙",
  icons: {
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "GUaL-xc9P-5moe4H_kE06hkN8xhLGW8ilWjJrAzyQd0",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-gray-50">
        <Navbar />
        <main>{children}</main>
        <Footer complete />
        <Analytics />
      </body>
    </html>
  );
}
