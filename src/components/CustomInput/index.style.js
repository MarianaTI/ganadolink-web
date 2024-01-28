import styled from "@emotion/styled";

export const InputStyled = styled.input`
  width: ${(props) => (props.fullWidth ? "100%" : "500px")};
  height: 45px;
  margin: 4px 0px 8px 0px;
  border-radius: 5px;
  border: 1px solid #414141;
  background-color: transparent;
  font-size: 16px;
  font-weight: 400;
  color: #2a2a2a;
  caret-color: #f27d16;
  &:focus {
    padding: 12px;
    border: 1.5px solid #f27d16;
    outline: none;
  }
  &:not(:focus) {
    padding: 12px;
    outline: none;
  }
`;

export const LabelStyled = styled.label`
  color: #2a2a2a;
  font-size: 16px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-58%);
  font-size: 24px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: #8a8a8a;
  font-size: 14px;
  font-weight: 400;
  margin: 4px 0px 8px;
`;
