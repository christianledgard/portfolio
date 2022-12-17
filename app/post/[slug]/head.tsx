import groq from "groq";
import client from "../../../client";

async function getPost(slug: string) {
  const post = await client.fetch(
    groq`
    *[_type == "post" && slug.current == $slug][0]{title, description}
  `,
    { slug }
  );
  return post;
}

export default async function Head({ params }: any) {
  const post = await getPost(params.slug);
  const title = `${post.title} | Christian Ledgard`;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={post.description} />
    </>
  );
}