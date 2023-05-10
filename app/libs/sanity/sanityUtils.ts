import { groq } from "next-sanity";
import { client } from "./config/sanity.client";

//----------------------------------------------------------------
//---------------------------- BLOG ------------------------------
//----------------------------------------------------------------
export async function getPosts(): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post"] {
          ...,
          "slug": slug.current,
          author->,
          categories[]->
        } | order(_createdAt desc)`
  );
}

export async function getPostsBasedOnAudience(
  audienceType: string
): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post" && $audienceType in audience[]->title] {
          ...,
          "slug": slug.current,
          author->,
          categories[]->
        } | order(_createdAt desc)`,
    { audienceType }
  );
}

export async function getPost(slug: string): Promise<Post> {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
            ...,
            author->,
            categories[]->,
            audience[]->,
            "slug": slug.current,
      }`,
    { slug }
  );
}

//----------------------------------------------------------------
//-------------------------- AUDIENCE ----------------------------
//----------------------------------------------------------------
export async function getAudiences(): Promise<Audience[]> {
  return client.fetch(
    groq`*[_type == "audience"] {
            ...,
            "slug": slug.current,
          } | order(_createdAt desc)`
  );
}

export async function getAudience(slug: string): Promise<Audience> {
  return client.fetch(
    groq`*[_type == "audience" && slug.current == $slug][0] {
        ...,
        "slug": slug.current,
      }`,
    { slug }
  );
}
