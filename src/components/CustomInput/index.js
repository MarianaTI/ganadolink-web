import React from "react";
import { useController } from "react-hook-form";
import { ErrorMessage, IconWrapper, InputStyled, InputWrapper, LabelStyled } from "./index.style";

const CustomInput = ({
  label,
  icon,
  error,
  control,
  name,
  fullWidth,
  type,
  customFormDesign,
  defaultValue,
  onKeyValue,
  onKeyDown,
  ...props
}) => {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
  });

  return (
    <div>
      <LabelStyled>{label}</LabelStyled>
      <InputWrapper>
        <InputStyled
          {...props}
          fullWidth={fullWidth}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          name={field.name}
          customFormDesign={customFormDesign}
          inputRef={field.ref}
          type={type}
          onKeyDown={onKeyDown}
          defaultValue={defaultValue}
        />
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default CustomInput;