import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
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
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 72px;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
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

export const AddContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 24px;
`;

export const ImageContainer = styled.div`
  margin: 16px 0px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  & span {
    color: #2a2a2a;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const TableStyled = styled.table`
  width: 100%;
  text-align: center;
  margin: 80px 0;
  border-collapse: collapse;
`;

export const TheadStyled = styled.thead`
  background: #fcdfc5;
`;

export const TrStyled = styled.tr`
  & th {
    color: #2a2a2a;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    padding: 8px;
  }
  & td {
    padding: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }
`;

export const PenIcon = styled(FontAwesomeIcon)`
  font-size: 16px;
  color: #414141;
  :active {
    color: #f27d16;
  }
`;

export const MarkIcon = styled(PenIcon)`
  font-size: 22px;
`;

export const AccionButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`;

export const TdContainer = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const FormDetails = styled(FormContainer)`
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
`;

export const FormName = styled(FormDetails)`
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 32px;
`;

export const CheckboxContainerBoolean = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 8px;
`;
