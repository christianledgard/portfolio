import client from "../../client";
import groq from "groq";
import Landing from "../../components/Landing/Landing";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Ledgard | Software Engineer",
  description:
    "Software Quality Assurance Intern @ TESLA, Founder @ ATLAS. I am a passionate computer scientist driven by the desire to create software systems that genuinely impact people's lives.",
};

async function getPosts() {
  const posts = await client.fetch(
    groq`
      *[_type == "post"]{_id, title, publishedAt, _createdAt, description, slug} | order(publishedAt desc)
    `
  );
  return posts;
}

export default async function Home() {
  const postsData = getPosts();
  const posts = await postsData;
  return <Landing posts={posts} />;
}
