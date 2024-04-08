// pages/[userId].js
import {
  Container,
  FormStyled,
  GridContainer,
  GridForm,
  GridButton,
} from "@/styles/Register.style";
import { useRouter } from "next/router";
import { Skeleton } from "@mui/material";
import { useState, useEffect } from "react";
import UserRepo from "@/infraestructure/implementation/httpRequest/axios/UserRepo";
import UpdateUserUseCase from "@/application/usecases/userUseCase/UpdateUserCase";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { useForm } from "react-hook-form";
import User from "@/domain/entities/user";
import GetOneUserCase from "@/application/usecases/userUseCase/GetOneUserCase";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { EyeIcon } from "@/styles/Login.style";
import RoleRepo from "@/infraestructure/implementation/httpRequest/axios/RoleRepo";
import GetAllRoleRepo from "@/application/usecases/roleUseCase/GetAllRoleUseCase";
import { CheckboxContainer } from "@/styles/Form.style";
import CustomCheckboxInput from "@/components/CustomRadioInput";
import CustomSelect from "@/components/CustomSelect";
import { LabelStyled } from "@/components/CustomInput/index.style";

const loginSchema = yup.object().shape({
  name: yup.string().required("Ingresa el nombre completo"),
  email: yup
    .string()
    .email("Ingresa un correo electrónico válido")
    .required("El correo electrónico es requerido"),
  password: yup.string().required("La contraseña es requerida"),
  newPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "La contraseña no coincide con la Nueva Contraseña"
    )
    .required("Confirmación de la contraseña es requerida"),
});

const EditUserPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [userData, setUserData] = useState(null);
  const [roles, setRoles] = useState([]);
  const [isShowPassword, setShowPassword] = useState(false);
  const [isShowPasswordNew, setShowPasswordNew] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState([]);
  
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const fetchRoles = async () => {
    const roleRepo = new RoleRepo();
    const getAllRol = new GetAllRoleRepo(roleRepo);
    try {
      const response = await getAllRol.run();
      setRoles(response.roles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const userRepo = new UserRepo();
    const getOneUserCase = new GetOneUserCase(userRepo);
    const fetchUser = async () => {
      if (id) {
        try {
          const response = await getOneUserCase.run(id);
          setUserData(response.users);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchUser();
  }, [id]);

  ///! ---------------------------------------------------------------------------------------
  ///! Actualizar los campos con el data obtenido por la consulta, de esa forma se aplica el
  ///! form validate
  ///! ---------------------------------------------------------------------------------------
  useEffect(() => {
    fetchRoles();
    if (userData) {
      reset({
        name: userData.name,
        id_rol: userData.id_rol,
        email: userData.email,
      });
      setSelectedRoles(userData.id_rol);
    }
  }, [userData, reset]);

  const onSubmit = async (data) => {
    const userRepo = new UserRepo(id);
    const updateUserUseCase = new UpdateUserUseCase(userRepo);

    const updatedUser = new User(
      id,
      data.name,
      data.id_rol = selectedRoles,
      data.email,
      data.password
    );

    try {
      const response = await updateUserUseCase.run(updatedUser);

      router.push("/user");
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!isShowPassword);
  };
  const togglePasswordVisibilityNew = () => {
    setShowPasswordNew(!isShowPasswordNew);
  };

  const handleRoleChange = (selectedRoles) => {
    setSelectedRoles(selectedRoles);
    console.log(selectedRoles);
  };

  const handleGoBack = () => {
    router.push("/user");
  };

  return (
    <>
      {userData ? (
        <GridContainer>
          <GridForm>
            <Image src="/img/Logo.png" alt="logo" width={148} height={150} />

            <FormStyled onSubmit={handleSubmit(onSubmit)}>
              <CustomInput
                label="Nombre"
                name="name"
                control={control}
                error={errors.name?.message || ""}
                defaultValue={userData?.name}
                fullWidth
              />
              <div>
                <LabelStyled>Rol</LabelStyled>
                <CheckboxContainer>
                  <CustomCheckboxInput
                    data={roles}
                    name="id_rol"
                    onSelectionChange={handleRoleChange}
                    defaultValue={roles.find(role => role._id === userData.id_rol[0])}
                  />
                </CheckboxContainer>
              </div>
              <CustomInput
                label="Email"
                name="email"
                control={control}
                error={errors.email?.message || ""}
                defaultValue={userData?.email}
                fullWidth
              />
              <input
                type="text"
                style={{ display: "none" }}
                value="username"
                readOnly
              />
              <input
                type="password"
                style={{ display: "none" }}
                value="password"
                readOnly
              />
              <CustomInput
                label="Nueva Contraseña"
                type={isShowPassword ? "text" : "password"}
                name="password"
                autocomplete="new-password"
                error={errors.newPassword?.message || ""}
                control={control}
                icon={
                  isShowPassword ? (
                    <EyeIcon
                      icon={faEyeSlash}
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <EyeIcon icon={faEye} onClick={togglePasswordVisibility} />
                  )
                }
                fullWidth
              />
              <CustomInput
                label="Confirmar Contraseña"
                type={isShowPasswordNew ? "text" : "password"}
                name="newPassword"
                autocomplete="new-password"
                error={errors.password?.message || ""}
                control={control}
                icon={
                  isShowPasswordNew ? (
                    <EyeIcon
                      icon={faEyeSlash}
                      onClick={togglePasswordVisibilityNew}
                    />
                  ) : (
                    <EyeIcon
                      icon={faEye}
                      onClick={togglePasswordVisibilityNew}
                    />
                  )
                }
                fullWidth
              />
              <GridButton>
                <CustomButton
                  type="submit"
                  buttonText="Actualizar"
                  onClick={handleSubmit(onSubmit)}
                />
                <CustomButton
                  buttonText="Cancelar"
                  customDesign
                  onClick={handleGoBack}
                />
              </GridButton>
            </FormStyled>
          </GridForm>
        </GridContainer>
      ) : (
        <p>Cargando datos del usuario...</p>
      )}
    </>
  );
};

export default EditUserPage;
