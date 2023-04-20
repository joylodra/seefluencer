// Custom Components
import Hero from "../components/Global/Hero";
import BlogCard from "../components/Blog/BlogCard";

export const metadata = {
  title: "blog",
  keywords: ["blog page", "social media", "influencer", "content creator"],
  description: "see the difference influencers can make with seefluencer 💙",
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <BlogCard
          href="/blog/post"
          src="/images/influencer.png"
          alt="Blog Image"
          title="how to become a great influencer?"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            cum esse veniam laudantium sit nisi earum ea expedita soluta eius.
            Omnis enim quas repellat sed, dicta sapiente totam ea cupiditate."
        />

        <BlogCard
          href="/blog/post"
          src="/images/influencer.png"
          alt="Blog Image"
          title="how to become a great influencer?"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            cum esse veniam laudantium sit nisi earum ea expedita soluta eius.
            Omnis enim quas repellat sed, dicta sapiente totam ea cupiditate."
        />

        <BlogCard
          href="/blog/post"
          src="/images/influencer.png"
          alt="Blog Image"
          title="how to become a great influencer?"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            cum esse veniam laudantium sit nisi earum ea expedita soluta eius.
            Omnis enim quas repellat sed, dicta sapiente totam ea cupiditate."
        />

        <BlogCard
          href="/blog/post"
          src="/images/influencer.png"
          alt="Blog Image"
          title="how to become a great influencer?"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            cum esse veniam laudantium sit nisi earum ea expedita soluta eius.
            Omnis enim quas repellat sed, dicta sapiente totam ea cupiditate."
        />
      </div>
    </div>
  );
};

export default Blog;
