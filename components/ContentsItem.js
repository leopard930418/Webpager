import { Box, Modal } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import en from "../locales/en";
import fr from "../locales/fr";
import nl from "../locales/nl";
import Button from "./statics/Button";
import Footer from "./statics/Footer";
import { TriangleDiv } from "./statics/TriangleDiv";

function ContentsItem({ item, index, noColor }) {
  const router = useRouter();
  // const t = router.locale === "fr" ? fr : router.locale === "nl-NL" ? nl : en;
  const t = router.locale === "fr" ? fr : router.locale === "nl-NL" ? nl : en;
  const [isOpen, setisOpen] = useState(false);
  const handleToggle = (item) => {
    setisOpen((prev) => !prev);
    setTimeout(() => {
      let selectedView = document.getElementById(
        `longdescription-${item.name}`
      );

      selectedView.scrollIntoView({
        behavior: "smooth",
        block:
          selectedView.offsetHeight > window.innerHeight ? "start" : "center",
      });
    }, 300);
  };

  const [openModalpro, setOpenModalpro] = useState(false);
  const handleOpenModalpro = () => setOpenModalpro(true);
  const handleCloseModalpro = () => setOpenModalpro(false);

  const [openModalsol, setOpenModalsol] = useState(false);
  const handleOpenModalsol = () => setOpenModalsol(true);
  const handleCloseModalsol = () => setOpenModalsol(false);

  const [openModalwhy, setOpenModalwhy] = useState(false);
  const handleOpenModalwhy = () => setOpenModalwhy(true);
  const handleCloseModalwhy = () => setOpenModalwhy(false);

  const [openModalmind, setOpenModalmind] = useState(false);
  const handleOpenModalmind = () => setOpenModalmind(true);
  const handleCloseModalmind = () => setOpenModalmind(false);

  const [openModalwork, setOpenModalwork] = useState(false);
  const handleOpenModalwork = () => setOpenModalwork(true);
  const handleCloseModalwork = () => setOpenModalwork(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "auto",
    // background: "#0F172A",
    borderRadius: "30px",
    // bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      {item.name == "problems" ? (
        <>
          <div
            id={`section-${item.name}`}
            key={`section-${index}`}
            className={
              " cannavigate  relative md:min-w-full pt-12 sm:pt-24 " +
              (index % 2 === 0 || noColor
                ? "flex-row"
                : "flex-row-reverse bg-cover changing_back")
            }
          >
            <TriangleDiv
              className="w-full h-[90px] sm:h-48 absolute  bottom-0 dark:border-b-[#151d33]"
              color="#151d33"
              direction="left"
              upDown={false}
            />
            {/* <div className="absolute triangle_top  w-0 h-0 bottom-0 dark:border-b-[#151d33]"></div> */}
            <div className={"relative"}>
              <div className="wave"></div>
            </div>
            <div className="absolute top-0 left-0 -z-10">
              <img src="assets/bubble.png"></img>
            </div>
            <div className="absolute -bottom-32 sm:bottom-11 right-0 w-1/3 sm:w-auto h-1/2 z-10 ">
              <img src="assets/dotedEffect.png"></img>
            </div>
            <div
              className={
                "flex  justify-center " +
                (index % 2 === 0 || noColor
                  ? "flex-col"
                  : "flex-row-reverse bg-cover ")
              }
            >
              <div className="flex flex-col items-center font-semibold text-center dark:text-gray-200 sm:text-4xl text-3xl pt-10 px-4 sm:px-12">
                <label
                  className={
                    index % 2 === 0 || noColor
                      ? "text-black w-3/4 sm:w-1/2 font-semibold text-center dark:text-gray-200 sm:text-5xl text-2xl"
                      : "text-white w-full sm:w-1/2 font-semibold text-center dark:text-gray-200 sm:text-4xl text-3xl"
                  }
                >
                  {item.title}
                </label>
                <p
                  className={
                    index % 2 === 0 || noColor
                      ? "w-full sm:w-2/3 text-lg font-normal  my-2	tracking-wide text-gray-800 dark:text-gray-300"
                      : "w-full sm:w-2/3 text-lg font-normal  my-2	tracking-wide text-white dark:text-gray-300"
                  }
                >
                  {item.description}
                </p>
                {item.long_description && (
                  <div className="w-full ">
                    <Button
                      // onClick={() => handleToggle(item)}
                      onClick={handleOpenModalpro}
                      className={
                        index % 2 === 0 || noColor
                          ? index === 0
                            ? "z-10 font-bold dark:text-gray-200 text-1xl bg-gradient-to-r from-[#19F18F] via-[#4EC1F6] to-[#E582FC]  rounded-3xl h-[50px] sm:m-6 sm:w-1/6 w-1/2 m-3"
                            : "z-10 border-2 border-[#1CA0E2] rounded-2xl rounded-br-none text-[#1CA0E2] hover:animate-bounce "
                          : "z-10 border-2 rounded-2xl rounded-br-none hover:animate-bounce "
                      }
                      text={isOpen ? t.read_less : t.read_more}
                    ></Button>
                  </div>
                )}
              </div>
              <Modal
                open={openModalpro}
                onClose={handleCloseModalpro}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style} className="w-11/12 sm:w-4/5 h-5/6 sm:h-3/4 bg-white dark:[#0F172A]">
                  <div>
                    <div
                      id={`longdescription-${item.name}`}
                      className={`w-full lg:px-6	py-4   ${
                        openModalpro ? "" : "hidden"
                      }`}
                    >
                      <div className="  text-3xl sm:text-5xl text-left  pb-4 pl-4 dark:text-gray-200	 ">
                        {item.name}
                      </div>
                      <div className="  text-2xl sm:text-3xl text-left dark:text-gray-200	 ">
                        {item.long_description.title}
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.long_description.content,
                        }}
                        className={
                          index % 2 === 0
                            ? " text-lg font-normal tracking-wide text-gray-600 dark:text-gray-300 "
                            : " text-lg font-normal text-white  tracking-wide  dark:text-gray-300"
                        }
                      ></div>
                    </div>
                    <div className="flex justify-center">
                      <img
                        className="h-full w-full sm:w-7/12 object-contain"
                        // src={item.img_url}
                        src="assets/problems.png"
                      />
                    </div>
                  </div>
                </Box>
              </Modal>
              {/* {item.long_description && (
                <div
                  id={`longdescription-${item.name}`}
                  className={`w-[90%] md:max-w-[70%] 	 lg:px-6	py-12   ${
                    isOpen ? "" : "hidden"
                  }`}
                >
                  <div className="  text-3xl my-6  text-left dark:text-gray-200	 ">
                    {item.long_description.title}
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.long_description.content,
                    }}
                    className={
                      index % 2 === 0
                        ? " text-lg font-normal lg:px-6   tracking-wide text-gray-600 dark:text-gray-300 "
                        : " text-lg font-normal lg:px-6 text-white  tracking-wide  dark:text-gray-300"
                    }
                  ></div>
                </div>
              )} */}
              <div className=" relative -z-20 w-full h-full flex justify-center items-center xl:-mt-24 lg:-mt-40 md:-mt-28 sm:-mt-24">
                <img
                  className="relative h-full w-full sm:w-7/12 object-contain"
                  // src={item.img_url}
                  src="assets/problems.png"
                />
              </div>
            </div>
          </div>
          <Footer></Footer>
        </>
      ) : item.name == "why_us" ? (
        // <div
        //   id={`section-${item.name}`}
        //   key={`section-${index}`}
        //   className={
        //     " cannavigate relative px-7 md:py-6 md:my-6 pt-8 md:pt-24  md:min-w-full" +
        //     (index % 2 === 0 || noColor
        //       ? "flex-row"
        //       : "flex-row-reverse bg-cover changing_back")
        //   }
        // >
        //   <div className="absolute bottom-0 right-0 h-1/2 z-10 ">
        //     <img src="assets/bubble1.png"></img>
        //   </div>
        //   <div className="absolute z-0 w-full h-1/6 sm:h-1/4 bg-[#0f172a] left-0  top-[-70px] sm:top-[-130px] skew-y-[8deg]"></div>

        //   <div
        //     className={
        //       "relative flex justify-center " +
        //       (index % 2 === 0 || noColor
        //         ? "flex-col"
        //         : "flex-row-reverse bg-cover ")
        //     }
        //   >
        //     <div className="relative flex flex-col items-center font-semibold text-center dark:text-gray-200 xl:-mt-10 lg:-mt-10 md:-mt-36 sm:text-4xl text-3xl">
        //       <label
        //         className={
        //           index % 2 === 0 || noColor
        //             ? "z-10 text-[#1ca0e2] w-full sm:w-1/2 font-semibold text-center dark:text-gray-200 sm:text-5xl text-2xl"
        //             : "z-10 text-white w-full sm:w-1/2 font-semibold text-center dark:text-gray-200 sm:text-5xl text-2xl"
        //         }
        //       >
        //         {item.title}
        //       </label>
        //       <p
        //         className={
        //           index % 2 === 0 || noColor
        //             ? "z-10 w-full sm:w-2/3 text-lg font-normal  my-1	tracking-wide text-gray-600 dark:text-gray-300"
        //             : "z-10 w-full sm:w-2/3 text-lg font-normal  my-1	tracking-wide text-white dark:text-gray-300"
        //         }
        //       >
        //         {item.description}
        //       </p>
        //       {item.long_description && (
        //         <div className="w-full ">
        //           <Button
        //             onClick={() => handleToggle(item)}
        //             className={
        //               index % 2 === 0 || noColor
        //                 ? index === 0
        //                   ? "z-10 font-bold dark:text-gray-200 text-1xl bg-gradient-to-r from-[#19F18F] via-[#4EC1F6] to-[#E582FC]  rounded-3xl h-[50px] sm:m-6 sm:w-1/6 w-1/2 m-3"
        //                   : "z-10 border-2 border-[#1CA0E2] rounded-2xl rounded-br-none text-[#1CA0E2] hover:animate-bounce "
        //                 : "z-10 border-2 rounded-2xl rounded-br-none hover:animate-bounce "
        //             }
        //             text={isOpen ? t.read_less : t.read_more}
        //           ></Button>
        //         </div>
        //       )}
        //     </div>

        //     {item.long_description && (
        //       <div
        //         id={`longdescription-${item.name}`}
        //         className={`w-[90%] md:max-w-[70%] 	 lg:px-6	py-12   ${
        //           isOpen ? "" : "hidden"
        //         }`}
        //       >
        //         <div className="  text-3xl my-6  text-left dark:text-gray-200	 ">
        //           {item.long_description.title}
        //         </div>
        //         <div
        //           dangerouslySetInnerHTML={{
        //             __html: item.long_description.content,
        //           }}
        //           className={
        //             index % 2 === 0
        //               ? " text-lg font-normal lg:px-6   tracking-wide text-gray-600 dark:text-gray-300 "
        //               : " text-lg font-normal lg:px-6 text-white  tracking-wide  dark:text-gray-300"
        //           }
        //         ></div>
        //       </div>
        //     )}
        //     <div className=" relative -z-10 w-11/12 h-full flex justify-center items-center xl:-mt-28 lg:-mt-20 md:-mt-14 sm:-mt-8">
        //       <img src="assets/section-4.png" />
        //     </div>
        //   </div>
        // </div>
        <div
          id={`section-${item.name}`}
          key={`section-${index}`}
          className={
            " cannavigate relative bg-[#f0f4ff] dark:bg-[#151d33] sm:pt-24 xl:pb-44 lg:pb-32 md:pb-24 pb-16 md:min-w-full " +
            (index % 2 === 0 || noColor ? "" : "bg-cover changing_back")
          }
        >
          {/* <div className="absolute z-0 flex flex-col w-full h-1/3 bg-[#0f172a] left-0 top-[-70px] -skew-y-[6deg]"></div> */}
          <div className="absolute triangle_top w-0 h-0 top-[-10vh] sm:top-[-20vh]  dark:border-b-[#151d33]"></div>
          <div className={"relative"}>
            <div className="wave"></div>
          </div>
          <div
            className={
              "flex justify-center " +
              (index % 2 === 0 || noColor
                ? "flex-col sm:flex-row"
                : "flex-row-reverse bg-cover ")
            }
          >
            <div className=" z-10 px-6 w-full sm:w-1/2 ">
              <label
                className={
                  index % 2 === 0 || noColor
                    ? "text-black font-semibold text-2xl  sm:text-5xl  md:text-left dark:text-gray-200"
                    : "text-white font-semibold  text-2xl sm:text-5xl   md:text-left dark:text-gray-200"
                }
              >
                {item.title}
              </label>
              <p
                className={
                  index % 2 === 0 || noColor
                    ? "text-lg font-normal  my-4	tracking-wide text-gray-800 dark:text-gray-300"
                    : "text-lg font-normal  my-4	tracking-wide text-white dark:text-gray-300"
                }
              >
                {item.description}
              </p>
              {item.long_description && (
                <div className="my-4 py-4 mb-5 w-full ">
                  <Button
                    onClick={() => handleToggle(item)}
                    className={
                      index % 2 === 0 || noColor
                        ? index === 0
                          ? "z-10 font-bold dark:text-gray-200 text-1xl bg-gradient-to-r from-[#19F18F] via-[#4EC1F6] to-[#E582FC]  rounded-3xl h-[50px] sm:w-1/3 w-1/2  "
                          : "z-10 border-2 border-[#1CA0E2] rounded-2xl rounded-br-none text-[#1CA0E2] hover:animate-bounce "
                        : "z-10 border-2 rounded-2xl rounded-br-none hover:animate-bounce "
                    }
                    text={isOpen ? t.read_less : t.read_more}
                  ></Button>
                </div>
              )}
            </div>
            <div
              className={
                " align-items: flex-start object-fit: scale-down; m-auto md:m-0 w-full sm:w-1/2  vertical-align: top;"
              }
            >
              <img
                className={"vertical-align max-w-[90%]  m-auto"}
                // src={item.img_url}
                src="assets/whyus.png"
              />
            </div>
          </div>
          {item.long_description && (
            <div
              id={`longdescription-${item.name}`}
              className={`w-[90%] md:max-w-[70%] 	 lg:px-6	py-12   ${
                isOpen ? "" : "hidden"
              }`}
            >
              <div className="  text-3xl my-6  text-left dark:text-gray-200	 ">
                {item.long_description.title}
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: item.long_description.content,
                }}
                className={
                  index % 2 === 0
                    ? " text-lg font-normal lg:px-6   tracking-wide text-gray-600 dark:text-gray-300 "
                    : " text-lg font-normal lg:px-6 text-white  tracking-wide  dark:text-gray-300"
                }
              ></div>
            </div>
          )}
        </div>
      ) : item.name == "mindset" ? (
        <div
          id={`section-${item.name}`}
          key={`section-${index}`}
          className={
            " cannavigate relative bg-white dark:bg-[#0f172a] sm:pt-24  md:min-w-full" +
            (index % 2 === 0 || noColor
              ? "flex-row"
              : "flex-row-reverse bg-cover changing_back")
          }
        >
          {console.log("items.name", item.name)}
          {/* <div className="absolute z-0 flex flex-col w-full h-1/3 bg-[#0f172a] left-0 top-[-70px] -skew-y-[6deg]"></div> */}
          <div className="absolute triangle_bottom w-0 h-0 top-[-10vh] sm:top-[-20vh]  border-b-white dark:border-b-[#0f172a]"></div>
          <div className={"relative"}>
            <div className="wave"></div>
          </div>
          <div
            className={
              "flex justify-center " +
              (index % 2 === 0 || noColor
                ? "flex-col sm:flex-row-reverse"
                : "flex-row-reverse bg-cover ")
            }
          >
            <div className=" z-10 px-6 w-full sm:w-1/2 ">
              <label
                className={
                  index % 2 === 0 || noColor
                    ? "text-black font-semibold text-2xl  sm:text-5xl  md:text-left dark:text-gray-200"
                    : "text-white font-semibold  text-2xl lg:text-4xl   md:text-left dark:text-gray-200"
                }
              >
                {item.title}
              </label>
              <p
                className={
                  index % 2 === 0 || noColor
                    ? "text-lg font-normal  my-4	tracking-wide text-gray-800 dark:text-gray-300"
                    : "text-lg font-normal  my-4	tracking-wide text-white dark:text-gray-300"
                }
              >
                {item.description}
              </p>
              {item.long_description && (
                <div className="my-4 py-4 mb-5 w-full ">
                  <Button
                    onClick={() => handleToggle(item)}
                    className={
                      index % 2 === 0 || noColor
                        ? index === 0
                          ? "z-10 font-bold dark:text-gray-200 text-1xl bg-gradient-to-r from-[#19F18F] via-[#4EC1F6] to-[#E582FC]  rounded-3xl h-[50px] sm:w-1/3 w-1/2  "
                          : "z-10 border-2 border-[#1CA0E2] rounded-2xl rounded-br-none text-[#1CA0E2] hover:animate-bounce "
                        : "z-10 border-2 rounded-2xl rounded-br-none hover:animate-bounce "
                    }
                    text={isOpen ? t.read_less : t.read_more}
                  ></Button>
                </div>
              )}
            </div>
            <div
              className={
                " align-items: flex-start object-fit: scale-down; m-auto md:m-0 w-full sm:w-1/2  vertical-align: top;"
              }
            >
              <img
                className={"vertical-align max-w-[90%]  m-auto scale-x-[-1]"}
                // src={item.img_url}
                src="assets/mindset.png"
              />
            </div>
          </div>
          {item.long_description && (
            <div
              id={`longdescription-${item.name}`}
              className={`w-[90%] md:max-w-[70%] 	 lg:px-6	py-12   ${
                isOpen ? "" : "hidden"
              }`}
            >
              <div className="  text-3xl my-6  text-left dark:text-gray-200	 ">
                {item.long_description.title}
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: item.long_description.content,
                }}
                className={
                  index % 2 === 0
                    ? " text-lg font-normal lg:px-6   tracking-wide text-gray-600 dark:text-gray-300 "
                    : " text-lg font-normal lg:px-6 text-white  tracking-wide  dark:text-gray-300"
                }
              ></div>
            </div>
          )}
        </div>
      ) : item.name == "work" ? (
        <div
          id={`section-${item.name}`}
          key={`section-${index}`}
          className={
            " cannavigate relative bg-[#f0f4ff] dark:bg-[#151d33] sm:pt-24  md:min-w-full " +
            (index % 2 === 0 || noColor ? "" : "bg-cover changing_back")
          }
        >
          {/* <div className="absolute z-0 flex flex-col w-full h-1/3 bg-[#0f172a] left-0 top-[-70px] -skew-y-[6deg]"></div> */}
          <div className="absolute triangle_top w-0 h-0 top-[-10vh] sm:top-[-20vh]  dark:border-b-[#151d33]"></div>
          <div className={"relative"}>
            <div className="wave"></div>
          </div>
          <div
            className={
              "flex justify-center " +
              (index % 2 === 0 || noColor
                ? "flex-col sm:flex-row"
                : "flex-row-reverse bg-cover ")
            }
          >
            <div className=" z-10 px-6 w-full sm:w-1/2 ">
              <label
                className={
                  index % 2 === 0 || noColor
                    ? "text-black font-semibold text-2xl  sm:text-5xl  md:text-left dark:text-gray-200"
                    : "text-white font-semibold  text-2xl lg:text-4xl   md:text-left dark:text-gray-200"
                }
              >
                {item.title}
              </label>
              <p
                className={
                  index % 2 === 0 || noColor
                    ? "text-lg font-normal  my-4	tracking-wide text-gray-800 dark:text-gray-300"
                    : "text-lg font-normal  my-4	tracking-wide text-white dark:text-gray-300"
                }
              >
                {item.description}
              </p>
              {item.long_description && (
                <div className="my-4 py-4 mb-5 w-full ">
                  <Button
                    onClick={() => handleToggle(item)}
                    className={
                      index % 2 === 0 || noColor
                        ? index === 0
                          ? "z-10 font-bold dark:text-gray-200 text-1xl bg-gradient-to-r from-[#19F18F] via-[#4EC1F6] to-[#E582FC] rounded-3xl h-[50px] sm:w-1/3 w-1/2  "
                          : "z-10 border-2 border-[#1CA0E2] rounded-2xl rounded-br-none text-[#1CA0E2] hover:animate-bounce "
                        : "z-10 border-2 rounded-2xl rounded-br-none hover:animate-bounce "
                    }
                    text={isOpen ? t.read_less : t.read_more}
                  ></Button>
                </div>
              )}
            </div>
            <div
              className={
                " align-items: flex-start object-fit: scale-down; m-auto md:m-0 w-full sm:w-1/2  vertical-align: top;"
              }
            >
              <img
                className={"vertical-align max-w-[90%]  m-auto"}
                // src={item.img_url}
                src="assets/work.png"
              />
            </div>
          </div>
          {item.long_description && (
            <div
              id={`longdescription-${item.name}`}
              className={`w-[90%] md:max-w-[70%] 	 lg:px-6	py-12   ${
                isOpen ? "" : "hidden"
              }`}
            >
              <div className="  text-3xl my-6  text-left dark:text-gray-200	 ">
                {item.long_description.title}
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: item.long_description.content,
                }}
                className={
                  index % 2 === 0
                    ? " text-lg font-normal lg:px-6   tracking-wide text-gray-600 dark:text-gray-300 "
                    : " text-lg font-normal lg:px-6 text-white  tracking-wide  dark:text-gray-300"
                }
              ></div>
            </div>
          )}
        </div>
      ) : (
        <div
          id={`section-${item.name}`}
          key={`section-${index}`}
          className={
            " cannavigate relative bg-white dark:bg-[#0f172a] sm:pt-24  md:min-w-full" +
            (index % 2 === 0 || noColor
              ? "flex-row"
              : "flex-row-reverse bg-cover changing_back")
          }
        >
          {/* <div className="absolute z-0 flex flex-col w-full h-1/3 bg-[#0f172a] left-0 top-[-70px] -skew-y-[6deg]"></div> */}
          <div className="absolute triangle_bottom w-0 h-0 top-[-10vh] md:top-[-20vh]  border-b-white dark:border-b-[#0f172a]"></div>
          <div className={"relative"}>
            <div className="wave"></div>
          </div>
          <div
            className={
              "flex justify-center " +
              (index % 2 === 0 || noColor
                ? "flex-col sm:flex-row-reverse"
                : "flex-row-reverse bg-cover ")
            }
          >
            <div className=" z-10 px-6 w-full sm:w-1/2 ">
              <label
                className={
                  index % 2 === 0 || noColor
                    ? "text-black font-semibold text-2xl  xl:text-5xl  md:text-left dark:text-gray-200 w-3/4 sm:w-4/5"
                    : "text-white font-semibold  text-2xl lg:text-5xl   md:text-left dark:text-gray-200 w-3/4 sm:w-4/5"
                }
              >
                {item.title}
              </label>
              <p
                className={
                  index % 2 === 0 || noColor
                    ? "text-lg font-normal  my-4	tracking-wide text-gray-800 dark:text-gray-300"
                    : "text-lg font-normal  my-4	tracking-wide text-white dark:text-gray-300"
                }
              >
                {item.description}
              </p>
              {item.long_description && (
                <div className="my-4 py-4 mb-5 w-full ">
                  <Button
                    onClick={() => handleToggle(item)}
                    className={
                      index % 2 === 0 || noColor
                        ? index === 0
                          ? "z-10 font-bold dark:text-gray-200 text-1xl bg-gradient-to-r from-[#19F18F] via-[#4EC1F6] to-[#E582FC]  rounded-3xl h-[50px] sm:w-1/3 w-1/2  "
                          : "z-10 border-2 border-[#1CA0E2] rounded-2xl rounded-br-none text-[#1CA0E2] hover:animate-bounce "
                        : "z-10 border-2 rounded-2xl rounded-br-none hover:animate-bounce "
                    }
                    text={isOpen ? t.read_less : t.read_more}
                  ></Button>
                </div>
              )}
            </div>
            <div
              className={
                " align-items: flex-start object-fit: scale-down; m-auto md:m-0 w-full sm:w-1/2  vertical-align: top;"
              }
            >
              <img
                className={"vertical-align max-w-[90%]  m-auto scale-x-[-1]"}
                // src={item.img_url}
                src="assets/solutions.png"
              />
            </div>
          </div>
          {item.long_description && (
            <div
              id={`longdescription-${item.name}`}
              className={`w-[90%] md:max-w-[70%] 	 lg:px-6	py-12   ${
                isOpen ? "" : "hidden"
              }`}
            >
              <div className="  text-3xl my-6  text-left dark:text-gray-200	 ">
                {item.long_description.title}
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: item.long_description.content,
                }}
                className={
                  index % 2 === 0
                    ? " text-lg font-normal lg:px-6   tracking-wide text-gray-600 dark:text-gray-300 "
                    : " text-lg font-normal lg:px-6 text-white  tracking-wide  dark:text-gray-300"
                }
              ></div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default ContentsItem;
