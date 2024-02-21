import React from "react";
import { useController } from "react-hook-form";
import { ErrorMessage, IconWrapper, InputStyled, InputWrapper, LabelStyled } from "./index.style";

const CustomInput = ({
  label,
  icon,
  error,
  control, 
  name,
  type,
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
    <>
      <LabelStyled>{label}</LabelStyled>
      <InputWrapper>
        <InputStyled
          {...props}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          name={field.name}
          inputRef={field.ref}
          type={type} 
          onKeyDown={onKeyDown}
          defaultValue={defaultValue}
        />
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default CustomInput;