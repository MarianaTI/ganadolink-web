import styled from '@emotion/styled';

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #f0f0f0;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 20px;
`;

export const Tab = styled.a`
  color: #888; /* Color predeterminado para pestañas inactivas */
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #000; /* Cambiar color al pasar el ratón por encima */
  }

  &.active {
    color: #F27D16; /* Color para pestaña activa */
  }
`;

export const UserIcon = styled.img`
  width: 30px;
  height: 30px;
`;