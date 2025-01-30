// React & Next Hooks
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

// Custom Components
import Footer from "../components/Footer";

// Styles
import "../globals.css";

export const metadata: Metadata = {
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
      <body className="bg-gray-50 scroll-smooth">
        <main>{children}</main>
      </body>
    </html>
  );
}
