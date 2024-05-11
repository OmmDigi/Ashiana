"use client";

import React, { useEffect, useRef } from "react";
import Navbarholder from "./components/Navbar/Navbarholder";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ContactPopup from "./components/Popup/ContactPopup";
import FloatingButton from "./components/FloatingButton";
import NewFooter from "./components/Footer/NewFooter";
import ShowImageDialog from "./components/Popup/ShowImageDialog";

function MyProvider({ children }: { children: React.ReactNode }) {
  const scrollbarRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollbarRef}
      className="h-screen overflow-hidden overflow-y-scroll max-w-[1500px] mx-auto"
    >
      <Provider store={store}>
        <ContactPopup />
        <FloatingButton />
        <ShowImageDialog />
        <Navbarholder pReferral={scrollbarRef} />
        {children}
        <NewFooter />
      </Provider>
    </div>
  );
}

export default MyProvider;
