import React from "react";

export default function Welcomedev() {
    return(
        <section className="pt-12 sm:px-16 px-2">
        <div className="flex flex-col justify-center">
          <label className="font-bold text-center dark:text-gray-200 sm:text-6xl text-3xl">
            Welcome to <br /> dcd development
          </label>
        </div>
        <div className="relative flex flex-col mt-4 sm:place-items-center items-center">
          <img className=" z-10 w-3/4 pb-24" src="assets/section-1.png" />
          <div className="absolute z-0 w-1/2 pb-24 sm:right-0 right-2">
            <img src="assets/logo.png" alt="" />
          </div>
        </div>
        <div className=""></div>
      </section>
    );
}