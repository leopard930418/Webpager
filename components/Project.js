import React from "react";

export default function Project() {
  return (
    <div className="relative sm:pt-60">
      <div className="flex flex-col items-center right-[10px] sm:relative">
        <label
          className="font-bold dark:text-gray-200 text-center sm:text-6xl text-2xl"
          style={{ zIndex: "10" }}
        >
          The right solution for <br />
          each problem.
        </label>
        <p className="text-white text-center text-lg w-full sm:w-2/3 px-4 pt-4 text-opacity-70">
          There is a solution to all challenges in the development process;
          hiring an outsourcing company. It speeds up the process and relieves
          much stress, but why is that? We have done thorough research, and
          therefore we know that hiring an outsourcing company is the solution.
        </p>
        <button
          className="font-bold dark:text-gray-200 text-1xl text-white bg-gradient-to-r items-center from-green-500 via-blue-500 to-pink-500 rounded-3xl sm:w-1/6 w-1/2 h-[50px] m-6"
          style={{ zIndex: "0" }}
        >
          READ MORE
        </button>
        <div className="sd:place-items-center bg-section1_backrgound bg-no-repeat bg-left-[100px] bg-[lengh:200px_100px]">
          <div className="sm:place-items-center bg-gradient-to-b from-transparent via-[#0f172a] to-[#0f172a]">
            <img className="w-[90%]" src="assets/section-5.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
