import Image from "next/image";
import React from "react";

function ImageLayout({ img }: { img: string }) {
  return (
    <div className="w-full px-8 min-h-40 sm:px-3">
      <Image src={img} alt="img 1" width={1200} height={1200} />
    </div>
  );
}

export default ImageLayout;
