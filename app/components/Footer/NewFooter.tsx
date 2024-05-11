import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaMapLocation } from "react-icons/fa6";

const locationList = [
  "AA-48, Salt Lake, Sec-1, Kolkata -700064. (Near PNB Bus Stop, Beside Karur Vysya Bank).",
  "VIP Road, Baguiali, Kolkata – 700059.",
  "9/38 Jhautala, Atgharaa, Chinar Park, Kolkata -700057.",
  "55, Gariahat Road, Ballygunge phari, Kolkata -700019.",
];

function NewFooter() {
  return (
    <footer className="bg-white">
      <ul className="w-full grid grid-cols-3 text-gray-800 sm:grid-cols-1">
        <li className="px-16 py-10 flex items-start flex-col gap-4 sm:px-5">
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
            <Link href="/about-us" className="font-medium text-xs flex items-center">
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
        <li className="px-16 py-10 sm:px-5">
          <h2 className="text-2xl josefin-sans-500 tracking-wider">
            Our Branches
          </h2>
          <ul className="text-sm flex justify-start flex-col">
            {locationList.map((location, index) => (
              <li key={index} className="pt-3 font-medium tracking-widest flex items-start gap-2">
                <div className="min-w-8 min-h-8 rounded-full flexCenter bg-[#922d2d]">
                  <FaMapLocation color="#fff" />
                </div>
                <p className="text-sm leading-6 text-justify">{location}</p>
              </li>
            ))}
          </ul>
        </li>
        <li className="px-16 py-10 sm:px-5">
          <h2 className="text-2xl josefin-sans-500 tracking-wider">
            Channel Partners
          </h2>

          <ul className="grid grid-cols-2 gap-4">
            <li>
              <Link href="https://www.promiplastwindows.com/">
                <Image
                  src="/channelpatner/cp-1.webp"
                  alt="cp1"
                  height={180}
                  width={180}
                />
              </Link>
            </li>
            <li className="border w-auto border-[#AEAEAE] pt-1">
              <Link href="https://www.premiumbathware.com/">
                <Image
                  src="/channelpatner/cp-2.png"
                  alt="cp1"
                  height={180}
                  width={180}
                />
              </Link>
            </li>
            <li className="border w-auto border-[#AEAEAE] pt-1">
              <Link href="https://grillex.in/">
                <Image
                  src="/channelpatner/cp-3.webp"
                  alt="cp1"
                  height={180}
                  width={180}
                />
              </Link>
            </li>
            <li>
              <Link href="https://www.certainteed.com/">
                <Image
                  src="/channelpatner/cp-4.webp"
                  alt="cp1"
                  height={180}
                  width={180}
                />
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}

export default NewFooter;
