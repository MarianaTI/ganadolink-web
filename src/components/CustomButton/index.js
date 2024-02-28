import React from "react";
import { ButtonStyled, Texto } from "./index.style";

const CustomButton = ({
  fullWidth,
  buttonText,
  onClick,
  type,
  disable,
  customDesign,
  customAddDesig,
  customIndexDesign
}) => {
  return (
    <>
      <ButtonStyled
        onClick={onClick}
        fullWidth={fullWidth}
        type={type}
        disable={disable}
        customDesign={customDesign}
        customAddDesig={customAddDesig}
        customIndexDesign={customIndexDesign}
      >
        {buttonText}
      </ButtonStyled>
    </>
  );
};

export default CustomButton;
