// Custom Components
import Container from "@/app/components/ui/Container";
import Hero from "../../components/sections/Hero";

export const metadata = {
  title: "Privacy Policy",
};

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col">
      <Container tighter>
        <div className="flex flex-col gap-3 text-center">
          <h1>
            <span className="text-brand">Kebijakan Privasi</span> PT Seefluencer
            Digital Kreatif
          </h1>

          <p>
            Kebijakan privasi kami menjelaskan bagaimana kami mengumpulkan,
            menggunakan, dan melindungi informasi pribadi Anda saat Anda
            menggunakan layanan kami. Kami berkomitmen untuk menghormati privasi
            Anda dan memastikan bahwa data pribadi Anda aman.
          </p>
        </div>
      </Container>

      <Container>
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col gap-5">
          <p>
            Di Seefluencer, kami menghormati privasi pengguna kami dan
            berkomitmen untuk melindungi informasi pribadi yang Anda berikan
            kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami
            mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda
            saat Anda mengunjungi situs web kami atau menggunakan layanan kami.
          </p>

          <div>
            <h4>1. Informasi yang Kami Kumpulkan</h4>
            <p>
              Kami dapat mengumpulkan informasi pribadi dari Anda saat Anda
              membuat akun, mengisi formulir, atau menggunakan layanan kami.
              Informasi ini dapat mencakup nama, alamat email, informasi
              pembayaran, dan informasi lain yang diperlukan untuk menyediakan
              layanan kami kepada Anda. Kami juga dapat mengumpulkan informasi
              non-pribadi, seperti jenis browser Anda, alamat IP, dan halaman
              yang Anda kunjungi di situs web kami.
            </p>
          </div>

          <div>
            <h4>2. Bagaimana Kami Menggunakan Informasi Anda</h4>

            <div className="flex flex-col gap-2">
              <p>Kami dapat menggunakan informasi pribadi Anda untuk:</p>
              <ul className="ml-8 list-disc">
                <li>Menyediakan dan meningkatkan layanan kami untuk Anda</li>
                <li>
                  Berkomunikasi dengan Anda tentang layanan, promosi, dan
                  pembaruan kami
                </li>
                <li>Memproses pembayaran dan mencegah penipuan</li>
                <li>
                  Menganalisis penggunaan situs web dan meningkatkan layanan
                  kami
                </li>
                <li>Mematuhi persyaratan hukum dan peraturan</li>
              </ul>

              <p>
                Kami tidak akan membagikan informasi pribadi Anda dengan pihak
                ketiga untuk tujuan pemasaran tanpa persetujuan Anda.
              </p>
            </div>
          </div>

          <div>
            <h4>3. Cookie dan Teknologi Pelacakan</h4>
            <p>
              Kami dapat menggunakan cookie dan teknologi pelacakan lainnya
              untuk mengumpulkan informasi non-pribadi tentang penggunaan situs
              web kami. Cookie adalah file data kecil yang disimpan di perangkat
              Anda saat Anda mengunjungi situs web kami. Anda dapat mengontrol
              penggunaan cookie melalui pengaturan browser Anda.
            </p>
          </div>

          <div>
            <h4>4. Keamanan</h4>
            <p>
              Kami mengambil langkah-langkah yang wajar untuk melindungi
              informasi pribadi Anda dari akses, penggunaan, dan pengungkapan
              yang tidak sah. Namun, tidak ada transmisi data melalui Internet
              yang dapat dijamin 100% aman.
            </p>
          </div>

          <div>
            <h4>5. Hak dan Pilihan Anda</h4>
            <p>
              Anda memiliki hak untuk mengakses, memperbaiki, atau menghapus
              informasi pribadi Anda. Anda juga dapat memilih untuk tidak
              menerima email promosi dari kami. Jika Anda memiliki pertanyaan
              atau kekhawatiran tentang kebijakan privasi kami, silakan hubungi
              kami di seefluencer@gmail.com.
            </p>
          </div>

          <div>
            <h4>6. Perubahan Kebijakan Privasi</h4>
            <p>
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu.
              Kami akan memberitahukan Anda tentang perubahan yang signifikan
              dengan memposting kebijakan yang diperbarui di situs web kami.
              Penggunaan berkelanjutan Anda terhadap situs web dan layanan kami
              setelah perubahan Kebijakan Privasi menandakan bahwa Anda menerima
              perubahan tersebut.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
