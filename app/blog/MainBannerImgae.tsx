import React from "react";
import ShimmerImage from "../components/ShimmerImage";

function MainBannerImgae({ src }: { src: string }) {
  return (
    <ShimmerImage
      className="mt-10 rounded-t-[1.3rem]"
      src={src}
      alt=""
      height={1980}
      width={1980}
    />
  );
}

export default MainBannerImgae;
