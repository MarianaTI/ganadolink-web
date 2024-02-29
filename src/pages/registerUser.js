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
import SignUpUserUseCase from "@/application/usecases/userUseCase/SignUpUserCase"; // Importa el caso de uso para el registro
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import CryptoJS from "crypto-js";
import CustomSelect from "@/components/CustomSelect";

const signUp = () => {
  // const route = useRouter();
  // const [isShowPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      name:"",
      email: "",
      password: "",
    }, 
  });

  const onSignUpSubmit = async (data) => {
    try {
      const user = new User(null, data.name, data.rol, data.email, data.password); 
      const userRepo = new UserRepo();
      const signUpUseCase = new SignUpUserUseCase(userRepo);
      const signUpResponse = await signUpUseCase.run(user);

      if (signUpResponse && signUpResponse.token) {
        const encryptedToken = CryptoJS.AES.encrypt(signUpResponse.token, 'cookie-encrypted').toString();
        await Cookies.set('authToken', encryptedToken, {expires: 1/24});
        route.push("/allUser");
      }
    } catch (error) {
      console.error("Error durante el registro:", error);

    }
  }

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
            <CustomInput label="Nombre" name="name" control={control} />
            <CustomInput label="Email" name="email" control={control} />
            <CustomInput type="password" label="Contraseña" name="password" control={control}/>
           
            {/* ... (Boton registrar) */}
            <CustomButton buttonText="Registrar" fullWidth type="submit"/>
          </FormStyled>
        </GridForm>
      </GridContainer>
    </Container>
  );
};

export default signUp;
