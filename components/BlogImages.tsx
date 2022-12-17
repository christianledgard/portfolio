"use client";

import React, { useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

function urlFor(source: any) {
  return imageUrlBuilder(client).image(source);
}

const BlogImages = (props: any) => {
  const [lightboxImageSrc, setLightboxImageSrc] = useState<string>();

  const url = urlFor(props.value).fit("max").auto("format").url();
  return (
    <>
      {lightboxImageSrc && (
        <Lightbox
          mainSrc={lightboxImageSrc}
          onImageLoad={() => {
            window.dispatchEvent(new Event("resize"));
          }}
          onCloseRequest={() => {
            setLightboxImageSrc(undefined);
          }}
        />
      )}
      <div
        className="p-2"
        onClick={() => {
          setLightboxImageSrc(url);
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={props.value.alt || " "} src={url} loading="lazy" />
      </div>
    </>
  );
};

export default BlogImages;
