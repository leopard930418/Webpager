import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { WindowRounded } from "@mui/icons-material";
import dynamic from "next/dynamic";
import React, { useMemo, useState } from "react";
import Layout from "../components/Layout";
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
  return (
    <Layout>
      <CrispWithNoSSR />
      {/* {window.theme != null ? <Component {...pageProps} /> : ""} */}
      <Component {...pageProps} />
    </Layout>
  );
}
