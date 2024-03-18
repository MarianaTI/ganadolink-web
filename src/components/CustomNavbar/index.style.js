import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TabStyled = styled.div`
  color: #888;
  cursor: pointer;
  position: relative;
  &:hover {
    color: #493829;
  }
  &.active {
    color: #493829;
    font-weight: 700;
  }
`;

export const UserIcon = styled.div`
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #f27d16;
  }
`;

export const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-family: "Bitter", serif;
  font-weight: 600;
  color: #261704;
`;

export const Menu = styled.div`
  display: none;
  position: absolute;
  top: 12px;
  right: 8px;
  flex-direction: column;
  justify-content: space-between;
  width: 36px;
  height: 32px;
  @media (max-width: 740px) {
    display: flex;
  }
`;

export const LoginButton = styled.button`
  cursor: pointer;
  font-weight: 600;
  font-family: Poppins;
  transition: all 0.2s;
  padding: 4px 20px;
  border-radius: 100px;
  background: #f27d16;
  border: 1px solid transparent;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 15px;
  &:hover {
    background: #facea8;
    color: #f27d16;
  }
  & > svg {
    width: 34px;
    margin-left: 10px;
    transition: transform 0.3s ease-in-out;
  }

  &:hover svg{
    transform: translateX(5px);
  }
  &:hover circle{
    stroke: #f27d16;
  }
  &:hover path{
    fill: #f27d16;
  }
  &:active{
    transform: scale(0.95);
  }
`;

export const IconMenu = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: #261704;
  font-size: 32px;
`;

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0px 32px;
  align-items: center;
  background-color: #fff;
  height: 55px;
  width: 100%;
  @media (max-width: 740px) {
    flex-direction: column;
    align-items: start;
    height: auto;
    width: auto;
  }
  & ul {
    display: flex;
    gap: 32px;
    @media (max-width: 740px) {
      display: none;
      flex-direction: column;
      margin-bottom: 8px;
    }
    & li {
      list-style: none;
      @media (max-width: 740px) {
        width: 100%;
        text-align: start;
      }
    }
    .closeSession {
      display: none;
      color: #888;
      cursor: pointer;
      position: relative;
      &:hover {
        color: #493829;
      }
      @media (max-width: 740px) {
        display: flex;
      }
    }
  }
  .open {
    display: flex;
  }
`;
