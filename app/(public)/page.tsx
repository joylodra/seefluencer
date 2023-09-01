// Custom Components
import Hero from "../components/public/Hero";
import Feature from "../components/public/Feature";
import Title from "../components/public/Title";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-10">
        <Hero
          customTitle={
            <>
              see the difference{" "}
              <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
                influencers
              </span>{" "}
              can make with seefluencer 💙
            </>
          }
          description="Seefluencer adalah sebuah all-in-one platform yang membantu konten kreator mendapatkan penghasilan lebih."
        />

        <iframe
          allow="fullscreen;"
          src="https://www.youtube.com/embed/M5PLJeb2Oz0"
          className="aspect-video w-full"
        />
      </div>

      <div className="flex flex-col gap-10">
        <Title
          title="Apa saja yang ada di dalam Seefluencer? 👀"
          center
          underline
        />

        <Feature
          title="12-Week Creator Accelerator Program 👩‍🏫"
          description={
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <div>
                  Sekolah konten kreator yang dijalankan selama{" "}
                  <span className="underline decoration-3 italic decoration-blue-400">
                    12 minggu
                  </span>{" "}
                  secara <span className="bg-yellow-200 italic">live.</span>
                </div>

                <div className="text-3xl text-blue-400">☑️</div>
              </div>

              <div className="flex gap-3 items-center">
                <div>
                  Seefluencer University adalah Kelas Intensif yang akan
                  memberikan{" "}
                  <span className="underline decoration-3 italic decoration-blue-400">
                    tugas PR
                  </span>
                  , dan{" "}
                  <span className="bg-yellow-200 italic">
                    membantu Kamu secara personal
                  </span>
                  , sehingga konten & personal branding-mu bisa jauh lebih
                  efektif.
                </div>

                <div className="text-3xl text-blue-400">☑️</div>
              </div>

              <div className="flex gap-3 items-center">
                <div>
                  Kamu akan diberikan{" "}
                  <span className="underline decoration-3 italic decoration-blue-400">
                    12 kali sesi 1-on-1 coaching
                  </span>{" "}
                  selama kelas berlangsung,{" "}
                  <span className="bg-yellow-200 italic">1 minggu 1 kali.</span>
                </div>

                <div className="text-3xl text-blue-400">☑️</div>
              </div>
            </div>
          }
          src="/images/cap-cap.png"
          reverse
          href="/university"
          buttonText="lihat selengkapnya"
          notExternal
        />

        <Feature
          title="3-Day Intensive Mini Creator Class ✏️"
          description={
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <div className="text-3xl text-blue-400">☑️</div>

                <div>
                  Kelas pendek cara jadi content creator yang dijalankan selama{" "}
                  <span className="underline decoration-3 italic decoration-blue-400">
                    3 hari
                  </span>{" "}
                  secara <span className="bg-yellow-200 italic">live.</span>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="text-3xl text-blue-400">☑️</div>

                <div>
                  3-Day Intensive Mini Creator Class adalah Kelas Intensif yang
                  akan memberikan{" "}
                  <span className="underline decoration-3 italic decoration-blue-400">
                    tugas PR, modul
                  </span>
                  , dan{" "}
                  <span className="bg-yellow-200 italic">
                    membantu Kamu paham konsep content creation
                  </span>
                </div>
              </div>
            </div>
          }
          src="/images/cap-cap.png"
          href="/coaching"
          buttonText="lihat selengkapnya"
          notExternal
        />

        <Feature
          title="1-On-1 Creator Coaching with Samuel Christ 💁‍♂️"
          description={
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <div>
                  Sesi{" "}
                  <span className="underline decoration-3 italic decoration-blue-400">
                    45 menit
                  </span>{" "}
                  bersama Samuel Christ, content creator dengan{" "}
                  <span className="bg-yellow-200 italic">
                    4.5 juta+ followers
                  </span>
                </div>

                <div className="text-3xl text-blue-400">☑️</div>
              </div>

              <div className="flex gap-3 items-center">
                <div>
                  <span className="underline decoration-3 italic decoration-blue-400">
                    Bebas bertanya pertanyaan apa saja
                  </span>{" "}
                  seputar dunia{" "}
                  <span className="bg-yellow-200 italic">content creation</span>
                </div>

                <div className="text-3xl text-blue-400">☑️</div>
              </div>
            </div>
          }
          src="/images/cap-coaching.png"
          href="/coaching"
          buttonText="lihat selengkapnya"
          notExternal
          reverse
        />

        <Feature
          title="KOL Management 🤳🏽"
          description={
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <div className="text-3xl text-blue-400">☑️</div>

                <div>
                  Pemilihan{" "}
                  <span className="underline decoration-3 italic decoration-blue-400">
                    influencer yang berkualitas
                  </span>{" "}
                  yang langsung{" "}
                  <span className="bg-yellow-200 italic">
                    dilakukan oleh expertnya!
                  </span>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="text-3xl text-blue-400">☑️</div>

                <div>
                  <span className="underline decoration-3 italic decoration-blue-400">
                    Pembuatan konsep marketing campaign
                  </span>{" "}
                  yang{" "}
                  <span className="bg-yellow-200 italic">
                    sangat-sangat efektif dan efisien.
                  </span>
                </div>
              </div>
            </div>
          }
          src="/images/cap-rapot.png"
          href="/kol"
          buttonText="lihat selengkapnya"
          notExternal
        />
      </div>
    </div>
  );
}
