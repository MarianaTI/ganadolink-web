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

const SignUp = () => {
  const route = useRouter();
  const [isShowPassword, setShowPassword] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset, // Función para resetear los campos
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSignUpSubmit = async (data) => {
    try {
      // Validar que todos los campos estén llenos antes de hacer la solicitud
      if (!data.name || !data.email || !data.password) {
        // Muestra la alerta de error
        setShowAlertError(true);
        return;
      }

      const user = new User(null, data.name, data.rol, data.email, data.password);
      const userRepo = new UserRepo();
      const signUpUseCase = new SignUpUserUseCase(userRepo);
      const signUpResponse = await signUpUseCase.run(user);

      if (signUpResponse && signUpResponse.token) {
        const encryptedToken = CryptoJS.AES.encrypt(signUpResponse.token, 'cookie-encrypted').toString();
        await Cookies.set('authToken', encryptedToken, { expires: 1 / 24 });
        route.push("/allUser");

        // Muestra la alerta de registro exitoso
        setShowAlertSuccess(true);

        // Resetea los campos del formulario
        reset();
      }
    } catch (error) {
      console.error("Error durante el registro:", error);

      // Muestra la alerta en caso de error
      setShowAlertError(true);
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
            <CustomInput label="Nombre" name="name" control={control} fullWidth/>
            {errors.name && <p>Este campo es requerido</p>}

            <CustomInput label="Email" name="email" control={control} fullWidth/>
            {errors.email && <p>Este campo es requerido</p>}

            <CustomInput type={isShowPassword ? "text" : "password"} fullWidth label="Contraseña" name="password" control={control} />
            {errors.password && <p>Este campo es requerido</p>}

            {/* Botón para alternar la visibilidad de la contraseña */}
            <EyeIcon icon={isShowPassword ? faEyeSlash : faEye} onClick={togglePasswordVisibility} />

            {/* Botón para registrar */}
            <CustomButton buttonText="Registrar" fullWidth type="submit" />
          </FormStyled>
        </GridForm>
      </GridContainer>
      {showAlertSuccess && (
        <CustomAlert
          imageSrc="/path-to-your-image/success.png" // Proporciona la ruta correcta a tu imagen de éxito
          title="Registro Exitoso"
          text="Tu cuenta ha sido registrada exitosamente. ¡Bienvenido!"
          onClose={() => setShowAlertSuccess(false)} // Cierra la alerta al hacer clic en "aceptar"
        />
      )}

      {/* Muestra la alerta solo si showAlert es true */}
      {showAlertError && (
        <CustomAlert
          imageSrc="/path-to-your-image/error.png" // Proporciona la ruta correcta a tu imagen de error
          title="Error"
          text="Hubo un problema durante el registro. Inténtalo de nuevo."
          onClose={() => setShowAlertError(false)} // Cierra la alerta al hacer clic en "aceptar"
        />
      )}
    </Container>
  );
};

export default SignUp;