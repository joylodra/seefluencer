// Custom Components
import Hero from "../../components/public/Hero";
import Accordion from "../../components/public/faq/Accordion";

export const metadata = {
  title: "faq",
  keywords: [
    "faq page",
    "social media",
    "influencer marketing platform",
    "community",
  ],
  description: "see the difference influencers can make with seefluencer 💙",
};

const FAQ = () => {
  return (
    <div className="flex flex-col gap-8">
      <Hero
        title="frequently asked questions"
        description="Berikut adalah beberapa pertanyaan yang sering diajukan tentang Seefluencer. Jika masih ada pertanyaan yang belum terjawab, jangan ragu untuk menghubungi tim kami. Kami siap membantu Anda!"
      />

      <div className="flex flex-col gap-5 w-full max-w-3xl mx-auto">
        <Accordion
          question="apa itu seefluencer?"
          answer="Seefluencer merupakan sebuah influencer marketing platform yang menghubungkan brand dengan influencer. Kami membantu bisnis meningkatkan brand awareness dan sales dengan menghubungkan influencer terbaik. Kami membantu influencer mendapatkan pendapatan lebih melalui tawaran brand."
        />

        <Accordion
          question="bagaimana cara menghubungi seefluencer?"
          answer="Jika kamu butuh bantuan bisa langsung hubungi kami di seefluencer@gmail.com atau langsung kirim WA ke kami di +6285174259955"
        />
      </div>
    </div>
  );
};

export default FAQ;
