import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ButtonStyled = styled.button`
  width: ${(props) => (props.fullWidth ? "100%" : "200px")};
  height: 45px;
  border-radius: 5px;
  background: #f27d16;
  font-family: Poppins;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  border: none;
  margin: 24px 0px;
  cursor: pointer;
  :hover {
    background-color: #f59e50;
    transition: background-color 0.3s ease;
    transform: scale(1);
  }
  :active {
    transform: scale(1);
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
  ${(props) =>
    props.customAddDesig &&
    css`
      border-radius: 5px;
      border: 1px solid #f27d16;
      background-color: transparent;
      color: #f27d16;
      margin: 8px 0;
      width: 150px;
      &:hover {
        background-color: white;
      }
    `}
  ${(props) =>
    props.customIndexDesign &&
    css`
      border-radius: 5px;
      background-color: #f27d16;
      color: #fff;
      &:hover {
        background-color: #f59e50;
        transition: background-color 0.3s ease;
        transform: scale(1);
      }
    `}
`;
