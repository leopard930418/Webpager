import React, { useEffect, useState } from "react";
import Button from "./Button";
import Content from "../Content";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import fr from "../../locales/fr";
import nl from "../../locales/nl";
import en from "../../locales/en";
import { useRouter } from "next/router";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
} from "@mui/material";

function Studie({ items }) {
  const router = useRouter();
  const t = router.locale === "fr" ? fr : router.locale === "nl-NL" ? nl : en;

  let [itemArr, setItemArr] = useState(items);
  let [filterObj, setFilterObj] = useState({
    industries: "unset",
    category: "unset",
  });

  function closeOverlay() {
    document.getElementById("overlay").style.height = "0px";
    let l = window.scrollY;
    let k =
      document.getElementById("anc").getBoundingClientRect().top +
      window.scrollY;
    // console.log(k);

    window.scrollTo({
      top: k - 100,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    let b = document.getElementById("doc");
    let c = document.getElementById("previewer");

    if (b && c) {
      b.addEventListener("scroll", (event) => {
        let divTop = document.getElementById("doc").getBoundingClientRect().y;
        let top = document.getElementById("doc").scrollTop;
        let v = b.querySelectorAll("h1, h2, h3, h4, h5, h6");
        let arr = [];
        v.forEach((x) => {
          arr.push({ placement: x.getBoundingClientRect().y, item: x.id });
        });

        arr.forEach((x) => {
          if (divTop - x.placement > -50 && divTop - x.placement < 10) {
            if (x.item && c) {
              // console.log(
              //   document.getElementById(x.item.replace("doc", "preview"))
              // );
              let elementTop2 = document.getElementById(
                x.item.replace("doc", "preview")
              ).offsetTop;

              let divTop2 = document.getElementById("previewer").offsetTop;
              let elementRelativeTop = elementTop2 - divTop2;

              document.getElementById("previewer").scrollTo({
                top: elementRelativeTop - 25,
                behavior: "smooth",
              });
              document
                .getElementById("previewer")
                .querySelectorAll("h1, h2, h3, h4, h5, h6")
                .forEach((x) => {
                  x.style.fontWeight = "unset";
                });
              document.getElementById(
                x.item.replace("doc", "preview")
              ).style.fontWeight = "bold";
            }
          }
        });
      });

      let a = b.querySelectorAll("h1, h2, h3, h4, h5, h6");
      a.forEach((x, i) => {
        x.id = `doc_${i.toString()}`;
      });

      let d = c.querySelectorAll("h1, h2, h3, h4, h5, h6");
      d.forEach((x, i) => {
        x.id = `preview_${i.toString()}`;
      });

      c.addEventListener("click", (event) => {
        let active = c.querySelectorAll(`#${event.target.id}`);

        d.forEach((x) => {
          x.style = "font-weight: unset";
        });

        active.forEach((x) => {
          x.style = "font-weight: bold;";
        });

        if (
          document.getElementById(event.target.id.replace("preview", "doc"))
        ) {
          let elementTop = document.getElementById(
            event.target.id.replace("preview", "doc")
          ).offsetTop;
          let divTop = document.getElementById("doc").offsetTop;
          let elementRelativeTop = elementTop - divTop;

          document.getElementById("doc").scrollTo({
            top: elementRelativeTop - 25,
            behavior: "smooth",
          });
        }
      });
    }
  }, []);
  const [industries, setIndustries] = useState("unset");
  const [category, setCategory] = useState("unset");

  const handleChange1 = (event) => {
    setIndustries(event.target.value);
  };
  const handleChange2 = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    let temp = items.filter((x) => {
      // console.log(e.target.innerHTML);
      if (
        (x?.industrie?.includes(industries) || industries === "unset") &&
        (x?.category?.includes(category) || category === "unset")
      ) {
        return true;
      }
    });

    setItemArr(temp);
  }, [industries, category]);
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  }));
  return (
    <div className={"relative mt-5 min-h-[100vh] px-2 md:px-16"}>
      {/*<div className={'mt'}></div>*/}
      <div
        className={
          " w-full bg-white dark:bg-[#0F172A]  flex justify-center items-center p-5 m-auto "
        }
      >
        <div className={" flex  justify-center  items-center py-4 space-x-8"}>
          {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className="text-black dark:text-white"
            >
              {filterObj.industries === "unset"
                ? "industries"
                : filterObj.industries}
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={industries}
              onChange={handleChange1}
              label="Age"
              className="text-black dark:text-white"
            >
              <MenuItem value={"unset"}>unset</MenuItem>
              <MenuItem value={"Marketing"}>Marketing</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel
              id="demo-simple-select-standard-label"
              className="text-black dark:text-white"
            >
              {filterObj.category === "unset" ? "category" : filterObj.category}
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={category}
              onChange={handleChange2}
              label="Age"
              className="text-black dark:text-white"
            >
              <MenuItem value={"unset"}>unset</MenuItem>
              <MenuItem value={"Fullstack"}>Fullstack</MenuItem>
            </Select>
          </FormControl> */}
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="demo-customized-select-native">
              {filterObj.industries === "unset"
                ? "industries"
                : filterObj.industries}{" "}
            </InputLabel>
            <NativeSelect
              id="demo-customized-select-native"
              value={industries}
              onChange={handleChange1}
              input={<BootstrapInput />}
            >
              {/* <option aria-label="None" value="" /> */}
              <option value={"unset"}>unset</option>
              <option value={"Marketing"}>Marketing</option>
            </NativeSelect>
          </FormControl>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="demo-customized-select-native">
              {filterObj.category === "unset" ? "category" : filterObj.category}
            </InputLabel>
            <NativeSelect
              id="demo-customized-select-native"
              value={category}
              onChange={handleChange2}
              input={<BootstrapInput />}
            >
              {/* <option aria-label="None" value="" /> */}
              <option value={"unset"}>unset</option>
              <option value={"Fullstack"}>Fullstack</option>
            </NativeSelect>
          </FormControl>
        </div>
        {/*<span><img className={'relative max-h-[50px]  -align-right'} src="assets/eye.png" alt=""/></span>*/}
      </div>
      <div
        id="overlay"
        onClick={closeOverlay}
        className={
          " x absolute overlay flex justify-center items-center bg-white dark:bg-[#0F172A]"
        }
      >
        <img
          id="icon"
          className={"z-50 brightness-100 dark:brightness-[700] max-h-[20%] "}
          src="assets/eye.webp"
          alt=""
        />
      </div>
      <div id="anc" className={" max-w-[100vw] absolute"}>
        <div
          className={
            "rounded  mb-10 flex justify-center w-[100%]  min-h-[70vh] max-h-[70vh]  m-auto"
          }
        >
          <div
            id="previewer"
            className={
              " hidden lg:block scrollbar overflow-y-auto  px-5 w-[30%] cursor-pointer bg-white dark:bg-[#0F172A]"
            }
          >
            <div className="force-overflow"></div>
            {itemArr.map(function (item) {
              return (
                <div
                  className={
                    " text-lg font-medium tracking-wide text-[#0C1224] dark:text-gray-300 docOverview"
                  }
                  dangerouslySetInnerHTML={{
                    __html: item.long_description.content,
                  }}
                ></div>
              );
            })}
          </div>
          <div
            id="doc"
            className={
              " overflow-y-auto scrollbar px-5 w-[100%] lg:w-[70%] bg-white dark:bg-[#0F172A]"
            }
          >
            {itemArr.map((item) => {
              return (
                <div
                  className={"px-5 bg-white dark:bg-[#0F172A] shadow rounded"}
                >
                  <div
                    className={
                      "doc text-lg font-normal  	tracking-wide text-[#0C1224] dark:text-gray-300"
                    }
                    dangerouslySetInnerHTML={{
                      __html: item.long_description.content,
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studie;
