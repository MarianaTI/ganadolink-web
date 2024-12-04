import React from "react";
import { Container, ImageStyled, TextStyled} from "./index.style";

const CustomCategories = ({ img, title, text }) => {
  return (
    <Container>
      <ImageStyled src={img} alt={img}></ImageStyled>
      <TextStyled>
        <span className="title">{title}</span>
        <span className="text">{text}</span>
      </TextStyled>
    </Container>
  );
};

export default CustomCategories;
