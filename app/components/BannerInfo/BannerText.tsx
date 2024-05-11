"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

interface IPorps {
  className : string;
  currentIndex: number;
  banner_texts: string[];
}

function BannerText({className, currentIndex, banner_texts }: IPorps) {
  const bannerText1Ref = useRef<HTMLHeadingElement>(null);
  const bannerText2Ref = useRef<HTMLHeadingElement>(null);

  const [banner1Text, setBanner1Text] = useState(banner_texts[currentIndex]);
  const [banner2Text, setBanner2Text] = useState(
    banner_texts[currentIndex + 1]
  );

  const [isAnimationRunning, setIsAnimaionRunning] = useState(false);

  const [currentText, setCurrentText] = useState("no-text");

  useGSAP(
    () => {
      if (!isAnimationRunning) {
        setIsAnimaionRunning(true);
        if (currentText === "no-text") {
          gsap.fromTo(
            bannerText1Ref.current,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 1,
              onComplete: () => {
                setCurrentText("text1");
                setIsAnimaionRunning(false);
              },
            }
          );
        }

        if (currentText === "text1") {
          gsap.to(bannerText1Ref.current, { opacity: 0, onComplete : () => {
            setBanner1Text(
              banner_texts[
                (currentIndex + 1) > banner_texts.length - 1
                  ? 0
                  : currentIndex + 1
              ]
            );
          } });
          gsap.to(bannerText2Ref.current, {
            opacity: 1,
            duration: 3,
            onComplete: () => {
              setCurrentText("text2");
              setIsAnimaionRunning(false);
            },
          });
        }

        if (currentText === "text2") {
          gsap.to(bannerText2Ref.current, { opacity: 0, onComplete : () => {
            setBanner2Text(
              banner_texts[
                (currentIndex + 1) > banner_texts.length - 1
                  ? 0
                  : currentIndex + 1
              ]
            );
          } });
          gsap.to(bannerText1Ref.current, {
            opacity: 1,
            duration: 3,
            onComplete: () => {
              setCurrentText("text1");
              setIsAnimaionRunning(false);
            },
          });
        }
      }
    },
    { dependencies: [currentIndex] }
  );

  return (
    <>
      <h2
        ref={bannerText1Ref}
        className={className}
      >
        <div dangerouslySetInnerHTML={{__html : banner1Text}}></div>
      </h2>
      <h2
        ref={bannerText2Ref}
        className={`${className} opacity-0`}
      >
         <div dangerouslySetInnerHTML={{__html : banner2Text}}></div>
      </h2>
    </>
  );
}

export default BannerText;
