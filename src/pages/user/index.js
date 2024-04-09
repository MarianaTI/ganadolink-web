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
  ImagenD,
  RowContainer,
} from "../../styles/users.style";
import { Skeleton } from "@mui/material";
import withAuth from "@/components/Authenticated";
import { useSelector } from "react-redux";
import CustomModal from "@/components/CustomModal";
import DeleteUserUseCase from "@/application/usecases/userUseCase/DeleteUserCase";
import AlertComponent from "@/components/CustomAlert";
import {
  BottonContainer,
  CustomIcon,
  HeaderContainer,
  IconButton,
  Input,
  InputContainer,
  SearchIcon,
  TableStyled,
  TrStyled,
} from "@/styles/catalogue.style";
import { ButtonStyled, Icon } from "@/styles/Index.style";
import {
  faPenToSquare,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

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

  const [search, setSearch] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setFilterTerm(search);
    }
  };

  const filteredUsers = users.filter((item) => {
    const searchLower = filterTerm.toLowerCase();
    return (
      item.name.toLowerCase().includes(searchLower) ||
      item.rol.toLowerCase().includes(searchLower) ||
      item.email.toLowerCase().includes(searchLower)
    );
  });

  const handleSearchClick = () => {
    setFilterTerm(search);
  };

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
      setAlertInfo({
        show: true,
        title: "Error",
        text: "Ocurrio un problema al eliminar el Usuario",
      });
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
          <HeaderContainer>
            <InputContainer>
              <SearchIcon onClick={handleSearchClick}>
                <FaSearch style={{ color: "#afafaf", fontSize: "15px" }} />
              </SearchIcon>
              <Input
                type="text"
                placeholder="Buscar..."
                value={search}
                onChange={handleSearchChange}
                onKeyDown={handleEnterKey}
              />
            </InputContainer>
            <div>
              <ButtonStyled
                style={{ borderRadius: "10px" }}
                type="button"
                onClick={() => router.push("/registerUser")}
              >
                <span>Agregar Usuario</span>
                <Icon icon={faUserPlus} />
              </ButtonStyled>
            </div>
          </HeaderContainer>
          <TableStyled>
            <thead>
              <TrStyled>
                <th className="title">Nombre</th>
                <th className="title">Rol</th>
                <th className="title">Email</th>
                <th className="title">Acciones</th>
              </TrStyled>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <TrStyled key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.rol}</td>
                  <td>{user.email}</td>
                  <td>
                    <BottonContainer>
                      <IconButton onClick={() => handleEditClick(user.id)}>
                        <CustomIcon icon={faPenToSquare} />
                      </IconButton>
                      {user.rol !== "SuperAdmin" ? (
                        <IconButton onClick={() => handleDeleteClick(user.id)}>
                          <CustomIcon icon={faTrash} />
                        </IconButton>
                      ) : (
                        <IconButton disabled style={{background: "rgba(219, 180, 147)", cursor: "auto"}}>
                          <CustomIcon icon={faTrash} style={{color: "#404040"}}/>
                        </IconButton>
                      )}
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
                    </BottonContainer>
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
