import client from "../../../client";
import { PortableText } from "@portabletext/react";
import groq from "groq";
import BlogImages from "../../../components/BlogImages";

async function getPost(slug: string) {
  const post = await client.fetch(
    groq`
    *[_type == "post" && slug.current == $slug][0]{title, "name": author->name, body}
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
      <div className="mx-auto w-[92vw] max-w-7xl lg:max-w-3xl	px-4 pb-16">
        <article className="prose prose-lg max-w-none prose-li:m-0 prose-h1:mb-0 prose-h1:mt-16 prose-ul:mt-0 prose-p:text-gray-900 prose-ul:text-gray-900">
          <PortableText value={post.body} components={ptComponents} />
        </article>
      </div>
    </>
  );
}
