import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CarruselCard = (props: any) => {
  return (
    <Link href={`/post/${props.slug}`}>
      <div className="transition ease-in-out delay-50 hover:scale-110 group relative border-[2px] border-black rounded-[8px]">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full h-40 overflow-hidden bg-pink rounded-t-[6px] border-b-[2px] border-black" />
        <div className="flex justify-between">
          <div className="p-4">
            <h3 className="text-lg font-bold text-black">{props.title}</h3>
            <p className="mt-2 text-sm text-gray-700">{props.description}</p>
            {/* <div className="flex space-x-1 mt-4">
              <p className="text-sm font-medium text-black ">Read more</p>
              <FaArrowRight className="items-stretch" />
            </div> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarruselCard;
