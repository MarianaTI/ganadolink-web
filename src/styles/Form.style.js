import styled from "@emotion/styled";

export const Container = styled.form`
  margin: 40px;
`;

export const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #d4d4d4;
`;

export const Tab = styled.button`
  height: 45px;
  padding: 8px 16px;
  cursor: pointer;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  border-width: 0px 1px 1px 1px;
  border-color: #d4d4d4;
  background-color: ${({ active }) => (active ? "#fff" : "#f0f0f0")};
  color: ${({ active }) => (active ? "#2a2a2a" : "#8A8A8A")};
  border-bottom-color: ${({ active }) => (active ? "#F27D16" : "#f0f0f0")};
  border-bottom-width: ${({ active }) => (active ? "3px" : "1px")};
`;

export const TabContent = styled.div`
  margin: 8px 48px;
  display: ${({ active }) => (active ? "block" : "none")};
`;

export const FlexForm = styled.div`
  display: flex;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  & span {
    padding: 16px 0px 16px 0px;
  }
`;

export const CheckboxContainer = styled.div`
    gap: 72px;
    display: flex;
    margin-bottom: 16px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 24px;
  margin-top: 40px;
`;