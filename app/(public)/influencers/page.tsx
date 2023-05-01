// Custom Components
import Hero from "../../components/public/Hero";
import Cta from "../../components/public/Cta";
import Feature from "../../components/public/Feature";

export const metadata = {
  title: "for influencers",
  keywords: [
    "influencer page",
    "social media",
    "influencer marketing platform",
    "community",
  ],
  description: "see the difference influencers can make with seefluencer 💙",
};

const Influencers = () => {
  return (
    <div className="flex flex-col gap-16">
      <Hero
        customTitle={
          <>
            become a{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
              seefluencer
            </span>{" "}
          </>
        }
        description="Kamu seorang influencer atau konten kreator? Bergabunglah dengan Seefluencer. Di sini, kami akan berusaha keras memberikan tawaran endorsement dari brand-brand ternama. Daftar sekarang untuk meningkatkan penghasilan dan jangkauan kamu!"
        buttonText="daftar jadi seefluencer"
        href="/"
      />

      <Feature
        title="connect"
        description="Temukan dan terhubung dengan brand-brand terbaik melalui Seefluencer. Platform kami memberikan akses mudah ke jaringan luas brand-brand ternama, sehingga kamu dapat terhubung dengan mereka dengan lebih cepat dan efektif. Dapatkan lebih banyak kesempatan kerja sama dengan bergabung bersama kami."
        src="/images/influencer.png"
        reverse
      />

      <Feature
        title="create"
        description="Berkarya dan kembangkan kemampuan kamu sebagai influencer dengan platform Seefluencer. Dapatkan kesempatan untuk membuat konten-konten yang kreatif dan unik untuk brand-brand terbaik. Kami memberikan kebebasan dalam berekspresi, sehingga kamu dapat membuat konten dengan gaya yang sesuai dengan kepribadian kamu sendiri."
        src="/images/influencer.png"
      />

      <Feature
        title="collaborate"
        description="Di Seefluencer, kamu tidak hanya bekerja sama dengan brand-brand ternama, tapi juga dengan influencer-influencer lain dalam komunitas kami. Bergabunglah dengan komunitas Seefluencer dan dapatkan kesempatan untuk bertukar pikiran dengan influencer lainnya. Kembangkan diri kamu sebagai influencer yang sukses dengan berkolaborasi bersama kami!"
        src="/images/influencer.png"
        reverse
      />

      <Cta
        title="influencer? bergabunglah bersama kami"
        description="Tunggu apa lagi? Daftarkan dirimu sekarang juga dengan klik tombol daftar di bawah."
        href="https://wa.me/6285174259955"
        buttonText="daftar jadi seefluencer"
      />
    </div>
  );
};

export default Influencers;
