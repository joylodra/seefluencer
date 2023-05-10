type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Array;
  audience: Array;
  mainImage: string;
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  keywords: string;
}

interface Author extends Base {
  bio: Block[];
  image: string;
  name: string;
  slug: string;
}

interface Audience extends Base {
  title: string;
  description: string;
  slug: string;
  image: string;
}

interface Category extends Base {
  title: string;
  description: string;
  slug: string;
  audience: Audience[];
}
