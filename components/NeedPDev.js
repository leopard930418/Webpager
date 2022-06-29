import React from "react";

export default function NeedPDev() {
  return (
    <section className="pt-12 sm:px-16 px-2">
      <div className="flex flex-col justify-center place-items-center">
        <label className="font-bold text-center dark:text-gray-200 sm:text-6xl text-3xl">
          That's why you need <br /> professional developers
        </label>
        <p className="text-white text-center text-lg w-full sm:w-2/3 pt-4">
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
    </section>
  );
}
