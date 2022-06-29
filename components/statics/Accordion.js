import React, { useState, useRef } from "react";

function Accordion({ accordion_items }) {
  const [opened, setOpened] = useState(-1);

  return (
    <div className="my-4">
      <div className="accordion" id="accordionExample">
        {accordion_items &&
          accordion_items.map((item, index) => (
            <div
              key={`accordion-item-key${index}`}
              className="accordion-item bg-white  dark:bg-slate-800  border border-gray-200  dark:border-gray-600"
            >
              <h2 className="accordion-header mb-0" id={`heading${index}`}>
                <button
                  className={`accordion-button
                    collapsed
                    relative
                    flex
                    items-center
                    w-full
                    py-4
                    px-5
                    text-base font-semibold text-[#196480]  dark:text-gray-200 text-left
                    ${
                      opened === index
                        ? "bg-gradient-to-r from-green-500 via-blue-500 to-pink-500"
                        : "dark:bg-slate-800"
                    }
                    border-0
                    rounded-none
                    transition
                    focus:outline-none
                  `}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="true"
                  aria-controls={`#collapse${index}`}
                  onClick={() => setOpened(index)}
                >
                  {item.title}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body font-extralight  py-4 px-5 dark:text-gray-300">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Accordion;
