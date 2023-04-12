import Hero from "../components/Global/Hero";

export const metadata = {
  title: "for influencers",
  keywords: ["joyplannr", "social media", "scheduling", "planning"],
  description:
    "elevate your social media game with joyplannr, a powerful social media management tool 💥",
};

const Blog = () => {
  return (
    <div className="flex flex-col gap-16">
      <Hero
        customTitle={
          <>
            read our latest{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
              articles
            </span>{" "}
          </>
        }
        description="Equip with knowledge immensive, to make yourself expensive."
      />
    </div>
  );
};

export default Blog;
