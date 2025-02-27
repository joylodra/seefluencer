"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const logos = [
  "/images/liputan6.png",
  "/images/detik.png",
  "/images/detikinet.png",
  "/images/closethedoor.png",
  "/images/kapanlagi.png",
  "/images/folkshit.png",
  "/images/pikology.png",
  "/images/indotoday.png",
];

export default function SlidingMedia() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId: number;
    const scrollSpeed = 0.5; // Adjust speed here

    const animate = () => {
      if (slider) {
        slider.scrollLeft += scrollSpeed;
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="w-full overflow-hidden relative py-4">
      <div
        ref={sliderRef}
        className="flex gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt="Media Logo"
            width={60}
            height={60}
            style={{ objectFit: "contain" }}
            className="rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}
