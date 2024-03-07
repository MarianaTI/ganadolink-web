import React, { useEffect, useState } from "react";
import GetAllUserUseCase from "@/application/usecases/userUseCase/GetAllUserCase";
import UserRepo from "@/infraestructure/implementation/httpRequest/axios/UserRepo";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "next/router";
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";
import {
  Container,
  Title,
  Line,
  EditButton,
  DeleteButton,
  TableStyled,
  TheadStyled,
  TrStyled,
  ButtonContainer,
} from "../styles/users.style";

const AllUser = () => {
  const route = useRouter();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const userRepo = new UserRepo();
    const getAllUserUseCase = new GetAllUserUseCase(userRepo);

    try {
      const userData = await getAllUserUseCase.run();
      setUsers(userData.users);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSearch = (searchTerm) => {
  //   const filtered = users.filter(user =>
  //     user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     user.rol.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     user.email.toLowerCase().includes(searchTerm.toLowerCase())||
  //     user.password.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilteredUsers(filtered);
  // };

  const handleEditUser = (userId) => {
    console.log("Edit user with id:", userId);
    // Agrega aquí la lógica para editar un usuario según el ID
  };

  const handleDeleteUser = (userId) => {
    console.log("Delete user with id:", userId);
    // Agrega aquí la lógica para eliminar un usuario según el ID
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container>
      <Title>Usuarios</Title>
      <Line />
      <ButtonContainer>
        {" "}
        <CustomButton
          onClick={() => route.push("/registerUser")}
          buttonText={"Agregar Usuario"}
        />
      </ButtonContainer>
      <TableStyled>
        <TheadStyled>
          <TrStyled>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Email</th>
            <th>Acciones</th>
          </TrStyled>
        </TheadStyled>
        <tbody>
          {users.map((user) => (
            <TrStyled key={user.id}>
              <td>{user.name}</td>
              <td>{user.rol}</td>
              <td>{user.email}</td>
              <td>
                <EditButton onClick={() => handleEditUser(user.id)}>
                  <FaEdit style={{ fontSize: "24px" }} />
                </EditButton>
                <DeleteButton onClick={() => handleDeleteUser(user.id)}>
                  <FaTrash style={{ fontSize: "22px" }} />
                </DeleteButton>
              </td>
            </TrStyled>
          ))}
        </tbody>
      </TableStyled>
    </Container>
  );
};

export default AllUser;
