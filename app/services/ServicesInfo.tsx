import Image from "next/image";
import React from "react";
import CollepseMenuLayout from "./CollepseMenuLayout";
import IntersectionObserverComponent from "../components/IntersectionObserverComponent";
import { IoMdArrowDown } from "react-icons/io";
import Link from "next/link";
import { encodeUrl } from "@/utils/decodeUrl";

interface IProps {
  catName?: string;
  topHeading?: string;
  imagePosition: "left" | "right";
  imagesrc: string;
  menuinfo: { heading: string; subtitle: string }[];
}

function ServicesInfo({
  catName,
  topHeading,
  imagePosition,
  imagesrc,
  menuinfo,
}: IProps) {
  return (
    <section className="w-full">
      <div className="w-full grid grid-cols-2 sm:grid-cols-1 overflow-hidden">
        {imagePosition === "left" ? (
          <>
            <IntersectionObserverComponent
              beforeAnimation="opacity-[0.5] drop-shadow-md"
              afterAnimation="opacity-[1] drop-shadow-none"
            >
              <Image src={imagesrc} alt="img" height={1200} width={1200} />
            </IntersectionObserverComponent>

            <div className="w-full px-14 sm:px-0 overflow-hidden relative">
              {/* <IntersectionObserverComponent
                beforeAnimation="translate-x-[50%]"
                afterAnimation="translate-x-0"
              > */}
              <a id={catName?.replaceAll(" ", "_")}></a>
              {topHeading ? (
                <div className="w-full flex items-center justify-between pb-5">
                  <h3 className="text-[1.5rem] josefin-sans-400 text-[#073842] sm:text-[1.4rem]">
                    {topHeading}
                  </h3>
                  <Link
                    className="josefin-sans-400 flex items-center gap-2 group/allserviceslbl relative sm:mt-4"
                    href={`/services/${encodeUrl(catName || "")}`}
                  >
                    <span>Explore more</span>
                    <div className="border-b-[1.8px] border-[#07384286] w-full absolute bottom-0 left-0 group-hover/allserviceslbl:w-0 transition-all duration-500"></div>
                    <IoMdArrowDown className="-rotate-[130deg]" size={20} />
                  </Link>
                </div>
              ) : null}
              <CollepseMenuLayout info={menuinfo} />
              <span
                // href="/contact-us"
                className="font-medium text-[20px] sm:m-4 flex items-center gap-2 absolute bottom-0 josefin-sans-400 sm:static"
              >
                <span>
                  For {catName} Solutions in Kolkata :{" "}
                  <Link href="/contact-us" className="underline text-[16px]">
                    Contact us now
                  </Link>
                </span>
              </span>
            </div>
          </>
        ) : (
          <>
            <div className={`w-full px-14 sm:px-0 relative`}>
              <a id={catName?.replaceAll(" ", "_")}></a>
              {topHeading ? (
                <div className="w-full flex items-center justify-between pb-5">
                  <h3 className="text-[1.5rem] josefin-sans-400 text-[#073842] sm:text-[1.4rem]">
                    {topHeading}
                  </h3>
                  <Link
                    className="josefin-sans-400 flex items-center gap-2 group/allserviceslbl relative sm:mt-4"
                    href={`/services/${encodeUrl(catName || "")}`}
                  >
                    <span>Explore more</span>
                    <div className="border-b-[1.8px] border-[#07384286] w-full absolute bottom-0 left-0 group-hover/allserviceslbl:w-0 transition-all duration-500"></div>
                    <IoMdArrowDown className="-rotate-[130deg]" size={20} />
                  </Link>
                </div>
              ) : null}

              <CollepseMenuLayout info={menuinfo} />
              <span
                // href="/contact-us"
                className="font-medium text-[20px] sm:m-4 flex items-center gap-2 absolute bottom-0 josefin-sans-400 sm:static"
              >
                <span>
                  For {catName} Solutions in Kolkata :{" "}
                  <Link href="/contact-us" className="underline text-[16px]">
                    Contact us now
                  </Link>
                </span>
              </span>
            </div>
            <IntersectionObserverComponent
              beforeAnimation="opacity-[0.5] drop-shadow-md"
              afterAnimation="opacity-[1] drop-shadow-none"
            >
              <Image src={imagesrc} alt="img" height={1200} width={1200} />
            </IntersectionObserverComponent>
          </>
        )}
      </div>
    </section>
  );
}

export default ServicesInfo;
