"use client";

// Custom Components
import Hero from "../../components/public/Hero";
import Image from "next/image";
import Title from "@/app/components/public/Title";
import Link from "next/link";
import Feature from "@/app/components/public/Feature";

// export const metadata = {
//   title: "1-on-1 coaching with experts",
//   keywords: ["brands page", "social media", "business", "influencer marketing"],
//   description: "see the difference influencers can make with seefluencer 💙",
// };

const Coaching = () => {
  const handleClick = () => {
    const element = document.getElementById("pricing")!;
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-16">
      {/* TITLE */}
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 items-center">
          <div className="col-span-2 flex flex-col gap-5 items-center md:items-start">
            <Hero
              fullWidth
              customTitle={
                <div className="flex flex-col gap-3 text-center md:text-left">
                  <div className="text-lg font-normal">
                    <div className="font-bold">
                      1-on-1{" "}
                      <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
                        coaching
                      </span>
                    </div>

                    <div className="italic">
                      with{" "}
                      <span className="underline decoration-3 italic decoration-blue-400">
                        content experts
                      </span>
                    </div>
                  </div>

                  <div>
                    Konsultasi{" "}
                    <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
                      1-on-1
                    </span>{" "}
                    selama 45 menit dengan{" "}
                    <span className="underline decoration-3 italic decoration-blue-400">
                      Samuel Christ
                    </span>
                  </div>

                  <div className="text-lg md:text-2xl font-normal">
                    "Temukan solusi tentang bagaimana caranya bikin{" "}
                    <span className="underline decoration-3 italic decoration-blue-400">
                      konten yang viral
                    </span>
                    , bangun{" "}
                    <span className="underline decoration-3 italic decoration-blue-400">
                      personal branding
                    </span>
                    , & dapat{" "}
                    <span className="bg-yellow-200 italic">
                      100K+ followers 📈
                    </span>
                    "
                  </div>
                </div>
              }
            />

            <div
              onClick={() => handleClick()}
              className="w-fit px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold cursor-pointer"
            >
              lihat penawaran
            </div>
          </div>

          <div className="col-span-1 text-center flex flex-col gap-3 items-center mt-5 md:mt-0">
            <Image
              className="flex w-full max-w-sm rounded-full shadow-xl"
              src="/images/cap-coaching.png"
              alt="Sam Christ's social media growth"
              width={400}
              height={400}
            />

            <div>
              <div className="text-xl font-bold">Samuel Christ</div>
              <div className="italic text-gray-500">Content creator</div>
              <div className="italic text-gray-500">Co-founder Seefluencer</div>
            </div>
          </div>
        </div>
      </div>

      {/* PROBLEM */}
      <div className="flex flex-col gap-5">
        <Title title="Apakah kamu merasa... 🤔" center underline />

        <div className="flex flex-col gap-3 text-center">
          <Feature
            description={
              <div className="flex flex-col gap-3">
                <div className="flex gap-3 items-center text-left">
                  <div className="text-2xl">❌</div>

                  <div>
                    Ingin{" "}
                    <span className="underline decoration-3 italic decoration-blue-400">
                      menjadi content creator
                    </span>{" "}
                    tapi{" "}
                    <span className="bg-yellow-200 italic">
                      ga tau mulai dari mana
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 items-center text-left">
                  <div className="text-2xl">❌</div>

                  <div>
                    Udah konsisten ngonten tapi kok{" "}
                    <span className="italic bg-yellow-200">
                      nggak viral-viral
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 items-center text-left">
                  <div className="text-2xl">❌</div>

                  <div>
                    <span className="bg-yellow-200 italic">
                      Gak percaya diri
                    </span>{" "}
                    dan{" "}
                    <span className="underline decoration-3 italic decoration-blue-400">
                      malu
                    </span>{" "}
                    ngomong di{" "}
                    <span className="underline decoration-3 italic decoration-blue-400">
                      depan kamera
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 items-center text-left">
                  <div className="text-2xl">❌</div>

                  <div>
                    <span className="bg-yellow-200 italic">
                      Kesulitan dalam mencari
                    </span>{" "}
                    ide-ide konten
                  </div>
                </div>

                <div className="flex gap-3 items-center text-left">
                  <div className="text-2xl">❌</div>

                  <div>
                    <span className="bg-yellow-200 italic">
                      Gak ada motivasi
                    </span>{" "}
                    untuk{" "}
                    <span className="underline decoration-3 italic decoration-blue-400">
                      bikin konten
                    </span>
                  </div>
                </div>
              </div>
            }
            src="/images/cap-stress-2.png"
          />
        </div>
      </div>

      {/* SOLUTION */}
      <div className="flex flex-col gap-10 items-center">
        <Title
          title="Jangan khawatir! Tanyakan semua ke Samuel Christ 🥰"
          center
          underline
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-3">
            <Image
              src="/images/ocwe-tiktokaward.png"
              alt="Feature Description Image"
              width={250}
              height={250}
              className="rounded-lg shadow-lg w-full hover:shadow-3xl hover:shadow-neutral-500 transition-all h-64 object-cover object-top"
            />

            <div>
              <span className="text-4xl font-bold">{`1) `}</span>
              Samuel Christ merupakan pemenang dari{" "}
              <span className="underline decoration-3 italic decoration-blue-400">
                TikTok Award
              </span>{" "}
              <span className="bg-yellow-200 italic">
                "The Most Favorite Education Creator 2022 1st Half".
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Image
              src="/images/ocwe-growth.png"
              alt="Feature Description Image"
              width={250}
              height={250}
              className="rounded-lg shadow-lg w-full hover:shadow-3xl hover:shadow-neutral-500 transition-all h-64 object-cover object-top"
            />

            <div>
              <span className="text-4xl font-bold">{`2) `}</span>
              Samuel memiliki <span className="bg-yellow-200 italic">
                2,3M
              </span>{" "}
              subscribers di YouTube,{" "}
              <span className="bg-yellow-200 italic">2,2M</span> di TikTok, dan{" "}
              <span className="bg-yellow-200 italic">535K</span> followers di
              Instagram. Semua sosial medianya sudah{" "}
              <span className="underline decoration-3 italic decoration-blue-400">
                verified.
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Image
              src="/images/ocwe-pengalaman.png"
              alt="Feature Description Image"
              width={250}
              height={250}
              className="rounded-lg shadow-lg w-full hover:shadow-3xl hover:shadow-neutral-500 transition-all h-64 object-cover object-top"
            />

            <div>
              <div>
                <span className="text-4xl font-bold">{`3) `}</span>
                Samuel memiliki lebih dari{" "}
                <span className="bg-yellow-200 italic">
                  6 tahun pengalaman
                </span>{" "}
                sebagai{" "}
                <span className="underline decoration-3 italic decoration-blue-400">
                  konten kreator.
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Image
              src="/images/ocwe-150m.png"
              alt="Feature Description Image"
              width={250}
              height={250}
              className="rounded-lg shadow-lg w-full hover:shadow-3xl hover:shadow-neutral-500 transition-all h-64 object-cover object-top"
            />

            <div>
              <span className="text-4xl font-bold">{`4) `}</span>
              Samuel bisa mendapatkan total{" "}
              <span className="bg-yellow-200 italic">150M views</span> setiap
              bulannya di sosial medianya. Bahkan, video "Seberapa Kaya" pernah{" "}
              <span className="underline decoration-3 italic decoration-blue-400">
                trending nomor 1 di YouTube
              </span>{" "}
              dengan total{" "}
              <span className="bg-yellow-200 italic">views 11M.</span> Di
              TikTok, salah satu konten "Seberapa Kaya" berhasil menembus{" "}
              <span className="bg-yellow-200 italic">21,5M views.</span>
            </div>
          </div>
        </div>

        <div
          onClick={() => handleClick()}
          className="w-fit px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold cursor-pointer"
        >
          lihat penawaran
        </div>
      </div>

      {/* PRICING SECTION */}
      <div
        id="pricing"
        className="flex flex-col gap-5 items-center text-center"
      >
        <Title
          title="Jadwalkan sesi konsultasi 1-on-1 selama 45 menit dengan Samuel Christ sekarang dan dapatkan untuk bisa sukses jadi content creator! 🤳🏽"
          center
          underline
        />

        <Image
          src={"/images/cap-coaching.png"}
          alt="Feature Description Image"
          width={400}
          height={400}
          className="rounded-lg shadow-lg w-full max-w-xs"
        />

        <div className="flex flex-col gap-3">
          <div className="text-xl font-bold">Hanya untuk</div>
          <div className="line-through text-xl">Rp1.499.999</div>
          <h1 className="text-4xl text-red-500 font-bold rounded-lg animate-bounce">
            Rp449.000
          </h1>
          <div className="italic text-sm">
            *Karena waktu Samuel Christ sangat terbatas, maka slot akan sangat
            terbatas dan harga dapat naik tiba tiba tanpa pemberitahuan
          </div>
        </div>

        <Link
          target="_blank"
          href={
            "https://wa.me/6285175449955?text=Halo,%20nama%20saya%20[NAMA%20KAMU].%20Saya%20ingin%20melakukan%201-on-1%20coaching%20dengan%20Samuel%20Christ.%20Gimana%20prosesnya%20ya?"
          }
          className="w-fit px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
        >
          konsultasi sekarang
        </Link>
      </div>
    </div>
  );
};

export default Coaching;
