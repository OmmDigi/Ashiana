"use client";

import { setPopupDilaogVisibility } from "@/redux/slices/popupFormSlice";
import React, { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";

import { useDispatch } from "react-redux";

function FloatingButton() {
  const dispatch = useDispatch();
  const [isVisiable, setIsVisiable] = useState(false);

  const popUpFormOnClick = () => {
    dispatch(setPopupDilaogVisibility(true));
  };

  const openPhone = () => {
    window.open("tel:9831234910");
  };

  const openWhatsapp = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=%2B919831234910&text&type=phone_number&app_absent=0"
    );
  };

  const openOrCloseFloatingBtnOnClick = () => {
    setIsVisiable(!isVisiable);
  };

  return (
    <div className="fixed bottom-14 right-14 z-50 flex flex-col sm:flex-row items-center sm:right-3 sm:bottom-4 flexCenter">
      <button
        onClick={openWhatsapp}
        title="Show Contact Us Dialog Btn"
        className={`size-12 bg-black flexCenter z-[1] ${
          isVisiable
            ? "visible sm:translate-x-0 opacity-100"
            : "invisible opacity-0 sm:translate-x-36"
        } transition-all duration-500`}
      >
        <FaWhatsapp color="#fff" size={18} />
      </button>
      <button
        onClick={openPhone}
        title="Show Contact Us Dialog Btn"
        className={`size-12 bg-black flexCenter z-[2] ${
          isVisiable
            ? "visible sm:translate-x-0 opacity-100"
            : "invisible sm:translate-x-36 opacity-0"
        } transition-all duration-500`}
      >
        <IoMdCall color="#fff" size={18} />
      </button>
      <button
        title="Show Contact Us Dialog Btn"
        onClick={popUpFormOnClick}
        className={`size-12 bg-black flexCenter z-[3] ${
          isVisiable
            ? "visible sm:translate-x-0 opacity-100"
            : "invisible sm:translate-x-36 opacity-0"
        } transition-all duration-500`}
      >
        <BiMessageAdd color="#fff" size={20} />
      </button>

      <div className={`w-28 h-10 bg-black absolute right-16 bottom-2 ${isVisiable ? "invisible translate-x-10 opacity-0" : "visible translate-x-0 opacity-100"} transition-all duration-500`}>
        <div className="relative flexCenter size-full">
          <p className="text-white absolute z-10 font-semibold">Contact Us</p>
          <div className="size-5 bg-black rotate-[54deg] absolute -right-1 z-0"></div>
        </div>
      </div>
      <button
        onClick={openOrCloseFloatingBtnOnClick}
        className="size-12 bg-black flexCenter z-[4]"
        title="Open Close Floating Button"
      >
        <IoAdd
          color="#fff"
          size={23}
          className={`${
            isVisiable ? "rotate-45" : "rotate-0"
          } transition-all duration-300`}
        />
      </button>
    </div>
  );
}

export default FloatingButton;
