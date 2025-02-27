"use client";

import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";

interface YouTubeModalProps {
  videoId: string;
  aspectRatio?: "square" | "shorts" | "long";
}

const aspectClasses = {
  square: "aspect-[1/1]",
  shorts: "aspect-[9/16]",
  long: "aspect-[16/9]",
};

export default function YouTubeModal({
  videoId,
  aspectRatio = "shorts",
}: YouTubeModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`relative w-full ${aspectClasses[aspectRatio]} rounded-xl overflow-hidden shadow-lg bg-purple-100`}
    >
      {/* Inline Muted Video */}
      <div
        className="relative cursor-pointer w-full h-full"
        onClick={() => setIsOpen(true)}
      >
        <iframe
          className="w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Custom Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-50 p-4 rounded-full shadow-lg hover:scale-110 transition-transform border-2 border-white">
            <FaPlay size={15} className="text-white" />
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className={`relative w-[90%] md:w-[30%] max-w-[720px] ${aspectClasses[aspectRatio]} bg-black rounded-lg overflow-hidden`}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
