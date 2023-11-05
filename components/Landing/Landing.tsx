import React from "react";
import Projects from "./Projects/Projects";

import Cover from "./_cover";

const Landing = (props: any) => {
  return (
    <div className="space-y-10">
      <Cover />
      <Projects {...props} />
    </div>
  );
};

export default Landing;
