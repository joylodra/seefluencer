// components/WhatsAppButton.tsx
"use client";

import React from "react";

interface WhatsAppButtonProps {
  numbers: string[]; // Array of WhatsApp numbers
  buttonText: string;
  whatsappText?: string;
  full?: boolean;
  noFull?: boolean;
  regular?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  numbers,
  buttonText,
  full,
  noFull,
  regular,
  whatsappText,
}) => {
  const handleClick = () => {
    if (numbers.length === 0) return;

    // Select a random number from the list
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const selectedNumber = numbers[randomIndex];

    // Redirect to WhatsApp
    const whatsappLink = `https://wa.me/${selectedNumber}?text=${whatsappText}`;
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className={`
      ${regular && "w-full md:w-fit"}
      ${full && "w-full"}  
      ${noFull && "w-fit"}
      text-center px-4 py-2 md:px-8 bg-[#0b64be] text-white text-base md:text-lg rounded-sm hover:shadow-md transition-all font-bold cursor-pointer capitalize`}
    >
      {buttonText}
    </button>
  );
};

export default WhatsAppButton;
