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
import { Skeleton } from "@mui/material";

// Importa los casos de uso necesarios para editar y eliminar usuarios
import DeleteUserCase from "@/application/usecases/userUseCase/DeleteUserCase";


const AllUser = () => {
  const route = useRouter();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  // Función para editar un usuario
  const handleEditUser = (userId) => {
    route.push(`/editUsers/${userId}`); // Redirige a la página de edición del usuario con su ID
  };

  // Función para eliminar un usuario
  const handleDeleteUser = async (userId) => {
    const userRepo = new UserRepo();
    const deleteUserUseCase = new DeleteUserCase(userRepo);

    try {
      await deleteUserUseCase.run(userId); // Ejecuta el caso de uso para eliminar el usuario
      fetchUsers(); // Vuelve a cargar la lista de usuarios después de eliminar uno
    } catch (error) {
      console.log("Error al eliminar el usuario:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const loading = () => {
    return (
      <div style={{ padding: "4px 16px" }}>
        <Skeleton variant="section" animation="wave" height={60} />
        <div style={{ marginTop: "24px" }}>
          <Skeleton variant="section" animation="wave" height={60} />
        </div>
        <div style={{ marginTop: "24px" }}>
          <Skeleton variant="section" animation="wave" height={400} />
        </div>
      </div>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        loading()
      ) : (
        <Container>
          <Title>Usuarios</Title>
          <Line />
          <ButtonContainer>
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
      )}
    </>
  );
};

export default AllUser;
