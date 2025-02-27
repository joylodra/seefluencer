import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function CallToActionBox() {
  return (
    <div className="flex flex-col gap-5 text-center items-center p-3 md:p-5 rounded-xl border border-gray-200 shadow-lg">
      <div>
        <h2>
          Ada <span className="text-brand">Pertanyaan?</span>
        </h2>

        <p>
          Langsung hubungi tim Seefluencer dan bebas tanyakan apa saja seputar
          program ataupun jasa yang kami tawarkan!
        </p>
      </div>

      <a
        href="https://wa.wizard.id/91520e"
        className="flex flex-row gap-2 items-center justify-center text-center px-4 py-2 md:px-8 bg-brand text-white text-base md:text-lg rounded-full hover:shadow-md transition-all font-bold cursor-pointer capitalize w-full md:w-fit"
      >
        Hubungi Kami <FaWhatsapp />
      </a>
    </div>
  );
}
