import React, { useState } from "react";
import {
  Container,
  EyeIcon,
  FormStyled,
  GridContainer,
  GridForm,
  GridImage,
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
import CryptoJS from "crypto-js";
import { useDispatch } from "react-redux";
import { setUser } from "@/actions/userActions";
import CustomAlerts from "@/components/CustomAlerts";

const Login = () => {
  const route = useRouter();
  const dispatch = useDispatch();
  const [isShowPassword, setShowPassword] = useState(false);
  const [isError, setError] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    show: false,
    title: "",
    text: "",
  });

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
      const userRepo = new UserRepo(dispatch);
      const signInUseCase = new SignInUserUseCase(userRepo);
      const signInResponse = await signInUseCase.run(user);

      if (signInResponse && signInResponse.token) {
        dispatch(setUser(signInResponse));
        const encryptedToken = CryptoJS.AES.encrypt(
          signInResponse.token,
          "cookie-encrypted"
        ).toString();
        Cookies.set("authToken", encryptedToken, { expires: 1 / 24 });
        route.push("/");
      }
    } catch (error) {
      setTimeout(() => {
        setAlertInfo({
          show: true,
          title: "Ocurrió un Error Inesperado",
          text:
            `${error.message} - ${error.response.data.message}` ||
            "No se pudo completar el inicio de sesión.",
        });
      }, 1000);
    }
  };

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
                fullWidth
              />
              <CustomInput
                label="Contraseña"
                name="password"
                control={control}
                fullWidth
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
              <CustomButton buttonText="Entrar" fullWidth type="submit" />
            </div>
          </FormStyled>
        </GridForm>
        <GridImage>
          <div style={{ position: "relative", width: "auto", height: "100%" }}>
            <Image
              src="/img/pexels-mark-stebnicki-2252557.jpg"
              layout="fill"
              objectFit="cover"
              alt="grid"
            />
          </div>
        </GridImage>
      </GridContainer>
      {alertInfo.show && (
        <CustomAlerts
          open={alertInfo}
          onClose={() => setAlertInfo(false)}
          title={alertInfo.title}
          text={alertInfo.text}
          acceptButton="Aceptar"
          error
        />
      )}
    </Container>
  );
};

export default Login;
