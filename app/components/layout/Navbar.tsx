"use client";

// React & Next Hooks
import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

// Custom Components
import Link from "next/link";

// Icons & Images
import { HiMenuAlt4 } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

interface NavbarProps {
  landingNav?: boolean;
  logo?: React.ReactNode;
  button?: React.ReactNode;
  withBanner?: boolean;
}

export const menu = [
  // { title: "1-On-1 Coaching", href: "/coaching" },
  { title: "Seefluencer University", href: "/university" },
  { title: "Seefluencer Community", href: "/community" },
  { title: "Social Media Agency", href: "/agency" },
];

const Navbar = ({ landingNav, logo, button, withBanner }: NavbarProps) => {
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
    <>
      {landingNav ? (
        <div
          className={`bg-white sticky z-50  ${!top && `shadow-sm border-b`} ${
            withBanner ? "top-12" : "top-0"
          }`}
        >
          <div className="mx-auto max-w-5xl p-5 flex flex-row justify-between items-center gap-2">
            {logo}
            {button}
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-6xl p-5 flex flex-row justify-between items-center">
          <Link className="flex gap-2 text-lg items-center" href={`/`}>
            <Image
              src="/images/logo-trans.png"
              alt="Logo Seefluencer"
              width={135}
              height={135}
            />
          </Link>

          <div className="hidden md:flex flex-row items-center gap-1">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={`${item.href}`}
                className={`hover:bg-neutral-100 py-2 px-4 rounded-sm ${
                  pathname === item.href ? "bg-neutral-100" : ""
                }`}
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
              className="md:hidden absolute rounded shadow-lg w-3/4 bg-white right-0 top-[88px] overflow-hidden"
            >
              <div className="flex flex-col gap-3">
                {menu.map((item) => (
                  <div
                    key={item.href}
                    onClick={() => {
                      router.push(`${item.href}`);
                      setIsMenuOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-brand hover:text-white transition cursor-pointer"
                  >
                    {item.title}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
