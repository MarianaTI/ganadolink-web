import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
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

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 30%;
`;

export const Input = styled.input`
  padding: 8px 16px;
  border: 1px solid #ccc;
  font-family: Poppins;
  border-radius: 5px;
  font-size: 16px;
  width: calc(100% - 30px);
  &:focus {
    outline: none;
    border-color: #f7ae6d;
    background-color: #fff;
    box-shadow: 0 0 0 4px #fdefe2;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 55%;
  right: 40px;
  transform: translateY(-50%);
`;


export const TableStyled = styled.table`
  width: 100%;
  text-align: center;
  margin: 16px 0;
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

const EditButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 5px;
  transition: color 0.3s;

  &:hover {
    color: #ffc107; /* Color representativo de editar */
  }
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #dc3545; /* Color representativo de eliminar */
  }
`;

export const TdContainer = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;


export { Container, Form, EditButton, DeleteButton };