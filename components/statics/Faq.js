import React from "react";
import Accordion1 from "./Accordion";

function Faq({ items, accordion_items }) {
  if (!items) items = [];
  return (
    <div className="lg:px-24 pt-1 pb-24   sm:px-4 ">
      {items.map((item, index) => {

        return (
          <div
            id="faq"
            key={`faq-${index}`}
            className={
              "  cannavigate md:pt-10	" +
              (index % 2 !== 0 ? "flex-row" : "")
            }
          >
            <h1
              className={
                index % 2 === 0
                  ? "text-[#196480] ml-2 font-semibold  text-2xl lg:text-4xl my-6 sm:text-center md:text-left dark:text-gray-200"
                  : ""
              }
            >
            </h1>
            <div
              className="flex-1 px-6 m-auto"
              style={{ maxWidth: "900px",  }}
            >
              <h1
                className={
                  index % 2 === 0
                    ? " flex-1  text-[#196480] font-semibold text-4xl sm:text-center md:text-left dark:text-gray-200"
                    : ""
                }
              >
              </h1>
              <Accordion1 accordion_items={accordion_items}></Accordion1>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Faq;
