"use client";
import { useState, useRef, useEffect } from "react";
import Button from "./Button";

interface SlidingMenuProps {
  withNav?: boolean;
}

const menuItems = [
  { label: "Program", id: "program" },
  { label: "Alumni", id: "alumni" },
  { label: "Untuk Siapa?", id: "siapa" },
  { label: "Metode Belajar", id: "metode" },
  { label: "Kurikulum", id: "kurikulum" },
  { label: "Instruktur", id: "instruktur" },
  { label: "Jadwal & Biaya", id: "pricing" },
  { label: "Graduation", id: "graduation" },
];

export default function SlidingMenu({ withNav }: SlidingMenuProps) {
  const [activeSection, setActiveSection] = useState("program");
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleScroll = () => {
    const offsets = menuItems
      .map((item) => {
        const section = document.getElementById(item.id);
        return section ? { id: item.id, offset: section.offsetTop } : null;
      })
      .filter(Boolean) as { id: string; offset: number }[];

    const scrollPosition = window.scrollY + 150; // Adjusted for navbar height
    for (let i = offsets.length - 1; i >= 0; i--) {
      if (scrollPosition >= offsets[i].offset) {
        setActiveSection(offsets[i].id);
        scrollToActiveButton(offsets[i].id);
        break;
      }
    }
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 100, behavior: "smooth" });
      setActiveSection(id);
      scrollToActiveButton(id);
    }
  };

  const scrollToActiveButton = (id: string) => {
    const index = menuItems.findIndex((item) => item.id === id);
    if (menuRef.current && buttonRefs.current[index]) {
      const menu = menuRef.current;
      const button = buttonRefs.current[index];
      const buttonLeft = button!.offsetLeft;
      const buttonWidth = button!.offsetWidth;
      const menuScrollLeft = menu.scrollLeft;
      const menuWidth = menu.clientWidth;

      // Adjust if the active button is out of view
      if (
        buttonLeft < menuScrollLeft ||
        buttonLeft + buttonWidth > menuScrollLeft + menuWidth
      ) {
        menu.scrollTo({
          left: buttonLeft - menuWidth / 2 + buttonWidth / 2,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Version */}
      <div
        className={`hidden md:flex sticky ${
          withNav ? "top-36" : "top-14"
        } bg-white border border-gray-200 shadow-sm h-fit rounded-xl w-full flex-col p-3`}
      >
        <div className="flex flex-col gap-3">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left px-3 py-1 hover:text-black transition ${
                activeSection === item.id ? "font-bold" : "text-gray-400"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="p-3">
          <hr />
        </div>

        <div className="flex flex-col gap-2 p-3">
          <Button
            external
            buttonText="Apply Now"
            full
            hrefLink="/registration"
          />
        </div>
      </div>

      {/* Mobile Sliding Menu */}
      <div
        className={`z-50 md:hidden sticky ${
          withNav ? "top-[125px]" : "top-12"
        } w-screen -mx-6 bg-white overflow-hidden border-b border-gray-300`}
      >
        <div
          className="overflow-x-auto flex whitespace-nowrap scrollbar-hide"
          ref={menuRef}
        >
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              ref={(el) => (buttonRefs.current[index] = el)}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-4 transition ${
                activeSection === item.id
                  ? "font-bold underline underline-offset-[19px] decoration-4"
                  : "text-gray-400"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
