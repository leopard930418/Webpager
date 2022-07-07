// import React, { useState, useRef } from "react";

// function Accordion({ accordion_items }) {
//   const [opened, setOpened] = useState(-1);

//   return (
//     <div className="my-4">
//       <div className="accordion" id="accordionExample">
//         {accordion_items &&
//           accordion_items.map((item, index) => (
//             <div
//               key={`accordion-item-key${index}`}
//               className="accordion-item bg-white  dark:bg-slate-800  border border-gray-200  dark:border-gray-600"
//             >
//               <h2 className="accordion-header mb-0" id={`heading${index}`}>
//                 <button
//                   className={`accordion-button
//                     collapsed
//                     relative
//                     flex
//                     items-center
//                     w-full
//                     py-4
//                     px-5
//                     text-base font-semibold text-[#196480]  dark:text-gray-200 text-left
//                     ${
//                       opened === index
//                         ? "bg-gradient-to-r from-[#19F18F] via-[#4EC1F6] to-[#E582FC] "
//                         : "dark:bg-slate-800"
//                     }
//                     border-0
//                     rounded-none
//                     transition
//                     focus:outline-none
//                   `}
//                   type="button"
//                   data-bs-toggle="collapse"
//                   data-bs-target={`#collapse${index}`}
//                   aria-expanded="true"
//                   aria-controls={`#collapse${index}`}
//                   onClick={() => setOpened(index)}
//                 >
//                   {item.title}
//                 </button>
//               </h2>
//               <div
//                 id={`collapse${index}`}
//                 className="accordion-collapse collapse"
//                 aria-labelledby={`heading${index}`}
//                 data-bs-parent="#accordionExample"
//               >
//                 <div className="accordion-body font-normal  py-4 px-5 dark:text-gray-300">
//                   {item.description}
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

// export default Accordion;

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Accordion1({ accordion_items }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      {accordion_items &&
        accordion_items.map((item, index) => (
          <Accordion
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            className={`text-base font-bold text-[#196480]  dark:text-gray-200  text-left bg-gray-50 bg-opacity-0 space-y-4 shadow-none
              
            }`}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon 
                // className="fill-black dark:fill-white" 
                className={`${
                  expanded === `panel${index}`
                    ? "fill-white "
                    : "fill-black dark:fill-white"
                }`}
                />
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className={` rounded-md font-bold shadow-md ${
                expanded === `panel${index}`
                  ? "bg-gradient-to-r from-[#19F18F] via-[#4EC1F6] to-[#E582FC] text-white "
                  : "bg-white dark:bg-[#1d273f]"
              }`}
            >
              <Typography
                sx={{ flexShrink: 0 }}
                className=" text-lg font-semibold"
              >
                {item.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="">
              <Typography className="text-gray-600  dark:text-gray-400">
                {item.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </>
  );
}
