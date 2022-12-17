import React from "react";
import Image from "next/image";
import christian from "../../assets/images/christian.png";

const Cover = () => {
  return (
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
                className="ml-auto bg-black text-white py-4 px-6 rounded-sm border-black border-2 transition ease-in-out delay-100 hover:-translate-x-2 hover:-translate-y-2 hover:bg-pink  hover:text-black"
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
  );
};

export default Cover;
