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

export const Tab = styled.div`
  color: #888;
  cursor: pointer;
  position: relative;

  &:hover {
    color: #F27D16;
  }

  &.active {
    color: #F27D16;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 2px;
      background-color: #F27D16;
    }
  }
`;

export const UserIcon = styled.div`
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #F27D16;
  }
`;