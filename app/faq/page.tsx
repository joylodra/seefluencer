// Custom Components
import Hero from "../components/Global/Hero";
import Accordion from "../components/Faq/Accordion";

export const metadata = {
  title: "faq",
  keywords: [
    "faq page",
    "social media",
    "influencer marketing platform",
    "community",
  ],
  description: "see the difference influencers can make with seefluencer 💙",
};

const FAQ = () => {
  return (
    <div className="flex flex-col gap-16">
      <Hero
        title="frequently asked questions"
        description="We build every campaign to meet your needs, no matter the complexity."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-5">
          <Accordion
            question="question #1"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            reprehenderit cumque, dolorum ea, porro, iure enim aperiam
            reiciendis eos molestias quos eum nisi provident beatae nam. Nihil
            tempore assumenda ducimus!"
          />

          <Accordion
            question="question #2"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            reprehenderit cumque, dolorum ea, porro, iure enim aperiam
            reiciendis eos molestias quos eum nisi provident beatae nam. Nihil
            tempore assumenda ducimus!"
          />

          <Accordion
            question="question #3"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            reprehenderit cumque, dolorum ea, porro, iure enim aperiam
            reiciendis eos molestias quos eum nisi provident beatae nam. Nihil
            tempore assumenda ducimus!"
          />
        </div>

        <div className="flex flex-col gap-5">
          <Accordion
            question="question #4"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            reprehenderit cumque, dolorum ea, porro, iure enim aperiam
            reiciendis eos molestias quos eum nisi provident beatae nam. Nihil
            tempore assumenda ducimus!"
          />

          <Accordion
            question="question #5"
            answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            reprehenderit cumque, dolorum ea, porro, iure enim aperiam
            reiciendis eos molestias quos eum nisi provident beatae nam. Nihil
            tempore assumenda ducimus!"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
