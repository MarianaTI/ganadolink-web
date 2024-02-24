import styled from "@emotion/styled";

export const NavbarContainer = styled.div`
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 48px;
  background-color: #fff;
`;

export const ContainerTabs = styled.div`
  display: flex;
  gap: 20px;
  align-items: center; /* Centrado vertical */
`;

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