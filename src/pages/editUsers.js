import React, { useState } from "react";
import {
  Container,
  EyeIcon, // Asegúrate de importar el componente EyeIcon correctamente
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
import UpdateUserUseCase from "@/application/usecases/userUseCase/UpdateUserCase";
import { useRouter } from "next/router";
import CryptoJS from "crypto-js";
import CustomSelect from "@/components/CustomSelect";
import CustomAlert from "@/components/CustomAlert";
import CustomAlertSeverity from "@/components/CustomAlertSeverity";

const Update = () => {
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

  const updateSubmit = async (data) => {
    const user = new User(null, data.name, data.rol, data.email, data.password);
    const userRepo = new UserRepo();
    const updateUseCase = new UpdateUserUseCase(userRepo);

    try {
      const updateResponse = await updateUseCase.run(user);
      console.log(updateResponse);
      route.push("/users");
    } catch (error) {
      console.error("Error durante la actualización:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!isShowPassword);
  };

  return (
    <Container>
      <GridContainer>
        <GridForm>
          <h3>Actualizar Datos</h3>
          {/* logo */}
          <Image src="/img/Logo.png" alt="logo" width={148} height={150} />
          <FormStyled onSubmit={handleSubmit(updateSubmit)}>
            {/* campos a llenar para el registro */}
            <CustomInput label="Nombre" name="name" control={control} fullWidth />

            <CustomInput label="Email" name="email" control={control} fullWidth />

            <CustomInput
              type={isShowPassword ? "text" : "password"}
              fullWidth
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
            
            <CustomButton buttonText="Actualizar" fullWidth type="submit" />
          </FormStyled>
        </GridForm>
      </GridContainer>
    </Container>
  );
};

export default Update;
