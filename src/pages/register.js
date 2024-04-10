import React, { useEffect, useState } from "react";
import {
  ButtonStyled,
  Company,
  Container,
  EyeIcon,
  FormStyled,
  GridForm,
  HeaderSection,
} from "@/styles/Register.style";
import CustomInput from "@/components/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/CustomButton";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import User from "@/domain/entities/user";
import UserRepo from "@/infraestructure/implementation/httpRequest/axios/UserRepo";
import SignUpUserUseCase from "@/application/usecases/userUseCase/SignUpUserCase";
import { useRouter } from "next/router";
import withAuth from "@/components/Authenticated";
import { Icon } from "@/styles/Index.style";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import RoleRepo from "@/infraestructure/implementation/httpRequest/axios/RoleRepo";
import GetAllRoleRepo from "@/application/usecases/roleUseCase/GetAllRoleUseCase";
import { LabelStyled } from "@/components/CustomInput/index.style";
import { CheckboxContainer } from "@/styles/Form.style";
import CustomCheckboxInput from "@/components/CustomRadioInput";

const SignUp = () => {
  const route = useRouter();
  const [roles, setRoles] = useState([]);
  const [isShowPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
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
      const rolesWithUpdatedNames = response.roles.map(role => ({
      ...role,
      name: getRoleLabel(role.name)
    }));
    setRoles(rolesWithUpdatedNames);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRoles();
  }, []);

  const onSignUpSubmit = async (data) => {
    const user = new User(null, data.name, data.rol, data.email, data.password);
    const userRepo = new UserRepo();
    const signUpUseCase = new SignUpUserUseCase(userRepo);

    try {
      const signUpResponse = await signUpUseCase.run(user);
      console.log(signUpResponse);
      route.push("/user");
    } catch (error) {
      console.error("Error durante el registro:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!isShowPassword);
  };

  return (
    <Container>
      <GridForm>
        <ButtonStyled onClick={() => route.push("/user")}><Icon style={{color: "#F27D16"}} icon={faAngleLeft}/> Regresar</ButtonStyled>
        <HeaderSection>
          <h1>Registro de usuarios</h1>
          <span className="text">
            Utilice este formulario para registrar a los nuevos usuarios en
            nuestro portal. Les damos la bienvenida a nuestra comunidad con
            gusto.
          </span>
        </HeaderSection>
        <FormStyled onSubmit={handleSubmit(onSignUpSubmit)}>
          <CustomInput
            label="Nombre"
            name="name"
            control={control}
            fullWidth
            borderLight
          />
          <div>
              <LabelStyled>Rol del usuario</LabelStyled>
              <CheckboxContainer>
                <CustomCheckboxInput
                  data={roles}
                  name="id_rol"
                />
              </CheckboxContainer>
            </div>
          <CustomInput
            label="Email"
            name="email"
            control={control}
            fullWidth
            borderLight
          />
          <CustomInput
            type={isShowPassword ? "text" : "password"}
            fullWidth
            borderLight
            label="Contraseña"
            name="password"
            control={control}
            icon={
              isShowPassword ? (
                <EyeIcon icon={faEyeSlash} onClick={togglePasswordVisibility} />
              ) : (
                <EyeIcon icon={faEye} onClick={togglePasswordVisibility} />
              )
            }
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <CustomButton
              buttonText="Aceptar"
              type="submit"
              onClick={handleSubmit(onSignUpSubmit)}
            />
            <Company>Powered by GanadoLink</Company>
          </div>
        </FormStyled>
      </GridForm>
    </Container>
  );
};

export default withAuth(SignUp);
