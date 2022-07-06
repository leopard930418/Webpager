import { Button } from "@mui/material";
import React from "react";

export default function Title() {
  return (
    <div className="relative w-full bg-white dark:bg-[#0f172a] pt-12">
      <div className="absolute triangle_bottom w-0 h-0 top-[-10vh] sm:top-[-20vh]  border-b-white dark:border-b-[#0f172a]"></div>

      <div className="flex flex-col sm:flex-row justify-center items-center w-full ">
        <div className={"flex flex-col w-full sm:w-5/12"}>
          <div className=" z-10 px-4 sm:px-12 ">
            <label className="text-black font-semibold text-2xl  sm:text-5xl  md:text-left dark:text-gray-200">
              This is A Title
            </label>
            <p className="text-lg font-normal  my-4	tracking-wide text-gray-800 dark:text-gray-300">
              aggagaggagLorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc viverra porta enim quis faucibus. Etiam nisl ante, cursus et
              nisi sit amet, posuere iaculis lacus. Etiam odio nisi, laoreet
              quis felis at, auctor accumsan est. Sed sit amet sodales lacus.
              Etiam aliquam in arcu eget egestas. s
            </p>

            <div className="my-4 py-4 mb-5 w-full ">
              <Button className="z-10 font-bold text-white text-bold bg-gradient-to-r from-[#19F18F] via-[#4EC1F6] to-[#E582FC]  rounded-3xl h-[50px] sm:w-1/3 w-1/2  ">
                CONTACT US
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center w-full sm:w-7/12 space-y-8 sm:space-y-0 space-x-0 sm:space-x-8 px-4 sm:px-24">
          <div className="flex flex-col rounded-2xl  justify-center items-center bg-white dark:bg-[#151d33] w-full sm:w-1/2 px-8 py-20 shadow-xl dark:shadow-none">
            <img className="w-1/3" src="assets/footer1.png" alt="" />
            <p className="text-lg text-center font-normal  my-4	tracking-wide text-gray-800 dark:text-gray-300">
              This is A Piece Of Text That Need To Be Filled with Real Text But
            </p>
          </div>
          <div className="flex flex-col rounded-2xl  justify-center items-center bg-white dark:bg-[#151d33] w-full sm:w-1/2 px-8 py-20 shadow-xl dark:shadow-none">
            <img className="w-1/3" src="assets/footer1.png" alt="" />
            <p className="text-lg text-center font-normal  my-4	tracking-wide text-gray-800 dark:text-gray-300">
              This is A Piece Of Text That Need To Be Filled with Real Text But
            </p>
          </div>
        </div>
      </div>

      <div className="flex  justify-center flex-col">
        <div className="flex flex-col items-center font-semibold text-center dark:text-gray-200 sm:text-4xl text-3xl pt-10">
          <label className="text-black w-full sm:w-1/2 font-semibold text-center dark:text-gray-200 sm:text-5xl text-2xl">
            This is A Title
          </label>
          <p className="w-full sm:w-3/4 text-lg font-normal  my-2	tracking-wide text-gray-800 dark:text-gray-300 px-4 sm:px-8">
            aggagaggagLorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc viverra porta enim quis faucibus. Etiam nisl ante, cursus et
            nisi sit amet, posuere iaculis lacus. Etiam odio nisi, laoreet quis
            felis at, auctor accumsan est. Sed sit amet sodales lacus. Etiam
            aliquam in arcu eget egestas. s
          </p>
          <div className="w-full ">
            <Button className="z-10 font-bold text-white text-bold  bg-gradient-to-r from-[#19F18F] via-[#4EC1F6] to-[#E582FC]  rounded-3xl h-[50px] sm:m-6 sm:w-1/6 w-1/2 m-3">
              COTACT US
            </Button>
          </div>
        </div>
        <div className="relative w-full h-full flex justify-center items-center">
          <img
            src="assets/dotedEffect2.png"
            className="absolute w-2/3 sm:w-1/2 right-0 sm:right-12 top-0 object-contain opacity-70 scale-90"
          />
          <img
            src="/assets/title.png"
            className="relative h-full w-5/6 sm:w-2/3 object-contain"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}
