// Custom Components
import Hero from "../components/Global/Hero";

export const metadata = {
  title: "terms and conditions",
  keywords: [
    "terms and conditions page",
    "social media",
    "influencer marketing platform",
    "community",
  ],
  description: "see the difference influencers can make with seefluencer 💙",
};

const Terms = () => {
  return (
    <div className="flex flex-col gap-16">
      <Hero
        title="terms and conditions"
        description="Our terms and conditions agreement outlines the rules and guidelines for using our service."
      />

      <div className="shadow-3xl p-4 rounded-lg flex flex-col gap-3">
        <p className="font-bold italic text-2xl">
          Effective Date: April 14th, 2023
        </p>
        <p>
          {`Please read these terms and conditions ("Terms") carefully before
          using the Seefluencer website (the "Service") operated by Seefluencer
          ("us", "we", or "our").`}
        </p>
        <p>
          By accessing or using the Service, you agree to be bound by these
          Terms. If you disagree with any part of the terms, then you may not
          access the Service.
        </p>

        <p className="font-bold">1. Accounts</p>
        <p className="ml-4">
          When you create an account with us, you must provide accurate and
          complete information. You are responsible for maintaining the
          confidentiality of your account and password, and you agree to accept
          responsibility for all activities that occur under your account.
        </p>

        <p className="font-bold">2. Payments</p>
        <p className="ml-4">
          You agree to pay all fees and charges associated with your use of the
          Service. Payments are due on a monthly basis, and failure to make
          timely payments may result in the suspension or termination of your
          account.
        </p>

        <p className="font-bold">3. Content</p>
        <p className="ml-4">
          You are solely responsible for the content that you post or upload to
          the Service. You represent and warrant that you have all necessary
          rights to use, post, and distribute such content, and that such
          content does not infringe on the rights of any third party.
        </p>

        <p className="font-bold">4. Intellectual Property</p>
        <p className="ml-4">
          All content on the Service, including but not limited to text,
          graphics, logos, and images, is the property of Seefluencer or its
          licensors and is protected by copyright and other intellectual
          property laws. You may not use or reproduce any content from the
          Service without our prior written consent.
        </p>

        <p className="font-bold">5. Termination </p>
        <p className="ml-4">
          We may terminate or suspend your account and access to the Service at
          any time and for any reason, including but not limited to violation of
          these Terms.
        </p>

        <p className="font-bold">6. Disclaimer of Warranties</p>
        <p className="ml-4">
          The Service is provided on an "as is" and "as available" basis,
          without warranties of any kind, either express or implied, including
          but not limited to warranties of merchantability, fitness for a
          particular purpose, or non-infringement.
        </p>

        <p className="font-bold">7. Limitation of Liability</p>
        <p className="ml-4">
          In no event shall Seefluencer be liable for any direct, indirect,
          incidental, special, or consequential damages arising out of or in
          connection with the use of the Service or these Terms, even if advised
          of the possibility of such damages.
        </p>

        <p className="font-bold">8. Indemnification</p>
        <p className="ml-4">
          You agree to indemnify and hold Seefluencer and its affiliates,
          officers, agents, and employees harmless from any claim or demand,
          including reasonable attorneys' fees, arising out of your use of the
          Service or violation of these Terms.
        </p>

        <p className="font-bold">9. Governing Law </p>
        <p className="ml-4">
          {`These Terms shall be governed by and construed in accordance with the
          laws of [insert governing law jurisdiction]. Any disputes arising out
          of or in connection with these Terms shall be resolved in the courts
          of [insert governing law jurisdiction].`}
        </p>

        <p className="font-bold">10. Change to Terms</p>
        <p className="ml-4">
          We reserve the right to modify or replace these Terms at any time. Any
          changes will be effective immediately upon posting the updated Terms
          on the Service. Your continued use of the Service after any such
          changes constitutes your acceptance of the new Terms.
        </p>

        <p>
          If you have any questions or concerns about these Terms, please get in
          touch at{" "}
          <a
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=seefluencer@gmail.com"
            className="underline cursor-pointer italic"
          >
            seefluencer@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Terms;
