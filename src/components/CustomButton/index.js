import React, { useState } from "react";
import { ButtonStyled } from "./index.style";

const CustomButton = ({ fullWidth, buttonText, onClick, type, disable }) => {

  const handleClick = (event) => {
    if (onClick) {
      if (showIncrementDecrement) {
        onClick({ quantity, event });
      } else {
        onClick(event);
      }
    }
  };

  return (
    <>
      <ButtonStyled
        fullWidth={fullWidth}
        onClick={handleClick}
        type={type}
        disable={disable}
      >

        {buttonText}
      </ButtonStyled>
    </>
  );
};

export default CustomButton;
