import { useEffect, useState } from "react";

function DarkThemeSwitch({ additional_classes }) {
  const switchLight = () => {
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("theme");
  };

  const switchDark = () => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };

  const handleToggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      switchLight();
    } else {
      switchDark();
    }
  };

  useEffect(() => {
    if (!window.isSetted) {
      if (checkDayNight()) {
        switchLight();
      } else {
        switchDark();
      }

      window.isSetted = true;
    } else {
      if (localStorage.getItem("theme") === "dark") {
        document.getElementById("flexSwitchCheckDefault").checked = true;
        switchDark();
      }
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
