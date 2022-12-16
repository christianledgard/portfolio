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
        <Image
          alt={value.alt || " "}
          loading="lazy"
          src={urlFor(value)
            .width(320)
            .height(240)
            .fit("max")
            .auto("format")
            .url()}
          width={320}
          height={240}
        />
      );
    },
  },
};

export default async function Post({ params: { slug } }: any) {
  const postData = getPost(slug || "");
  const post = await postData;

  return (
    <div className="mx-auto w-[92vw] max-w-7xl lg:max-w-3xl	px-4 py-8">
      <article className="prose max-w-none">
        <h1>{post.title}</h1>
        {/* <span>By {post.name}</span> */}
        <PortableText value={post.body} components={ptComponents} />
      </article>
    </div>
  );
}