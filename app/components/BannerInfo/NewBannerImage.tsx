import Image from "next/image";
import React from "react";

interface IProps {
  banner_images: string[];
  currentBannerIndex: number;
}
export default function NewBannerImage({
  banner_images,
  currentBannerIndex,
}: IProps) {
  return (
    <div className="relative size-full overflow-hidden">
      {banner_images.map((item, index) => (
        <div key={item} className={`size-full absolute top-0 bottom-0 bannerImg ${index === currentBannerIndex ? "opacity-100 scale-100" : "opacity-0 scale-150"} transition-all duration-[4000ms] ease-in`}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            className={`size-full object-cover`}
            src={`/banner/${item}`}
            alt={`Banner 1`}
            fill
            loading="eager"
          />
        </div>
      ))}
    </div>
  );
}
