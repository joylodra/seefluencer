// React & Next Components
import Link from "next/link";
import Image from "next/image";

// Custom Components
import Hero from "../../components/public/Hero";
import Cta from "../../components/public/Cta";
import Title from "@/app/components/public/Title";
import Feature from "../../components/public/Feature";
import Accordion from "@/app/components/public/faq/Accordion";

// Icons & Images
import { BiUser } from "react-icons/bi";

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
      {/* TITLE */}
      <div className="flex flex-col gap-10">
        <Hero
          fullWidth
          customTitle={
            <div className="flex flex-col gap-8">
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
                Dapatkan{" "}
                <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
                  10.000 followers
                </span>{" "}
                pertamamu, hasilkan{" "}
                <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
                  cuan
                </span>
                , & bangun{" "}
                <span className="underline decoration-3 italic decoration-blue-400">
                  personal branding
                </span>{" "}
                dari sekarang!
              </div>

              <div className="text-2xl font-normal">
                "Kamu akan{" "}
                <span className="underline decoration-3 italic decoration-blue-400">
                  dibimbing
                </span>{" "}
                secara{" "}
                <span className="bg-yellow-200 italic">
                  intensif selama 3 bulan
                </span>{" "}
                ⏰"
              </div>

              <div className="flex justify-center items-center">
                <Image
                  className="flex w-full"
                  src="/images/cap-growth.png"
                  alt="Sam Christ's social media growth"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          }
          buttonText="daftar sekarang"
          external
          href="https://wa.me/6282330423003"
        />
      </div>

      {/* PROGRAM OVERVIEW */}
      <div className="flex flex-col gap-5">
        <Title
          title="Coba Kamu Renungkan, Seberapa Sering Kamu Mengalami Masalah Ini? 🤔"
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
              </div>
            }
            src="/images/cap-stress.png"
          />
        </div>
      </div>

      {/* PROGRAM OVERVIEW */}
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="text-center font-bold text-2xl md:text-4xl">
          Sebenarnya, ada satu cara yang{" "}
          <span className="underline decoration-3 italic decoration-blue-400">
            termudah & termurah
          </span>{" "}
          untuk <span className="bg-yellow-200 italic">menghasilkan cuan</span>{" "}
          meskipun Kamu punya banyak rutinitas harian.
        </div>

        <div className="text-center font-bold w-fit animate-bounce text-2xl md:text-4xl">
          <div className="bg-black p-1 text-white italic">
            Menjadi <span className="uppercase">"Content Creator"</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
          <Image
            src={"/images/cap-endorse-1.png"}
            alt="Feature Description Image"
            width={250}
            height={250}
            className="rounded-lg shadow-lg h-52 w-full object-cover hover:shadow-3xl hover:shadow-neutral-500 transition-all"
          />

          <Image
            src={"/images/cap-endorse-2.png"}
            alt="Feature Description Image"
            width={250}
            height={250}
            className="rounded-lg shadow-lg h-52 w-full object-cover hover:shadow-3xl hover:shadow-neutral-500 transition-all"
          />

          <Image
            src={"/images/cap-endorse-3.png"}
            alt="Feature Description Image"
            width={250}
            height={250}
            className="rounded-lg shadow-lg h-52 w-full object-cover hover:shadow-3xl hover:shadow-neutral-500 transition-all"
          />
        </div>

        <Link
          target="_blank"
          href={"https://wa.me/6282330423003"}
          className="w-fit px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
        >
          daftar sekarang
        </Link>
      </div>

      {/* PROGRAM OVERVIEW */}
      <div className="flex flex-col gap-10">
        <Title
          title="Kenapa Kamu harus jadi Content Creator? 📲"
          center
          underline
        />

        <Feature
          description={
            <div>
              <span className="text-4xl font-bold">{`1)`} </span> Dikutip dari{" "}
              <span className="italic">katadata.co.id</span>,{" "}
              <span className="underline decoration-3 italic decoration-blue-400">
                potensi
              </span>{" "}
              industri content creator di Indonesia ditaksir senilai{" "}
              <span className="bg-yellow-200 italic">Rp7 Triiliun!</span>
            </div>
          }
          src="/images/cap-industri.png"
        />

        <Feature
          reverse
          description={
            <div>
              <span className="text-4xl font-bold">{`2)`}</span> Jumlah{" "}
              <span className="underline decoration-3 italic decoration-blue-400">
                pengguna
              </span>{" "}
              media sosial yang{" "}
              <span className="bg-yellow-200 italic">tiada habisnya</span>
            </div>
          }
          src="/images/cap-jumlah-1.png"
        />
      </div>

      {/* PROGRAM OVERVIEW */}
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="text-center text-2xl md:text-4xl font-bold w-fit italic">
          <div className="bg-black p-1 text-white">
            “Attention is the new currency.”
          </div>
        </div>

        <div className="text-center text-2xl md:text-4xl font-bold">
          Kalau sampai sekarang Kamu belum eksis dan{" "}
          <span className="underline decoration-3 italic decoration-blue-400">
            manfaatin media sosial
          </span>
          , bisa-bisa Kamu akan{" "}
          <span className="bg-yellow-200 italic">ketinggalan zaman!</span>
        </div>

        <Link
          target="_blank"
          href={"https://wa.me/6282330423003"}
          className="w-fit px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
        >
          daftar sekarang
        </Link>
      </div>

      {/* PROGRAM OVERVIEW */}
      <div className="flex flex-col gap-10 text-center items-center justify-center">
        <div className="flex flex-col gap-3">
          <Title
            title="Potensi Media Sosial Juga Sudah Dibuktikan Oleh Samuel Christ 💁‍♂️"
            center
            underline
          />

          <div>
            "Pelajari bagaimana cara Samuel Christ bisa menghasilkan{" "}
            <span className="bg-yellow-200 italic">Rp250.000.000</span> dari
            Media Sosial dalam{" "}
            <span className="underline decoration-3 italic decoration-blue-400">
              7 hari
            </span>{" "}
            ↓"
          </div>
        </div>

        <iframe
          allow="fullscreen;"
          src="https://www.youtube.com/embed/bfQrBQAk1Ks"
          className="aspect-video w-full"
        />

        <Link
          target="_blank"
          href={"https://wa.me/6282330423003"}
          className="w-fit px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
        >
          daftar sekarang
        </Link>
      </div>

      {/* PENGENALAN PROGRAM */}
      <div className="flex flex-col gap-10 text-center justify-center items-center">
        <div className="text-2xl md:text-4xl font-bold">
          Memperkenalkan,{" "}
          <span className="bg-yellow-200 italic">
            creator accelerator program
          </span>{" "}
          yang dirancang oleh{" "}
          <span className="underline decoration-3 italic decoration-blue-400">
            Seefluencer University
          </span>
        </div>

        <Image
          src={"/images/cap-cap.png"}
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
          buat Kamu yang mau mendapatkan{" "}
          <span className="underline decoration-3 italic decoration-blue-400">
            bimbingan selama 3 bulan
          </span>{" "}
          & jadi content creator{" "}
          <span className="bg-yellow-200 italic">berpenghasilan</span>."
        </div>

        <Link
          target="_blank"
          href={"https://wa.me/6282330423003"}
          className="w-fit px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
        >
          daftar sekarang
        </Link>
      </div>

      {/* KURIKULUM */}
      <div className="flex flex-col gap-10 items-center justify-center">
        <Title
          title="Apa Saja Yang Akan Kamu Pelajari Selama 12 Minggu Ini? 👨‍💻"
          underline
          center
        />

        <div className="flex flex-col gap-2">
          <Accordion
            question="🤳🏽 Personal Branding"
            customAnswer={
              <>
                Bagaimana{" "}
                <span className="underline decoration-3 italic decoration-blue-400">
                  memaksimalkan dan membangun
                </span>{" "}
                personal branding yang unik, spesifik dan{" "}
                <span className="bg-yellow-200 italic">
                  dilirik oleh brand/potensial klien.
                </span>
              </>
            }
          />

          <Accordion
            question="📝 How To Write A Killer Script"
            customAnswer={
              <>
                Strategi membuat script, membuat{" "}
                <span className="underline decoration-3 italic decoration-blue-400">
                  konten viral
                </span>
                , dan membongkar teknik looping video yang dipakai oleh{" "}
                <span className="bg-yellow-200 italic">Samuel Christ.</span>
              </>
            }
          />

          <Accordion
            question="📸 How to Properly Present Yourself In Front Of Camera"
            customAnswer={
              <>
                Kamu belum{" "}
                <span className="underline decoration-3 italic decoration-blue-400">
                  PD berbicara
                </span>{" "}
                di depan kamera? Kita akan berikan panduan dan{" "}
                <span className="bg-yellow-200 italic">
                  cara memaksimalkannya.
                </span>
              </>
            }
          />

          <Accordion
            question="🎥 The Power Of CapCut"
            customAnswer={
              <>
                <span className="underline decoration-3 italic decoration-blue-400">
                  Praktik dan tutorial editing
                </span>{" "}
                untuk memaksimalkan konten Kamu menggunakan CapCut beserta{" "}
                <span className="bg-yellow-200 italic">studi kasusnya.</span>
              </>
            }
          />

          <Accordion
            question="🏋️‍♀️ How to Manage & Scale Your Content Creation"
            customAnswer={
              <>
                Kamu punya{" "}
                <span className="underline decoration-3 italic decoration-blue-400">
                  aktivitas harian yang padat?
                </span>{" "}
                Temukan cara yang lebih{" "}
                <span className="underline decoration-3 italic decoration-blue-400">
                  cepat & tepat
                </span>{" "}
                dalam membuat konten meskipun Kamu punya{" "}
                <span className="bg-yellow-200 italic">sedikit waktu.</span>
              </>
            }
          />
        </div>

        <Link
          target="_blank"
          href={"https://wa.me/6282330423003"}
          className="w-fit px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
        >
          daftar sekarang
        </Link>
      </div>

      {/* FASILITAS */}
      <div className="flex flex-col gap-10 items-center justify-center">
        <Title
          title="Fasilitas Apa Saja yang Kamu Dapatkan di Kelas Ini? ⛱"
          underline
          center
        />

        <Feature
          description={
            <div className="flex flex-col gap-3">
              <div className="font-bold">
                <span className="text-4xl">{`1) `}</span>
                <span className="text-xl underline decoration-3 decoration-blue-400">
                  Materi Eksklusif ✏️
                </span>
              </div>

              <div>
                Dengan{" "}
                <span className="bg-yellow-200 italic">
                  pengalaman 6+ tahun
                </span>{" "}
                dan dibawakan langsung oleh Samuel Christ, akan memudahkan Kamu
                untuk belajar bagaimana{" "}
                <span className="underline decoration-3 italic decoration-blue-400">
                  membuat konten yang lebih efektif & persuasif.
                </span>
              </div>
            </div>
          }
          src="/images/cap-materi.png"
        />

        <Feature
          description={
            <div className="flex flex-col gap-3">
              <div className="text-xl font-bold">
                <span className="text-4xl">{`2) `}</span>
                <span className="underline decoration-3 decoration-blue-400">
                  1-on-1 Coaching with Samuel Christ 💁‍♂️
                </span>
              </div>

              <div>
                Kami sangat mengerti, setiap orang{" "}
                <span className="underline decoration-3 italic decoration-blue-400">
                  punya pemahaman dan tantangan yang berbeda-beda
                </span>
                . Maka dari itu, Kamu bisa mendapatkan{" "}
                <span className="bg-yellow-200 italic">
                  12 kali konsultasi langsung bersama Samuel Christ & expert
                  lainnya.
                </span>
              </div>
            </div>
          }
          src="/images/cap-coaching.png"
          reverse
        />

        <Feature
          description={
            <div className="flex flex-col gap-3">
              <div className="text-xl font-bold">
                <span className="text-4xl">{`3) `}</span>
                <span className="underline decoration-3 decoration-blue-400">
                  Rapot & Penugasan 📒
                </span>
              </div>

              <div>
                Perlu diingat, ini{" "}
                <span className="bg-yellow-200 italic">
                  bukan Kelas Online biasa
                </span>{" "}
                , yang mana Kamu hanya menonton video dan belajar mandiri. Semua{" "}
                <span className="bg-yellow-200 italic">
                  kelas & coaching berlangsung secara live.
                </span>{" "}
                Agar perkembanganmu bisa lebih efektif, Kami akan memantau{" "}
                <span className="underline decoration-3 italic decoration-blue-400">
                  secara intensif.
                </span>
              </div>
            </div>
          }
          src="/images/cap-rapot.png"
        />

        <Link
          target="_blank"
          href={"https://wa.me/6282330423003"}
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
          <div className="line-through text-xl">Rp7.499.999</div>
          <h1 className="text-4xl text-red-500 font-bold rounded-lg animate-bounce">
            Rp4.999.999
          </h1>
          <div className="italic text-sm">
            *Ini adalah harga pre-order dan hanya kita buka untuk 20 orang saja.{" "}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="text-left">
            <span className="text-4xl font-bold">{`1.`}</span>
            <div>
              Kamu hanya perlu menyimpan{" "}
              <span className="bg-yellow-200 italic">Rp56.000/hari</span> selama
              3 bulan untuk{" "}
              <span className="underline decoration-3 italic decoration-blue-400">
                bisa mengikuti kelas intensif ini.
              </span>
            </div>
          </div>

          <div className="text-right">
            <span className="text-4xl font-bold">{`2.`}</span>
            <div>
              Perlu diingat, ini{" "}
              <span className="underline decoration-3 italic decoration-blue-400">
                bukan Kelas Online biasa
              </span>{" "}
              , yang mana Kamu hanya menonton video dan belajar mandiri. Semua{" "}
              <span className="bg-yellow-200 italic">
                kelas & coaching berlangsung secara live.
              </span>
            </div>
          </div>

          <div className="text-left">
            <span className="text-4xl font-bold">{`3.`}</span>
            <div>
              Seefluencer University adalah Kelas Intensif yang akan memberikan
              <span className="underline decoration-3 italic decoration-blue-400">
                tugas PR
              </span>
              , dan{" "}
              <span className="bg-yellow-200 italic">
                membantu Kamu secara personal
              </span>
              , sehingga konten & personal branding-mu bisa jauh lebih efektif.
            </div>
          </div>
        </div>

        <Link
          target="_blank"
          href={"https://wa.me/6282330423003"}
          className="w-fit px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
        >
          daftar sekarang
        </Link>
      </div>

      {/* MERCH SECTION */}
      <div className="flex flex-col gap-10">
        <div
          className={`grid grid-cols-1 gap-3 items-center md:grid-cols-2 text-center md:text-left`}
        >
          <div
            className={`col-span-1 order-last md:order-first flex flex-col gap-5 justify-center items-center md:items-start`}
          >
            <div className="text-2xl md:text-4xl font-bold">
              Dapatkan Juga{" "}
              <span className="underline decoration-3 italic decoration-blue-400">
                Merchandise Eksklusif untuk
              </span>{" "}
              <span className="bg-yellow-200 italic">20 Orang Pertama 🎁</span>
            </div>

            <Link
              target="_blank"
              href={"https://wa.me/6282330423003"}
              className="w-fit px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
            >
              daftar sekarang
            </Link>
          </div>

          <div className="col-span-1 flex justify-center md:justify-end">
            <Image
              src={"/images/cap-merch-2.png"}
              alt="Feature Description Image"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Influencers;
