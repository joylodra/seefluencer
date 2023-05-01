// Custom Components
import Hero from "../../../components/public/Hero";
import BlogCard from "@/app/components/public/blog/BlogCard";

// CMS
import { getPostsBasedOnAudience } from "@/app/libs/sanity/sanityUtils";
import urlFor from "@/app/libs/sanity/config/urlFor";

export const metadata = {
  title: "articles for influencers",
  keywords: ["blog page", "social media", "influencer", "content creator"],
  description: "see the difference influencers can make with seefluencer 💙",
};

const Audience = async () => {
  const posts = await getPostsBasedOnAudience("articles for influencers");

  return (
    <div className="flex flex-col gap-16">
      <Hero
        customTitle={
          <>
            articles for{" "}
            <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200 inline-block text-transparent bg-clip-text">
              influencers
            </span>{" "}
          </>
        }
        description="Equip with knowledge immensive, to make yourself expensive."
      />

      <div className="flex flex-col gap-5">
        {posts.map((post) => (
          <BlogCard
            key={post.title}
            title={post.title}
            image={urlFor(post.mainImage).url()}
            description={post.description}
            slug={`/blog/${post.slug}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Audience;
