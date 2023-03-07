import React from "react";
import CarruselCard from "./_carruselCard";

const Projects = (props: any) => {
  return (
    <section id="projects">
      <div className="w-full border-b-[2px] border-black" />
      <div className="flex flex-col justify-center items-center py-20 space-y-2">
        <h1 className="font-bold text-5xl md:text-6xl">My Projects</h1>
        <h2 className="text-xl p-4 pb-8">made with 💛</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 xl:gap-x-8 max-w-4xl px-8">
          {props.posts.length > 0 &&
            props.posts.map(
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
  );
};

export default Projects;
