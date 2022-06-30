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

import WhyUs from "../components/WhyUs";
import Solution from "../components/Solution";
import Project from "../components/Project";
import FaqSection from "../components/FaqSection";
import ContactInfo from "../components/ContactInfo";
import Welcome from "../components/Welcome";

function Home() {
  const router = useRouter();
  const [selectedRoute, setselectedRoute] = useState("");
  const t = router.locale === "fr" ? fr : router.locale === "nl-NL" ? nl : en;

  useEffect(() => {
    hotjar.initialize();

    document.addEventListener("scroll", (event) => {
    });
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
      <Welcome></Welcome>
      <Content noColor={true} items={t.items5}></Content>
      <Content noColor={true} items={t.studie}></Content>
      <Content noColor={true} items={t.items}></Content>
      <FaqSection></FaqSection>
      <ContactInfo></ContactInfo>
      <Footer2></Footer2>
    </div>
  );
}

export default Home;
