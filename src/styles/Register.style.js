import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

export const GridContainer = styled.div`
  padding-bottom: 48px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const GridForm = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 32px;
  @media (max-width: 400px) {
    width: 300px;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  & h1 {
    color: #261704;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  & span {
    color: #3c3c3c;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 40px;
  }
`;

export const CustomInput = styled.input`
  width: 150%;
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  line-height: 24px;
  color: #333;
  margin-bottom: 16px;
  height: 52px;
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