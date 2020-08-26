import React from "react";

import "./WrapImages.css";
import MyImage from "./MyImage";

const WrapImages = ({ images }) => {
  const { innerWidth: width, innerHeight: height } = window;
  console.log(width, height);

  let accumulatedWidth = 0;
  let rowsAndCols = [];
  let row = [];
  images.forEach((img, i) => {
    if (accumulatedWidth + img.maxImageWidth > width) {
      // TODO: fix duplicate row pushes for single img per row
      rowsAndCols.push(row);
      row = [img];
      rowsAndCols.push(row);
      // TODO: Add height max for next rows
      accumulatedWidth = img.maxImageWidth;
    } else {
      row.push(img);
      accumulatedWidth += img.maxImageWidth;
    }
  });

  return (
    <>
      {rowsAndCols.map((row, i) => {
        return (
          <div key={i} className="imgRow">
            {row.map((col, j) => {
              return (
                <div key={j}>
                  <MyImage
                    src={col.src}
                    width={col.maxImageWidth}
                    height={col.maxImageHeight}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default WrapImages;
