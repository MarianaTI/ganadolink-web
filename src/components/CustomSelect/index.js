import React, { useState } from "react";
import {
  LabelStyled,
  OptionStyled,
  SelectStyled,
  SelectWrapper,
} from "./index.style";
import { Controller } from "react-hook-form";

const CustomSelect = ({ control, name, label, data, fullWidth }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ...fieldProps } }) => (
        <div>
          <LabelStyled>{label}</LabelStyled>
          <SelectWrapper>
            <SelectStyled fullWidth={fullWidth} onChange={onChange} value={value || ""} {...fieldProps}>
              <option value="" disabled={value !== ""}>{`Seleccionar ${label}`}</option>
              {data?.map((option) => (
                <option key={option._id || option.value} value={option._id || option.value}>
                  {option.name || option.label}
                </option>
              ))}
            </SelectStyled>
          </SelectWrapper>
        </div>
      )}
    />
  );
};

export default CustomSelect;

