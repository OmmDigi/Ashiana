import React from "react";
import Image from "next/image";
import Link from "next/link";
import { decodeUrl, encodeUrl } from "@/utils/decodeUrl";
import OpenShowImageDialgoBtn from "../components/Popup/OpenShowImageDialgoBtn";

function ProjectsPage({ searchParams }: { searchParams: { catname: string } }) {
  const originalCatName = searchParams.catname || "residential";
  const catname = decodeUrl(originalCatName);

  const catnames = [
    "RESIDENTIAL",
    "OFFICE INTERIOR",
    "HOTEL & RESTAURANT",
    "JEWELLERY SHOWROOM",
    "EXTERIOR DESIGN",
  ];

  const datas: any = {
    residential: [
      "r1.webp",
      "r2.webp",
      "r3.webp",
      "r4.webp",
      "r5.webp",
      "r6.webp",
      "r7.webp",
    ],
    "office-interior": ["o1.webp", "o2.webp", "o3.webp", "o4.webp"],
    "jewellery-showroom": [
      "j1.webp",
      "j2.webp",
      "j3.webp",
      "j4.webp",
      "j5.webp",
      "j6.webp",
      "j7.webp",
      "j8.webp",
      "j9.webp",
    ],
    "hotel-and-restaurant": ["h1.webp", "h2.webp", "h3.webp", "h4.webp"],
    "exterior-design": ["ou1.webp", "ou2.webp", "ou3.webp", "ou4.webp"],
  };

  const selectedCatIndex = catnames.indexOf(catname.toLocaleUpperCase());

  return (
    <main className="w-full flex flex-col items-start pt-[90px]">
      {/* <Navbar className="text-gray-800" /> */}
      <div className="px-20 sm:px-5">
        <h2 className="font-tex text-[#073842] leading-[1em] text-8xl mt-3 text-center sm:text-6xl">
          Projects
        </h2>

        <ul className="w-full my-10 flex items-center gap-6 sm:flex-wrap">
          {catnames.map((catname, index) => (
            <Link
              key={catname}
              href={encodeUrl(`/projects?catname=${catname.toLowerCase()}`)}
            >
              <li
                className={`font-tex ${
                  index === selectedCatIndex
                    ? "bg-[#07384221]"
                    : "border shdowCategory border-[#07384221]"
                } text-xs px-3 py-3 tracking-wider`}
              >
                {catname}
              </li>
            </Link>
          ))}
        </ul>

        <ul className="grid grid-cols-3 w-full gap-10 sm:grid-cols-1">
          {datas[`${originalCatName}`].map((src: any, index: any) => (
            <li key={index}>
              <OpenShowImageDialgoBtn
                className="w-full overflow-hidden categoryBorderRedious"
                imgSrc={`/projects/${originalCatName}/${src}`}
              >
                <Image
                  src={`/projects/${originalCatName}/${src}`}
                  alt=""
                  className="h-[220px] object-cover"
                  width={520}
                  height={362}
                />
                {/* <div className="py-3 space-y-4 text-left">
                  <h2 className="font-tex text-xl text-[#073842] tracking-wider">
                    Modern Minimalism
                  </h2>
                  <span className="text-[#7F7F7F] font-semibold text-xs">
                    HIGH LINE
                  </span>
                </div> */}
              </OpenShowImageDialgoBtn>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default ProjectsPage;
