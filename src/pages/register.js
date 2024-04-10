import React, { useState } from "react";
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

const SignUp = () => {
  const route = useRouter();
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
