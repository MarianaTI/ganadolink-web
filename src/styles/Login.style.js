import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Container = styled.div`
  width: 100vw;
  height: 100vh; 
  overflow: hidden;
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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
  @media (max-width: 400px) {
    width: 300px;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  & h1 {
    color: #261704;
    font-size: 24px;
    font-weight: 700;
  }
  & span {
    color: #3c3c3c;
    font-size: 14px;
    font-weight: 400;
  }
`; 

export const GridImage = styled.div`
  background-color: aliceblue;
`;

export const EyeIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #414141;
  :active {
    color: #f27d16;
  }
`;

export const LinkStyled = styled(Link)`
  color: #f27d16;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  margin-left: 8px;
`;
