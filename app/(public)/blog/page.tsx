// Custom Components
import Hero from "../../components/public/Hero";
import AudienceCard from "../../components/public/blog/AudienceCard";
import BlogCard from "@/app/components/public/blog/BlogCard";

// CMS
import { getAudiences, getPosts } from "@/app/libs/sanity/sanityUtils";
import urlFor from "@/app/libs/sanity/config/urlFor";

export const metadata = {
  title: "blog",
  keywords: ["blog page", "social media", "influencer", "content creator"],
  description: "see the difference influencers can make with seefluencer 💙",
};

const Blog = async () => {
  const audiences = await getAudiences();
  const posts = await getPosts();

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

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {audiences.map((audience) => (
          <AudienceCard
            key={audience.title}
            href={`/blog/${audience.slug}`}
            title={audience.title}
            description={audience.description}
          />
        ))}
      </div> */}

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

export default Blog;
