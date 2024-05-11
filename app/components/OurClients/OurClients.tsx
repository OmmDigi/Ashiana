import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowDown } from "react-icons/io";
import { GrNext } from "react-icons/gr";
import BannerImage from "../BannerInfo/BannerImage";
import BannerText from "../BannerInfo/BannerText";
import ClientsList from "./ClientsList";

function ProjectTimeline() {
  return (
    <section className="w-full mt-20 sm:mt-10">
      <div className="w-full px-28 sm:px-5">
        <h2 className="font-tex text-[#073842] leading-[1em] w-[850px] text-left text-[4.3rem] sm:w-full sm:text-4xl">
          OUR CLIENTS
        </h2>
        <div className="w-full pt-9 border-t border-[#0738421f] mt-9 flex items-center sm:flex-col sm:items-start">
          <p className="font-semibold text-[24px] text-[#073842] josefin-sans-400 flex-grow">
            Designing the Extraordinary, Project by Project
          </p>
          <Link
            className="josefin-sans-400 flex items-center gap-2 group/allserviceslbl relative sm:mt-5"
            href="/projects/residential"
          >
            <span>Our Projects</span>
            <div className="border-b-[1.8px] border-[#07384286] w-full absolute bottom-0 left-0 group-hover/allserviceslbl:w-0 transition-all duration-500"></div>
            <IoMdArrowDown className="-rotate-[130deg]" size={20} />
          </Link>
        </div>
      </div>
      <ClientsList />
      {/* <div className="w-full overflow-hidden mt-5 bg-black"> */}
      {/* <Image
          className="size-full object-cover"
          src="/timeline/image1.jpg"
          alt=""
          height={1200}
          width={1200}
        />
        <div className="size-full absolute top-0 bottom-0 bg-[#00000069] flex items-center justify-center">
          <h2 className="font-tex text-6xl text-white tracking-wider sm:text-4xl">Bohemian Haven</h2>

          <div className="absolute bottom-0 right-0 w-full flex justify-end">
            <div className="w-[50%] shadow-md">

            </div>
            <div className="flex flex-col">
              <button className="bg-[#203556] p-5 cursor-pointer">
                <GrNext color="#fff" />
              </button>
              <button className="bg-[#203556] p-5 cursor-pointer">
                <GrNext color="#fff" className="rotate-180" />
              </button>
            </div>
          </div>
        </div> */}
      {/* <BannerImage banner_images={["banner1.jpg"]} currentBannerIndex={0} />
        <div className="size-full bg-[#0000009d] absolute top-0 bottom-0 z-0 pt-28">
          <section className="size-full flex items-center justify-center">
            <BannerText
              className=""
              banner_texts={["Hello How Are You All"]}
              currentIndex={0}
            />
          </section>
        </div> */}
      {/* </div> */}
    </section>
  );
}

export default ProjectTimeline;
