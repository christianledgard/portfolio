import React from "react";
import CarruselCard from "./_carruselCard";

const Projects = (props: any) => {
  return (
    <section id="projects">
      <h1 className="font-bold text-xl mb-2">Some Projects</h1>
      <div className="grid">
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
    </section>
  );
};

export default Projects;
