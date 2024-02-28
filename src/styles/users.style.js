import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 30%;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: calc(100% - 30px);
`;

const SearchIcon = styled.div`
  position: absolute;
  top: 55%;
  right: 40px;
  transform: translateY(-50%);
`;

const Line = styled.hr`
  border: 0;
  border-top: 2px solid #F27D16;
  width: 100%;
  margin-top: -18px;
  margin-bottom: 55px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 10px;
  border-top: 2px solid #F8BE8B; /* Borde superior en gris elegante fuerte */
  border-bottom: 2px solid #F8BE8B; /* Borde inferior en gris elegante fuerte */
  text-align: left;
  background-color: #F8BE8B; /* Color de fondo gris */
  color: #333; /* Color del texto */
`;

const Td = styled.td`
  padding: 10px;
  border: none; /* Sin bordes en las celdas de la tabla */
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

export { Container, Form, Input, InputContainer, SearchIcon, Title, Line, Table, Th, Td, EditButton, DeleteButton };