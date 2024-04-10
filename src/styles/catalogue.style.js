import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: block;
  flex-direction: center;
  align-items: flex;
  justify-content: flex;
  padding: 20px;
`;
export const InputContainer = styled.div`
  position: relative;
  width: 30%;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 10px;
  padding-left: 40px;
  border: 1px solid #ccc;
  font-family: Poppins;
  border-radius: 10px;
  font-size: 16px;
  width: 350px;
  color: #6d6d6d;
  font-weight: 500;
  &:focus {
    outline: none;
    border-color: #f7ae6d;
    background-color: #fff;
    caret-color: #f7ae6d;
  }
`;

export const ImagenD = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
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
  z-index: 10;
  border: none;
  background: none;
  cursor: pointer;
`;

export const TableStyled = styled.table`
  width: 100%;
  text-align: center;
  margin: 16px 0;
  border-collapse: collapse;
`;

export const TableCollapsibleStyled = styled.table`
  width: 100%;
  text-align: center;
  margin: 4px 0;
  border-collapse: collapse;
`;

export const TrStyled = styled.tr`
  & th {
    color: #2a2a2a;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    padding: 8px;
    border: 1px solid rgba(242, 125, 22, 0.4);
    background: #ffe5c5;
  }
  & td {
    padding: 8px;
    border: 1px solid rgba(242, 125, 22, 0.3);
  }
  .title {
    color: #2a2a2a;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 500;
    padding: 8px;
    border: 1px solid rgba(242, 125, 22, 0.7);
    background: #facea8;
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

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
  background: rgba(250, 206, 168, 0.7);
  border-radius: 15px;
  &:hover {
    background-color: rgba(255, 229, 197);
  }
`;

export const CustomIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
  color: #555555;
`;

export const DownloadPdfButton = styled.button`
  width: 200px;
  height: 45px;
  border-radius: 5px;
  background: #fff;
  font-family: Poppins;
  color: #bababa;
  font-size: 18px;
  font-weight: 500;
  border: 2px solid #bababa;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  svg {
    margin-left: 5px;
  }
  &:hover {
    background-color: #f27d16;
    color: white;
    border-color: #f27d16;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  padding: 0px 34px;
  color: #454545;
  text-align: start;
  width: 100%;
`;

export const Line = styled.hr`
  border: 0;
  border-top: 1px solid #ccc;
  width: 100%;
  margin-top: -8px;
  margin-bottom: 32px;
`;

export const TitleTable = styled.div`
  padding: 16px;
  & span {
    font-size: 18px;
    font-weight: 600;
    color: #3f3f3f;
  }
`;

export const DataInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  .title {
    font-size: 18px;
    font-weight: 600;
    color: #3f3f3f;
  }
  .text {
    font-size: 18px;
    color: #3f3f3f;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
`;

export const TdCollapsibleStyled = styled.td`
  border: 1px solid rgba(242, 125, 22, 0.3);
  padding: 16px 32px;
`;

export const TrEmptyState = styled.tr`
  
`;