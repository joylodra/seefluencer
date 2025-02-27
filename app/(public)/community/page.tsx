// Custom Components
import Container from "@/app/components/ui/Container";
import Chip from "@/app/components/ui/Chip";

export const metadata = {
  title: "Seefluencer Community",
  keywords: [
    "mobile app",
    "content creator",
    "media sosial",
    "influencer marketing",
  ],
  description: "Platform Pembelajaran Media Sosial No.1 Indoneia",
};

const SeefluencerCommunity = () => {
  return (
    <div className="flex flex-col">
      <Container tighter>
        <div className="flex flex-col text-center gap-5 items-center justify-center">
          <small className="text-brand uppercase font-bold">
            Seefluencer Community
          </small>

          <div className="flex flex-col gap-3">
            <h1>
              Belajar Bikin Konten Viral Bareng{" "}
              <span className="text-brand">Seefluencer Community</span>
            </h1>

            <p>
              10X media sosial kamu dengan belajar bareng-bareng di Seefluencer
              Community!
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <Chip text="Aplikasi Pembelajaran" />
            <Chip text="Harga Terjangkau" />
            <Chip text="Beginner-Friendly" />
            <Chip text="Live Mingguan" />
            <Chip text="Komunitas Eksklusif" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SeefluencerCommunity;
