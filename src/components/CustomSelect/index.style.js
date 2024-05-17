import styled from "@emotion/styled";

export const SelectStyled = styled.select`
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  height: 45px;
  margin: 4px 0px 8px 0px;
  border-radius: 5px;
  border: 1px solid #A2A2A2; 
  background-color: transparent;
  font-size: 16px;
  font-weight: 400;
  color: #2a2a2a;
  caret-color: #f27d16;
  cursor: pointer;
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

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const OptionStyled = styled.option`
  color: #2a2a2a;
  font-family: fantasy;
`;
