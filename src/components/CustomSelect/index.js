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
  onChange,
  options, // Añadido para pasar las opciones dinámicamente
  fullWidth,
}) => {
  return (
    <div>
      <LabelStyled>{label}</LabelStyled>
      <SelectWrapper>
        <SelectStyled
          defaultValue={defaultValue}
          onChange={onChange}
          fullWidth={fullWidth}
        >
          {options?.map((option) => (
            <option key={option._id} value={option._id}>{option.name}</option>
          ))}
        </SelectStyled>
      </SelectWrapper>
    </div>
  );
};

export default CustomSelect;
