import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ButtonStyled = styled.button`
  width: ${(props) => (props.fullWidth ? "100%" : "250px")};
  height: 45px;
  border-radius: 5px;
  background: #f27d16;
  font-family: Poppins; 
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  border: none;
  margin: 32px 0px;
  cursor: pointer;
  :hover{
    background-color: #f59e50;
    transition: background-color 0.3s ease; 
    transform: scale(1);
  }
  :active {
    transform: scale(1.0);
  }
  ${(props) =>
    props.customDesign &&
    css`
      border-radius: 5px;
      border: 2px solid #bababa;
      background-color: transparent;
      color: #bababa;
      &:hover {
        background-color: white;
      }
    `}
`;

