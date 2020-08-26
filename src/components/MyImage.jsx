import React, { useEffect, useState } from "react";

const MyImage = ({ src, alt, height, width }) => {
  const [imgHeight, setImgHeight] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  useEffect(() => {
    let img = new Image();
    img.src = src;
    img.addEventListener("load", () => {
      let heightToSet = img.height;
      let widthToSet = img.width;
      if (height && height > heightToSet) {
        heightToSet = height;
      }
      if (width && width > widthToSet) {
        widthToSet = width;
      }
      setImgHeight(heightToSet);
      setImgWidth(widthToSet);
    });
  }, [src, height, width]);

  return <img src={src} height={imgHeight} width={imgWidth} alt={alt} />;
};

export default MyImage;
