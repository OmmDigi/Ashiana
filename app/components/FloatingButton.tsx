"use client";

import { setPopupDilaogVisibility } from "@/redux/slices/popupFormSlice";
import React from "react";
import { BiMessageAdd } from "react-icons/bi";
import { useDispatch } from "react-redux";

function FloatingButton() {

  const dispatch = useDispatch();

  const popUpFormOnClick = () => {
    dispatch(setPopupDilaogVisibility(true));
  }

  return (
    <div className="absolute bottom-14 right-14 z-10 sm:right-5 sm:bottom-6 flexCenter">
      <button title="Show Contact Us Dialog Btn" onClick={popUpFormOnClick} className="size-12 bg-black flexCenter">
        <BiMessageAdd color="#fff" size={20}/>
      </button>
    </div>
  );
}

export default FloatingButton;
