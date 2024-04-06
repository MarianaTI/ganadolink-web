import React from "react";
import { Container, Dot, Opinion, Quotes } from "./index.style";
import { RiDoubleQuotesL } from "react-icons/ri";
import { CenterContainer, DotContainer } from "@/styles/Index.style";

const CustomComment = ({ opinion, currentIndex, totalComments }) => {
  return (
    <Container>
      <RiDoubleQuotesL style={{ fontSize: "40px" }} />
      <Opinion>{opinion}</Opinion>
      <DotContainer>
      {Array.from({ length: totalComments }, (_, index) => (
          <Dot key={index} active={index === currentIndex} />
        ))}
      </DotContainer>
    </Container>
  );
};

export default CustomComment;
