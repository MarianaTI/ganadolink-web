import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 55px);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
`;

export const ButtonStyled = styled.button`
  background: none;
  border: none;
  color: #f27d16;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  padding: 0px 0px 12px 0px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-2px);
  }
`;

export const GridButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const GridForm = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  align-items: start;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 35px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  padding: 35px 110px;
  @media (max-width: 400px) {
    width: 300px;
  }
`;

export const HeaderSection = styled.div`
  & h1 {
    font-family: Poppins;
    font-size: 36px;
    font-weight: 600;
    margin: 0;
    padding-bottom: 10px;
  }
  & span {
    color: #555;
    font-family: Poppins;
    font-size: 14px;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 16px 0px;
  & h1 {
    color: #261704;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  .text {
    color: #3c3c3c;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 40px;
  }
`;

export const EyeIconContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const EyeIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #414141;
  position: absolute;
  top: 63%;
  right: 16px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const GridImage = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkStyled = styled(Link)`
  color: #f27d16;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  margin-left: 8px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Company = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-right: 24px;
  color: rgba(159, 159, 159, 0.3);
`;
