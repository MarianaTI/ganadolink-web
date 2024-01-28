import React, { useState } from "react";
import { ButtonStyled } from "./index.style";

const CustomButton = ({
  fullWidth,
  buttonText,
  onClick,
  type,
  disable,
  customDesign,
}) => {
  return (
    <>
      <ButtonStyled
        onClick={onClick}
        fullWidth={fullWidth}
        type={type}
        disable={disable}
        customDesign={customDesign}
      >
        {buttonText}
      </ButtonStyled>
    </>
  );
};

export default CustomButton;
