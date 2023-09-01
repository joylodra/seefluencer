"use client";

// React & Next Hooks
import { useState, useCallback } from "react";

// Custom Components
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface AccordionProps {
  question: string;
  answer?: string;
  customAnswer?: React.ReactNode;
}

const Accordion = ({ question, answer, customAnswer }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div>
      <div
        onClick={toggleOpen}
        className="text-xl p-3 shadow-3xl flex flex-row justify-between items-center gap-5 rounded-lg font-bold bg-black text-white cursor-pointer hover:opacity-90 transition-all"
      >
        {question}
        {isOpen ? <BsChevronUp /> : <BsChevronDown />}
      </div>

      {isOpen && answer && <p className="p-3">{answer}</p>}
      {isOpen && customAnswer && <p className="p-3">{customAnswer}</p>}
    </div>
  );
};

export default Accordion;
