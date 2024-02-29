import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
=======
import axios from 'axios';
>>>>>>> e0b77b370408321cff6bb1ebae1403063b012add
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
<<<<<<< HEAD
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
=======
  // Estado para almacenar los usuarios
  const [users, setUsers] = useState([]);
  
  // Estado para almacenar los usuarios filtrados
  const [filteredUsers, setFilteredUsers] = useState([]);
  
  // Función para obtener el token de las cookies (simulada)
  const getTokenCookies = () => {
    return 'AQUÍ_DEBERÍAS_OBTENER_EL_TOKEN_DE_LAS_COOKIES';
  };

  // Función para obtener los usuarios de la API
  const fetchUsers = async () => {
    try {
      const token = getTokenCookies();
      const response = await axios.get('URL_DE_TU_API', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data);
      setFilteredUsers(response.data); // Al inicio, los usuarios filtrados son todos los usuarios
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Función para buscar usuarios
  const handleSearch = (searchTerm) => {
    const filtered = users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const { register, handleSubmit } = useForm();

  // Función para manejar la edición de un usuario
  const handleEditUser = (userId) => {
    // Lógica para editar un usuario
    console.log('Edit user with id:', userId);
  };

  // Función para manejar la eliminación de un usuario
  const handleDeleteUser = (userId) => {
    // Lógica para eliminar un usuario
    console.log('Delete user with id:', userId);
  };
>>>>>>> e0b77b370408321cff6bb1ebae1403063b012add

  return (
    <Container>
      <Title style={{ marginLeft: '-1230px' }}>Usuarios</Title>
      <Line />
      <Form onSubmit={handleSubmit(data => handleSearch(data.search))}>
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
<<<<<<< HEAD
          {users.map(user => (
            <tr key={user._id}>
=======
          {filteredUsers.map(user => (
            <tr key={user.id}>
>>>>>>> e0b77b370408321cff6bb1ebae1403063b012add
              <Td>{user.name}</Td>
              <Td>{user.rol}</Td>
              <Td>{user.email}</Td>
              <Td>{user.password}</Td>
              <Td>
                <EditButton onClick={() => handleEditUser(user.id)}>
                  <FaEdit />
                </EditButton>
                <DeleteButton onClick={() => handleDeleteUser(user.id)}>
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
