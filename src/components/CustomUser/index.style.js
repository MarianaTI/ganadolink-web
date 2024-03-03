import styled from '@emotion/styled';
export const Container = styled.div`
  position: relative;
  @media (max-width: 740px) {
    display: none;
  }
`;
export const DropdownContainer = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  right: 0;
  width: 200px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;
  z-index: 1;
  animation: ${(props) => (props.isOpen ? 'slideDown' : 'fadeOut')} 0.3s ease-in-out;
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-8px);
    }
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  font-size: 14px;
  color: #888;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #f27d16;
  }
  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }
  svg {
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }
`;