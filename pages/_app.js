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

  useEffect(() => {
    var hour = new Date().getHours();
    if (hour > 5 && hour < 19) {
      document.documentElement.classList.remove("dark");
      console.log("wite");
    } else {
      console.log("aaaaaaaaaaaa")
      document.documentElement.classList.add("dark");
    }
  },);

  return (
    <Layout>
      <CrispWithNoSSR />
      <Component {...pageProps} />
    </Layout>
  );
}
