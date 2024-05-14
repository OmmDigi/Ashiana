"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ImageProps } from "next/image";
import { BASE_URL } from "@/constant";

interface IProps extends ImageProps {
  imageClass?: string;
}

const ShimmerImage = (props: IProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    // console.log("Error")
    setError(true);
  };

  return (
    <div
      className={`bg-gray-300 h-25 overflow-hidden object-cover  ${
        props.className
      } ${isLoaded ? "" : "leading-relaxed animate-pulse"}`}
    >
      <Image
        onLoad={handleLoadingComplete}
        onError={handleError}
        {...props}
        src={error ? `${BASE_URL}/no_image.png` : props.src}
        className={`${
          isLoaded ? "opacity-1" : "opacity-0"
        } transition-all size-full duration-500 object-cover ${
          props.imageClass
        }`}
      />
    </div>
  );
};

export default ShimmerImage;
