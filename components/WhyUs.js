import React from "react";

export default function WhyUs() {
  return (
    <div  id="section-whyus" className="pt-12 sm:pt-24 sm:px-16 px-2">
      <div className="flex justify-center pb-4">
        <label className="font-bold text-center dark:text-gray-200 sm:text-6xl text-3xl">
          Welcome to <br /> dcd development
        </label>
      </div>
      {/* <div className="flex justify-start sm:justify-center place-items-center pb-12">
        <div className="relative z-10 w-10/12 sm:w-2/3 pb-24">
          <img src="assets/section-1.png" />
        </div>
        <div className="absolute z-0 w-1/2 pb-24 sm:-right-12 sm:top-96 right-2">
          <img src="assets/logo.png" alt="" />
        </div>
      </div> */}
      <div className="relative flex flex-col mt-4 sm:place-items-center items-center">
        <img className=" z-10 w-3/4 pb-24" src="assets/section-1.png" />
        <div className="absolute z-0 w-1/2 pb-24 sm:right-0 right-2">
          <img src="assets/logo.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col justify-center place-items-center">
        <label className="font-bold text-center dark:text-gray-200 sm:text-6xl text-3xl">
          That's why you need <br /> professional developers
        </label>
        <p className="text-white text-center text-lg w-full sm:w-2/3 pt-4 text-opacity-70">
          it is difficult for them to ensure time efficiency. However, trained
          software developers can help you develop and implement an effective
          software development that reduces vulnerabilities and increases
          productivity. This dedicated team can get your software project
          developed faster and on time.
        </p>
        <button className="font-bold dark:text-gray-200 text-1xl bg-gradient-to-r from-green-500 via-blue-500 to-pink-500 rounded-3xl h-[50px] sm:m-6 sm:w-1/6 w-1/2 m-3">
          READ MORE
        </button>
      </div>
      <div className="flex flex-col sm:place-items-center items-center">
        <img
          className="pb-24 scale-x-[-1] sm:w-3/4  w-5/6"
          src="assets/section-2.png"
        />
      </div>
    </div>
  );
}
