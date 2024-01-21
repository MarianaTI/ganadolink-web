import React, { useState } from "react";
import {
  Container,
  EyeIcon,
  FormStyled,
  GridContainer,
  GridForm,
  GridImage,
  LinkStyled,
} from "@/styles/Login.style";
import Image from "next/image";
import CustomInput from "@/components/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/CustomButton";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import User from "@/domain/entities/user";
import UserRepo from "@/infraestructure/implementation/httpRequest/axios/UserRepo";
import SignInUserUseCase from "@/application/usecases/userUseCase/SignInUserCase";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Login = () => {
  const route = useRouter();
  const [isShowPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    }, 
  });

  const onSubmit = async (data) => {
    try {
      const user = new User(null, null, null, data.email, data.password);
      const userRepo = new UserRepo();
      const signInUseCase = new SignInUserUseCase(userRepo);
      const signInResponse = await signInUseCase.run(user);

      if (signInResponse && signInResponse.token) {
        await Cookies.set('authToken', signInResponse.token, {expires: 7});
        //en lugar de dias, horas
        //encriptar token cookie
        route.push("/allUser");
      }

    } catch (error) {
      console.error("Error durante el inicio de sesión:", error);
      if (error.response && error.response.status === 400) {
        console.log("Solicitud incorrecta o credenciales inválidas");
      }
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!isShowPassword);
  };

  return (
    <Container> 
      <GridContainer>
        <GridForm>
          <Image src="/img/Logo.png" alt="logo" width={148} height={150} />
          <FormStyled onSubmit={handleSubmit(onSubmit)}>
            <h1>Iniciar sesión</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              et quam laoreet, molestie justo eu, tempus orci.
            </span>
            <div style={{ padding: "32px 0px" }}>
              <CustomInput
                label="Correo electronico"
                name="email"
                control={control}
              />
              <CustomInput
                label="Contraseña"
                name="password"
                control={control}
                type={isShowPassword ? "text" : "password"}
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
              />
              <CustomButton buttonText="Entrar" fullWidth type="submit"/>
            </div>
            <span>
              Aún no tienes cuenta?
              <LinkStyled href="#">Registrate</LinkStyled>
            </span>
          </FormStyled>
        </GridForm>
        <GridImage>
          <div
            style={{ position: "relative", width: "auto", height: "100%" }}
          >
            <Image
              src="/img/pexels-mark-stebnicki-2252557.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </GridImage>
      </GridContainer>
    </Container>
  );
};

export default Login;
