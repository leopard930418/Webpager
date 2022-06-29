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
      <div className={'relative'}>
        <div className="wave"></div>
      </div>
      <div className={'align-items: flex-start md:flex  justify-between ' +
        (index % 2 === 0 || noColor
        ? "flex-row"
        : "flex-row-reverse bg-cover ")}>
      <div
        className="px-6 md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] "
      >
        <h1
          className={
            index % 2 === 0 || noColor
              ? "text-[#1ca0e2] font-semibold text-2xl  xl:text-4xl  md:text-left dark:text-gray-200"
              : "text-white font-semibold  text-2xl  text-2xl lg:text-4xl   md:text-left dark:text-gray-200"
          }
        >
          {item.title}
        </h1>
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
          <div className="my-4 py-4 mb-5 max-w-[70%] ">
            <Button
              onClick={() => handleToggle(item)}
              className={
                index % 2 === 0 || noColor
                  ? index === 0
                    ? "border-2 border-[#1CA0E2] rounded-2xl rounded-br-none text-[#1CA0E2] hover:animate-bounce "
                    : "border-2 border-[#1CA0E2] rounded-2xl rounded-br-none text-[#1CA0E2] hover:animate-bounce "
                  : "border-2 rounded-2xl rounded-br-none hover:animate-bounce "
              }
              text={isOpen ? t.read_less : t.read_more}
            ></Button>
          </div>
        )}
      </div>
        <div  className={' align-items: flex-start object-fit: scale-down; m-auto md:m-0 max-w-[60%] md:max-w-[35%]  vertical-align: top;'}>
        <img
className={'vertical-align max-w-[90%]  m-auto'}
          src={item.img_url}
        />
        </div>
     </div>
      {item.long_description && (
        <div
          id={`longdescription-${item.name}`}
          className={`w-[90%] md:max-w-[70%] 	 lg:px-6	py-12   ${isOpen ? "" : "hidden"}`}>
          <div className="  text-3xl my-6  text-left dark:text-gray-200	 ">
            {item.long_description.title}
          </div>
          <div  dangerouslySetInnerHTML={{__html:item.long_description.content}}
                className={
                  index % 2 === 0
                      ?  " text-lg font-extralight lg:px-6   tracking-wide text-gray-600 dark:text-gray-300 "
                      : " text-lg font-extralight lg:px-6 text-white  tracking-wide  dark:text-gray-300"}>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContentsItem;
