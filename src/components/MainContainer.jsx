import React from "react";
import Carousel from "./Carousel";
import Body from "./Body";

const MainContainer = () => {
  return (
    <div className="mx-auto w-4/5">
      <div className="m-2">
        <Carousel />
        <Body />
      </div>
    </div>
  );
};

export default MainContainer;
