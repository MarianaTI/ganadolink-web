import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  width: 100%;
  height: auto;
  background-color: #ffe5c5;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  margin: 0px 60px;
  justify-content: start;
  flex-direction: column;
  & h1 {
    color: #261704;
    font-family: Poppins;
    font-size: 24px;
    font-weight: 600;
  }
  & span {
    color: #2a2a2a;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 26px;
  margin: 8px 0px;
`;

export const ButtonIcon = styled.button`
  display: flex;
  border: none;
  padding: 8px;
  border-radius: 15px;
  cursor: pointer;
  background: rgba(255, 252, 248, 0.7);
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  &:active {
    background-color: #f2efed;
    box-shadow: rgba(232, 228, 225, 0.2) 0 1px 0 inset;
    transition: none 0s;
  }
`;

export const CustomIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
  color: #261704;
  margin-left: 12px;
`;

export const LinksText = styled.div`
  height: auto;
  display: flex;
  margin: 50px;
  justify-content: start;
  flex-direction: column;
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 80px;
`;

export const LinksContent = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    font-weight: 600;
  }
`;

export const FooterContentRoute = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
`;

export const LineStyled = styled.hr`
  width: 95%;
  border-top: 1px solid #ffe5c5;
`;

export const FooterContentTerms = styled(FooterContentRoute)`
  font-size: 14px;
  padding: 16px 50px;
`;
