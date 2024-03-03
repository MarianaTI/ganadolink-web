import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
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
  TableStyled,
  TheadStyled,
  TrStyled,
  TdContainer,
} from "../styles/users.style";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa";

const Users = () => {
  // Estado para almacenar los usuarios
  const [users, setUsers] = useState([]);

  // Estado para almacenar los usuarios filtrados
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Función para obtener el token de las cookies (simulada)
  const getTokenCookies = () => {
    return "AQUÍ_DEBERÍAS_OBTENER_EL_TOKEN_DE_LAS_COOKIES";
  };

  // Función para obtener los usuarios de la API
  const fetchUsers = async () => {
    try {
      const token = getTokenCookies();
      const response = await axios.get("URL_DE_TU_API", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data);
      setFilteredUsers(response.data); // Al inicio, los usuarios filtrados son todos los usuarios
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Función para buscar usuarios
  const handleSearch = (searchTerm) => {
    const filtered = users.filter(
      (user) =>
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
    console.log("Edit user with id:", userId);
  };

  // Función para manejar la eliminación de un usuario
  const handleDeleteUser = (userId) => {
    // Lógica para eliminar un usuario
    console.log("Delete user with id:", userId);
  };

  return (
    <Container>
      <Title>Usuarios Registrados</Title>
      <Line />
      <Form onSubmit={handleSubmit((data) => handleSearch(data.search))}>
        <InputContainer>
          <Input type="text" placeholder="Buscar..." {...register("search")} />
          <SearchIcon>
            <FaSearch style={{ color: "#888" }} />
          </SearchIcon>
        </InputContainer>
      </Form>
      <TableStyled>
        <TheadStyled>
          <TrStyled>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Email</th>
            <th>Contraseña</th>
            <th>Acciones</th>
          </TrStyled>
        </TheadStyled>
        <tbody>
          {filteredUsers.map((user) => (
            <TrStyled key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <TdContainer>
                <EditButton onClick={() => handleEditUser(user.id)}>
                  <FaEdit />
                </EditButton>
                <DeleteButton onClick={() => handleDeleteUser(user.id)}>
                  <FaTrash />
                </DeleteButton>
              </TdContainer>
            </TrStyled>
          ))}
        </tbody>
      </TableStyled>
    </Container>
  );
};

export default Users;
