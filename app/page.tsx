import Image from "next/image";
import christian from "../assets/images/christian.png";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
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
              <button className="bg-black text-white py-2 px-4">
                view projects
              </button>
            </div>
          </div>
          <div className="bg-yellow">
            <div className="flex justify-center">
              <div className="m-16 max-w-md">
                <Image
                  src={christian}
                  alt="Picture of the author"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full border-2 border-black" />
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
      <section>
        <div className="w-full border-2 border-black" />
        <div className="flex flex-col py-20 space-y-2">
          <h1 className="font-bold text-center text-5xl md:text-6xl">
            My Projects
          </h1>
          <h2 className="text-2xl text-center p-4">front-end, back-end</h2>

          <div className="grid grid-cols-3 gap-4 max-w-4xl px-8">
            <div className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full h-40 overflow-hidden rounded-md bg-gray-200" />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Basic Tee
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Black</p>
                </div>
                <p className="text-sm font-medium text-gray-900">$35</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col p-8  space-y-8 bg-black">
          <div className="m-[2vw] space-y-7">
            <h1 className="font-bold text-white text-5xl ">Contact</h1>
            <div className="flex justify-between flex-col md:flex-row space-y-5 md:space-y-0">
              <div className="flex items-center">
                <p className="text-white text-3xl">
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
