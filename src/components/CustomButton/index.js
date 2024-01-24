import React, { useState } from "react";
import { ButtonStyled } from "./index.style";

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
