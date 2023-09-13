"use client";

// React & Next Components
import Link from "next/link";
import Image from "next/image";

// Custom Components
import Hero from "../../components/public/Hero";
import Title from "@/app/components/public/Title";
import Feature from "../../components/public/Feature";
import Accordion from "@/app/components/public/faq/Accordion";
import { socials } from "@/app/libs/utils";

const MiniClass = () => {
  const handleClick = () => {
    const element = document.getElementById("pricing")!;
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-16">
      {/* TITLE */}
      <div className="flex flex-col gap-10 items-center">
        <Hero
          fullWidth
          customTitle={
            <div className="flex flex-col gap-8 items-center">
              <div className="text-lg font-normal flex justify-center items-center flex-row gap-1">
                <div className="font-bold">
                  <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
                    see
                  </span>
                  fluencer
                </div>

                <div>University</div>
              </div>

              <div>
                3-day intensive mini{" "}
                <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
                  creator class
                </span>
              </div>

              <div className="font-normal text-2xl">
                "Samuel Christ akan{" "}
                <span className="underline decoration-3 italic decoration-blue-400">
                  bongkar rahasianya
                </span>{" "}
                bisa <span className="bg-yellow-200 italic">viral</span> sebagai
                content creator melalui{" "}
                <span className="underline decoration-3 italic decoration-blue-400">
                  kelas intensif
                </span>{" "}
                <span className="bg-yellow-200 italic font-bold">GRATIS</span>{" "}
                yang berlangsung selama 3 hari 🤩"
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

      {/* PROBLEM */}
      <div className="flex flex-col gap-5">
        <Title
          title="Apakah Kamu sedang mengalami hal-hal ini? 😭"
          center
          underline
        />

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
            src="/images/imcc-stress.png"
          />
        </div>
      </div>

      {/* PENGENALAN PROGRAM */}
      <div className="flex flex-col gap-10 text-center justify-center items-center">
        <div className="text-2xl md:text-4xl font-bold">
          Memperkenalkan,{" "}
          <span className="bg-yellow-200 italic">
            3-day intensive mini creator class
          </span>{" "}
          yang dirancang oleh{" "}
          <span className="underline decoration-3 italic decoration-blue-400">
            Seefluencer University
          </span>
        </div>

        <Image
          src={"/images/imcc-imcc.png"}
          alt="Feature Description Image"
          width={250}
          height={250}
          className="rounded-lg shadow-lg h-64 w-full max-w-xl object-cover hover:shadow-3xl hover:shadow-neutral-500 transition-all"
        />

        <div>
          "
          <span className="underline decoration-3 italic decoration-blue-400">
            Kelas intensif
          </span>{" "}
          buat Kamu yang mau belajar{" "}
          <span className="underline decoration-3 italic decoration-blue-400">
            selama 3 hari
          </span>{" "}
          bagaimana caranya bikin konten yang bisa{" "}
          <span className="bg-yellow-200 italic">viral</span>."
        </div>

        <div
          onClick={() => handleClick()}
          className="w-fit px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold cursor-pointer"
        >
          lihat penawaran
        </div>
      </div>

      {/* INSTRUCTOR */}
      <div className="flex flex-col gap-10 items-center justify-center">
        <Title
          title="Meet Your Instructor, Samuel Christ! 👨‍🏫"
          underline
          center
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

      {/* KURIKULUM */}
      <div className="flex flex-col gap-10 items-center justify-center">
        <Title
          title="Apa Saja Yang Akan Kamu Pelajari Selama 3 Hari Ini? 🤔"
          underline
          center
        />

        <div className="flex flex-col gap-2">
          <Accordion
            question="🤳🏽 Day 1: Potensi GILA Konten Kreator Di Masa Depan"
            customAnswer={
              <>
                Bedah tuntas{" "}
                <span className="bg-yellow-200 italic">
                  peluang untuk menjadi content creator sukses
                </span>{" "}
                di Indonesia dan{" "}
                <span className="underline decoration-3 italic decoration-blue-400">
                  sekaligus penghasilannya.
                </span>
              </>
            }
          />

          <Accordion
            question="💻 Day 2: RAHASIA Bangun Personal Branding Di Sosmed"
            customAnswer={
              <>
                Belajar cara{" "}
                <span className="bg-yellow-200 italic">
                  memaksimalkan dan membangun personal branding
                </span>{" "}
                personal branding yang unik, spesifik, dan{" "}
                <span className="underline decoration-3 italic decoration-blue-400">
                  dilirik oleh brand/potensial klien.
                </span>
              </>
            }
          />

          <Accordion
            question="📈 Day 3: Cara AMPUH Bikin Konten VIRAL"
            customAnswer={
              <>
                <span className="underline decoration-3 italic decoration-blue-400">
                  Pelajari komponen-komponen
                </span>{" "}
                dan strategi yang dibutuhkan untuk membuat sebuah{" "}
                <span className="bg-yellow-200 italic">konten bisa viral.</span>
              </>
            }
          />
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
        className="flex flex-col gap-10 text-center items-center justify-center"
      >
        <Title title="Berapa Investasi Kelas Ini? 🤑" center underline />

        <Image
          src={"/images/ocwe-150m.png"}
          alt="Feature Description Image"
          width={400}
          height={400}
          className="rounded-lg shadow-lg w-full max-w-xs"
        />

        <div className="flex flex-col gap-3 text-center">
          <div className="line-through text-xl">Rp2.499.999</div>
          <div className="text-4xl text-red-500 rounded-lg animate-bounce">
            GRATIS!
          </div>
          <div className="italic text-sm">
            *Slot kelas terbatas, kita hanya menerima 250 orang yang berpotensi
            untuk setiap batchnya.{" "}
          </div>
        </div>

        <Link
          target="_blank"
          href="https://forms.gle/RnciRxMeiRw6GVe39"
          className="w-fit px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
        >
          daftar sekarang
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
          <span className="hover:opacity-75">
            <span className="font-bold">see</span>
            fluencer
          </span>{" "}
          {`// made with 💙 in 🇮🇩`}
        </div>
      </div>
    </div>
  );
};

export default MiniClass;
