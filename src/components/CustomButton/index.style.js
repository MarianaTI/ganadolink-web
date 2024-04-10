import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ButtonStyled = styled.button`
  width: ${(props) => (props.fullWidth ? "100%" : "200px")};
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  height: 43px;
  border-radius: 10px;
  background: #f27d16;
  font-family: Poppins;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border: none;
  margin: 24px 0px;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  overflow: hidden;
  &::before {
    content: "";
    background-color: #f48d33;
    width: 0;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: width 700ms ease-in-out;
    display: inline-block;
  }
  &:hover::before {
    width: 100%;
  }
  ${(props) =>
    props.customDesign &&
    css`
      border-radius: 5px;
      border: 2px solid #bababa;
      background-color: transparent;
      color: #bababa;
      &::before {
        content: "";
        background-color: rgba(186, 186, 186, 0.10);
        width: 0;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: width 700ms ease-in-out;
        display: inline-block;
      }
      &:hover::before {
        width: 100%;
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
    ${(props) =>
    props.customLogin &&
    css`
      width: auto;
      padding: 0px 16px;
    `}
`;
