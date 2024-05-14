"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { setPopupDilaogVisibility } from "@/redux/slices/popupFormSlice";

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface IProps extends ButtonType {
  className ? : string, children: React.ReactNode
}

function OpenContactPopupBtn({ className, children }: IProps) {
  const despatch = useDispatch();
  return (
    <button className={className} onClick={() => despatch(setPopupDilaogVisibility(true))}>
      {children}
    </button>
  );
}

export default OpenContactPopupBtn;
