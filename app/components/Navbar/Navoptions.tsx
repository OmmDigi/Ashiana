import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface IProps {
  optionname: string;
  href: string;
}

function Navoptions({ optionname, href }: IProps) {
  const pathname = usePathname();
  return (
    <Link href={href}>
      <div className="group/navoption h-full flexCenter">
        <div className={`w-[90px] z-0 h-0 top-0 ${pathname === href ? "bg-gray-700 h-[98px]" : "bg-[#f5deb3] group-hover/navoption:h-[98px]"} absolute navItemClipPath transition-all duration-500 sm:hidden`}></div>
        <div className={`w-0 hidden sm:block h-10 bg-gray-700 navItemMobileClipPath absolute left-0 ${pathname === href ? "w-[50%]" : "w-0"} transition-all duration-500`}></div>
        <span className={`nav-item z-10 ${pathname === href ? "text-white" : "group-hover/navoption:text-gray-800"} transition-all duration-500`}>
          {optionname}
        </span>
      </div>
    </Link>
  );
}

export default Navoptions;
