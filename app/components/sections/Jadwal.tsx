"use client";
import { useState } from "react";
import PricingBox from "../shared/PricingBox";

const programs = ["Online", "On-site di BSD"];
const schedules = ["Weekend", "Weekday"];

const scheduleData: Record<
  string,
  Record<
    string,
    {
      intake: string;
      live: string;
      mentoring: string;
      pr: string;
      pricing: string;
      currentPricing: string;
      highlights: string[];
      participantsImages: string[];
      participants: number;
    }
  >
> = {
  Online: {
    Weekday: {
      intake: "17 Mar - 18 May 2025 (2 bulan)",
      live: "Senin, 19:00 WIB",
      mentoring: "Jumat/Sabtu, 19:00 - 22:00 WIB",
      pr: "PR wajib dikerjakan masing-masing sebelum mentoring 1-on-1",
      pricing: "15.000.000",
      currentPricing: "6.499.000",
      highlights: [
        "Seefluencer University adalah Kelas Intensif yang akan memberikan tugas PR, dan membantu kamu secara personal, sehingga pengembangan konten kamu bisa jauh lebih efektif.",
        "Perlu diingat, ini bukan Kelas Online biasa, yang mana Kamu hanya menonton video dan belajar mandiri. Semua kelas & mentoring berlangsung secara live.",
      ],
      participantsImages: [
        "/images/cap-instruktur-1.png",
        "/images/cap-instruktur-2.png",
        "/images/cap-instruktur-3.png",
      ],
      participants: 300,
    },
    Weekend: {
      intake: "22 Mar - 22 May 2025 (2 bulan)",
      live: "Sabtu, 09:00 WIB",
      mentoring: "Rabu/Kamis, 19:00 - 22:00 WIB",
      pr: "PR wajib dikerjakan masing-masing sebelum mentoring 1-on-1",
      pricing: "15.000.000",
      currentPricing: "6.499.000",
      highlights: [
        "Seefluencer University adalah Kelas Intensif yang akan memberikan tugas PR, dan membantu kamu secara personal, sehingga pengembangan konten kamu bisa jauh lebih efektif.",
        "Perlu diingat, ini bukan Kelas Online biasa, yang mana Kamu hanya menonton video dan belajar mandiri. Semua kelas & mentoring berlangsung secara live.",
      ],
      participantsImages: [
        "/images/cap-instruktur-1.png",
        "/images/cap-instruktur-2.png",
        "/images/cap-instruktur-3.png",
      ],
      participants: 300,
    },
  },
  "On-site di BSD": {
    Weekday: {
      intake: "17 Mar - 18 May 2025 (2 bulan)",
      live: "Senin, 19:00 WIB di BSD, Tangerang",
      mentoring: "Jumat/Sabtu, 19:00 - 22:00 WIB Online via Zoom",
      pr: "PR wajib dikerjakan masing-masing sebelum mentoring 1-on-1",
      pricing: "15.000.000",
      currentPricing: "8.499.000",
      highlights: [
        "Kamu akan langsung belajar tatap muka di Seefluencer Headquarterrs yang berlokasi di BSD, Tangerang.",
        "Perlu diingat, ini bukan Kelas Online biasa, yang mana Kamu hanya menonton video dan belajar mandiri. Semua kelas & mentoring berlangsung secara live.",
      ],
      participantsImages: [
        "/images/cap-instruktur-1.png",
        "/images/cap-instruktur-2.png",
        "/images/cap-instruktur-3.png",
      ],
      participants: 300,
    },
    Weekend: {
      intake: "22 Mar - 22 May 2025 (2 bulan)",
      live: "Sabtu, 09:00 WIB di BSD, Tangerang",
      mentoring: "Rabu/Kamis, 19:00 - 22:00 WIB Online via Zoom",
      pr: "PR wajib dikerjakan masing-masing sebelum mentoring 1-on-1",
      pricing: "15.000.000",
      currentPricing: "8.499.000",
      highlights: [
        "Kamu akan langsung belajar tatap muka di Seefluencer Headquarterrs yang berlokasi di BSD, Tangerang.",
        "Perlu diingat, ini bukan Kelas Online biasa, yang mana Kamu hanya menonton video dan belajar mandiri. Semua kelas & mentoring berlangsung secara live.",
      ],
      participantsImages: [
        "/images/cap-instruktur-1.png",
        "/images/cap-instruktur-2.png",
        "/images/cap-instruktur-3.png",
      ],
      participants: 300,
    },
  },
};

export default function ProgramFormat() {
  const [selectedProgram, setSelectedProgram] = useState("Online");
  const [selectedSchedule, setSelectedSchedule] = useState("Weekday");

  const availableSchedules = scheduleData[selectedProgram] || {};
  const currentSchedule =
    availableSchedules[selectedSchedule] ||
    Object.values(availableSchedules)[0] ||
    {};

  const {
    intake,
    live,
    mentoring,
    pr,
    pricing,
    currentPricing,
    highlights,
    participants,
    participantsImages,
  } = currentSchedule;

  return (
    <div className="grid md:grid-cols-4">
      {/* Program Format Tabs */}
      <div className="hidden md:flex md:flex-col gap-2">
        {programs.map((program) => (
          <button
            key={program}
            className={`px-4 py-2 transition text-left ${
              selectedProgram === program
                ? "text-black font-bold underline underline-offset-8"
                : "text-gray-500"
            }`}
            onClick={() => setSelectedProgram(program)}
          >
            {program}
          </button>
        ))}
      </div>

      <div className="md:hidden gap-2 w-screen text-sm -mx-6 text-center border-b border-gray-300 grid grid-cols-2 items-center justify-center">
        {programs.map((program) => (
          <button
            key={program}
            className={`px-4 py-2 transition ${
              selectedProgram === program
                ? "text-black font-bold border-b-4 border-black w-full"
                : "text-gray-500"
            }`}
            onClick={() => setSelectedProgram(program)}
          >
            {program}
          </button>
        ))}
      </div>

      <div className="col-span-3 flex flex-col gap-5 mt-3 md:mt-0">
        {/* Schedule Tabs */}
        <div className="flex gap-2">
          {schedules.map((schedule) => (
            <button
              key={schedule}
              className={`p-2 px-4 rounded-full text-sm transition ${
                selectedSchedule === schedule
                  ? "text-black border-black border-2 font-bold"
                  : "border border-gray-500 text-gray-500"
              }`}
              onClick={() => setSelectedSchedule(schedule)}
            >
              {schedule}
            </button>
          ))}
        </div>

        {/* Intake Details */}
        <div className="bg-sky-50 p-6 rounded-lg grid md:grid-cols-2 gap-4 items-center justify-center">
          <div>
            <small className="text-brand font-bold">Detail program</small>
            <p>{intake}</p>
          </div>

          <div>
            <small className="text-brand font-bold">Jadwal live class</small>
            <p>{live}</p>
          </div>

          <div>
            <small className="text-brand font-bold">Penugasan</small>
            <p>{pr}</p>
          </div>

          <div>
            <small className="text-brand font-bold">
              Jadwal Mentoring 1-On-1
            </small>
            <p>{mentoring}</p>
          </div>
        </div>

        {/* Pricing Section */}
        <PricingBox
          pricing={pricing}
          currentPricing={currentPricing}
          highlights={highlights}
          participantsImages={participantsImages}
          participants={participants}
          hrefLink="/registration"
        />
      </div>
    </div>
  );
}
