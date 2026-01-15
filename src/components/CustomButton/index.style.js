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
  &:after {
    content: "";
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }
  &:hover:after {
    animation: ripple_401 1s ease-out;
  }
  @keyframes ripple_401 {
    0% {
      width: 5px;
      height: 5px;
      opacity: 1;
    }
    100% {
      width: 200px;
      height: 200px;
    }
  }
  ${(props) =>
    props.customDesign &&
    css`
      border-radius: 10px;
      background-color: #fde5d0;
      color: #f27d16;
      &:after {
        background-color: rgba(242, 125, 22, 0.2);
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
