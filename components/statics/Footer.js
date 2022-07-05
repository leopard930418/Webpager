import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="flex-col md:flex-row lg:max-h-full bg-gradient-to-r from-[#1ee9a2] to-[#75aefc] dark:bg-[#151d33] dark:bg-none lg:min-h-[350px]  max-w-full w-full flex justify-between lg:px-12 pb-56 text-lg font-extralight tracking-wide text-gray-600 dark:text-gray-300 ">
        <div className={"lg:w-1/3 xl:w-1/4 p-10 rounded"}>
          <img
            className={"w-1/5 md:w-1/4 xl:w-1/4 m-auto mb-7"}
            src="assets/footer1.png"
            alt=""
          />
          <p className={"m-auto text-gray-600 dark:text-gray-300"}>
            {" "}
            Thie si a piece of text that need to be filled with real text but
            beacuw we dont have this on ethe moet we vcan nor spdjdgtdb this{" "}
          </p>
        </div>
        <div className={"lg:w-1/3 xl:w-1/4  p-10 rounded"}>
          <img
            className={"w-1/4 xl:w-1/4 m-auto mb-7"}
            src="assets/footer2.png"
            alt=""
          />
          <p className={"m-auto text-gray-600 dark:text-gray-300"}>
            {" "}
            Thie si a piece of text that need to be filled with real text but
            beacuw we dont have this on ethe moet we vcan nor spdjdgtdb this{" "}
          </p>
        </div>
        <div className={" lg:w-1/3 xl:w-1/4  p-10 rounded"}>
          <img
            className={"w-1/5 md:w-1/4 xl:w-1/4 m-auto mb-7"}
            src="assets/footer3.png"
            alt=""
          />
          <p className={" m-auto text-gray-600 dark:text-gray-300"}>
            {" "}
            Thie si a piece of text that need to be filled with real text but
            beacuw we dont have this on ethe moet we vcan nor spdjdgtdb this{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
