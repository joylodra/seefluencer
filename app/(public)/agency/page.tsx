// Custom Components
import Container from "@/app/components/ui/Container";
import Chip from "@/app/components/ui/Chip";

export const metadata = {
  title: "Seefluencer Agency",
  keywords: [
    "brands",
    "media sosial",
    "digital marketing",
    "influencer marketing",
    "ssmma",
  ],
  description: "Platform Pembelajaran Media Sosial No.1 Di Indonesia",
};

const SeefluencerAgency = () => {
  return (
    <div className="flex flex-col">
      <Container tighter>
        <div className="flex flex-col text-center gap-5 items-center justify-center">
          <small className="text-brand uppercase font-bold">
            Seefluencer Agency
          </small>

          <div className="flex flex-col gap-3">
            <h1>
              Kami Siap Bantu{" "}
              <span className="text-brand">10X Media Sosial Bisnis</span> Anda
            </h1>

            <p>
              Anda tidak perlu menghabiskan waktu, tenaga, dan uang merekrut 4
              karyawan untuk mengoperasikan media sosial anda. Kami siap bantu!
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            <Chip text="Social Media Management" />
            <Chip text="Ningkatin Omzet" />
            <Chip text="Video Viral" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SeefluencerAgency;
