import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdArrowDown } from "react-icons/io";
import blogsInfo from "@/public/bloginfo.json";

function LatestNews() {
  return (
    <section className="w-full min-h-[41rem] sm:min-h-full sm:mt-14 py-20">
      <div className="w-full px-28 sm:px-5">
        <h2 className="font-tex text-[#073842] leading-[1em] w-[850px] text-left text-[4.3rem] sm:w-full sm:text-4xl">
          Latest News
        </h2>
        <div className="w-full pt-9 border-t border-[#0738421f] mt-9 flex items-center sm:flex-col sm:items-start sm:mt-5 sm:pt-4">
          <p className="font-semibold text-[24px] text-[#073842] josefin-sans-400 flex-grow">
            Discover the Latest in Interior Design
          </p>
          <Link
            className="josefin-sans-400 flex items-center gap-2 group/allserviceslbl relative"
            href="/"
          >
            <span>Latest News</span>
            <div className="border-b-[1.8px] border-[#07384286] w-full absolute bottom-0 left-0 group-hover/allserviceslbl:w-0 transition-all duration-500"></div>
            <IoMdArrowDown className="-rotate-[130deg]" size={20} />
          </Link>
        </div>
      </div>

      <ul className="w-full grid grid-cols-3 gap-6 px-28 mt-10 sm:grid-cols-1 sm:px-5">
        {blogsInfo.map((item) => (
          <li key={item.id} className="w-full">
            <div className="w-full h-48 overflow-hidden">
              <Image
                src={item.image}
                className="object-cover"
                alt=""
                width={1200}
                height={1200}
              />
            </div>
            <p className="josefin-sans-400 text-sm text-gray-600 pt-4">
              {item.date} / {item.category}
            </p>
            <h2 className="josefin-sans-500 text-lg text-gray-800 line-clamp-2">
              {item.heading}
            </h2>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LatestNews;
