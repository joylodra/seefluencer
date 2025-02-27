"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FaStarOfLife } from "react-icons/fa";

const message = (
  <div>
    Bootcamp bikin konten viral slot hanya untuk{" "}
    <span className="font-bold">30 orang!</span>
  </div>
);

interface MovingBannerProps {
  hrefLink: string;
}

export default function MovingBanner({ hrefLink }: MovingBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    let animationFrameId: number;
    const scrollSpeed = 0.5; // Adjust speed here

    const animate = () => {
      if (!isPaused && banner) {
        banner.scrollLeft += scrollSpeed;
        if (banner.scrollLeft >= banner.scrollWidth / 2) {
          banner.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <div
      className="w-full bg-gradient-to-r from-brand to-[#117de9] py-2 overflow-hidden sticky top-0 z-50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={bannerRef}
        className="flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide px-4"
      >
        {[...Array(10)].map((_, index) => (
          <span
            key={index}
            className="text-white text-sm flex flex-row items-center gap-4"
          >
            <div className="flex flex-row gap-2 items-center">
              <span className="text-sm">{message}</span>

              <Link
                href={hrefLink}
                target="_blank"
                className="uppercase px-4 py-1 rounded-full border-2 border-white font-bold flex items-center flex-row gap-2"
              >
                Apply Now <MdArrowOutward />
              </Link>
            </div>

            <FaStarOfLife />
          </span>
        ))}
      </div>
    </div>
  );
}
