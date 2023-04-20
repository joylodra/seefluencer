// Custom Components
import Image from "next/image";
import Sidebar from "@/app/components/Blog/Sidebar";

const Post = () => {
  return (
    <div className="grid grid-cols-1 space-y-5 md:grid-cols-4 md:gap-5 md:space-y-0">
      <article className="col-span-3 prose prose-neutral">
        <div>
          <h1 className="text-4xl font-serif tracking-tight mb-2">
            how to become a great influencer?
          </h1>
          <p className="opacity-50 text-sm mt-0">
            by seefluencer team // <time>April 23rd, 2023</time>
          </p>
        </div>

        <Image
          src="/images/influencer.png"
          alt="Blog Image"
          className="object-cover h-60 w-full rounded-lg shadow-lg"
          width={300}
          height={300}
        />

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          eveniet distinctio eligendi quibusdam ut atque necessitatibus iure
          quidem unde officia nulla soluta earum vitae ad corrupti itaque,
          facilis est minima.
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          eveniet distinctio eligendi quibusdam ut atque necessitatibus iure
          quidem unde officia nulla soluta earum vitae ad corrupti itaque,
          facilis est minima.
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          eveniet distinctio eligendi quibusdam ut atque necessitatibus iure
          quidem unde officia nulla soluta earum vitae ad corrupti itaque,
          facilis est minima.
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          eveniet distinctio eligendi quibusdam ut atque necessitatibus iure
          quidem unde officia nulla soluta earum vitae ad corrupti itaque,
          facilis est minima.
        </p>
      </article>

      <div className="col-span-1">
        <Sidebar />
      </div>
    </div>
  );
};

export default Post;
