import React from "react";
import { ParallaxBackground, ParallaxContent } from "./index.style";

const CustomImageParallax = ({ title, children, imageUrl }) => {
  return (
    <ParallaxBackground imageUrl={imageUrl}>
      <ParallaxContent>
        <span className="title">{title}</span>
        <div style={{paddingTop: "16px", fontSize: "18px"}}>{children}</div>
      </ParallaxContent>
    </ParallaxBackground>
  );
};

export default CustomImageParallax;
