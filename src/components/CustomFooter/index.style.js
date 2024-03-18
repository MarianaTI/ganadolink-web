import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 300px;
  background-color: beige;
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const FooterText = styled.div`
  width: 50vw;
  overflow: hidden;
`;
export const Footercomp = styled.div`
  display: grid;
  width: 100vh;
  margin: 10 auto;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const GridFooter = styled.div`
  width: 300px;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
`;
export const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin:  16px;
`;
export const CustomIcon = styled(FontAwesomeIcon) `
  font-size: 24px;
  color: #261704;
`;
export const Content = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  margin: 50px;
  justify-content: start;
  flex-direction: column;
  & h1 {
    color: #261704;
    font-family: Poppins;
    font-size: 24px;
    font-weight: 600;
  }
  & span{
    color: #2A2A2A;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
  }
`;