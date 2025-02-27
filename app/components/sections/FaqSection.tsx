"use client";

// Custom Components
import { capFAQ } from "../../libs/utils";
import Accordion from "../ui/Accordion";

const FaqSection = () => {
  return (
    <>
      {capFAQ.map((item) => (
        <div key={item.answer} className="mb-3">
          <Accordion
            initial={true}
            question={item.question}
            answer={item.answer}
          />
        </div>
      ))}
    </>
  );
};

export default FaqSection;
