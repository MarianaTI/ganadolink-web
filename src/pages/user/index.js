/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import GetAllUserUseCase from "@/application/usecases/userUseCase/GetAllUserCase";
import UserRepo from "@/infraestructure/implementation/httpRequest/axios/UserRepo";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "next/router";
import { FaSearch, FaEdit, FaTrash } from "react-icons/fa";
import Image from "next/image";
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
  ImagenD,
  RowContainer,
} from "../../styles/users.style";
import { Skeleton } from "@mui/material";
import withAuth from "@/components/Authenticated";
import DeleteUserCase from "@/application/usecases/userUseCase/DeleteUserCase";
import { useSelector } from "react-redux";
import CustomModal from "@/components/CustomModal";
import DeleteUserUseCase from "@/application/usecases/userUseCase/DeleteUserCase";
import AlertComponent from "@/components/CustomAlert";

const AllUser = () => {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const userId = useSelector((state) => state.user._id);
  const [userIdToDelete, setUserIdToDelete] = useState(null);
  const [isOpen, setOpenDelete] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    show: false,
    title: "",
    text: "",
  });

  const userRepo = new UserRepo(null, userId);
  const deleteUserUseCase = new DeleteUserUseCase(userRepo);
  const getAllUserUseCase = new GetAllUserUseCase(userRepo);

  const fetchUsers = async () => {
    try {
      const userData = await getAllUserUseCase.run();
      setUsers(userData.users);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleEditClick = (id) => {
    return router.push({
      pathname: `/user/view/${id}`,
      query: { id: id },
    });
  };

  const toggleDeleteModal = () => setOpenDelete((isOpen) => !isOpen);

  const handleDeleteClick = (userId) => {
    setUserIdToDelete(userId);
    toggleDeleteModal();
  };

  const handleDeleteUser = async () => {
    try {
      const result = await deleteUserUseCase.run(userIdToDelete);
      setAlertInfo({
        show: true,
        title: "Eliminado correctamente",
        text: "El Usuario se ha eliminado exitosamente",
      });
      setUserIdToDelete(null);
      toggleDeleteModal();
      ///! -----------------------------------------------------------------------
      ///! Retomamos el setUsers, para filtrar mis usuarios disponibles
      ///! -----------------------------------------------------------------------
      setUsers(users.filter((user) => user.id !== userIdToDelete));
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
              onClick={() => router.push("/registerUser")}
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
                    <EditButton onClick={() => handleEditClick(user.id)}>
                      <FaEdit style={{ fontSize: "24px" }} />
                    </EditButton>
                    <DeleteButton onClick={() => handleDeleteClick(user.id)}>
                      <FaTrash style={{ fontSize: "22px" }} />
                    </DeleteButton>
                    <CustomModal
                      open={isOpen}
                      onClose={toggleDeleteModal}
                      title="Eliminar"
                      message="¿Deseas eliminar este libro?"
                    >
                      <ImagenD>
                        <Image
                          src="/img/borrar.png"
                          width={140}
                          height={140}
                          alt="logo"
                        />
                      </ImagenD>
                      <RowContainer>
                        <div style={{ width: "100%" }}>
                          <CustomButton
                            fullWidth
                            buttonText="Aceptar"
                            onClick={handleDeleteUser}
                          />
                        </div>
                        <div style={{ width: "100%" }}>
                          <CustomButton
                            buttonText="Cancelar"
                            fullWidth
                            customDesign
                            onClick={toggleDeleteModal}
                          />
                        </div>
                      </RowContainer>
                    </CustomModal>
                  </td>
                </TrStyled>
              ))}
            </tbody>
          </TableStyled>
          {alertInfo.show && (
            <AlertComponent
              open={alertInfo}
              onClose={() => setAlertInfo(false)}
              imageSrc={
                alertInfo.title === "Eliminado correctamente"
                  ? "/img/success.png"
                  : "/img/error.png"
              }
              title={alertInfo.title}
              text={alertInfo.text}
            />
          )}
        </Container>
      )}
    </>
  );
};

export default withAuth(AllUser);
