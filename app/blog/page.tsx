import React from "react";
import Link from "next/link";
import bloginfo from "@/public/bloginfo.json";
import ShimmerImage from "../components/ShimmerImage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title : "Blogs on Interior Design | Ashiana Interiors",
  description : "Discover inspiring interior designs with Ashiana Interiors Kolkata. Read our blogs for tips, trends, and expert insights to transform your dream home.",
  alternates: {
    canonical: "/blogs",
  },
};

function page() {
  let currentIndex = 0;
  return (
    <main className="w-full flex flex-col items-center pt-[90px]">
      <div className="max-w-[1324px] px-20 sm:px-5 sm:max-w-full">
        <div className="w-full flex flex-col items-center">
          <h2 className="font-bold text-4xl">
            OUR <span className="text-[#F83131]">BLOGS</span>
          </h2>
          <div className="w-[4rem] bg-[#F83131] h-[1.5px] mt-3"></div>
        </div>
        <ul className="w-full grid grid-cols-3 gap-10 my-10 sm:grid-cols-1">
          {bloginfo.map((_, index) => {
            currentIndex = (bloginfo.length - 1) - index;
            return (
              <li key={bloginfo[currentIndex].id} className="w-full blogItemShdow">
                <Link href={`/blog/${bloginfo[currentIndex].url_key}`}>
                  <ShimmerImage
                    className="h-[12rem] object-cover navItemClipPath"
                    src={bloginfo[currentIndex].image}
                    alt=""
                    height={1200}
                    width={1200}
                  />
                  <div className="px-5 py-5 space-y-4">
                    <div className="w-full flex items-center text-[0.80rem] gap-2">
                      <span className="text-[#F83131] font-semibold">
                        {bloginfo[currentIndex].date}
                      </span>{" "}
                      <div className="w-[1px] h-[15px] bg-gray-400"></div>{" "}
                      <span className="text-gray-500">{bloginfo[currentIndex].category}</span>
                    </div>

                    <div>
                      <h2 className="font-bold text-xl text-gray-700 line-clamp-2 uppercase">
                        {bloginfo[currentIndex].heading}
                      </h2>
                      <p className="line-clamp-3 text-gray-500 blurFadeLayout text-sm mt-2">
                        {bloginfo[currentIndex].short_description}
                      </p>
                    </div>
                    <button className="font-bold text-xs text-[#F83131]">
                      Read More..
                    </button>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default page;
