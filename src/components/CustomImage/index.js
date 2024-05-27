import React, { forwardRef } from "react";
import { StyledFileInput } from "./index.style";
import { LabelStyled } from "../CustomInput/index.style";

const CustomImage = forwardRef(({ name, onChange }, ref) => {
  return (
    <div>
      <LabelStyled>Figura de herraje</LabelStyled>
      <StyledFileInput type="file" name={name} onChange={onChange} ref={ref}/>
    </div>
  );
});

export default CustomImage;
