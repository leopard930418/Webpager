import "../styles/globals.scss";
import "../styles/list.scss";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import React, { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
const {} = dynamic(import("tw-elements"), { ssr: false });

const CrispWithNoSSR = dynamic(() => import("../components/crisp"), {
  ssr: false,
});

export default function MyApp({ Component, pageProps }) {
  () => {
    document.documentElement.classList.add("dark");
    console.log("set darked")
    localStorage.setItem("theme", "dark");
  };
  useEffect(() => {
    if (!window.isSetted) {
      var hour = new Date().getHours();
      if (hour > 5 && hour < 19) {
        document.documentElement.classList.remove("dark");
        localStorage.removeItem("theme");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }

      window.isSetted = true;
    }
  }, []);

  return (
    <Layout>
      <CrispWithNoSSR />
      <Component {...pageProps} />
    </Layout>
  );
}
