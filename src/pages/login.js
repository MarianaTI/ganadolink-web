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

const Login = () => {
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

  const togglePasswordVisibility = () => {
    setShowPassword(!isShowPassword);
  };

  return (
    <Container>
      <GridContainer>
        <GridForm>
          <Image src="/img/Logo.png" alt="logo" width={148} height={150} />
          <FormStyled>
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
              <CustomButton buttonText="Entrar" fullWidth />
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
