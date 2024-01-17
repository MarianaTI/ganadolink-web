import React from "react";
import {
  Container,
  FormStyled,
  GridContainer,
  GridForm,
  GridImage,
} from "@/styles/Login.style";
import Image from "next/image";
import CustomInput from "@/components/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/CustomButton";

const Login = () => {
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
            <div style={{padding: "32px 0px"}}>
              <CustomInput
                label="Correo electronico"
                name="email"
                control={control}
              />
              <CustomInput
                label="Contraseña"
                name="password"
                control={control}
              />
              <CustomButton buttonText="Iniciar"/>
            </div>
          </FormStyled>
        </GridForm>
        <GridImage>
          <Image
            src="/img/pexels-mark-stebnicki-2252557.jpg"
            width={820}
            height={703}
            style={{ width: "108%" }}
          />
        </GridImage>
      </GridContainer>
    </Container>
  );
};

export default Login;
