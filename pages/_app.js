import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
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
  return (
    <Layout>
      <CrispWithNoSSR />
      <Component {...pageProps} />
    </Layout>
  );
}
