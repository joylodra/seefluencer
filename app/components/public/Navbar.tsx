"use client";

// React & Next Hooks
import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

// Custom Components
import Link from "next/link";

// Icons & Images
import { HiMenuAlt4 } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";

export const menu = [
  { title: "Seefluencer University", href: "/university" },
  { title: "KOL Management", href: "/kol" },
  // { title: "Blog", href: "/blog" },
];

const Navbar = () => {
  const router = useRouter();

  const [top, setTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  const toggleMenuOpen = useCallback(() => {
    setIsMenuOpen((value) => !value);
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className={`sticky top-0 z-50 bg-gray-50 ${!top && `shadow-lg`}`}>
      <div className="mx-auto max-w-5xl p-5 flex flex-row justify-between items-center">
        <Link className="text-xl font-bold" href={`/`}>
          <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
            see
          </span>
          fluencer
        </Link>

        <div className="hidden md:flex flex-row gap-5 items-center">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={`${item.href}`}
              className={`hover:underline ${pathname === item.href ? "" : ""}`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div
          onClick={toggleMenuOpen}
          className="block md:hidden cursor-pointer hover:opacity-70 transition py-2"
        >
          {isMenuOpen ? <GrFormClose size={28} /> : <HiMenuAlt4 size={28} />}
        </div>

        {isMenuOpen && (
          <div
            ref={menuRef}
            className="md:hidden absolute rounded-xl shadow-3xl w-3/4 bg-white right-0 top-[88px] overflow-hidden"
          >
            <div className="flex flex-col">
              {menu.map((item) => (
                <div
                  key={item.href}
                  onClick={() => {
                    router.push(`${item.href}`);
                    setIsMenuOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-blue-400 hover:text-white transition cursor-pointer"
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
