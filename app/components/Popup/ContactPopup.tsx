"use client";

import { setPopupDilaogVisibility } from "@/redux/slices/popupFormSlice";
import { RootState } from "@/redux/store";
import React, { RefObject, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { sendPopupEmail } from "@/actions/sendPopupEmail";
import SpinnerSvg from "../SpinnerSvg";

function ContactPopup() {
  const contactPopupVisibility = useSelector(
    (state: RootState) => state.popupForm
  );

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const dispatch = useDispatch();

  const closeDialog = () => {
    dispatch(setPopupDilaogVisibility(false));
  };

  const setInputErrorMessage = (ref : RefObject<HTMLInputElement>, errMsg : string) => {
    if(ref.current) {
      ref.current.setCustomValidity(errMsg);
      ref.current.reportValidity();
    }
  }

  const handleFormSubmit = async () => {
    const formData = new FormData();

    const name = nameRef.current?.value;
    const number = numberRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;

    if(!name) return setInputErrorMessage(nameRef, "Enter your name here");

    if(!number) return setInputErrorMessage(numberRef, "Enter your mobile number here");
    if(number.length !== 10) return setInputErrorMessage(numberRef, "Enter a valid mobile number");

    if(!email) return setInputErrorMessage(emailRef, "Enter your email here");
    if(!email.includes("@")) return setInputErrorMessage(emailRef, "Enter a valid email address");

    formData.set("name", name || "");
    formData.set("number", number || "");
    formData.set("email", email || "");
    formData.set("message", message || "");

    setIsLoading(true);
    setMessage(null);
    const res = await sendPopupEmail(formData);
    setMessage(res.message);
    setIsLoading(false);
  };

  return (
    <div
      onClick={closeDialog}
      className={`w-full h-full bg-[#00000042] absolute top-0 bottom-0 z-30 ${
        contactPopupVisibility ? "flexCenter" : "hidden"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[360px] bg-white rounded-3xl px-9 py-10 relative"
      >
        <IoCloseOutline
          onClick={closeDialog}
          size={20}
          className="absolute bg-slate-400 right-9 top-9 cursor-pointer"
        />
        <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
        <p className="text-sm text-gray-600 mt-1">
          Provide your details and then we will contact you soon
        </p>

        <form className="space-y-4 mt-4 text-sm">
          <input
            ref={nameRef}
            type="text"
            placeholder="Your Name *"
            className="outline-none border w-full border-gray-800 px-3 py-2 focus:border-blue-400"
          />
          <input
            
            ref={numberRef}
            type="number"
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            placeholder="Your Number *"
            className="outline-none border w-full border-gray-800 px-3 py-2 focus:border-blue-400"
          />
          <input
            
            ref={emailRef}
            type="email"
            placeholder="Your Email Address"
            className="outline-none border w-full border-gray-800 px-3 py-2 focus:border-blue-400"
          />
          <textarea
            
            ref={messageRef}
            rows={4}
            className="outline-none border w-full border-gray-800 px-3 py-2 focus:border-blue-400"
            placeholder="Your Message"
          ></textarea>
          <button
            disabled = {isLoading}
            onClick={handleFormSubmit}
            type="button"
            className="bg-black w-full h-9 text-white flexCenter"
          >
            <SpinnerSvg
              className={isLoading ? "block" : "hidden"}
              size="1.2em"
            />
            <span className={isLoading ? "hidden" : "block"}>Submit</span>
          </button>
          <p
            className={`text-green-700 text-center text-sm mt-2 absolute left-0 right-0 bottom-3 ${
              message ? "block" : "hidden"
            }`}
          >
            Submitted Successfully
          </p>
        </form>
      </div>
    </div>
  );
}

export default ContactPopup;
