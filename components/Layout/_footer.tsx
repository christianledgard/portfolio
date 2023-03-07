import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="contact">
      <div className="flex flex-col p-8  space-y-8 bg-black">
        <div className="m-[2vw] space-y-7">
          <h1 className="font-bold text-white text-5xl ">Contact</h1>
          <div className="flex justify-between flex-col md:flex-row space-y-5 md:space-y-0">
            <div className="flex items-center">
              <Link href="mailto:christianledgard@gmail.com">
                <p className="text-white text-xl sm:text-3xl">
                  christianledgard@gmail.com
                </p>
              </Link>
            </div>
            <div className="flex items-center space-x-5">
              <Link href="https://github.com/christianledgard">
                <FaGithub className="text-white" size={"3rem"} />
              </Link>
              <Link href="https://twitter.com/tweetledgard">
                <FaTwitter className="text-white" size={"3rem"} />
              </Link>
              <Link href="https://www.linkedin.com/in/cledgard/">
                <FaLinkedin className="text-white" size={"3rem"} />
              </Link>
            </div>
          </div>
          <p className="text-white  text-xs italic">
            This neo brutalist web design is inspired by Gumroad!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
