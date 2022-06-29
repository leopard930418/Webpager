import React from "react";

export default function Mailsend() {
  return (
    <section className="px-6 sm:px-16 my-8 sm:my-20">
      <div className="flex flex-col sm:flex-row justify-center items-strech m-auto w-full">
        <div className="flex justify-center bg-[#1d273f] w-full sm:w-1/3 rounded-[20px] flex-col items-center py-10 sm:py-20">
          <img className="w-[40%] mb-10" src="assets/logo.png" />
          <label className="font-bold dark:text-gray-200 text-5xl text-white text-center mb-2">
            Contact us!
          </label>
          <label className="font-bold dark:text-gray-200 text-1xl text-white text-center">
            send us an email kkkkkk
          </label>
        </div>
        <div className="flex flex-col bg-[#0b1124] w-full sm:w-1/3 rounded-[20px]">
          <div className="px-10">
            <div className="flex flex-col items-start mt-10">
              <label className="font-bold dark:text-gray-200 text-1xl text-white text-center mb-2">
                FULL NAME
              </label>
              <input
                className="w-full h-[50px] rounded-[5px] bg-[#1d273f] p-5"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col items-start mt-5">
              <label className="font-bold dark:text-gray-200 text-1xl text-white text-center mb-2">
                EMAIL
              </label>
              <input
                className="w-full h-[50px] rounded-[5px] bg-[#1d273f] p-5"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col items-start mt-5">
              <label className="font-bold dark:text-gray-200 text-1xl text-white text-center mb-2">
                MESSAGE
              </label>
              <textarea
                className="w-full h-[80px] rounded-[5px] bg-[#1d273f] pl-5 pt-3"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex justify-center mt-6">
              <button className="font-bold dark:text-gray-200 text-1xl text-white  bg-gradient-to-r from-green-500 via-blue-500 to-pink-500 rounded-[20px] w-full h-[40px]">
                SUBMIT NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
