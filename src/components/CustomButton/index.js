import React from "react";
import { ButtonStyled, Texto } from "./index.style";

const CustomButton = ({ fullWidth, buttonText, onClick, type, disable }) => {

  return (
    <>
      <ButtonStyled
        fullWidth={fullWidth}
        type={type}
        disable={disable}
      >
        {buttonText}
      </ButtonStyled>
    </>
  );
};

export default CustomButton;
