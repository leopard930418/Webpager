import React from "react";
import Button from "./statics/Button";

export default function ContactInfo() {
  return (
    <div
      id="section-contact"
      className="cannavigate px-6 pt-0 sm:pt-20 md:px-8 xl:px-16 my-8 sm:my-20"
    >
      <div className="flex flex-col md:flex-row justify-center items-strech m-auto w-full">
        {/* <div className="flex justify-center bg-gradient-to-b from-[#19F18F] via-[#4EC1F6] to-[#E582FC]  dark:bg-[#151d33] dark:bg-none w-full  sm:w-1/3 h-[440px] rounded-[20px] flex-col items-center py-10 sm:py-20"> */}
        <div className="flex justify-center bg-contact_background  dark:bg-[#151d33] dark:bg-none w-full  md:w-1/3 h-[440px] rounded-[20px] flex-col items-center py-10 sm:py-20">
          <img
            className="w-[40%] mb-10 brightness-[700] dark:brightness-100"
            src="assets/logo.svg"
          />
          <label className="font-bold dark:text-gray-200 text-5xl text-white text-center mb-2">
            Contact us!
          </label>
          <label className="font-bold dark:text-gray-200 text-1xl text-white text-center">
            send us an email
          </label>
        </div>
        <div className="flex flex-col bg-gray-50 dark:bg-[#0b1124] w-full md:w-1/3 h-[440px] mt-0 sm:mt-10 rounded-[20px]">
          <div className="px-10">
            <div className="flex flex-col items-start mt-10">
              <label className="font-normal text-black dark:text-gray-200 text-1xl  text-center mb-2">
                FULL NAME
              </label>
              <input
                className="w-full h-[50px] rounded-[5px] bg-gray-200 dark:bg-[#1d273f] p-5"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col items-start mt-5">
              <label className="font-normal text-black dark:text-gray-200 text-1xl text-center mb-2">
                EMAIL
              </label>
              <input
                className="w-full h-[50px] rounded-[5px] bg-gray-200 dark:bg-[#1d273f] p-5"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col items-start mt-5">
              <label className="font-normal text-black dark:text-gray-200 text-1xl  text-center mb-2">
                MESSAGE
              </label>
              <textarea
                className="w-full h-[80px] rounded-[5px] bg-gray-200 dark:bg-[#1d273f] pl-5 pt-3"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex justify-center my-4 py-4 mb-5 w-full">
            <Button
              className="btnShadow z-10 font-bold text-white bg-gradient-to-r from-[#19F18F] via-[#4EC1F6] to-[#E582FC]  rounded-3xl shadow-md h-[50px] w-full "
              text="SUBMIT NOW"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
