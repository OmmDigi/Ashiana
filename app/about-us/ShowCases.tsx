import Image from "next/image";
import React from "react";
import OpenShowImageDialgoBtn from "../components/Popup/OpenShowImageDialgoBtn";

function ShowCases() {
  const imageesList = [
    "/about/showcase1.webp",
    "/about/showcase2.webp",
    "/about/showcase3.webp",
    "/about/showcase4.webp",
    "/about/showcase5.webp",
    "/about/showcase6.webp",
  ];

  return (
    <section className="w-full space-y-5 py-11 mt-10">
      <h2 className="font-tex text-[#073842] leading-[1em] w-[850px] text-left text-[4.3rem] uppercase sm:w-full sm:text-4xl">
        Showcase
      </h2>
      <div className="w-full h-[1px] bg-[#0738421f]"></div>
      <p className="font-semibold text-[24px] text-[#073842] josefin-sans-400 flex-grow">
        Bringing visions to reality
      </p>

      <ul className="w-full grid grid-cols-3 gap-10 sm:grid-cols-1">
        {imageesList.map((src, index) => (
          <li key={index} className="w-full h-96 overflow-hidden">
            <OpenShowImageDialgoBtn imgSrc={src} className="size-full object-cover cursor-pointer hover:scale-105 transition-all duration-300">
              <Image
                className="size-full object-cover cursor-pointer hover:scale-105 transition-all duration-300"
                src={src}
                alt={`img ${index + 1}`}
                height={1200}
                width={1200}
              />
            </OpenShowImageDialgoBtn>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ShowCases;
