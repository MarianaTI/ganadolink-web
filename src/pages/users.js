import React, { useEffect, useState } from "react";
import GetAllUserUseCase from "@/application/usecases/userUseCase/GetAllUserCase";
import UserRepo from "@/infraestructure/implementation/httpRequest/axios/UserRepo";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "next/router";
import { FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
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

const AllUser = () => {
  const route = useRouter();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchUsers = async () => {
    const userRepo = new UserRepo();
    const getAllUserUseCase = new GetAllUserUseCase(userRepo);

    try {
      const userData = await getAllUserUseCase.run();
      setUsers(userData.users);
      setFilteredUsers(userData.users);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (searchTerm) => {
    const filtered = users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.rol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleEditUser = (userId) => {
    console.log('Edit user with id:', userId);
    // Agrega aquí la lógica para editar un usuario según el ID
  };

  const handleDeleteUser = (userId) => {
    console.log('Delete user with id:', userId);
    // Agrega aquí la lógica para eliminar un usuario según el ID
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container>
      <Title style={{ marginLeft: '-1230px' }}>Usuarios</Title>
      <Line />
      {/* <Form onSubmit={handleSubmit(data => handleSearch(data.search))}>
        <InputContainer>
          <Input type="text" placeholder="Buscar..." {...register('search')} />
          <SearchIcon>
            <FaSearch style={{ color: '#888' }} />
          </SearchIcon>
        </InputContainer>
        <CustomButton onClick={() => route.push("/src/pages/registerUser")} buttonText={'Agregar Usuario'}/>
      </Form> */}
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
          {filteredUsers.map(user => (
            <tr key={user.id}>
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

export default AllUser;
