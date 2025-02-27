// Custom Components
import Container from "@/app/components/ui/Container";
import Hero from "../../components/sections/Hero";

export const metadata = {
  title: "Syarat dan Ketentuan",
};

const Terms = () => {
  return (
    <div className="flex flex-col">
      <Container tighter>
        <div className="flex flex-col gap-3 text-center">
          <h1>
            <span className="text-brand">Syarat & Ketentuan</span> PT
            Seefluencer Digital Kreatif
          </h1>

          <p>
            Perjanjian syarat dan ketentuan kami menguraikan aturan dan pedoman
            untuk menggunakan layanan kami.
          </p>
        </div>
      </Container>

      <Container>
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col gap-5">
          <p>
            Silakan baca syarat dan ketentuan ini ("Syarat") dengan cermat
            sebelum menggunakan situs web Seefluencer ("Layanan") yang
            dioperasikan oleh Seefluencer ("kami", "kita", atau "milik kami").
          </p>

          <p>
            Dengan mengakses atau menggunakan Layanan, Anda setuju untuk terikat
            dengan Syarat ini. Jika Anda tidak setuju dengan bagian mana pun
            dari syarat ini, maka Anda tidak dapat mengakses Layanan.
          </p>

          <div>
            <h4>1. Akun</h4>
            <p>
              Ketika Anda membuat akun dengan kami, Anda harus memberikan
              informasi yang akurat dan lengkap. Anda bertanggung jawab untuk
              menjaga kerahasiaan akun dan kata sandi Anda, serta menerima
              tanggung jawab atas semua aktivitas yang terjadi di bawah akun
              Anda.
            </p>
          </div>

          <div>
            <h4>2. Pembayaran</h4>
            <p>
              Anda setuju untuk membayar semua biaya dan tagihan yang terkait
              dengan penggunaan Layanan. Pembayaran dilakukan setiap bulan, dan
              keterlambatan pembayaran dapat menyebabkan penangguhan atau
              penghentian akun Anda.
            </p>
          </div>

          <div>
            <h4>3. Konten</h4>
            <p>
              Anda bertanggung jawab penuh atas konten yang Anda unggah atau
              bagikan di Layanan. Anda menyatakan dan menjamin bahwa Anda
              memiliki semua hak yang diperlukan untuk menggunakan, memposting,
              dan mendistribusikan konten tersebut, serta bahwa konten tersebut
              tidak melanggar hak pihak ketiga.
            </p>
          </div>

          <div>
            <h4>4. Hak Kekayaan Intelektual</h4>
            <p>
              Seluruh konten dalam Layanan, termasuk namun tidak terbatas pada
              teks, grafik, logo, dan gambar, adalah milik Seefluencer atau
              pemberi lisensinya dan dilindungi oleh undang-undang hak cipta
              serta hak kekayaan intelektual lainnya. Anda tidak diperbolehkan
              menggunakan atau menggandakan konten apa pun dari Layanan tanpa
              izin tertulis dari kami.
            </p>
          </div>

          <div>
            <h4>5. Penghentian</h4>
            <p>
              Kami dapat menghentikan atau menangguhkan akun Anda serta akses ke
              Layanan kapan saja, dengan atau tanpa alasan, termasuk tetapi
              tidak terbatas pada pelanggaran Syarat ini.
            </p>
          </div>

          <div>
            <h4>6. Penafian Jaminan</h4>
            <p>
              Layanan ini disediakan "sebagaimana adanya" dan "sebagaimana
              tersedia", tanpa jaminan dalam bentuk apa pun, baik tersurat
              maupun tersirat, termasuk tetapi tidak terbatas pada jaminan
              kelayakan jual, kesesuaian untuk tujuan tertentu, atau
              non-pelanggaran.
            </p>
          </div>

          <div>
            <h4>7. Batasan Tanggung Jawab</h4>
            <p>
              Seefluencer tidak bertanggung jawab atas kerugian langsung, tidak
              langsung, insidental, khusus, atau konsekuensial yang timbul dari
              atau terkait dengan penggunaan Layanan atau Syarat ini, bahkan
              jika kami telah diberitahu tentang kemungkinan kerugian tersebut.
            </p>
          </div>

          <div>
            <h4>8. Ganti Rugi</h4>
            <p>
              Anda setuju untuk mengganti rugi dan membebaskan Seefluencer,
              afiliasi, pejabat, agen, dan karyawan dari setiap klaim atau
              tuntutan, termasuk biaya pengacara yang wajar, yang timbul dari
              penggunaan Anda atas Layanan atau pelanggaran terhadap Syarat ini.
            </p>
          </div>

          <div>
            <h4>9. Hukum yang Berlaku</h4>
            <p>
              Syarat ini diatur dan ditafsirkan sesuai dengan hukum yang berlaku
              di Indonesia. Segala perselisihan yang timbul dari atau terkait
              dengan Syarat ini akan diselesaikan di pengadilan yang berwenang
              di Indonesia.
            </p>
          </div>

          <div>
            <h4>10. Perubahan Syarat</h4>
            <p>
              Kami berhak untuk mengubah atau mengganti Syarat ini kapan saja.
              Perubahan akan berlaku segera setelah dipublikasikan di Layanan.
              Dengan terus menggunakan Layanan setelah perubahan tersebut, Anda
              setuju untuk terikat dengan Syarat yang diperbarui.
            </p>
          </div>

          <p>
            Jika Anda memiliki pertanyaan atau kekhawatiran mengenai Syarat ini,
            silakan hubungi kami di seefluencer@gmail.com.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Terms;
