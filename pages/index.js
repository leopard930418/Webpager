import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Content from "../components/Content";
import Accordion from "../components/statics/Accordion";
import Button from "../components/statics/Button";
import Contact from "../components/statics/Contact";
import Faq from "../components/statics/Faq";
import Navbar from "../components/statics/Navbar";
import en from "../locales/en";
import fr from "../locales/fr";
import nl from "../locales/nl";
import Footer from "../components/statics/Footer";
import Footer2 from "../components/statics/Footer2";
import Tabs from "../components/statics/Tabs";
import Studie from "../components/statics/Studie";
import dynamic from "next/dynamic";
import { hotjar } from "react-hotjar";

import FaqSection from "../components/FaqSection";
import ContactInfo from "../components/ContactInfo";
import Welcome from "../components/Welcome";
import Title from "../components/Title";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

function Home() {
  const router = useRouter();
  const [selectedRoute, setselectedRoute] = useState("");
  const t = router.locale === "fr" ? fr : router.locale === "nl-NL" ? nl : en;
  console.log("leoaprd test router", router.locale);
  const [open, setOpen] = React.useState(true);
  useEffect(() => {
    setInterval(() => {
      setOpen(false);
    }, 3000);
  }, []);
  useEffect(() => {
    hotjar.initialize();

    document.addEventListener("scroll", (event) => {});
  });
  // const t = en;
  return (
    <div>
      {/* <<Content items={t.items}></Content>
      <Footer></Footer>

      <Content noColor={true} items={t.items3}></Content>
      <Contact></Contact>
      <Content noColor={true} items={t.items5}></Content>
      <Tabs></Tabs>
      <Content items={t.items2}></Content>

      <Faq
        items={[{ img_url: "assets/back4.png" }]}
        accordion_items={t.accordion_items}
      ></Faq>

      <Studie items={t.items4}></Studie> */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Welcome></Welcome>
      <Content noColor={true} items={t.items}></Content>
      <Content noColor={true} items={t.items3}></Content>
      {console.log("leopard test", t, "aaaaaaaaa", t.items3)}
      <Content noColor={true} items={t.items5}></Content>
      <Content noColor={true} items={t.items2}></Content>
      <Content noColor={true} items={t.items6}></Content>
      <Title items={t.items7}></Title>
      {
console.log("title test", t.items7)
      } 
      <Studie items={t.items4}></Studie>
      <FaqSection></FaqSection>
      <ContactInfo></ContactInfo>
      <Footer2></Footer2>
    </div>
  );
}

export default Home;
