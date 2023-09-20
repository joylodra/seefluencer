"use client";

// Custom Components
import { capFAQ } from "../libs/utils";
import Accordion from "./Accordion";

const FaqSection = () => {
  return (
    <>
      {capFAQ.map((item) => (
        <>
          <Accordion question={item.question} answer={item.answer} />
          <div className="px-3">
            <hr className="border border-gray-300" />
          </div>
        </>
      ))}
    </>
  );
};

export default FaqSection;
