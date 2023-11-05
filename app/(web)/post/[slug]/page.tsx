import client from "../../../../client";
import { PortableText } from "@portabletext/react";
import groq from "groq";
import BlogImages from "../../../../components/BlogImages";
import ScrollUp from "../../../../components/utils/ScrollUp";
import type { Metadata, ResolvingMetadata } from "next";

async function getPost(slug: string) {
  const post = await client.fetch(
    groq`
    *[_type == "post" && slug.current == $slug][0]{title, "name": author->name, body}
  `,
    { slug }
  );
  return post;
}

async function getPostMetadata(slug: string) {
  const post = await client.fetch(
    groq`
    *[_type == "post" && slug.current == $slug][0]{title, description, "mainImage": mainImage.asset->url}
  `,
    { slug }
  );
  return post;
}

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return <BlogImages value={value} />;
    },
  },
};

export async function generateMetadata(
  { params: { slug } }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const postData = getPostMetadata(slug || "");
  const post = await postData;
  if (post)
    return {
      metadataBase: new URL("https://christian.ledgard.com"),
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        images: [
          {
            url: post.mainImage,
          },
        ],
      },
    };
  return {
    title: "404: No posts found with the specified URL.",
  };
}

export default async function Post({ params: { slug } }: any) {
  const postData = getPost(slug || "");
  const post = await postData;

  if (post)
    return (
      <>
        <ScrollUp />
        <div className="items-center bg-yellow mt-4">
          <h1 className="font-bold text-center text-2xl p-4 text-black">
            {post.title}
          </h1>
        </div>
        <article className="prose dark:prose-invert prose-h1:mt-10 prose-h1:mb-0">
          <PortableText value={post.body} components={ptComponents} />
        </article>
      </>
    );
  return (
    <div className="m-20 mb-[50vh]">
      <h1 className="text-2xl">404: No posts found with the specified URL.</h1>
    </div>
  );
}
