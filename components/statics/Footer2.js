import { Divider } from "@mui/material";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer2() {
  return (
    <>
      <Divider
        variant="middle"
        className="bg-gray-400 dark:bg-white dark:bg-opacity-20"
      ></Divider>
      <div className="bg-white  h-1/2 w-full flex  md:flex-row flex-col justify-around items-center sm:items-start sm:p-20 dark:bg-[#0f172a]">
        <div className="p-5 ">
          <p className="flex flex-col text-gray-800  dark:text-gray-300  font-bold text-3xl">
            <img
              className="block  mx-auto   h-40 w-auto"
              src="/assets/logo.svg"
              alt="Workflow"
            />
            <span className="pl-2 font-normal  text-2xl text-transparent bg-clip-text bg-gray-700 dark:bg-white">
              DCD DEVELOPMENT
            </span>
          </p>
          {/* <div className="flex gap-6 pb-5 justify-center">
            <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600    dark:hover:text-yellow-600  dark:text-gray-300" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600   dark:hover:text-blue-600     dark:text-gray-300" />
            <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600   dark:hover:text-blue-600    dark:text-gray-300" />
            <FaYoutube className="text-2xl cursor-pointer hover:text-red-600  dark:hover:text-red-600  dark:text-gray-300" />
          </div> */}
        </div>
        <div className="p-5">
          <ul>
            <p className="text-center sm:text-left  text-gray-700  dark:text-gray-200 font-normal text-2xl pb-4">
              Company
            </p>
            <li className="text-center sm:text-left text-gray-500  dark:text-gray-300   text-md pb-2  hover:text-blue-600 cursor-pointer">
              Stocks
            </li>
            <li className="text-center sm:text-left text-gray-500   dark:text-gray-300  text-md pb-2  hover:text-blue-600 cursor-pointer">
              Futures & Options
            </li>
            <li className="text-center sm:text-left text-gray-500   dark:text-gray-300 text-md pb-2  hover:text-blue-600 cursor-pointer">
              Mutual Funds
            </li>
            <li className="text-center sm:text-left text-gray-500   dark:text-gray-300 text-md pb-2  hover:text-blue-600 cursor-pointer">
              Fixed deposits
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-center sm:text-left  text-gray-700  dark:text-gray-200 font-normal text-2xl pb-4">
              Contact us
            </p>
            <li className="text-center sm:text-left text-gray-500   dark:text-gray-300  text-md pb-2  hover:text-blue-600 cursor-pointer">
              About
            </li>
            <li className="text-center sm:text-left text-gray-500  dark:text-gray-300   text-md pb-2  hover:text-blue-600 cursor-pointer">
              Products
            </li>
            <li className="text-center sm:text-left text-gray-500   dark:text-gray-300 text-md pb-2  hover:text-blue-600 cursor-pointer">
              Pricing
            </li>
            <li className="text-center sm:text-left text-gray-500  dark:text-gray-300   text-md pb-2  hover:text-blue-600 cursor-pointer">
              Careers
            </li>
            <li className="text-center sm:text-left text-gray-500    dark:text-gray-300 text-md pb-2  hover:text-blue-600 cursor-pointer">
              Press & Media
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-center sm:text-left  text-gray-700  dark:text-gray-200 font-normal text-2xl pb-4">
              Support
            </p>
            <li className="text-center sm:text-left text-gray-500  dark:text-gray-300   text-md pb-2  hover:text-blue-600 cursor-pointer">
              Contact
            </li>
            <li className="text-center sm:text-left text-gray-500  dark:text-gray-300   text-md pb-2  hover:text-blue-600 cursor-pointer">
              Support Portals
            </li>
            <li className="text-center sm:text-left text-gray-500  dark:text-gray-300   text-md pb-2  hover:text-blue-600 cursor-pointer">
              List Of Charges
            </li>
            <li className="text-center sm:text-left text-gray-500  dark:text-gray-300    text-md pb-2  hover:text-blue-600 cursor-pointer">
              Downloads & Resources
            </li>
            <li className="text-center sm:text-left text-gray-500  dark:text-gray-300   text-md pb-2  hover:text-blue-600 cursor-pointer">
              Videos
            </li>
          </ul>
        </div>
        {/* <div className="p-5">
          <p className="text-center sm:text-left text-white  dark:text-gray-200    font-medium text-2xl pb-4">
            Connect with us
          </p>
          <div className="flex gap-6 pb-5 justify-center">
            <FaLinkedin className="text-2xl text-slate-200 cursor-pointer hover:text-blue-600   dark:hover:text-blue-600    dark:text-gray-300" />
            <FaTwitter className="text-2xl text-slate-200 cursor-pointer hover:text-blue-600   dark:hover:text-blue-600     dark:text-gray-300" />
            <FaInstagram className="text-2xl text-slate-200 cursor-pointer hover:text-yellow-600    dark:hover:text-yellow-600  dark:text-gray-300" />
            <FaYoutube className="text-2xl text-slate-200 cursor-pointer hover:text-red-600  dark:hover:text-red-600  dark:text-gray-300" />
          </div>
        </div> */}
      </div>
      <Divider
        variant="middle"
        className="bg-gray-300 dark:bg-white dark:bg-opacity-20"
      ></Divider>

      <div className="bg-white dark:bg-[#0f172a] flex flex-col sm:flex-row justify-between items-center text-center py-5 px-4 sm:px-24 space-y-2 ">
        <div>
          <h1 className=" text-center sm:text-left font-bold text-gray-900 dark:text-gray-200 ">
            © 2021-2022 All rights reserved
          </h1>
        </div>
        <div className="flex gap-6 justify-center">
          <FaLinkedin className="text-2xl text-slate-800 cursor-pointer hover:text-blue-600   dark:hover:text-blue-600    dark:text-gray-300" />
          <FaTwitter className="text-2xl text-slate-800 cursor-pointer hover:text-blue-600   dark:hover:text-blue-600     dark:text-gray-300" />
          <FaInstagram className="text-2xl text-slate-800 cursor-pointer hover:text-yellow-600    dark:hover:text-yellow-600  dark:text-gray-300" />
          <FaYoutube className="text-2xl text-slate-800 cursor-pointer hover:text-red-600  dark:hover:text-red-600  dark:text-gray-300" />
        </div>
      </div>
    </>
  );
}

export default Footer2;
