import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaMapLocation } from "react-icons/fa6";

const locationList = [
  "AA-48, Salt Lake, Sec-1, Kolkata -700064. (Near PNB Bus Stop, Beside Karur Vysya Bank).",
  // "VIP Road, Baguiali, Kolkata – 700059.",
  // "9/38 Jhautala, Atgharaa, Chinar Park, Kolkata -700057.",
  // "55, Gariahat Road, Ballygunge phari, Kolkata -700019.",
];

const channelPatner = [
  {
    img: "/channelpatner/promiplast.webp",
    path: "https://www.promiplastwindows.com/",
  },
  { img: "/channelpatner/cp-2.webp", path: "https://www.premiumbathware.com/" },
  { img: "/channelpatner/cp-3.webp", path: "https://grillex.in/" },
  { img: "/channelpatner/cp-4-4.webp", path: "https://www.saint-gobain.com/" },
];

function NewFooter() {
  return (
    <footer className="bg-white">
      <ul className="w-[86%] grid mx-auto gap-16 grid-cols-3 text-gray-800 sm:grid-cols-1 md:grid-cols-2 ">
        <li className="py-10 flex items-start flex-col gap-4 sm:px-5">
          <Link href="/">
            <Image
              className="w-52"
              src="/black_logo.webp"
              alt="logo"
              height={512}
              width={512}
            />
          </Link>
          <p className="text-justify text-sm leading-6 josefin-sans-400">
            A Company of well repute in the Eastern Region of India, ASHIANA,
            has proved its mettle by making a mark for itself in the field of
            interior designing, furnishings and electrical work.
          </p>
          <div className="space-y-2 tracking-widest">
            <Link
              href="/about-us"
              className="font-medium text-xs flex items-center"
            >
              More About Company
              <IoIosArrowRoundBack size={25} className="rotate-180" />
            </Link>
            <Link
              href="/contact-us"
              className="font-medium text-xs flex items-center"
            >
              Contact Us For More
              <IoIosArrowRoundBack size={25} className="rotate-180" />
            </Link>
          </div>
        </li>
        <li className="py-10 sm:px-5">
          <h2 className="text-2xl josefin-sans-500 tracking-wider">
            Corporate Office
          </h2>
          <ul className="text-sm flex justify-start flex-col">
            {locationList.map((location, index) => (
              <li
                key={index}
                className="pt-3 font-medium tracking-widest flex items-start gap-2"
              >
                <div className="min-w-8 min-h-8 rounded-full flexCenter bg-[#922d2d]">
                  <FaMapLocation color="#fff" />
                </div>
                <p className="text-sm leading-6 text-justify">{location}</p>
              </li>
            ))}
          </ul>
        </li>
        <li className="py-10 sm:px-5 sm:pb-28">
          <h2 className="text-2xl josefin-sans-500 tracking-wider">
            Channel Partners
          </h2>

          <ul className="grid grid-cols-2 gap-4 pt-3">
            {channelPatner.map((item, index) => (
              <li key={index} className="border-2 flexCenter">
                <Link className="block" href={item.path}>
                  <Image src={item.img} alt="cp1" height={180} width={180} />
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </footer>
  );
}

export default NewFooter;
