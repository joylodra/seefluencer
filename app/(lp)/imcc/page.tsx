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
  return (
    <div className="flex flex-col gap-16">
      {/* TITLE */}
      <div className="flex flex-col gap-10">
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
                "Kami akan{" "}
                <span className="underline decoration-3 italic decoration-blue-400">
                  bongkar rahasia Samuel Christ
                </span>{" "}
                bisa <span className="bg-yellow-200 italic">viral</span> sebagai
                content creator melalui{" "}
                <span className="underline decoration-3 italic decoration-blue-400">
                  kelas intensif
                </span>{" "}
                <span className="bg-yellow-200 italic">GRATIS</span> yang
                berlangsung selama 3 hari 🤩"
              </div>

              {/* <Image
                className="flex w-full max-w-md rounded-xl shadow-xl"
                src="/images/ocwe-growth.png"
                alt="Sam Christ's social media growth"
                width={800}
                height={800}
              /> */}
            </div>
          }
          buttonText="daftar sekarang"
          href="https://forms.gle/RnciRxMeiRw6GVe39"
        />
      </div>

      {/* PROBLEM */}
      <div className="flex flex-col gap-5">
        <Title
          title="Kamu lagi ngerasain hal-hal ini nggak? 😭"
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
                    Sudah{" "}
                    <span className="underline decoration-3 italic decoration-blue-400">
                      ikut kelas online
                    </span>
                    , tapi masih bingung dan{" "}
                    <span className="bg-yellow-200 italic">
                      hanya panas di awal?
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

                <div className="flex gap-3 items-center text-left">
                  <div className="text-2xl">❌</div>
                  <div>
                    Sudah pernah{" "}
                    <span className="underline decoration-3 italic decoration-blue-400">
                      mencoba bikin konten
                    </span>{" "}
                    tapi{" "}
                    <span className="bg-yellow-200 italic">
                      nggak viral-viral
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

        <Link
          target="_blank"
          href="https://forms.gle/RnciRxMeiRw6GVe39"
          className="w-fit px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
        >
          daftar sekarang
        </Link>
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
              src="/images/ocwe-150m.png"
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
          href="https://forms.gle/RnciRxMeiRw6GVe39"
          className="w-fit px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
        >
          daftar sekarang
        </Link>
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
                <span className="underline decoration-3 italic decoration-blue-400">
                  Bongkar rahasia perjalanan Samuel Christ sebagai content
                  creator
                </span>{" "}
                selama{" "}
                <span className="bg-yellow-200 italic">
                  6 tahun ke belakang
                </span>{" "}
                karena{" "}
                <span className="underline decoration-3 italic decoration-blue-400">
                  peluang untuk menjadi content creator yang sukses
                </span>{" "}
                di Indonesia masih{" "}
                <span className="bg-yellow-200 italic">
                  sangat-sangat besar.
                </span>
              </>
            }
          />

          <Accordion
            question="💻 Day 2: RAHASIA Bangun Personal Branding Di Internet"
            customAnswer={
              <>
                <span className="underline decoration-3 italic decoration-blue-400">
                  Strategi ampuh
                </span>{" "}
                dan komponen-komponen yang dibutuhkan untuk membuat sebuah
                konten bisa <span className="bg-yellow-200 italic">viral.</span>
              </>
            }
          />

          <Accordion
            question="📈 Day 3: Cara AMPUH Bikin Konten VIRAL"
            customAnswer={
              <>
                Kamu akan diajarkan bagaimana caranya{" "}
                <span className="underline decoration-3 italic decoration-blue-400">
                  bikin konten
                </span>{" "}
                yang <span className="bg-yellow-200 italic">auto viral</span>
              </>
            }
          />
        </div>

        <Link
          target="_blank"
          href="https://forms.gle/RnciRxMeiRw6GVe39"
          className="w-fit px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
        >
          daftar sekarang
        </Link>
      </div>

      {/* PRICING SECTION */}
      <div
        id="pricing"
        className="flex flex-col gap-10 text-center items-center justify-center"
      >
        <Title title="Berapa Investasi Kelas Ini? 🤑" center underline />

        <div className="flex flex-col gap-3 text-center">
          <div className="line-through text-xl">Rp2.499.999</div>
          <h1 className="text-4xl text-red-500 font-bold rounded-lg animate-bounce">
            GRATIS!
          </h1>
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

export default MiniClass;
