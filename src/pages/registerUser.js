import React, { useState } from "react";
import {
  Container,
  EyeIcon,
  FormStyled,
  GridContainer,
  GridForm,
  GridImage,
  LinkStyled,
} from "@/styles/Register.style";
import Image from "next/image";
import CustomInput from "@/components/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/CustomButton";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import User from "@/domain/entities/user";
import UserRepo from "@/infraestructure/implementation/httpRequest/axios/UserRepo";
import SignUpUserUseCase from "@/application/usecases/userUseCase/SignUpUserCase";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import CryptoJS from "crypto-js";
import CustomSelect from "@/components/CustomSelect"; 
import CustomAlert from "@/components/CustomAlert";
import CustomAlertSeverity from "@/components/CustomAlertSeverity";

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
      route.push("/users");
    } catch (error) {
      console.error("Error durante el registro:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!isShowPassword);
  };

  return (
    <Container>
      <GridContainer>
        <GridForm>
          {/* logo */}
          <Image src="/img/Logo.png" alt="logo" width={148} height={150} />
          <FormStyled onSubmit={handleSubmit(onSignUpSubmit)}>
            {/* campos a llenar para el registro */}
            <CustomInput
              label="Nombre"
              name="name"
              control={control}
              fullWidth
            />

            <CustomInput
              label="Email"
              name="email"
              control={control}
              fullWidth
            />

            <CustomInput
              type={isShowPassword ? "text" : "password"}
              fullWidth
              label="Contraseña"
              name="password"
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
            />
            
            <CustomButton
              buttonText="Registrar"
              fullWidth
              type="submit"
              onClick={handleSubmit(onSignUpSubmit)}
            />
          </FormStyled>
        </GridForm>
      </GridContainer>
    </Container>
  );
};

export default SignUp;
