import styled from "@emotion/styled";

export const ModalContent = styled.div`
  position: absolute;
  max-height: 500px;
  overflow-y: auto;
  top: 50%;
  left: 50%;
  width: 600px;
  transform: translate(-50%, -50%);
  background-color: #f4f4f4;
  box-shadow: 24;
  padding: 24px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  & h1 {
    color: #2a2a2a;
    font-size: 18px;
    font-weight: 500;
  }
  & span {
    color: #414141;
    font-size: 14px;
    font-weight: 400;
  }
  @media (max-width: 768px) {
    width: 400px;
    padding: 24px;
  }
`;

export const ModalHead = styled.div`
  display: flex;
  align-items: center;
`;
export const ModalMain = styled.div`
  padding: 16px 0 16px 0;
`;
