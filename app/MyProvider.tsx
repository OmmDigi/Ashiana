"use client";

import React, { useRef } from "react";
import Navbarholder from "./components/Navbar/Navbarholder";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ContactPopup from "./components/Popup/ContactPopup";
import FloatingButton from "./components/FloatingButton";
import NewFooter from "./components/Footer/NewFooter";
import ShowImageDialog from "./components/Popup/ShowImageDialog";
import MobileSlider from "./components/MobileSlider";

function MyProvider({ children }: { children: React.ReactNode }) {
  const scrollbarRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={scrollbarRef} className="h-screen overflow-hidden relative overflow-y-scroll w-full">
      <div>
        <Provider store={store}>
          <ContactPopup />
          <FloatingButton />
          <ShowImageDialog />
          <MobileSlider />
          <Navbarholder pReferral={scrollbarRef} />
          {children}
          <NewFooter />
        </Provider>
      </div>
    </div>
  );
}

export default MyProvider;
