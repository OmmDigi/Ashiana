"use client";

import React, { useEffect, useState } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import BannerText from "./BannerText";
import NewBannerImage from "./NewBannerImage";

export default function Banner() {
  const [currentBannerIndex, setCurretBannerIndex] = useState(0);
  const banner_images = [
    "banner1.webp",
    "banner2.webp",
    "banner3.webp",
    "banner4.webp",
  ];

  const banner_texts = [
    "Designing interiors <br /> <p class='paddingTop30'>inspiring lifestyles.</p>",
    "Your vision, our expertise.",
    "Discover the Art of Living",
    "Creating Harmony Through Design",
  ];

  const goNext = () => {
    setCurretBannerIndex((preIndex) => {
      const nextIndex = preIndex + 1;
      if (nextIndex > banner_images.length - 1) return 0;
      return nextIndex;
    });
  };

  const goPrev = () => {
    setCurretBannerIndex((preIndex) => {
      const nextIndex = preIndex - 1;
      if (nextIndex < 0) return banner_images.length - 1;
      return nextIndex;
    });
  };

  useEffect(() => {
    const TIME_INTERVAL_ID = setInterval(() => {
      goNext();
    }, 10 * 1000);

    return () => clearInterval(TIME_INTERVAL_ID);
  }, [currentBannerIndex]);

  return (
    <div className="w-full">
      <div className="w-full h-[41rem] relative overflow-hidden sm:h-[21rem]">
        <NewBannerImage
          banner_images={banner_images}
          currentBannerIndex={currentBannerIndex}
        />
        <div className="size-full bg-[#00000077] absolute top-0 bottom-0 z-10">
          <section className="size-full flex items-center justify-center relative sm:pt-10">
            <BannerText
              className={
                "font-tex text-white absolute leading-[1em] w-[850px] text-center text-7xl ease-in sm:text-4xl sm:w-full"
              }
              currentIndex={currentBannerIndex}
              banner_texts={banner_texts}
            />
            <div className="absolute top-0 bottom-0 right-32 pt-40 space-y-8 sm:hidden sm:items-start sm:space-y-0 sm:top-24 sm:gap-4 box-border">
              <button
                onClick={goPrev}
                className="size-[50px] border flexCenter cursor-pointer hover:bg-[#203556] hover:border-[#203556] transition-all duration-500 sm:size-[40px]"
              >
                <IoChevronBackSharp
                  size={30}
                  color="#d3d3d3"
                  fontWeight={100}
                />
              </button>
              <button
                onClick={goNext}
                className="size-[50px] border flexCenter cursor-pointer hover:bg-[#203556] hover:border-[#203556] transition-all duration-500 sm:size-[40px]"
              >
                <IoChevronBackSharp
                  className="rotate-180"
                  size={30}
                  color="#d3d3d3"
                  fontWeight={100}
                />
              </button>
            </div>
          </section>
        </div>

        <div className="absolute bottom-0 z-10 w-full py-10 flexCenter">
          {banner_images.map((item, index) => (
            <button key={index} onClick={() => setCurretBannerIndex(index)} className={`size-3 rounded-full mr-4 cursor-pointer border ${index === currentBannerIndex ? "bg-white border-white" : "bg-transparent"} transition-all duration-1000`}></button>
          ))}
        </div>
      </div>
    </div>
  );
}
