import React from "react";
import ContentsItem from "./ContentsItem";
import Button from "./statics/Button";

function Content({ items, noColor}) {
  if (!items) items = [];
  return (
    <div>
      {items.map((item, index) => {
        //
        return (
          <ContentsItem
            key={item.name}
            item={item}
            index={index}
            noColor={noColor}
          ></ContentsItem>
        );
      })}
    </div>
  );
}

export default Content;
