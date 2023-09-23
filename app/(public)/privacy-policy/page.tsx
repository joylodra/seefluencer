// Custom Components
import Container from "@/app/components/ui/Container";
import Hero from "../../components/Hero";

export const metadata = {
  title: "Privacy Policy",
  keywords: [
    "privacy policy page",
    "social media",
    "influencer marketing platform",
    "community",
  ],
  description: "Indonesia’s #1 Live Online Learning For Creators 💙",
};

const PrivacyPolicy = () => {
  return (
    <Container>
      <Hero
        title="Privacy Policy"
        description="Our privacy policy explains how we collect, use, and protect your personal information when you use our service. We are committed to respecting your privacy and ensuring that your personal data is secure. "
      />

      <div className="shadow-3xl p-4 rounded-lg flex flex-col gap-3">
        <p className="font-bold italic text-2xl">
          Effective Date: April 15th, 2023
        </p>
        <p>
          At Seefluencer, we respect the privacy of our users and are committed
          to protecting any personal information that you provide to us. This
          Privacy Policy outlines how we collect, use, and safeguard your
          personal information when you visit our website or use our services.
        </p>

        <p className="font-bold">1. Information We Collect</p>
        <p className="ml-4">
          We may collect personal information from you when you create an
          account, complete a form, or use our services. This may include your
          name, email address, payment information, and other information
          necessary to provide our services to you. We may also collect
          non-personal information, such as your browser type, IP address, and
          the pages you visit on our website.
        </p>

        <p className="font-bold">2. How We Use Your Information</p>
        <p className="ml-4">We may use your personal information to:</p>
        <p className="ml-8">• Provide and improve our services to you</p>
        <p className="ml-8">
          • Communicate with you about our services, promotions, and updates
        </p>
        <p className="ml-8">• Process payments and prevent fraud</p>
        <p className="ml-8">
          • Analyze website usage and improve our website and services
        </p>
        <p className="ml-8">• Comply with legal and regulatory requirements</p>
        <p className="ml-4">
          We will not share your personal information with third parties for
          their marketing purposes without your consent.
        </p>

        <p className="font-bold">3. Cookies and Tracking Technologies</p>
        <p className="ml-4">
          We may use cookies and other tracking technologies to collect
          non-personal information about your use of our website. Cookies are
          small data files that are stored on your device when you visit our
          website. You can control the use of cookies through your browser
          settings.
        </p>

        <p className="font-bold">4. Security</p>
        <p className="ml-4">
          We take reasonable measures to protect your personal information from
          unauthorized access, use, and disclosure. However, no data
          transmission over the Internet can be guaranteed to be 100% secure.
        </p>

        <p className="font-bold">5. Your Choices and Rights</p>
        <p className="ml-4">
          You have the right to access, correct, or delete your personal
          information. You may also opt-out of receiving promotional emails from
          us. If you have any questions or concerns about our privacy practices,
          please get in touch at{" "}
          <a
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=seefluencer@gmail.com"
            className="underline cursor-pointer italic"
          >
            seefluencer@gmail.com
          </a>
          .
        </p>

        <p className="font-bold">6. Changes to this Privacy Policy</p>
        <p className="ml-4">
          We may update this Privacy Policy from time to time. We will notify
          you of any material changes by posting the updated Privacy Policy on
          our website. Your continued use of our website and services after any
          changes to this Privacy Policy will constitute your acceptance of such
          changes.
        </p>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
