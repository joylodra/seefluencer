"use client";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";

export default function GoogleReview() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-2">
      <div className="flex gap-2">
        <div className="font-semibold">
          Excellent 5.0{" "}
          <span className="text-gray-400 font-normal">out of 5</span>
        </div>

        {/* Star Icons */}
        <div className="flex items-center text-yellow-400">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      </div>

      {/* Google Reviews Link */}
      <Image
        src="/images/googlereview.png"
        alt="Google Review"
        width={110}
        height={110}
      />
    </div>
  );
}
