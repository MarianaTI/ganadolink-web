import React from "react";
import { CheckBoxInputStyled, LabelStyled } from "./index.style";
import { useController } from "react-hook-form";

const CustomCheckboxInput = ({ label, control, name, checked, onChange }) => {
  const {
    field,
  } = useController({
    name,
    control,
  });
  return (
    <>
      <LabelStyled>
        <CheckBoxInputStyled
          type="checkbox"
          onChange={onChange}
          onBlur={field.onBlur}
          value={field.value}
          checked={checked}
          name={field.name}
        />
        {label}
      </LabelStyled>
    </>
  );
};

export default CustomCheckboxInput;
