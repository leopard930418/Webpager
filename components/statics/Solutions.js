import React from "react";

export default function Solutions() {
  return (
    <section className="relative sm:pb-80 pb-12 bg-[#151d33]">
      <div className="absolute z-10 flex flex-col w-full h-1/3 bg-[#151d33] top-[-100px] -skew-y-[6deg]"></div>
      <div className="relative z-10">
        <div className="flex sm:px-16 px-2 sm:flex-row flex-col-reverse bg-[#151d33]">
          <div className="flex sm:w-1/2 w-full">
            <img
              className="w-full sm:place-items-left place-items-center sm:pb-12 pb-2 transform scale-x-[-1]"
              src="assets/section-3.png"
            />
          </div>
          <div className="flex flex-col sm:items-start items-center sm:pt-24 pt-6 sm:w-1/2 w-full">
            <label className="font-bold dark:text-gray-200 sm:text-left text-center sm:text-6xl text-2xl">
              The right solution for <br />
              each problem.
            </label>
            <p className="text-white text-center text-lg  pt-4">
              Your business needs to stay ahead, and we make sure it stays at
              the top! Businesses today experience competition like never
              before. To win the race, they need out-of-the-box business
              features. That’s where we come into the picture.
            </p>

            <button className="font-bold  dark:text-gray-200 text-1xl bg-gradient-to-r from-green-500 via-blue-500 to-pink-500 rounded-3xl sm:w-1/4 w-1/2 h-[50px] m-6">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
