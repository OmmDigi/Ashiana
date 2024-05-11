import Image from "next/image";
import React from "react";

function MainBannerImgae({ src }: { src: string }) {
  return (
    <Image
      className="mt-10 rounded-t-[1.3rem]"
      src={src}
      alt=""
      height={1200}
      width={1200}
    />
  );
}

export default MainBannerImgae;
