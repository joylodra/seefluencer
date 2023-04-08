// React & Next Hooks
import { Metadata } from "next";

// Custom Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Styles
import "./globals.css";

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
  openGraph: {
    title: "seefluencer",
    description:
      "Seefluencer is an influencer marketing platform that helps brands connect with the right influencers to promote their products or services. Our platform provides a transparent view of the impact of your brand through the influencers you work with. Our goal is to help brands increase their visibility and reach through the power of influencer marketing. With Seefluencer, you can see the impact of your brand through our carefully selected network of influencers.",
    url: "https://seefluencer.com",
    siteName: "seefluencer",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "seefluencer",
    card: "summary_large_image",
  },
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
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto max-w-5xl px-3">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
