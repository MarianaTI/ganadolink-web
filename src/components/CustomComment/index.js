import React from "react";
import { Container, Dot, DotContainer, Opinion } from "./index.style";
import { RiDoubleQuotesL } from "react-icons/ri";

const CustomComment = ({ opinion, currentIndex, totalComments }) => {
  const calculateDotSize = (index) => {
    let baseSize = 3;
    let scaleFactor = currentIndex === index ? 2 : 1;
    return baseSize * scaleFactor;
  };

  return (
    <Container>
      <RiDoubleQuotesL style={{ fontSize: "40px" }} />
      <Opinion>{opinion}</Opinion>
      <DotContainer>
        {/* {Array.from({ length: totalComments }, (_, index) => (
          <Dot
            key={index}
            style={{
              width: calculateDotSize(index),
              height: calculateDotSize(index)
            }}
            active={index === currentIndex}
          />
        ))} */}
      </DotContainer>
    </Container>
  );
};

export default CustomComment;
