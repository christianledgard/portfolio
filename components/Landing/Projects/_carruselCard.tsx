import Link from "next/link";
import React from "react";

const CarruselCard = (props: any) => {
  return (
    <Link href={`/post/${props.slug}`} className="py-2">
      <div className="flex justify-between hover:bg-gray-700">
        <div>
          <h3 className="font-semibold text-gray-100">{props.title}</h3>
          <p className="text-sm leading-6 text-gray-300">{props.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CarruselCard;
