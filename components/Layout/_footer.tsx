import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="contact">
      <div className="flex flex-col mt-8 mb-4">
        <div className="">
          <h1 className="font-bold text-xl">Contact</h1>
          <div className="flex justify-between flex-col md:flex-row space-y-5 md:space-y-0">
            <div className="flex items-center">
              <Link href="mailto:christianledgard@gmail.com">
                <p className="">christianledgard@gmail.com</p>
              </Link>
            </div>
            <div className="flex items-center space-x-5">
              <Link href="https://github.com/christianledgard">
                <FaGithub className="text-white" size={"1.5rem"} />
              </Link>
              <Link href="https://twitter.com/tweetledgard">
                <FaTwitter className="text-white" size={"1.5rem"} />
              </Link>
              <Link href="https://www.linkedin.com/in/cledgard/">
                <FaLinkedin className="text-white" size={"1.5rem"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
