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
    //     <img className="absolute z-10 w-3/4 pb-24" src="assets/section-1.svg" />
    //     <div className="absolute z-0 w-1/2 pb-24 sm:right-0 right-2">
    //       <img src="assets/logo.svg" alt="" />
    //     </div>
    //   </div>
    // </div>
    <div className="pt-10 h-screen">
      <div className="font-bold text-center dark:text-gray-200 sm:text-7xl text-3xl">
        <label>
          Welcome to <br /> dcd development
        </label>
      </div>
      <div className="relative w-full flex justify-center items-center">
        <img
          src="assets/logo.svg"
          className="absolute w-2/3 sm:w-1/2 right-0 sm:right-12 top-3 sm:-top-5 object-contain opacity-70 scale-90"
        />
        <img
          src="/assets/section-1.png"
          className="relative h-full w-5/6 sm:w-7/12 object-contain"
          layout='fill'
        />
      </div>
    </div>
  );
}
