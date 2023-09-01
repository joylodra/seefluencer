"use client";

// Next & React Hooks
import Link from "next/link";
import Image from "next/image";

// Images & Icons
import { RiArrowRightUpLine } from "react-icons/ri";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  key?: string;
}

const BlogCard = ({ title, description, image, slug, key }: BlogCardProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <Link href={slug} className="hover:opacity-90 transition-all">
        <Image
          className="object-cover h-60 w-full rounded-lg shadow-lg"
          src={image}
          alt={title}
          width={300}
          height={300}
        />
      </Link>

      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-sm text-neutral-500 line-clamp-3">{description}</p>
        <Link
          className="w-fit flex flex-row gap-2 items-center mt-5 px-5 py-2 bg-blue-400 text-white rounded-lg hover:shadow-md transition-all font-bold"
          href={slug}
        >
          read more <RiArrowRightUpLine size={15} />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
