import React, { useEffect, useState } from "react";
import en from "../locales/en";
import fr from "../locales/fr";
import nl from "../locales/nl";
import { useRouter } from "next/router";

import Faq from "./statics/Faq";

export default function FaqSection() {
  const router = useRouter();

  const t = router.locale === "fr" ? fr : router.locale === "nl-NL" ? nl : en;

  return (
    <div className="sm:px-8 pt-4 sm:pt-12">
      <div className="flex flex-col md:place-items-center  mt-4">
        <label className="font-bold dark:text-gray-200 text-4xl sm:text-7xl text-white text-center">
          Frequently ask questions
        </label>
      </div>
      <Faq items={[{ img_url: "" }]} accordion_items={t.accordion_items}></Faq>
    </div>
  );
}
