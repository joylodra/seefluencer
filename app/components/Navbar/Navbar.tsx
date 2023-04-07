"use client";

// React & Next Hooks
import { useState, useEffect } from "react";

// Custom Components
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div
      className={`sticky top-0 z-50 bg-white opacity-95 ${!top && `shadow-lg`}`}
    >
      <div className="mx-auto max-w-5xl p-5 flex flex-row justify-between items-center">
        <Link className="text-xl font-bold" href="/">
          <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
            see
          </span>
          fluencer
        </Link>

        <Link
          target="_blank"
          href="https://wa.me/6285174259955"
          className="hover:underline"
        >
          contact us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
