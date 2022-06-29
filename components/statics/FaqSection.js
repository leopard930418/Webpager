import React from "react";

export default function FaqSection() {
  return (
    <section className="sm:px-16">
      <div className="flex flex-col md:place-items-center  mt-60">
        <label className="font-bold dark:text-gray-200 text-4xl sm:text-7xl text-white text-center">
          Frequently ask questions
        </label>
      </div>
      <Faq items={[{ img_url: "" }]} accordion_items={t.accordion_items}></Faq>
    </section>
  );
}
