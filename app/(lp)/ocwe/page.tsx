"use client";

// React Components
import Link from "next/link";
import Image from "next/image";

// Custom Components
import Hero from "../../components/public/Hero";
import Feature from "../../components/public/Feature";
import Title from "@/app/components/public/Title";

// Custom Components
import { socials } from "@/app/libs/utils";

const Coaching = () => {
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
                    dengan{" "}
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

            <Link
              target="_blank"
              href={"https://wa.me/6285175449955"}
              className="w-fit px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
            >
              konsultasi sekarang
            </Link>
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
                    Udah mulai ngonten tapi kok{" "}
                    <span className="underline decoration-3 italic decoration-blue-400">
                      nggak viral-viral
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 items-center text-left">
                  <div className="text-2xl">❌</div>

                  <div>
                    Mau mencoba{" "}
                    <span className="underline decoration-3 italic decoration-blue-400">
                      hal yang baru
                    </span>{" "}
                    karena sudah{" "}
                    <span className="bg-yellow-200 italic">bosan</span> dengan
                    rutinitas harian
                  </div>
                </div>

                <div className="flex gap-3 items-center text-left">
                  <div className="text-2xl">❌</div>

                  <div>
                    Kesulitan mencari{" "}
                    <span className="underline decoration-3 italic decoration-blue-400">
                      penghasilan tambahan
                    </span>{" "}
                    karena{" "}
                    <span className="bg-yellow-200 italic">padatnya</span>{" "}
                    rutinitas harian
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
              src="/images/create-sam.png"
              alt="Feature Description Image"
              width={250}
              height={250}
              className="rounded-lg shadow-lg w-full hover:shadow-3xl hover:shadow-neutral-500 transition-all h-64 object-cover object-top"
            />

            <div>
              <div>
                <span className="text-4xl font-bold">{`2) `}</span>
                Samuel sudah memiliki lebih dari{" "}
                <span className="bg-yellow-200 italic">6 tahun</span> pengalaman
                sebagai{" "}
                <span className="underline decoration-3 italic decoration-blue-400">
                  konten kreator.
                </span>
              </div>
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
              <span className="text-4xl font-bold">{`3) `}</span>
              Samuel memiliki{" "}
              <span className="bg-yellow-200 italic">2,2 juta</span> subscribers
              di YouTube, <span className="bg-yellow-200 italic">2,1 juta</span>{" "}
              di TikTok, dan{" "}
              <span className="bg-yellow-200 italic">500 ribu</span> followers
              di Instagram. Semua sosial medianya sudah{" "}
              <span className="underline decoration-3 italic decoration-blue-400">
                verified.
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Image
              src="/images/ocwe-seberapakaya.png"
              alt="Feature Description Image"
              width={250}
              height={250}
              className="rounded-lg shadow-lg w-full hover:shadow-3xl hover:shadow-neutral-500 transition-all h-64 object-cover object-top"
            />

            <div>
              <span className="text-4xl font-bold">{`4) `}</span>
              Samuel bisa mendapatkan total{" "}
              <span className="bg-yellow-200 italic">150 juta views</span>{" "}
              setiap bulannya di sosial medianya. Bahkan, video "Seberapa Kaya"
              pernah{" "}
              <span className="underline decoration-3 italic decoration-blue-400">
                trending nomor 1 di YouTube
              </span>{" "}
              dengan total{" "}
              <span className="bg-yellow-200 italic">views 11 juta.</span> Di
              TikTok, salah satu konten "Seberapa Kaya" berhasil menembus{" "}
              <span className="bg-yellow-200 italic">21,5 juta views.</span>
            </div>
          </div>
        </div>

        <Link
          target="_blank"
          href={
            "https://wa.me/6285175449955?text=Halo,%20nama%20saya%20[ISI%20NAMA%20KAMU].%20Saya%20ingin%20konsultasi%20kelas%20intensif%20Creator%20Accelerator%20Program.%20Gimana%20prosesnya%20ya?"
          }
          className="w-fit px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
        >
          konsultasi sekarang
        </Link>
      </div>

      {/* PRICING SECTION */}
      <div
        id="pricing"
        className="flex flex-col gap-5 items-center text-center"
      >
        <Title
          title="Jadwalkan sesi konsultasi 1-on-1 kamu dengan Samuel Christ sekarang dan dapatkan SOLUSI bisa sukses jadi content creator! 🤳🏽"
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
            "https://wa.me/6285175449955?text=Halo,%20nama%20saya%20[ISI%20NAMA%20KAMU].%20Saya%20ingin%20konsultasi%20kelas%20intensif%20Creator%20Accelerator%20Program.%20Gimana%20prosesnya%20ya?"
          }
          className="w-fit px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
        >
          konsultasi sekarang
        </Link>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between text-center border-t py-5 items-center gap-3">
        <div className="flex flex-row gap-2 justify-center items-center">
          {socials.map((item) => (
            <Link
              key={item.url}
              target="_blank"
              className="p-2 rounded-full bg-blue-400 hover:shadow-lg transition-all"
              href={item.url}
            >
              {item.icon}
            </Link>
          ))}
        </div>

        <div className="text-sm">
          copyright © 2023{" "}
          <span className="hover:opacity-75 font-semibold">
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
              see
            </span>
            fluencer
          </span>{" "}
          {`// made with 💙 in 🇮🇩`}
        </div>
      </div>
    </div>
  );
};

export default Coaching;
