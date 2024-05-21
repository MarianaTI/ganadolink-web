import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: block;
  flex-direction: center;
  align-items: flex;
  justify-content: flex;
  padding: 20px 56px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: #434242;
  text-align: start;
  width: 100%;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 30%;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 8px;
  padding-left: 45px;
  border: none;
  background-color: #f1f1f1;
  font-family: Poppins;
  border-radius: 15px;
  font-size: 16px;
  width: 350px;
  color: rgba(67, 66, 66, 0.5);
  font-weight: 500;
  &:focus {
    outline: none;
    caret-color: #0f4ca9;
    background-color: #f1f1f1;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  gap: 26px;
`;

export const SearchIcon = styled.button`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-40%);
  z-index: 1;
  border: none;
  border-right: 1px solid rgba(67, 66, 66, 0.15);
  padding-right: 8px;
  background: none;
  cursor: pointer;
`;

export const PDFButton = styled.button`
  background-color: #dbe4f2;
  border: none;
  height: 40px;
  padding: 8px 16px;
  border-radius: 15px;
  color: #0f4ca9;
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  transition: background-color 0.5s ease;
  cursor: pointer;
  :hover {
    background-color: #c3d2e9;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 16px;
  font-weight: 600;
  color: #0f4ca9;
  margin-right: 12px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 32px 0;
`;

export const Section = styled(HeaderContainer)`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 500;
  span:first-child {
    color: #434343;
  }
  span:last-child {
    color: rgba(67, 67, 67, 0.35);
  }
`;

export const TableStyled = styled.table`
  width: 100%;
  text-align: center;
  margin: 16px 0;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 10px;
  overflow: hidden;
  thead {
    background: #dbe4f2;
    color: #0f4ca9;
    font-size: 14px;
    font-weight: 600;
    border-radius: 10px;
  }
  th {
    padding: 8px;
  }
  tbody {
    background: #f6f8fc;
    font-size: 14px;
    font-weight: 500;
    color: rgba(24, 24, 24, 0.9);
  }
  
  td {
    padding: 20px;
  }
`;

export const TableButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f6f8fc;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: #0f4ca9;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    text-decoration: underline;
  }
`;

export const Line = styled.div`
  width: 1px;
  height: 15px;
  background-color: rgba(67, 66, 66, 0.5);
`;

export const TdCollapsibleStyled = styled.td`
  background-color: #eaf1ff;
  padding: 16px 32px;
`;

export const DataInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  color: #181818;
  .title {
    font-size: 18px;
    font-weight: 500;
  }
  .date {
    font-size: 16px;
  }
`;

export const DateIcon = styled(Icon)`
  font-size: 14px;
  color: rgba(24, 24, 24, 0.5);
`;

export const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 12px 32px;
  border-radius: 15px;
  margin: 20px;
  .title {
    font-size: 14px;
    font-weight: 600;
    color: rgba(67, 66, 66, 0.5);
  }
  .name {
    font-size: 18px;
    font-weight: 600;
    color: #181818;
  }
`;

export const TrStyled = styled.tr`
  & th {
    color: #0f4ca9;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    padding: 8px;
    background: #dbe4f2;
  }
  & td {
    padding: 8px;
    border: 1px solid rgba(242, 125, 22, 0.3);
  }
`;

export const TdStyled = styled.tr`
  align-items: center;
  justify-content: left;
  & th {
    color: #2a2a2a;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    padding: 10px;
    margin-left: 50px;
  }
  & td {
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }
`;

export const TitleTable = styled.div`
  padding: 16px 8px;
  display: flex;
  justify-content: start;
  & span {
    font-size: 14px;
    font-weight: 600;
    color: rgba(67, 66, 66, 0.5);
  }
`;

export const BottonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const TableCollapsible = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
`;

export const ImageStyled = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 15px;
`;

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 24px;
`;

export const TableStyledAnimals = styled.table`
  width: 100%;
  margin: 16px 0px;
  border-collapse: separate;
  border-spacing: 0;
  text-align: center;
  overflow: hidden;
  thead {
    background-color: rgba(255, 255, 255, 0.5);
  }
  th {
    border-bottom: 28px solid #eaf1ff;
  }
  th,
  td {
    color: #181818;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;
    padding: 10px;
  }
  tbody {
    background-color: rgba(255, 255, 255, 0.5);
    tr:last-child td {
      border-bottom: none;
    }
  }
  td {
    vertical-align: middle;
  }
`;
