import React, { useState } from "react";
import {
  LabelStyled,
  OptionStyled,
  SelectStyled,
  SelectWrapper,
} from "./index.style";
import { Controller } from "react-hook-form";

const CustomSelect = ({
  label,
  defaultValue,
  fullWidth,
}) => {
  const [categories, setCategories] = useState([]);

  return (
    <div>
      <LabelStyled>{label}</LabelStyled>
      <SelectWrapper>
        <SelectStyled
          fullWidth={fullWidth}
        >
          {/* <OptionStyled value="" disabled hidden>
            Selecciona una categoria
          </OptionStyled> */}
        </SelectStyled>
      </SelectWrapper>
    </div>
  );
};

export default CustomSelect;
