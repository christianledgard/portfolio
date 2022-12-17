import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CarruselCard = (props: any) => {
  return (
    <div className="group relative border-2 border-black rounded-md">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full h-40 overflow-hidden bg-pink rounded-t-sm border-b-2 border-black" />
      <div className="flex justify-between">
        <div className="p-4">
          <h3 className="text-lg font-bold text-black">{props.title}</h3>
          <p className="mt-2 text-sm text-gray-700">{props.description}</p>
          <Link href={`/post/${props.slug}`}>
            <div className="flex space-x-1 mt-4">
              <p className="text-sm font-medium text-black ">Read more</p>
              <FaArrowRight className="items-stretch" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarruselCard;
