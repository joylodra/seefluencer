"use client";

// React & Next Hooks
import { useState, useCallback } from "react";

// Custom Components
import Text from "./Text";

//
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface AccordionProps {
  question: string;
  answer?: string;
  customAnswer?: React.ReactNode;
  number?: string;
  initial?: boolean;
}

const Accordion = ({
  question,
  answer,
  customAnswer,
  number,
  initial = true,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(initial);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div
      onClick={toggleOpen}
      className="bg-neutral-100 rounded-xl cursor-pointer hover:opacity-90 p-3 flex flex-col gap-3 transition"
    >
      <div className="text-xl flex flex-row justify-between items-center gap-5 font-bold">
        <div className="flex flex-row gap-2">
          {number && <h6 className="text-brand font-bold text-xl">{number}</h6>}
          <h6 className="font-bold">{question}</h6>
        </div>

        <div>{isOpen ? <BsChevronUp /> : <BsChevronDown />}</div>
      </div>

      {isOpen && answer && (
        <div className={`${number ? "px-8 py-2" : "py-2"}`}>
          <p>{answer}</p>
        </div>
      )}
      {isOpen && customAnswer && <p>{customAnswer}</p>}
    </div>
  );
};

export default Accordion;
