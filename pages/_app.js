import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { WindowRounded } from "@mui/icons-material";
import dynamic from "next/dynamic";
import React, { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layout";
import { checkDayNight } from "../components/statics/DarkThemeSwitch";
import "../styles/globals.scss";
import "../styles/list.scss";
config.autoAddCss = false;
const {} = dynamic(import("tw-elements"), { ssr: false });

const CrispWithNoSSR = dynamic(() => import("../components/crisp"), {
  ssr: false,
});

export default function MyApp({ Component, pageProps }) {
  // const darkmode = localStorage.getItem("theme")
  // console.log("aaaaaaaaaaaaaa",window.theme)
  const [ initialTheme, setInitialTheme ] = useState( null )

  useEffect(() => {
    setInitialTheme(window.theme || (checkDayNight() ? 'light' : 'dark'))
  }, [])

  useEffect(() => {
    if (!!initialTheme) {
      if (initialTheme === 'dark') {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [ initialTheme ])

  return (
    !initialTheme
    ? <>Loading ...</>
    : <Layout initialTheme={ initialTheme }>
      <CrispWithNoSSR />
      {/* {window.theme != null ? <Component {...pageProps} /> : ""} */}
      <Component {...pageProps} />
    </Layout>
  );
}
