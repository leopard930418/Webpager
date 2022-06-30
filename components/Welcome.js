import React from "react";

export default function Welcome() {
  return (
    // <div className="pt-12 sm:pt-24 sm:px-16 px-2">
    //   <div className="flex justify-center pb-4">
    //     <label className="font-bold text-center dark:text-gray-200 sm:text-6xl text-3xl">
    //       Welcome to <br /> dcd development
    //     </label>
    //   </div>
    //   <div className="relative flex flex-col mt-4 sm:place-items-center items-center">
    //     <img className="absolute z-10 w-3/4 pb-24" src="assets/section-1.png" />
    //     <div className="absolute z-0 w-1/2 pb-24 sm:right-0 right-2">
    //       <img src="assets/logo.png" alt="" />
    //     </div>
    //   </div>
    // </div>
    <div className="pt-10">
      <div className="font-bold text-center dark:text-gray-200 sm:text-5xl text-3xl">
        <label>
          Welcome to <br /> dcd development
        </label>
      </div>
      <div className="relative w-full h-full flex justify-center items-center">
        <img
          src="assets/logo.png"
          className="absolute w-1/2 sm:2/3 right-12 top-0 object-contain object-scale-down"
        />
        <img
          src="assets/section-1.png"
          className="relative h-full w-7/12 object-contain"
        />
      </div>
    </div>
  );
}
