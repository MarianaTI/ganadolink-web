import styled from "@emotion/styled";

export const CheckBoxInputStyled = styled.input`
  cursor: pointer;
  &:checked{
    background-color: red;
  }
`;

export const LabelStyled = styled.label`
  color: #2a2a2a;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  display: flex;
  gap: 4px;
`;
