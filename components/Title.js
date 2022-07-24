import Button from "./statics/Button";
import React from "react";
import { TriangleDivBottom } from "./statics/TriangleDivBottom";
import Router from "next/router";

export default function Title({ items }) {
  return (
    <div className="relative w-full bg-white dark:bg-[#0f172a] pt-12">
      {/* <div className="absolute triangle_bottom w-0 h-0 top-[-10vh] sm:top-[-20vh]  border-b-white dark:border-b-[#0f172a]"></div> */}
      <TriangleDivBottom
        className="w-full h-[40px] md:h-16 lg:h-20 xl:h-24 absolute  -top-[40px] md:-top-16 lg:-top-20 xl:-top-24"
        direction="right"
        upDown={false}
      />
      <div className="flex flex-col lg:flex-row justify-center items-start w-full ">
        <div className={"flex flex-col w-full lg:w-5/12"}>
          <div className=" z-10 px-4 md:pl-12 xl:pl-24 ">
            <label className="text-black font-semibold text-2xl  md:text-3xl xl:text-5xl  md:text-left dark:text-gray-200">
              {items[0].title}
            </label>
            <p className="text-sm xl:text-lg font-normal  my-4	tracking-wide text-opacity-70 dark:text-opacity-70 text-gray-800 dark:text-gray-300">
              {items[0].description}
            </p>

            <div className=" w-full mb-5">
              <Button
                className="btnShadow z-10 font-bold text-white bg-gradient-to-r from-[#19F18F] via-[#4EC1F6] to-[#E582FC]  rounded-3xl shadow-md "
                text="CONTACT US"
                onClick={()=>{Router.push('#section-contact')}}
              ></Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center w-full lg:w-7/12 space-y-8 md:space-y-0 space-x-0 md:space-x-8 px-4 md:pr-12 xl:pr-24">
          <div className="flex flex-col rounded-2xl  justify-center items-center bg-white dark:bg-[#151d33] w-full sm:w-1/2 px-8 py-20 shadow-xl dark:shadow-none">
            <img
              className="w-1/3"
              src="assets/footer1.webp"
              alt=""
              loading="lazy"
            />
            <p className="text-lg text-center font-normal  my-4	tracking-wide text-opacity-70 dark:text-opacity-70 text-gray-800 dark:text-gray-300">
              {items[0].subdescription1}
            </p>
          </div>
          <div className="flex flex-col rounded-2xl  justify-center items-center bg-white dark:bg-[#151d33] w-full sm:w-1/2 px-8 py-20 shadow-xl dark:shadow-none">
            <img
              className="w-1/3"
              src="assets/footer1.webp"
              alt=""
              loading="lazy"
            />
            <p className="text-lg text-center font-normal  my-4	tracking-wide text-opacity-70 dark:text-opacity-70 text-gray-800 dark:text-gray-300">
            {items[0].subdescription2}
            </p>
          </div>
        </div>
      </div>

      <div className="flex  justify-center flex-col pt-10 pb-8">
        <div className="flex flex-col items-center font-semibold text-center dark:text-gray-200 pt-10">
          <label className="text-black w-full sm:w-1/2 font-semibold text-center dark:text-gray-200 text-2xl md:text-3xl xl:text-5xl ">
            {items[0].title}
          </label>
          <p className="w-full sm:w-3/4 text-sm xl:text-lg font-normal  my-2	tracking-wide text-opacity-70 dark:text-opacity-70 text-gray-800 dark:text-gray-300 px-4 sm:px-8">
            {items[0].description}
          </p>
          <div className="pb-12 w-full mb-5 md:mb-0">
            <Button
              className="btnShadow z-10 font-bold text-white bg-gradient-to-r from-[#19F18F] via-[#4EC1F6] to-[#E582FC]  rounded-3xl shadow-md h-[50px] "
              text="CONTACT US"
              onClick={()=>{Router.push('#section-contact')}}

            ></Button>
          </div>
        </div>
        <div className="relative w-full h-full flex justify-center items-center">
          <img
            src="assets/dotedEffect2.svg"
            className="absolute w-2/3 sm:w-1/2 right-0 sm:right-12 top-0 object-contain opacity-70 scale-90"
          />
          <div
            className="relative h-full w-5/6 sm:w-2/3"
            style={{ aspectRatio: "100 / 74" }}
          >
            <img
              src="/assets/title.svg"
              className=" object-contain w-full"
              layout="fill"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
