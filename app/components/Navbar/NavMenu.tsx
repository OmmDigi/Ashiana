"use client";

import React, { useEffect, useState } from "react";
import Navoptions from "./Navoptions";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { nav_options } from "@/constant";
import { useDispatch, useSelector } from "react-redux";
import { setMobileSliderSlice } from "@/redux/slices/mobileSliderSlice";
import { RootState } from "@/redux/store";

interface IProps {
  pReferral: React.RefObject<HTMLDivElement>;
}

function NavMenu({ pReferral }: IProps) {
  const mobileNavVisibility = useSelector(
    (state: RootState) => state.mobileSlider
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (mobileNavVisibility) {
        handleCloseHambargerMenu();
      }
    };
    pReferral.current?.addEventListener("scroll", handleScroll);
    return () => pReferral.current?.addEventListener("scroll", handleScroll);
  }, []);

  const handleHambargerMenu = () => {
    dispatch(setMobileSliderSlice(true));
    // setMobileNavVisibility(true);
  };

  const handleCloseHambargerMenu = () => {
    dispatch(setMobileSliderSlice(false));
    // setMobileNavVisibility(false);
  };

  return (
    <>
      <nav
        className={`flex-grow font-[600] h-full flex overflow-hidden sm:hidden items-center gap-7 justify-end josefin-sans-500 sm:absolute sm:flex-col sm:bg-[#ffffffef] sm:right-0 sm:text-black sm:top-[90px] sm:h-auto sm:w-full sm:items-start sm:gap-5 sm:px-6 sm:drop-shadow-2xl sm:transition-all duration-250`}
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
