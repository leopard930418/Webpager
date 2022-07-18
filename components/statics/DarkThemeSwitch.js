import { useEffect, useState } from "react";

function DarkThemeSwitch({ additional_classes }) {
  const switchLight = (isSave = true) => {
    document.documentElement.classList.remove("dark");
    if (isSave) {
      localStorage.setItem("theme", "light");
    }
  };

  const switchDark = (isSave = true) => {
    document.getElementById("flexSwitchCheckDefault").checked = true;
    document.documentElement.classList.add("dark");
    if (isSave) {
      localStorage.setItem("theme", "dark");
    }
  };

  const handleToggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      switchLight();
    } else {
      switchDark();
    }
  };

  useEffect(() => {
    // restore state
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "dark") {
        switchDark(false);
      } else {
        switchLight(false);
      }
      // set for day night time
    } else {
      // if (!window.isSetted) {
      if (checkDayNight()) {
        switchLight(false);
      } else {
        switchDark(false);
      }

      //   window.isSetted = true;
      // }
    }
  }, []);

  // var hour = new Date().getHours();
  // const [isPm, setIsPm] = useState(false);
  // console.log("Date", hour > 5 && hour < 19);
  // if (hour > 5 && hour < 19) {
  //   setIsPm(true)
  // } else {
  //   setIsPm(false)
  // }
  return (
    <div
      className={`form-check form-switch flex items-center  ${additional_classes}`}
    >
      <input
        onChange={handleToggleTheme}
        className="form-check-input appearance-none w-12 -ml-10 rounded-full float-left h-6 align-top checked:bg-slate-600 bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
      ></input>
    </div>
  );
}

export default DarkThemeSwitch;

export const checkDayNight = () => {
  var hour = new Date().getHours();
  return hour > 5 && hour < 19;
};
