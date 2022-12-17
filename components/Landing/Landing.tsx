import React from "react";
import Projects from "./Projects/Projects";
import AboutMe from "./_aboutMe";

import Cover from "./_cover";

const Landing = (props: any) => {
  return (
    <>
      <Cover />
      <AboutMe />
      <Projects {...props} />
    </>
  );
};

export default Landing;
