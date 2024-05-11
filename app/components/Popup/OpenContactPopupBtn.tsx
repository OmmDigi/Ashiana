"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { setPopupDilaogVisibility } from "@/redux/slices/popupFormSlice";

function OpenContactPopupBtn({ className, children }: { className ? : string, children: React.ReactNode }) {
  const despatch = useDispatch();
  return (
    <button className={className} onClick={() => despatch(setPopupDilaogVisibility(true))}>
      {children}
    </button>
  );
}

export default OpenContactPopupBtn;
