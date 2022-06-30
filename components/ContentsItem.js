import { useRouter } from "next/router";
import { useState } from "react";
import en from "../locales/en";
import fr from "../locales/fr";
import nl from "../locales/nl";
import Button from "./statics/Button";

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
  return (
    <>
      {item.name == "why_us" ? (
        <div
          id={`section-${item.name}`}
          key={`section-${index}`}
          className={
            " cannavigate   py-6 my-6 px-7 xl2:px-52 m md:py-6 md:my-6 pt-8  md:pt-24  md:min-w-full " +
            (index % 2 === 0 || noColor
              ? "flex-row"
              : "flex-row-reverse bg-cover changing_back")
          }
        >
          <div className={"relative"}>
            <div className="wave"></div>
          </div>
          <div
            className={
              "flex  justify-center " +
              (index % 2 === 0 || noColor
                ? "flex-col"
                : "flex-row-reverse bg-cover ")
            }
          >
            <div className="flex flex-col items-center font-semibold text-center dark:text-gray-200 sm:text-4xl text-3xl pt-10">
              <label
                className={
                  index % 2 === 0 || noColor
                    ? "text-[#1ca0e2] w-full sm:w-1/2 font-semibold text-center dark:text-gray-200 sm:text-4xl text-3xl"
                    : "text-white w-full sm:w-1/2 font-semibold text-center dark:text-gray-200 sm:text-4xl text-3xl"
                }
              >
                {item.title}
              </label>
              <p
                className={
                  index % 2 === 0 || noColor
                    ? "w-full sm:w-2/3 text-lg font-extralight  my-2	tracking-wide text-gray-600 dark:text-gray-300"
                    : "w-full sm:w-2/3 text-lg font-extralight  my-2	tracking-wide text-white dark:text-gray-300"
                }
              >
                {item.description}
              </p>
              {item.long_description && (
                <div className="w-full ">
                  <Button
                    onClick={() => handleToggle(item)}
                    className={
                      index % 2 === 0 || noColor
                        ? index === 0
                          ? "z-10 font-bold dark:text-gray-200 text-1xl bg-gradient-to-r from-green-500 via-blue-500 to-pink-500 rounded-3xl h-[50px] sm:m-6 sm:w-1/6 w-1/2 m-3"
                          : "z-10 border-2 border-[#1CA0E2] rounded-2xl rounded-br-none text-[#1CA0E2] hover:animate-bounce "
                        : "z-10 border-2 rounded-2xl rounded-br-none hover:animate-bounce "
                    }
                    text={isOpen ? t.read_less : t.read_more}
                  ></Button>
                </div>
              )}
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
                      ? " text-lg font-extralight lg:px-6   tracking-wide text-gray-600 dark:text-gray-300 "
                      : " text-lg font-extralight lg:px-6 text-white  tracking-wide  dark:text-gray-300"
                  }
                ></div>
              </div>
            )}
            <div className=" relative -z-10 w-full h-full flex justify-center items-center xl:-mt-44 lg:-mt-40 md:-mt-28 sm:-mt-24">
              <img
                className={`relative h-full w-7/12 object-contain ${
                  item.name == "why_us" ? "scale-x-[-1]" : ""
                }`}
                // src={item.img_url}
                src="assets/section-2.png"
              />
            </div>
          </div>
        </div>
      ) : item.name == "problems" ? (
        <div
          id={`section-${item.name}`}
          key={`section-${index}`}
          className={
            " cannavigate relative px-7 md:py-6 md:my-6 pt-8 md:pt-24  md:min-w-full" +
            (index % 2 === 0 || noColor
              ? "flex-row"
              : "flex-row-reverse bg-cover changing_back")
          }
        >
          <div className="absolute z-0 flex flex-col w-full xl:h-1/2 lg:h-1/2 md:h-1/2 bg-[#0f172a] left-0 xl:top-[-150px] lg:top-[-100px] md:top-[-150px] sm:top-[-130px] sm:skew-y-[8deg]"></div>
          <div className={"relative"}>
            <div className="wave"></div>
          </div>
          <div
            className={
              "flex  justify-center " +
              (index % 2 === 0 || noColor
                ? "flex-col"
                : "flex-row-reverse bg-cover ")
            }
          >
            <div className="flex flex-col items-center font-semibold text-center dark:text-gray-200 xl:-mt-10 lg:-mt-10 md:-mt-36 sm:text-4xl text-3xl">
              <label
                className={
                  index % 2 === 0 || noColor
                    ? "z-10 text-[#1ca0e2] w-full sm:w-1/2 font-semibold text-center dark:text-gray-200 sm:text-4xl text-3xl"
                    : "z-10 text-white w-full sm:w-1/2 font-semibold text-center dark:text-gray-200 sm:text-4xl text-3xl"
                }
              >
                {item.title}
              </label>
              <p
                className={
                  index % 2 === 0 || noColor
                    ? "z-10 w-full sm:w-2/3 text-lg font-extralight  my-1	tracking-wide text-gray-600 dark:text-gray-300"
                    : "z-10 w-full sm:w-2/3 text-lg font-extralight  my-1	tracking-wide text-white dark:text-gray-300"
                }
              >
                {item.description}
              </p>
              {item.long_description && (
                <div className="w-full ">
                  <Button
                    onClick={() => handleToggle(item)}
                    className={
                      index % 2 === 0 || noColor
                        ? index === 0
                          ? "z-10 font-bold dark:text-gray-200 text-1xl bg-gradient-to-r from-green-500 via-blue-500 to-pink-500 rounded-3xl h-[50px] sm:m-6 sm:w-1/6 w-1/2 m-3"
                          : "z-10 border-2 border-[#1CA0E2] rounded-2xl rounded-br-none text-[#1CA0E2] hover:animate-bounce "
                        : "z-10 border-2 rounded-2xl rounded-br-none hover:animate-bounce "
                    }
                    text={isOpen ? t.read_less : t.read_more}
                  ></Button>
                </div>
              )}
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
                      ? " text-lg font-extralight lg:px-6   tracking-wide text-gray-600 dark:text-gray-300 "
                      : " text-lg font-extralight lg:px-6 text-white  tracking-wide  dark:text-gray-300"
                  }
                ></div>
              </div>
            )}
            <div className=" relative -z-10 w-full h-full flex justify-center items-center xl:-mt-28 lg:-mt-20 md:-mt-14 sm:-mt-8">
              <img
                className={`relative h-full w-7/12 object-contain ${
                  item.name == "why_us" ? "scale-x-[-1]" : ""
                }`}
                // src={item.img_url}
                src="assets/section-4.png"
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          id={`section-${item.name}`}
          key={`section-${index}`}
          className={
            " cannavigate relative bg-[#151d33] px-7 mb-14 xl:pb-44 lg:pb-32 md:pb-24 pb-16 m pt-8  md:pt-24  md:min-w-full" +
            (index % 2 === 0 || noColor
              ? "flex-row"
              : "flex-row-reverse bg-cover changing_back")
          }
        >
          <div className="absolute z-0 flex flex-col w-full h-1/3 bg-[#151d33] left-0 sm:top-[-70px] sm:-skew-y-[6deg]"></div>

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
                    ? "text-[#1ca0e2] font-semibold text-2xl  xl:text-4xl  md:text-left dark:text-gray-200"
                    : "text-white font-semibold  text-2xl lg:text-4xl   md:text-left dark:text-gray-200"
                }
              >
                {item.title}
              </label>
              <p
                className={
                  index % 2 === 0 || noColor
                    ? "text-lg font-extralight  my-8	tracking-wide text-gray-600 dark:text-gray-300"
                    : "text-lg font-extralight  my-8	tracking-wide text-white dark:text-gray-300"
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
                          ? "font-bold dark:text-gray-200 text-1xl bg-gradient-to-r from-green-500 via-blue-500 to-pink-500 rounded-3xl h-[50px] sm:m-6 sm:w-1/3 w-1/2 m-3 "
                          : "border-2 border-[#1CA0E2] rounded-2xl rounded-br-none text-[#1CA0E2] hover:animate-bounce "
                        : "border-2 rounded-2xl rounded-br-none hover:animate-bounce "
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
                src="assets/section-3.png"
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
                    ? " text-lg font-extralight lg:px-6   tracking-wide text-gray-600 dark:text-gray-300 "
                    : " text-lg font-extralight lg:px-6 text-white  tracking-wide  dark:text-gray-300"
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
