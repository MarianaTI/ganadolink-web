import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Title, Form, Input, InputContainer, SearchIcon, Line, Table, Th, Td, EditButton, DeleteButton } from '../styles/users.style';
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Juan Pérez',
      role: 'Administrador',
      email: 'juan@example.com',
      password: '********',
    },
    {
      id: 2,
      name: 'María García',
      role: 'Usuario',
      email: 'maria@example.com',
      password: '********',
    },
  ]);

  const { register, handleSubmit } = useForm();

  return (
    <Container>
      <Title style={{ marginLeft: '-1230px' }}>Usuarios Registrados</Title>
      <Line />
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Input type="text" placeholder="Buscar..." {...register('search')} />
          <SearchIcon>
            <FaSearch style={{ color: '#888' }} />
          </SearchIcon>
        </InputContainer>
      </Form>
      <Table>
        <thead>
          <tr>
            <Th>Nombre</Th>
            <Th>Rol</Th>
            <Th>Email</Th>
            <Th>Contraseña</Th>
            <Th>Acciones</Th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <Td>{user.name}</Td>
              <Td>{user.role}</Td>
              <Td>{user.email}</Td>
              <Td>{user.password}</Td>
              <Td>
                <EditButton>
                  <FaEdit />
                </EditButton>
                <DeleteButton>
                  <FaTrash />
                </DeleteButton>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Users;