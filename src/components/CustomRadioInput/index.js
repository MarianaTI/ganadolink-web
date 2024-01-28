import React from "react";
import { CheckBoxInputStyled, LabelStyled } from "./index.style";
import { useController } from "react-hook-form";

const CustomCheckboxInput = ({ label, control, name }) => {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
  });
  return (
    <>
      <LabelStyled>
        <CheckBoxInputStyled
          type="checkbox"
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          name={field.name}
        />
        {label}
      </LabelStyled>
    </>
  );
};

export default CustomCheckboxInput;
