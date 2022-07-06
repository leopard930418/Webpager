import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="flex-col sm:flex-row bg-gradient-to-r from-[#1ee9a2] to-[#75aefc] dark:bg-[#151d33] dark:bg-none lg:min-h-[350px]  w-full flex justify-around items-center lg:px-12 pb-56 text-lg font-normal tracking-wide text-white dark:text-gray-300 ">
        <div className={"w-full sm:w-1/3 p-10 rounded "}>
          <img
            className={
              "w-1/5 md:w-1/4 xl:w-1/4 m-auto mb-7 brightness-[700] dark:brightness-100"
            }
            src="assets/footer1.png"
            alt=""
          />
          <p className={"m-auto text-white text-center dark:text-gray-300"}>
            {" "}
            Thie si a piece of text that need to be filled with real text but
            beacuw we dont have this on ethe moet we vcan nor spdjdgtdb this{" "}
          </p>
        </div>
        <div className={"w-full sm:w-1/3  p-10 rounded"}>
          <img
            className={
              "w-1/4 xl:w-1/4 m-auto mb-7 brightness-[700] dark:brightness-100"
            }
            src="assets/footer2.png"
            alt=""
          />
          <p className={"m-auto text-white text-center dark:text-gray-300"}>
            {" "}
            Thie si a piece of text that need to be filled with real text but
            beacuw we dont have this on ethe moet we vcan nor spdjdgtdb this{" "}
          </p>
        </div>
        <div className={" w-full sm:w-1/3  p-10 rounded"}>
          <img
            className={
              "w-1/5 md:w-1/4 xl:w-1/4 m-auto mb-7 brightness-[700] dark:brightness-100"
            }
            src="assets/footer3.png"
            alt=""
          />
          <p className={" m-auto text-white text-center dark:text-gray-300"}>
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
