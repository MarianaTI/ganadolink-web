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
  customIndexDesign,
  customLogin
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
        customLogin={customLogin}
      >
        {buttonText}
      </ButtonStyled>
    </>
  );
};

export default CustomButton;
