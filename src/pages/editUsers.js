import React, { useState, useEffect } from "react"; // Importar el hook useEffect y useState
import UserRepo from "@/infraestructure/implementation/httpRequest/axios/UserRepo"; // Importar el componente UserRepo
import { useRouter } from "next/router";
import {
  Container,
  EyeIcon, 
  FormStyled,
  GridContainer,
  GridForm,
} from "@/styles/Register.style";
import Image from "next/image";
import CustomInput from "@/components/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "@/components/CustomButton";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import User from "@/domain/entities/user";
import UpdateUserUseCase from "@/application/usecases/userUseCase/UpdateUserCase";
import withAuth from "@/components/Authenticated";

const Update = () => {
  const router = useRouter();
  const { userId } = router.query; // Obtener el ID del usuario de los parámetros de la URL

  const [userData, setUserData] = useState(null); // Estado para almacenar los datos del usuario

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Hacer una solicitud para obtener los datos del usuario por su ID
        const userRepo = new UserRepo();
        const user = await userRepo.getUserById(userId);
        setUserData(user);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

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

export default withAuth(Update);
