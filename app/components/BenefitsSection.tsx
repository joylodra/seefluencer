"use client";

// Custom Components
import { kolBenefits } from "@/app/libs/utils";

const BenefitsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {kolBenefits.map((item) => (
        <div key={item.title} className="flex flex-col items-center gap-3">
          <div className="p-4 rounded-full bg-blue-400 shadow-lg">
            {item.icon}
          </div>

          <h2 className="text-2xl font-bold capitalize">{item.title}</h2>

          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BenefitsSection;
