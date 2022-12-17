import client from "../client";
import groq from "groq";
import Landing from "../components/Landing/Landing";

async function getPosts() {
  const posts = await client.fetch(
    groq`
      *[_type == "post"]{_id, title, publishedAt, _createdAt, description, slug} | order(publishedAt asc)
    `,
    { cache: "no-store" }
  );
  return posts;
}

export default async function Home() {
  const postsData = getPosts();
  const posts = await postsData;
  return <Landing posts={posts} />;
}
