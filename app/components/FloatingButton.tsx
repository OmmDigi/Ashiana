"use client";

import { setPopupDilaogVisibility } from "@/redux/slices/popupFormSlice";
import Link from "next/link";
import React from "react";
import { BiMessageAdd } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";

import { useDispatch } from "react-redux";

function FloatingButton() {
  const dispatch = useDispatch();

  const popUpFormOnClick = () => {
    dispatch(setPopupDilaogVisibility(true));
  };

  const openPhone = () => {
    window.open("tel:9831234910");
  };

  return (
    <div className="absolute bottom-14 right-14 z-10  items-center sm:right-5 sm:bottom-6 flexCenter">
      <button
        onClick={openPhone}
        title="Show Contact Us Dialog Btn"
        className="size-12 bg-black flexCenter"
      >
        <IoMdCall color="#fff" size={18} />
      </button>
      <button
        title="Show Contact Us Dialog Btn"
        onClick={popUpFormOnClick}
        className="size-12 bg-black flexCenter"
      >
        <BiMessageAdd color="#fff" size={20} />
      </button>
    </div>
  );
}

export default FloatingButton;
