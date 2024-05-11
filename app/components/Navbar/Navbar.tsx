import Link from "next/link";
import React from "react";
import Navoptions from "./Navoptions";
import { RxHamburgerMenu } from "react-icons/rx";
import NavMenu from "./NavMenu";
import Image from "next/image";

interface IPorps {
  isRestrictedPath : () => boolean;
  needToChnageHeaderBg ? : boolean;
  className?: string;
}

export default function Navbar({ isRestrictedPath, needToChnageHeaderBg, className }: IPorps) {
  return (
    <div
      className={`w-full text-[#ffffffe1] drop-shadow-2xl flex items-center justify-center h-[90px]  ${className}`}
    >
      <div className="w-[80%] h-full flex items-center border-b border-[#ffffff6b] sm:w-full sm:px-5">
        <Link className="sm:flex-grow" href="/">
          <Image className="w-40" src={needToChnageHeaderBg ? "/black_logo.webp" : isRestrictedPath() ? "/black_logo.webp" : "/logo.webp"} alt="" height={1200} width={1200}/>
        </Link>

        <NavMenu />
      </div>
    </div>
  );
}
