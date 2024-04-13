import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Modal = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Container = styled.div`
  width: 350px;
  height: auto;
  background-color: ${({ error }) =>
    error ? "rgb(253, 242, 242)" : "rgb(240, 253, 244)"};
  border-radius: 10px;
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 16px;
  line-height: 20px;
  padding: 16px;
  position: absolute;
  left: 50%;
  top: 50%;
  overflow-y: auto;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: ${({ error }) => (error ? "rgb(248, 113, 113)" : "rgb(74, 222, 128)")};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: Poppins;
  & h1 {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    color: ${({ error }) => (error ? "rgb(153, 27, 27)" : "rgb(22, 101, 52)")};
  }
  & span {
    font-size: 14px;
    font-weight: 400;
    color: ${({ error }) => (error ? "rgb(185, 28, 28)" : "rgb(21, 128, 61)")};
  }
`;

export const ButtonContainer = styled.div`
  gap: 8px;
  justify-content: end;
  display: ${({ noButtons }) => (noButtons ? "none" : "flex")};
`;

export const AcceptButton = styled.button`
  cursor: pointer;
  padding: 6px;
  background-color: ${({ error }) =>
    error ? "rgb(253, 236, 236)" : "rgb(236, 253, 245)"};
  border: none;
  border-radius: 10px;
  font-weight: bold;
  line-height: 20px;
  font-family: Poppins;
  color: ${({ error }) => (error ? "rgb(153, 27, 27)" : "rgb(22, 101, 52)")};
  font-size: 14px;
  &:hover {
    background-color: ${({ error }) =>
      error ? "rgb(250, 209, 209)" : "rgb(209, 250, 229)"};
  }
`;

export const CancelButton = styled.button`
  cursor: pointer;
  padding: 6px;
  background-color: ${({ error }) =>
    error ? "rgb(253, 236, 236)" : "rgb(236, 253, 245)"};
  color: ${({ error }) => (error ? "rgb(95, 6, 6)" : "rgb(22, 101, 52)")};
  font-size: 14px;
  font-family: Poppins;
  line-height: 20px;
  border-radius: 10px;
  border: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: ${({ error }) =>
      error ? "rgb(95, 6, 6)" : "rgb(6, 95, 70)"};
  }
`;
