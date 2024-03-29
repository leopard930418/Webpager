import { Box, Modal } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import en from "../locales/en";
import fr from "../locales/fr";
import nl from "../locales/nl";
import Button from "./statics/Button";
import Footer from "./statics/Footer";
import { TriangleDiv } from "./statics/TriangleDiv";
import { TriangleDivBottom } from "./statics/TriangleDivBottom";
import { TriangleDivTop } from "./statics/TriangleDivTop";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ContactlessOutlined } from "@mui/icons-material";
import Image from "next/image";

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
  const isPhoneMode = useMediaQuery("(max-width:600px)");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // overflow: "auto",
    // background: "#0F172A",
    borderRadius: "30px",
    // bgcolor: "background.paper",
    // border: "2px solid #000",
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
              " cannavigate  relative md:min-w-full pt-6 sm:pt-12 " +
              (index % 2 === 0 || noColor
                ? "flex-row"
                : "flex-row-reverse bg-cover changing_back")
            }
          >
            <TriangleDiv
              className="w-full h-[40px] md:h-16 lg:h-20 xl:h-24 absolute  bottom-0 translate-y-0.5"
              color="#151d33"
              direction="left"
              upDown={false}
            />
            {/* <div className="absolute triangle_top  w-0 h-0 bottom-0 dark:border-b-[#151d33]"></div> */}
            <div className={"relative"}>
              <div className="wave"></div>
            </div>
            <div className="absolute top-10 left-0 -z-10">
              <img src="assets/bubble.webp" loading="lazy"></img>
            </div>
            {/* <div className="absolute -bottom-72 sm:bottom-11 right-0 w-1/3 sm:w-auto h-1/2 z-10 "> */}
            {/* <div className="absolute top-[45rem] sm:top-[40rem] right-0 w-1/3 sm:w-auto h-1/2 z-10 ">
              <img src="assets/dotedEffect.svg"></img>
            </div> */}
            <div
              className={
                "flex  justify-center " +
                (index % 2 === 0 || noColor
                  ? "flex-col"
                  : "flex-row-reverse bg-cover ")
              }
            >
              <div className="flex flex-col items-center font-semibold text-center dark:text-gray-200 pt-10 px-4 sm:px-12">
                <label
                  className={
                    index % 2 === 0 || noColor
                      ? "text-black w-3/4 md:w-2/3 lg:w-1/2 font-semibold text-center dark:text-gray-200  text-2xl sm:text-3xl xl:text-5xl"
                      : "text-white w-full sm:w-1/2 font-semibold text-center dark:text-gray-200 sm:text-4xl text-3xl"
                  }
                >
                  {item.title}
                </label>
                <p
                  className={
                    index % 2 === 0 || noColor
                      ? "w-full lg:w-3/4 text-sm xl:text-lg font-title_font_family font-normal  my-4	tracking-wide text-opacity-70 dark:text-opacity-70 text-gray-800 dark:text-gray-300 "
                      : "w-full sm:w-3/4 text-lg font-normal  my-2	tracking-wide text-white dark:text-gray-300"
                  }
                >
                  {item.description}
                </p>
                {item.long_description && (
                  <div className="w-full mb-5 ">
                    <Button
                      // onClick={() => handleToggle(item)}
                      onClick={
                        isPhoneMode
                          ? () => handleToggle(item)
                          : handleOpenModalpro
                      }
                      className={
                        index % 2 === 0 || noColor
                          ? index === 0
                            ? "btnShadow z-10 font-bold dark:text-gray-200 text-1xl bg-gradient-to-r from-[#19F18F] via-[#4EC1F6] to-[#E582FC]  rounded-3xl focus:outline-none"
                            : "z-10 border-2 border-[#1CA0E2] rounded-2xl rounded-br-none text-[#1CA0E2] hover:animate-bounce "
                          : "z-10 border-2 rounded-2xl rounded-br-none hover:animate-bounce "
                      }
                      text={isOpen ? t.read_less : t.read_more}
                    ></Button>
                  </div>
                )}
              </div>
            </div>
            <div className=" relative flex justify-center items-center">
              <img
                className="absolute top-20 sm:top-32 right-0 w-1/3 z-10"
                src="assets/dotedEffect.webp"
                loading="lazy"
              ></img>
              <div
                className="relative -z-20 w-full sm:w-7/12 px-0"
                style={{ aspectRatio: "100 / 74" }}
              >
                <img
                  className=" object-contain"
                  src="assets/problems.webp"
                  loading="lazy"
                />
              </div>
            </div>
            {isPhoneMode ? (
              <>
                {item.long_description && (
                  <div
                    id={`longdescription-${item.name}`}
                    className={`w-[90%] md:max-w-[70%] 	 lg:px-6	py-12   ${
                      isOpen ? "" : "hidden"
                    }`}
                  >
                    <div className="  text-2xl my-6  text-left dark:text-gray-200	 ">
                      {item.long_description.title}
                    </div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.long_description.content,
                      }}
                      className={
                        index % 2 === 0
                          ? " text-sm font-normal lg:px-6   tracking-wide text-gray-600 dark:text-gray-300 "
                          : " text-sm font-normal lg:px-6 text-white  tracking-wide  dark:text-gray-300"
                      }
                    ></div>
                  </div>
                )}
              </>
            ) : (
              <Modal
                open={openModalpro}
                onClose={handleCloseModalpro}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  sx={style}
                  className="w-11/12 sm:w-4/5 h-5/6 sm:h-3/4 bg-white dark:bg-[#0F172A]"
                >
                  <div className="fixed top-0 flex justify-center w-full h-full">
                    <img
                      className="h-full w-full sm:w-7/12 object-contain opacity-30"
                      // src={item.img_url}
                      src="assets/problems.webp"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative">
                    <div
                      className="absolute top-0 right-0 scale-150"
                      onClick={handleCloseModalpro}
                    >
                      <img src="assets/closeIcon.svg"></img>
                    </div>
                    <div
                      id={`longdescription-${item.name}`}
                      className={`w-full lg:px-6	py-4   ${
                        openModalpro ? "" : "hidden"
                      }`}
                    >
                      <div className="  text-3xl sm:text-5xl text-left  pb-4 pl-4 dark:text-gray-200	 ">
                        {item.name}
                      </div>
                      <div className="h-[56vh] overflow-y-auto">
                        <div className="  text-2xl sm:text-3xl text-left dark:text-gray-200	 ">
                          {item.long_description.title}
                        </div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.long_description.content,
                          }}
                          className={
                            index % 2 === 0
                              ? " text-lg font-normal tracking-wide  text-gray-600 dark:text-gray-300 "
                              : " text-lg font-normal text-white  tracking-wide  dark:text-gray-300"
                          }
                        ></div>
                      </div>
                    </div>
                  </div>
                </Box>
              </Modal>
            )}
          </div>
          <Footer></Footer>
        </>
      ) : item.name == "why_us" ? (
        <div
          id={`section-${item.name}`}
          key={`section-${index}`}
          className={
            " cannavigate relative bg-[#f0f4ff] dark:bg-[#151d33] pt-10 sm:pt-24 pb-16 md:min-w-full " +
            (index % 2 === 0 || noColor ? "" : "bg-cover changing_back")
          }
        >
          {/* <div className="absolute z-0 flex flex-col w-full h-1/3 bg-[#0f172a] left-0 top-[-70px] -skew-y-[6deg]"></div> */}
          {/* <div className="absolute triangle_top w-0 h-0 top-[-10vh] sm:top-[-20vh]  dark:border-b-[#151d33]"></div> */}
          <TriangleDivTop
            className="w-full h-[40px] md:h-16 lg:h-20 xl:h-24 absolute  -top-[40px] md:-top-16 lg:-top-20 xl:-top-24 translate-y-0.5"
            direction="left"
            upDown={false}
          />
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
            <div className=" z-10 px-4 md:pl-12 xl:pl-24 pb-0 sm:pb-20 lg:pb-0 w-full sm:w-1/2 ">
              <label
                className={
                  index % 2 === 0 || noColor
                    ? "text-black font-semibold text-2xl  md:text-3xl xl:text-5xl  md:text-left dark:text-gray-200"
                    : "text-white font-semibold  text-2xl sm:text-5xl   md:text-left dark:text-gray-200"
                }
              >
                {item.title}
              </label>
              <p
                className={
                  index % 2 === 0 || noColor
                    ? "text-sm xl:text-lg font-title_font_family font-normal  my-4	tracking-wide text-opacity-70 dark:text-opacity-70 text-gray-800 dark:text-gray-300"
                    : "text-lg font-normal  my-4	tracking-wide text-white dark:text-gray-300"
                }
              >
                {item.description}
              </p>

              {item.long_description && (
                <div className="w-full mb-5">
                  <Button
                    // onClick={() => handleToggle(item)}
                    onClick={
                      isPhoneMode
                        ? () => handleToggle(item)
                        : handleOpenModalpro
                    }
                    className={
                      index % 2 === 0 || noColor
                        ? index === 0
                          ? "btnShadow z-10 font-bold dark:text-gray-200 text-1xl bg-gradient-to-r from-[#19F18F] via-[#4EC1F6] to-[#E582FC]  rounded-3xl"
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
                " flex-start object-fit: scale-down; m-auto md:m-0 w-5/6 sm:w-1/2  vertical-align: top;"
              }
              style={{ aspectRatio: "100 / 46" }}
            >
              <img
                className={""}
                // src={item.img_url}
                src="assets/whyus.webp"
                loading="lazy"
              />
            </div>
            {isPhoneMode ? (
              <>
                {item.long_description && (
                  <div
                    id={`longdescription-${item.name}`}
                    className={`w-[90%] md:max-w-[70%] 	 px-6	py-12   ${
                      isOpen ? "" : "hidden"
                    }`}
                  >
                    <div className="  text-2xl my-6  text-left dark:text-gray-200	 ">
                      {item.long_description.title}
                    </div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.long_description.content,
                      }}
                      className={
                        index % 2 === 0
                          ? " text-sm font-normal lg:px-6   tracking-wide text-gray-600 dark:text-gray-300 "
                          : " text-sm font-normal lg:px-6 text-white  tracking-wide  dark:text-gray-300"
                      }
                    ></div>
                  </div>
                )}
              </>
            ) : (
              <Modal
                open={openModalpro}
                onClose={handleCloseModalpro}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  sx={style}
                  className="w-11/12 sm:w-4/5 h-5/6 sm:h-3/4 bg-white dark:bg-[#0F172A]"
                >
                  <div className="fixed top-0 flex justify-center w-full h-full">
                    <img
                      className="h-full w-full sm:w-7/12 object-contain opacity-30"
                      // src={item.img_url}
                      src="assets/whyus.webp"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative">
                    <div
                      className="absolute top-0 right-0 scale-150"
                      onClick={handleCloseModalpro}
                    >
                      <img src="assets/closeIcon.svg"></img>
                    </div>
                    <div
                      id={`longdescription-${item.name}`}
                      className={`w-full lg:px-6	py-4   ${
                        openModalpro ? "" : "hidden"
                      }`}
                    >
                      <div className="  text-3xl sm:text-5xl text-left  pb-4 pl-4 dark:text-gray-200	 ">
                        {item.name}
                      </div>

                      <div className="h-[56vh] overflow-y-auto">
                        <div className="  text-2xl sm:text-3xl text-left dark:text-gray-200	 ">
                          {item.long_description.title}
                        </div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.long_description.content,
                          }}
                          className=" text-lg font-normal tracking-wide  text-gray-600 dark:text-gray-300 "
                        ></div>{" "}
                      </div>
                    </div>
                  </div>
                </Box>
              </Modal>
            )}
          </div>
        </div>
      ) : item.name == "mindset" ? (
        <div
          id={`section-${item.name}`}
          key={`section-${index}`}
          className={
            " cannavigate relative bg-white dark:bg-[#0f172a]  pt-10 sm:pt-24  md:min-w-full" +
            (index % 2 === 0 || noColor
              ? "flex-row"
              : "flex-row-reverse bg-cover changing_back")
          }
        >
          {/* <div className="absolute z-0 flex flex-col w-full h-1/3 bg-[#0f172a] left-0 top-[-70px] -skew-y-[6deg]"></div> */}
          {/* <div className="absolute triangle_bottom w-0 h-0 top-[-10vh] sm:top-[-20vh]  border-b-white dark:border-b-[#0f172a]"></div> */}
          <TriangleDivBottom
            className="w-full h-[40px] md:h-16 lg:h-20 xl:h-24 absolute  -top-[40px] md:-top-16 lg:-top-20 xl:-top-24 "
            direction="right"
            upDown={false}
          />
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
            <div className=" z-10 px-4 md:pr-8 xl:pr-24 pb-0 sm:pb-20 lg:pb-0 w-full sm:w-1/2 ">
              <label
                className={
                  index % 2 === 0 || noColor
                    ? "text-black font-semibold text-2xl  md:text-3xl xl:text-5xl  md:text-left dark:text-gray-200"
                    : "text-white font-semibold  text-2xl lg:text-4xl   md:text-left dark:text-gray-200"
                }
              >
                {item.title}
              </label>
              <p
                className={
                  index % 2 === 0 || noColor
                    ? "text-sm xl:text-lg font-title_font_family font-normal  my-4	tracking-wide text-opacity-70 dark:text-opacity-70 text-gray-800 dark:text-gray-300"
                    : "text-lg font-normal  my-4	tracking-wide text-white dark:text-gray-300"
                }
              >
                {item.description}
              </p>
              {item.long_description && (
                <div className=" w-full mb-5">
                  <Button
                    // onClick={() => handleToggle(item)}
                    onClick={
                      isPhoneMode
                        ? () => handleToggle(item)
                        : handleOpenModalpro
                    }
                    className={
                      index % 2 === 0 || noColor
                        ? index === 0
                          ? "btnShadow z-10 font-bold dark:text-gray-200 text-1xl bg-gradient-to-r from-[#19F18F] via-[#4EC1F6] to-[#E582FC]  rounded-3xl"
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
                " flex-start object-fit: scale-down; m-auto md:m-0 w-full sm:w-1/2  vertical-align: top;"
              }
              style={{ aspectRatio: "100 / 49" }}

            >
              <img
                className={"vertical-align max-w-[90%]  m-auto sm:mt-24 md:mt-16 lg:m-auto"}
                // src={item.img_url}
                src="assets/mindset.webp"
                loading="lazy"
              />
            </div>
          </div>
          {isPhoneMode ? (
            <>
              {" "}
              {item.long_description && (
                <div
                  id={`longdescription-${item.name}`}
                  className={`w-[90%] md:max-w-[70%] 	 px-6	py-12   ${
                    isOpen ? "" : "hidden"
                  }`}
                >
                  <div className="  text-2xl my-6  text-left dark:text-gray-200	 ">
                    {item.long_description.title}
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.long_description.content,
                    }}
                    className={
                      index % 2 === 0
                        ? " text-sm font-normal lg:px-6   tracking-wide text-gray-600 dark:text-gray-300 "
                        : " text-sm font-normal lg:px-6 text-white  tracking-wide  dark:text-gray-300"
                    }
                  ></div>
                </div>
              )}
            </>
          ) : (
            <Modal
              open={openModalpro}
              onClose={handleCloseModalpro}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={style}
                className="w-11/12 sm:w-4/5 h-5/6 sm:h-3/4 bg-white dark:bg-[#0F172A]"
              >
                <div className="fixed top-0 flex justify-center w-full h-full">
                  <img
                    className="h-full w-full sm:w-7/12 object-contain opacity-30"
                    // src={item.img_url}
                    src="assets/mindset.webp"
                    loading="lazy"
                  />
                </div>
                <div className="relative">
                  <div
                    className="absolute top-0 right-0 scale-150"
                    onClick={handleCloseModalpro}
                  >
                    <img src="assets/closeIcon.svg"></img>
                  </div>
                  <div
                    id={`longdescription-${item.name}`}
                    className={`w-full lg:px-6	py-4   ${
                      openModalpro ? "" : "hidden"
                    }`}
                  >
                    <div className="  text-3xl sm:text-5xl text-left  pb-4 dark:text-gray-200	 ">
                      {item.name}
                    </div>

                    <div className="h-[56vh] overflow-y-auto">
                      <div className="  text-2xl sm:text-3xl text-left dark:text-gray-200	 ">
                        {item.long_description.title}
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.long_description.content,
                        }}
                        className=" text-lg font-normal tracking-wide  text-gray-600 dark:text-gray-300 "
                      ></div>{" "}
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
          )}
        </div>
      ) : item.name == "work" ? (
        <div
          id={`section-${item.name}`}
          key={`section-${index}`}
          className={
            " cannavigate relative bg-[#f0f4ff] dark:bg-[#151d33] pt-10 sm:pt-24  md:min-w-full " +
            (index % 2 === 0 || noColor ? "" : "bg-cover changing_back")
          }
        >
          {/* <div className="absolute z-0 flex flex-col w-full h-1/3 bg-[#0f172a] left-0 top-[-70px] -skew-y-[6deg]"></div> */}
          {/* <div className="absolute triangle_top w-0 h-0 top-[-10vh] sm:top-[-20vh]  dark:border-b-[#151d33]"></div> */}
          <TriangleDivTop
            className="w-full h-[40px] md:h-16 lg:h-20 xl:h-24 absolute  -top-[40px] md:-top-16 lg:-top-20 xl:-top-24 translate-y-0.5"
            direction="left"
            upDown={false}
          />
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
            <div className=" z-10 px-4 md:pl-12 xl:pl-24 pb-0 sm:pb-20 lg:pb-0 w-full sm:w-1/2 ">
              <label
                className={
                  index % 2 === 0 || noColor
                    ? "text-black font-semibold text-2xl md:text-3xl xl:text-5xl  md:text-left dark:text-gray-200"
                    : "text-white font-semibold  text-2xl lg:text-4xl   md:text-left dark:text-gray-200"
                }
              >
                {item.title}
              </label>
              <p
                className={
                  index % 2 === 0 || noColor
                    ? "text-sm xl:text-lg font-title_font_family font-normal  my-4	tracking-wide text-opacity-70 dark:text-opacity-70 text-gray-800 dark:text-gray-300"
                    : "text-lg font-normal  my-4	tracking-wide text-white dark:text-gray-300"
                }
              >
                {item.description}
              </p>
              {item.long_description && (
                <div className="w-full mb-5">
                  <Button
                    // onClick={() => handleToggle(item)}
                    onClick={
                      isPhoneMode
                        ? () => handleToggle(item)
                        : handleOpenModalpro
                    }
                    className={
                      index % 2 === 0 || noColor
                        ? index === 0
                          ? "btnShadow z-10 font-bold dark:text-gray-200 text-1xl bg-gradient-to-r from-[#19F18F] via-[#4EC1F6] to-[#E582FC] rounded-3xl "
                          : "btnShadow z-10 font-bold dark:text-gray-200 text-1xl bg-gradient-to-r from-[#19F18F] via-[#4EC1F6] to-[#E582FC] rounded-3xl"
                        : "btnShadow z-10 font-bold dark:text-gray-200 text-1xl bg-gradient-to-r from-[#19F18F] via-[#4EC1F6] to-[#E582FC] rounded-3xl "
                    }
                    text={isOpen ? t.read_less : t.read_more}
                  ></Button>
                </div>
              )}
            </div>
            <div
              className={
                " flex-start object-fit: scale-down; m-auto md:m-0 w-full sm:w-1/2  vertical-align: top;"
              }
              style={{ aspectRatio: "100 / 64" }}

            >
              <img
                className={"vertical-align max-w-[90%]  m-auto sm:mt-16 md:mt-12 lg:m-auto"}
                // src={item.img_url}
                src="assets/work.webp"
                loading="lazy"
              />
            </div>
          </div>
          {isPhoneMode ? (
            <>
              {" "}
              {item.long_description && (
                <div
                  id={`longdescription-${item.name}`}
                  className={`w-[90%] md:max-w-[70%] 	 px-6	py-12   ${
                    isOpen ? "" : "hidden"
                  }`}
                >
                  <div className="  text-2xl my-6  text-left dark:text-gray-200	 ">
                    {item.long_description.title}
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.long_description.content,
                    }}
                    className={
                      index % 2 === 0
                        ? " text-sm font-normal lg:px-6   tracking-wide text-gray-600 dark:text-gray-300 "
                        : " text-sm font-normal lg:px-6 text-white  tracking-wide  dark:text-gray-300"
                    }
                  ></div>
                </div>
              )}
            </>
          ) : (
            <Modal
              open={openModalpro}
              onClose={handleCloseModalpro}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={style}
                className="w-11/12 sm:w-4/5 h-5/6 sm:h-3/4 bg-white dark:bg-[#0F172A]"
              >
                <div className="fixed top-0 flex justify-center w-full h-full">
                  <img
                    className="h-full w-full sm:w-7/12 object-contain opacity-30"
                    // src={item.img_url}
                    src="assets/work.webp"
                    loading="lazy"
                  />
                </div>
                <div className="relative">
                  <div
                    className="absolute top-0 right-0 scale-150"
                    onClick={handleCloseModalpro}
                  >
                    <img src="assets/closeIcon.svg"></img>
                  </div>
                  <div
                    id={`longdescription-${item.name}`}
                    className={`w-full lg:px-6	py-4   ${
                      openModalpro ? "" : "hidden"
                    }`}
                  >
                    <div className="  text-3xl sm:text-5xl text-left  pb-4  dark:text-gray-200	 ">
                      {item.name}
                    </div>

                    <div className="h-[56vh] overflow-y-auto">
                      <div className="  text-2xl sm:text-3xl text-left dark:text-gray-200	 ">
                        {item.long_description.title}
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.long_description.content,
                        }}
                        className=" text-lg font-normal tracking-wide  text-gray-600 dark:text-gray-300 "
                      ></div>
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
          )}
        </div>
      ) : (
        <div
          id={`section-${item.name}`}
          key={`section-${index}`}
          className={
            " cannavigate relative bg-white dark:bg-[#0f172a] pt-10 sm:pt-24  md:min-w-full " +
            (index % 2 === 0 || noColor
              ? "flex-row"
              : "flex-row-reverse bg-cover changing_back")
          }
        >
          {/* <div className="absolute z-0 flex flex-col w-full h-1/3 bg-[#0f172a] left-0 top-[-70px] -skew-y-[6deg]"></div> */}
          {/* <div className="absolute triangle_bottom w-0 h-0 top-[-10vh] sm:top-[-20vh]  border-b-white dark:border-b-[#0f172a]"></div> */}
          <TriangleDivBottom
            className="w-full h-[40px] md:h-16 lg:h-20 xl:h-24 absolute  -top-[40px] md:-top-16 lg:-top-20 xl:-top-24 translate-y-0.5"
            direction="right"
            upDown={false}
          />
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
            <div className=" z-10 px-4 md:pr-12 xl:pr-24 pb-0 sm:pb-20 lg:pb-0 w-full sm:w-1/2 ">
              <label
                className={
                  index % 2 === 0 || noColor
                    ? "text-black font-semibold text-2xl  md:text-3xl xl:text-5xl  md:text-left dark:text-gray-200 w-3/4 sm:w-4/5"
                    : "text-white font-semibold  text-2xl lg:text-5xl   md:text-left dark:text-gray-200 w-3/4 sm:w-4/5"
                }
              >
                {item.title}
                {console.log(">>>>>", item.title)}
              </label>
              <p
                className={
                  index % 2 === 0 || noColor
                    ? "text-sm xl:text-lg font-title_font_family font-normal  my-4	tracking-wide text-opacity-70 dark:text-opacity-70 text-gray-800 dark:text-gray-300"
                    : "text-lg font-normal  my-4	tracking-wide text-white dark:text-gray-300"
                }
              >
                {item.description}
              </p>
              {item.long_description && (
                <div className=" w-full mb-5">
                  <Button
                    // onClick={() => handleToggle(item)}
                    onClick={
                      isPhoneMode
                        ? () => handleToggle(item)
                        : handleOpenModalpro
                    }
                    className={
                      index % 2 === 0 || noColor
                        ? index === 0
                          ? "btnShadow z-10 font-bold dark:text-gray-200 text-1xl bg-gradient-to-r from-[#19F18F] via-[#4EC1F6] to-[#E582FC]  rounded-3xl"
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
                " flex flex-start object-fit: scale-down; m-auto md:m-0 w-full sm:w-1/2  vertical-align: top;"
              }
              style={{ aspectRatio: "100 / 49" }}
            >
              <img
                className={"vertical-align  m-auto sm:mt-24 md:mt-16 lg:m-auto"}
                // src={item.img_url}
                src="assets/solutions.webp"
                loading="lazy"
              />
            </div>
          </div>
          {isPhoneMode ? (
            <>
              {item.long_description && (
                <div
                  id={`longdescription-${item.name}`}
                  className={`w-[90%] md:max-w-[70%] 	 lg:px-6	py-12   ${
                    isOpen ? "" : "hidden"
                  }`}
                >
                  <div className="  text-2xl my-6  text-left dark:text-gray-200	 ">
                    {item.long_description.title}
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.long_description.content,
                    }}
                    className={
                      index % 2 === 0
                        ? " text-sm font-normal lg:px-6   tracking-wide text-gray-600 dark:text-gray-300 "
                        : " text-sm font-normal lg:px-6 text-white  tracking-wide  dark:text-gray-300"
                    }
                  ></div>
                </div>
              )}
            </>
          ) : (
            <Modal
              open={openModalpro}
              onClose={handleCloseModalpro}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={style}
                className="w-11/12 sm:w-4/5 h-5/6 sm:h-3/4 bg-white dark:bg-[#0F172A]"
              >
                <div className="fixed top-0 flex justify-center w-full h-full">
                  <img
                    className="h-full w-full sm:w-7/12 object-contain opacity-30"
                    // src={item.img_url}
                    src="assets/solutions.webp"
                    loading="lazy"
                  />
                </div>
                <div className="relative">
                  <div
                    className="absolute top-0 right-0 scale-150"
                    onClick={handleCloseModalpro}
                  >
                    <img src="assets/closeIcon.svg"></img>
                  </div>
                  <div
                    id={`longdescription-${item.name}`}
                    className={`w-full lg:px-6	py-4   ${
                      openModalpro ? "" : "hidden"
                    }`}
                  >
                    <div className="  text-3xl sm:text-5xl text-left  pb-4 pl-4 dark:text-gray-200	 ">
                      {item.name}
                    </div>

                    <div className="h-[56vh] overflow-y-auto">
                      <div className="  text-2xl sm:text-3xl text-left dark:text-gray-200	 ">
                        {item.long_description.title}
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.long_description.content,
                        }}
                        className=" text-lg font-normal tracking-wide  text-gray-600 dark:text-gray-300 "
                      ></div>
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
          )}
        </div>
      )}
    </>
  );
}

export default ContentsItem;
