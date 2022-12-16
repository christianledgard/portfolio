import { useRouter } from "next/navigation";
import client from "../../../client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import groq from "groq";

async function getPost(slug: string) {
  const post = await client.fetch(
    groq`
    *[_type == "post" && slug.current == $slug][0]{title, "name": author->name, body}
  `,
    { slug }
  );
  return post;
}

function urlFor(source: any) {
  return imageUrlBuilder(client).image(source);
}

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="p-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={value.alt || " "}
            src={urlFor(value).fit("max").auto("format").url()}
            loading="lazy"
          />
        </div>
      );
    },
  },
};

export default async function Post({ params: { slug } }: any) {
  const postData = getPost(slug || "");
  const post = await postData;

  return (
    <>
      <section>
        <div className="flex flex-col items-center py-12  bg-yellow">
          <h1 className="font-bold text-center text-5xl md:text-6xl p-4">
            {post.title}
          </h1>
        </div>
        <div id="about-me" className="w-full border-2 border-black" />
      </section>
      <div className="mx-auto w-[92vw] max-w-7xl lg:max-w-3xl	px-4 py-8 ">
        <article className="prose max-w-none">
          {/* <span>By {post.name}</span> */}
          <PortableText value={post.body} components={ptComponents} />
        </article>
      </div>
    </>
  );
}
