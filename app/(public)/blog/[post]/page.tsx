// Next & React Hooks
import { Metadata } from "next";

// Custom Components
import Image from "next/image";
import Sidebar from "@/app/components/public/blog/Sidebar";

// CMS
import { getPost, getPosts } from "@/app/libs/sanity/sanityUtils";
import { PortableText } from "@portabletext/react";
import urlFor from "@/app/libs/sanity/config/urlFor";

// External Libraries
import { format, parseISO } from "date-fns";

interface PostProps {
  params: { post: string };
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata | undefined> {
  const posts = await getPosts();
  const post = posts.find((post) => post.slug === params.post);

  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    description,
    slug,
    keywords,
  } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://seefluencer.com/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    keywords: keywords,
  };
}

const Post = async ({ params }: PostProps) => {
  const slug = params.post;
  const post = await getPost(slug);

  return (
    <div className="grid grid-cols-1 space-y-5 md:grid-cols-4 md:gap-5 md:space-y-0">
      <article className="col-span-3 prose prose-neutral w-full max-w-max">
        <div>
          <h1 className="text-4xl font-serif tracking-tight mb-2">
            {post.title}
          </h1>

          <p>{post.audience.map((item: any) => item.title)}</p>

          <p className="opacity-50 text-sm mt-0">
            by {post.author.name}
            {" // "}
            <time dateTime={post.publishedAt}>
              {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
            </time>
          </p>

          <p>{post.description}</p>
        </div>

        <Image
          src={urlFor(post.mainImage).url()}
          alt={post.title}
          className="object-cover h-60 w-full rounded-lg shadow-lg"
          width={300}
          height={300}
        />

        <PortableText value={post.body} />
      </article>

      <div className="col-span-1">
        <Sidebar />
      </div>
    </div>
  );
};

export default Post;
