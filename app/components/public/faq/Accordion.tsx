"use client";

// React & Next Hooks
import { useState, useCallback } from "react";

// Custom Components
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion = ({ question, answer }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div>
      <div
        onClick={toggleOpen}
        className="p-3 text-xl shadow-3xl flex flex-row justify-between items-center gap-5 rounded-lg font-bold bg-blue-400 text-white cursor-pointer hover:opacity-90 transition-all"
      >
        {question}
        {isOpen ? <BsChevronUp /> : <BsChevronDown />}
      </div>

      {isOpen && <p className="p-3">{answer}</p>}
    </div>
  );
};

export default Accordion;
