import { useEffect } from "react";

function DarkThemeSwitch({ additional_classes }) {
  const handleToggleTheme = () => {
    //
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.getElementById("flexSwitchCheckDefault").checked = true;
    }
  }, []);

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
