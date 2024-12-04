import React from "react";
import { StyledFileInput } from "./index.style";
import { LabelStyled } from "../CustomInput/index.style";

const CustomImage = ({ name, onChange }) => {
  return (
    <div>
      <LabelStyled>Figura de herraje</LabelStyled>
      <StyledFileInput type="file" name={name} onChange={onChange} />
    </div>
  );
};

export default CustomImage;
