import React from "react";
import SocialLinks from "../components/SocialLinks";
import BlogHeading from "./BlogHeading";
import MainBannerImgae from "./MainBannerImgae";
import Image from "next/image";
import blogInfo from "@/public/bloginfo.json";
import Link from "next/link";
import ShimmerImage from "../components/ShimmerImage";

interface IProps {
  blogId: string;
  children: React.ReactNode;
  heading: string;
  bannerImg: string;
  date: string;
  author?: string;
  category?: string;
}

function ReadBlogLayot({
  blogId,
  children,
  heading,
  bannerImg,
  date,
  category,
}: IProps) {
  const relatedBlogs = blogInfo.filter(
    (item) => item.category === category && item.id !== blogId
  );

  return (
    <main className="w-full">
      <div className="px-28 sm:px-0 sm:max-w-full py-[100px] flex items-start sm:flex-col">
        <div className="w-[66%] bg-[#ECEBF7] rounded-[2.3rem] px-12 py-12 relative sm:w-full sm:px-5">
          <SocialLinks className="absolute top-0 bottom-0 -left-4 sm:h-20 sm:top-2 sm:right-0 sm:flex-row" />
          <BlogHeading
            text={heading}
            date={date}
            author="By Ashiana Interiors"
            category={category}
          />
          <MainBannerImgae src={bannerImg} />
          {children}
        </div>

        <div className="w-[34%] px-5 py-2 sm:w-full sm:py-10">
          <h2 className="font-tex tracking-wider text-gray-700 text-xl">
            Related Blogs
          </h2>
          {relatedBlogs.length === 0 ? (
            <h2 className="w-full text-center text-sm text-gray-500 mt-5">No Related Blogs Avilable</h2>
          ) : (
            <ul className="my-4 space-y-7">
              {relatedBlogs.map((blogInfo) => (
                <li key={blogInfo.id} className="relative overflow-hidden rounded-lg min-h-48">
                  <Link href={`/blog/${blogInfo.url_key}`}>
                  <ShimmerImage
                    className="object-cover size-full min-h-48"
                    alt=""
                    src={blogInfo.image}
                    height={1200}
                    width={1200}
                  />
                  <div className="absolute bottom-0 w-full bg-[#000000c4] drop-shadow-2xl px-5 text-gray-200 py-3">
                    <h2 className="josefin-sans-400 line-clamp-1 leading-6">
                      {blogInfo.heading}
                    </h2>
                    <p className="text-xs text-gray-400">{blogInfo.date}</p>
                  </div>
                  </Link>
                 
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}

export default ReadBlogLayot;
