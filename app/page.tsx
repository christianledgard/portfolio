import Image from "next/image";
import christian from "../assets/images/christian.png";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import CarruselCard from "../components/CarruselCard";
import client from "../client";
import groq from "groq";

async function getPosts() {
  const posts = await client.fetch(
    groq`
      *[_type == "post"]{_id, title, _createdAt, description, slug} | order(_createdAt desc)
    `,
    { cache: "no-store" }
  );
  return posts;
}

export default async function Home() {
  const postsData = getPosts();
  const posts = await postsData;
  return (
    <>
      <section>
        <div className="grid sm:grid-cols-2">
          <div className="border-b-4 sm:border-b-0 sm:border-r-4  border-black p-8 bg-purple">
            <div className="m-[2vw] lg:m-[6vw]">
              <h1 className="font-bold text-5xl md:text-6xl">
                Software Developer
              </h1>
              <p className="text-lg md:text-2xl  pt-4 pb-4">
                Passionate about computers and emerging technologies. Love
                building software. Computer Science at VU, Amsterdam.
              </p>
              <div className="flex">
                <a
                  href="#projects"
                  className="ml-auto bg-black text-white py-4 px-6 rounded-sm border-black border-2 transition ease-in-out delay-100 hover:-translate-x-3 hover:-translate-y-3 hover:bg-pink  hover:text-black"
                >
                  view projects
                </a>
              </div>
            </div>
          </div>
          <div className="bg-yellow">
            <div className="flex justify-center">
              <div className="m-16 max-w-md">
                <Image src={christian} alt="Picture of the author" priority />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div id="about-me" className="w-full border-2 border-black" />
        <div className="flex flex-col items-center py-20 space-y-2">
          <h1 className="text-2xl">About Me</h1>
          <h2 className="font-bold text-center text-5xl md:text-6xl p-4">
            From Lima to Amsteram
          </h2>
          <div className="text-lg max-w-4xl space-y-4 px-8">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ipsum turpis, venenatis eu tincidunt sit amet, varius quis nibh.
              Nunc blandit vel enim quis tincidunt. Ut at diam in nulla
              consectetur condimentum.
            </p>
            <p>
              Cras congue ex et felis rutrum, et feugiat dolor tempus. Mauris
              libero lectus, fringilla id convallis a, pulvinar sed quam. Sed
              sem eros, interdum et commodo in, tincidunt vitae nisi. Curabitur
              sed gravida nisi. Pellentesque finibus massa in lacus sollicitudin
              aliquet. Mauris tempor risus ac mollis volutpat.
            </p>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="w-full border-2 border-black" />
        <div className="flex flex-col justify-center items-center py-20 space-y-2">
          <h1 className="font-bold text-5xl md:text-6xl">My Projects</h1>
          <h2 className="text-2xl p-4 pb-8">front-end, back-end</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 xl:gap-x-8 max-w-4xl px-8">
            {posts.length > 0 &&
              posts.map(
                ({ _id, title = "", description = "", slug = "" }: any) =>
                  slug && (
                    <CarruselCard
                      key={_id}
                      title={title}
                      description={description}
                      slug={slug.current}
                    />
                  )
              )}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="flex flex-col p-8  space-y-8 bg-black">
          <div className="m-[2vw] space-y-7">
            <h1 className="font-bold text-white text-5xl ">Contact</h1>
            <div className="flex justify-between flex-col md:flex-row space-y-5 md:space-y-0">
              <div className="flex items-center">
                <p className="text-white text-xl sm:text-3xl">
                  christianledgard@gmail.com
                </p>
              </div>
              <div className="flex items-center space-x-5">
                <FaTwitter className="text-white" size={"3rem"} />
                <FaInstagram className="text-white" size={"3rem"} />
                <FaLinkedin className="text-white" size={"3rem"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
