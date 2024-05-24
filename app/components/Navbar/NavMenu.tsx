"use client";

import React, { useEffect, useState } from "react";
import Navoptions from "./Navoptions";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { nav_options } from "@/constant";

function NavMenu() {
  const [mobileNavVisibility, setMobileNavVisibility] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!mobileNavVisibility) {
        setMobileNavVisibility(false);
      }
    });
  }, []);

  const handleHambargerMenu = () => {
    setMobileNavVisibility(true);
  };

  const handleCloseHambargerMenu = () => {
    setMobileNavVisibility(false);
  };

  return (
    <>
      <nav
        className={`flex-grow font-[600] h-full flex overflow-hidden ${
          mobileNavVisibility ? "sm:flex sm:py-5" : "sm:hidden sm:py-0"
        } items-center gap-7 justify-end josefin-sans-500 sm:absolute sm:flex-col sm:bg-[#ffffffef] sm:right-0 sm:text-black sm:top-[90px] sm:h-auto sm:w-full sm:items-start sm:gap-5 sm:px-6 sm:drop-shadow-2xl sm:transition-all duration-250`}
      >
        {nav_options.map((navItem, index) => (
          <Navoptions
            key={index}
            optionname={navItem.name}
            href={navItem.path}
          />
        ))}
      </nav>
      <RxHamburgerMenu
        onClick={handleHambargerMenu}
        size={28}
        className={`cursor-pointer hidden ${
          mobileNavVisibility ? "sm:hidden" : "sm:block"
        }`}
      />
      <TfiClose
        onClick={handleCloseHambargerMenu}
        size={20}
        className={`cursor-pointer hidden ${
          mobileNavVisibility ? "sm:block" : "sm:hidden"
        }`}
      />
    </>
  );
}

export default NavMenu;
