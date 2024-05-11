"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { use, useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface IProps {
  banner_images: string[];
  currentBannerIndex: number;
}

function BannerImage({ banner_images, currentBannerIndex }: IProps) {
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);

  const [img1Src, setImg1Src] = useState(banner_images[currentBannerIndex]);
  const [img2Src, setImg2Src] = useState(banner_images[currentBannerIndex + 1]);

  const [isAnimationRunning, setIsAnimaionRunning] = useState(false);

  const [curretnImg, setCurrentImg] = useState("no-img");

  const duration = 3;

  useGSAP(
    () => {
      if (!isAnimationRunning) {
        setIsAnimaionRunning(true);
        if (curretnImg == "no-img") {
          gsap.fromTo(
            img1Ref.current,
            {},
            {
              opacity: 1,
              duration: 3,
              scale: 1.1,
              onComplete: () => {
                setCurrentImg("img1");
                setIsAnimaionRunning(false);
              },
            }
          );
        }

        if (curretnImg === "img1") {
          gsap.to(img1Ref.current, {
            opacity: 0,
            scale: 1,
            duration: duration,
            onComplete: () => {
              setImg1Src(
                banner_images[
                  (currentBannerIndex + 1) > banner_images.length - 1
                    ? 0
                    : currentBannerIndex + 1
                ]
              );
            },
          });
          gsap.to(img2Ref.current, {
            opacity: 1,
            scale: 1.1,
            duration: duration,
            onComplete: () => {
              setIsAnimaionRunning(false);
              setCurrentImg("img2");
            },
          });
        }

        if (curretnImg === "img2") {
          gsap.to(img2Ref.current, {
            opacity: 0,
            scale: 1,
            duration: duration,
            onComplete: () => {
              setImg2Src(
                banner_images[
                  (currentBannerIndex + 1) > banner_images.length - 1
                    ? 1
                    : currentBannerIndex + 1
                ]
              );
            },
          });
          gsap.to(img1Ref.current, {
            opacity: 1,
            scale: 1.1,
            duration: duration,
            onComplete: () => {
              setIsAnimaionRunning(false);
              setCurrentImg("img1");
            },
          });
        }
      }
    },
    { dependencies: [currentBannerIndex] }
  );

  return (
    <div className="relative size-full overflow-hidden">
      <Image
        ref={img1Ref}
        className={`size-full object-cover absolute top-0 bottom-0 bannerImg`}
        src={`/banner/${img1Src}`}
        alt={`Banner 1`}
        height={1200}
        width={1200}
      />
      <Image
        ref={img2Ref}
        className={`size-full object-cover absolute top-0 bottom-0 bannerImg opacity-0`}
        src={`/banner/${img2Src}`}
        alt={`Banner 2`}
        height={1200}
        width={1200}
      />
    </div>
  );
}

export default BannerImage;
