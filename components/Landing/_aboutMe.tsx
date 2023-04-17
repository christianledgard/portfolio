import React from "react";

const AboutMe = () => {
  return (
    <section>
      <div id="about-me" className="w-full border-b-[2px] border-black" />
      <div className="flex flex-col items-center py-20 space-y-2">
        <h1 className="text-2xl">About Me</h1>
        <h2 className="font-bold text-center text-5xl md:text-6xl p-4">
          From Lima to Amsterdam
        </h2>
        <div className="text-lg max-w-4xl space-y-4 px-8">
          <p>
            Hello! I&apos;m a computer scientist who&apos;s passionate about
            building software systems that can have a real impact on
            people&apos;s lives. Through various real-world projects and
            successful freelance work, such as with the Research Institute for
            Development and Psicotrec, I&apos;ve gained valuable experience that
            allowed me to develop my skills.
          </p>
          <p>
            I am particularly interested in quality assurance, continuous
            integration, cloud computing, and software construction. I&apos;m
            always looking for new opportunities to learn and grow, and excited
            to collaborate with passionate teams to develop innovative
            solutions. Based in Amsterdam, I&apos;m eager to develop my skills
            further and experience new challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
