// React & Next Hooks
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

// Custom Components
import Footer from "../components/Footer";

// Styles
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "seefluencer",
    template: "%s | seefluencer",
  },
  keywords: [
    "seefluencer",
    "social media",
    "influencer marketing platform",
    "brand sponsorship",
    "business",
  ],
  description:
    "Seefluencer is an influencer marketing platform that helps brands connect with the right influencers to promote their products or services. Our platform provides a transparent view of the impact of your brand through the influencers you work with. Our goal is to help brands increase their visibility and reach through the power of influencer marketing. With Seefluencer, you can see the impact of your brand through our carefully selected network of influencers.",
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
      <body className="bg-gray-50 scroll-smooth">
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
