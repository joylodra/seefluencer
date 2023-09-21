"use client";

// React & Next Hooks
import { useState, useCallback } from "react";

// Custom Components
import Text from "./ui/Text";

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
      className="bg-neutral-200 rounded-lg cursor-pointer hover:opacity-90 p-3 flex flex-col gap-3"
    >
      <div className="text-xl flex flex-row justify-between items-center gap-5 font-bold">
        <div className="flex flex-row gap-2">
          {number && (
            <div className="text-blue-400 font-bold text-xl">{number}</div>
          )}
          <div>{question}</div>
        </div>

        <div>{isOpen ? <BsChevronUp /> : <BsChevronDown />}</div>
      </div>

      {isOpen && answer && (
        <div className={`${number ? "px-8 py-2" : "py-2"}`}>
          <Text text={answer} paragraph />
        </div>
      )}
      {isOpen && customAnswer && <p>{customAnswer}</p>}
    </div>
  );
};

export default Accordion;
