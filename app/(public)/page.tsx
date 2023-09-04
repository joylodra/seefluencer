// Next Link
import Link from "next/link";

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

        <div
          className="delay-[300ms] duration-[600ms] taos:[transform:translate3d(200px,0,0)_scale(1.2)] taos:opacity-0"
          data-taos-offset="100"
        >
          <Feature
            description={
              <div className="flex flex-col gap-4 items-end text-right">
                <div className="font-bold text-xl">
                  12-Week Creator Accelerator Program 👩‍🏫
                </div>

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
                    <span className="bg-yellow-200 italic">
                      1 minggu 1 kali.
                    </span>
                  </div>

                  <div className="text-3xl text-blue-400">☑️</div>
                </div>

                <Link
                  target="_blank"
                  href="/accelerator"
                  className="w-fit px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
                >
                  lihat selengkapnya
                </Link>
              </div>
            }
            src="/images/cap-cap.png"
            reverse
          />
        </div>

        <div
          className="delay-[300ms] duration-[600ms] taos:[transform:translate3d(-200px,0,0)_scale(1.2)] taos:opacity-0"
          data-taos-offset="100"
        >
          <Feature
            description={
              <div className="flex flex-col gap-4 items-start text-left">
                <div className="font-bold text-xl">
                  3-Day Intensive Mini Creator Class ✏️
                </div>

                <div className="flex gap-3 items-center">
                  <div className="text-3xl text-blue-400">☑️</div>

                  <div>
                    Kelas pendek cara jadi content creator yang dijalankan
                    selama{" "}
                    <span className="underline decoration-3 italic decoration-blue-400">
                      3 hari
                    </span>{" "}
                    secara <span className="bg-yellow-200 italic">live.</span>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="text-3xl text-blue-400">☑️</div>

                  <div>
                    3-Day Intensive Mini Creator Class adalah Kelas Intensif
                    yang akan memberikan{" "}
                    <span className="underline decoration-3 italic decoration-blue-400">
                      tugas PR, modul
                    </span>
                    , dan{" "}
                    <span className="bg-yellow-200 italic">
                      membantu Kamu paham konsep content creation
                    </span>
                  </div>
                </div>

                <Link
                  target="_blank"
                  href="/miniclass"
                  className="w-fit px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
                >
                  lihat selengkapnya
                </Link>
              </div>
            }
            src="/images/imcc-imcc.png"
          />
        </div>

        <div
          className="delay-[300ms] duration-[600ms] taos:[transform:translate3d(200px,0,0)_scale(1.2)] taos:opacity-0"
          data-taos-offset="100"
        >
          <Feature
            description={
              <div className="flex flex-col gap-4 items-end text-right">
                <div className="font-bold text-xl">
                  1-On-1 Creator Coaching with Samuel Christ 💁‍♂️
                </div>

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
                    <span className="bg-yellow-200 italic">
                      content creation
                    </span>
                  </div>

                  <div className="text-3xl text-blue-400">☑️</div>
                </div>

                <Link
                  target="_blank"
                  href="/coaching"
                  className="w-fit px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
                >
                  lihat selengkapnya
                </Link>
              </div>
            }
            src="/images/cap-coaching.png"
            reverse
          />
        </div>

        <div
          className="delay-[300ms] duration-[600ms] taos:[transform:translate3d(-200px,0,0)_scale(1.2)] taos:opacity-0"
          data-taos-offset="100"
        >
          <Feature
            description={
              <div className="flex flex-col gap-4 items-start text-left">
                <div className="font-bold text-xl">KOL Management 🤳🏽</div>

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

                <Link
                  target="_blank"
                  href="/kol"
                  className="w-fit px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
                >
                  lihat selengkapnya
                </Link>
              </div>
            }
            src="/images/cap-rapot.png"
          />
        </div>
      </div>
    </div>
  );
}
