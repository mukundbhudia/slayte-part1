import React from "react";

import MyImage from "./components/MyImage";
import WrapImages from "./components/WrapImages";
// import localImg from "./assets/home-tri.png"; // Local image to try

export default function App() {
  const imagesToWrap = [
    {
      src: "https://mukund.uk/img/logo.ff91f444.png",
      maxImageWidth: 400,
      maxImageHeight: 300
    },
    {
      src:
        "https://860197.smushcdn.com/1879064/wp-content/uploads/2020/06/home-tri3.d1956685.png?lossy=1&strip=1&webp=0",
      maxImageWidth: 400,
      maxImageHeight: 300
    },
    {
      src:
        "https://860197.smushcdn.com/1879064/wp-content/uploads/2020/06/home-tri1.ee18ad25.png?lossy=1&strip=1&webp=0",
      maxImageWidth: 400,
      maxImageHeight: 400
    },
    {
      src:
        "https://860197.smushcdn.com/1879064/wp-content/uploads/2020/06/home-tri2.deba595e.png?lossy=1&strip=1&webp=0",
      maxImageWidth: 400,
      maxImageHeight: 400
    }
  ];
  return (
    <div className="App">
      <h1>Slayte challenge part 1.1</h1>
      <MyImage
        src="https://mukund.uk/img/logo.ff91f444.png"
        height={400}
        width={500}
        alt="My img"
      />
      <h1>Slayte challenge part 1.2</h1>
      <WrapImages images={imagesToWrap} />
    </div>
  );
}
