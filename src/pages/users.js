import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';
import {
  Container,
  Title,
  Form,
  Input,
  InputContainer,
  SearchIcon,
  Line,
  Table,
  Th,
  Td,
  EditButton,
  DeleteButton,
} from '../styles/users.style';
import GetAllUserUseCase from '@/application/usecases/userUseCase/GetAllUserCase';
import UserRepo from '@/infraestructure/implementation/httpRequest/axios/UserRepo';
import CustomButton from '@/components/CustomButton';
import { Router } from 'next/router';

const Users = () => {
  const [users, setUsers] = useState([]);
  const { register, handleSubmit } = useForm();

  const fetchUser = async () => {
    const userRepo = new UserRepo();
    const getAllUserUseCase = new GetAllUserUseCase(userRepo);
    try {
      const userData = await getAllUserUseCase.run();
      console.log(userData);
      setUsers(userData.users);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Container>
      <Title style={{ marginLeft: '-1230px' }}>Usuarios</Title>
      <Line />
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Input type="text" placeholder="Buscar..." {...register('search')} />
          <SearchIcon>
            <FaSearch style={{ color: '#888' }} />
          </SearchIcon>
        </InputContainer>

        <CustomButton onClick={() => Router.push("/src/pages/registerUser")} buttonText={'Agregar Usuario'}/>
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
            <tr key={user._id}>
              <Td>{user.name}</Td>
              <Td>{user.rol}</Td>
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
