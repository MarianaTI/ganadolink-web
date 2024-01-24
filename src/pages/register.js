import Image from "next/image";
import React from "react";
import registerImage from "../../public/img/register.jpg";
import {
  Container,
  FormStyled,
  GridContainer,
  GridForm,
  GridImage,
  LinkStyled,
} from "@/styles/Register.style";
import logo from "../../public/img/Logo.png";
import CustomInput from "@/components/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/CustomButton";

const Register = () => {
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
          <Image src={logo} alt="logo" width={148} height={150} />
          <FormStyled>
            <h1>Registrarse</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              et quam laoreet, molestie justo eu, tempus orci.
            </span>
            <div style={{ padding: "32px 0px" }}>
              <CustomInput label="Nombre" name="name" control={control} />
              <CustomInput
                label="Correo electronico"
                name="newEmail"
                control={control}
              />
              <CustomInput
                label="Contraseña"
                name="newpassword"
                control={control}
              />
              <CustomButton buttonText="Regristrarse" fullWidth type="submit" />
            </div>
            <span>
              Ya tienes una cuenta? 
              <LinkStyled href="/login">Inicia sesión</LinkStyled>
            </span>
          </FormStyled>
        </GridForm>
        <GridImage>
          <div style={{ position: "relative", width: "auto", height: "100%" }}>
            <Image
              src={registerImage}
              layout="fill"
              objectFit="cover"
              alt="register"
            />
          </div>
        </GridImage>
      </GridContainer>
    </Container>
  );
};

export default Register;
