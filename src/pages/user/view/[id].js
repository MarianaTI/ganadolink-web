// pages/[userId].js
import {
  Container,
  FormStyled,
  GridForm,
  ButtonStyled,
  HeaderSection,
  Company,
} from "@/styles/Register.style";
import { useRouter } from "next/router";
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
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { EyeIcon } from "@/styles/Login.style";
import RoleRepo from "@/infraestructure/implementation/httpRequest/axios/RoleRepo";
import GetAllRoleRepo from "@/application/usecases/roleUseCase/GetAllRoleUseCase";
import { CheckboxContainer } from "@/styles/Form.style";
import CustomCheckboxInput from "@/components/CustomRadioInput";
import { LabelStyled } from "@/components/CustomInput/index.style";
import { Icon } from "@/styles/Index.style";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import CustomAlerts from "@/components/CustomAlerts";

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
  const [alertInfo, setAlertInfo] = useState({
    show: false,
    title: "",
    text: "",
  });
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const getRoleLabel = (roleId) => {
    switch (roleId) {
      case "SuperAdmin":
        return "Administrador general";
      case "admin":
        return "Administrador";
      case "user":
        return "Usuario";
      default:
        return roleId;
    }
  };

  const fetchRoles = async () => {
    const roleRepo = new RoleRepo();
    const getAllRol = new GetAllRoleRepo(roleRepo);
    try {
      const response = await getAllRol.run();
      const rolesWithUpdatedNames = response.roles.map((role) => ({
        ...role,
        name: getRoleLabel(role.name),
      }));
      setRoles(rolesWithUpdatedNames);
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
      (data.id_rol = selectedRoles),
      data.email,
      data.password
    );

    try {
      const response = await updateUserUseCase.run(updatedUser);
      setAlertInfo({
        show: true,
        title: "Actualizado correctamente",
        text: "El usuario se ha actualizado correctamente",
      });
      setTimeout(() => {
        router.push("/user");
      }, 2000);
    } catch (error) {
      setAlertInfo({
        show: true,
        title: "Ocurrió un error al actualizar",
        text: `${error.message} - ${error.response.data.message}` ||
        "No se pudo completar la operación.",
      });
      setTimeout(() => {
      }, 2000);
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

  return (
    <Container>
      {userData ? (
        <GridForm>
          <ButtonStyled onClick={() => router.push("/user")}>
            <Icon style={{ color: "#F27D16" }} icon={faAngleLeft} /> Regresar
          </ButtonStyled>
          <HeaderSection>
            <h1>Actualización de usuario</h1>
            <span className="text">
              Utilice este formulario para actualizar la información de los
              usuarios en nuestro portal. Nos complace brindarles una
              experiencia personalizada y seguir siendo parte activa de nuestra
              comunidad.
            </span>
          </HeaderSection>
          <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
              label="Nombre"
              name="name"
              control={control}
              error={errors.name?.message || ""}
              defaultValue={userData?.name}
              fullWidth
              borderLight
            />
            <div>
              <LabelStyled>Rol del usuario</LabelStyled>
              <CheckboxContainer>
                <CustomCheckboxInput
                  data={roles}
                  name="id_rol"
                  onSelectionChange={handleRoleChange}
                  defaultValue={roles.find(
                    (role) => role._id === userData.id_rol[0]
                  )}
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
              borderLight
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
              borderLight
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
                  <EyeIcon icon={faEye} onClick={togglePasswordVisibilityNew} />
                )
              }
              fullWidth
              borderLight
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CustomButton
                type="submit"
                buttonText="Actualizar"
                onClick={handleSubmit(onSubmit)}
              />
              <Company>Powered by GanadoLink</Company>
            </div>
          </FormStyled>
        </GridForm>
      ) : (
        <p>Cargando datos del usuario...</p>
      )}
      {alertInfo.show && (
        <CustomAlerts
          open={alertInfo}
          onClose={() => setAlertInfo(false)}
          title={alertInfo.title}
          text={alertInfo.text}
          login
          error={alertInfo.title !== "Actualizado correctamente"}
          acceptButton={alertInfo.title !== "Actualizado correctamente"}
          onClickContinue={() => setAlertInfo(false)}
        />
      )}
    </Container>
  );
};

export default EditUserPage;
