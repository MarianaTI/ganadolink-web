// pages/[userId].js

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import UserRepo from '@/infraestructure/implementation/httpRequest/axios/UserRepo';
import UpdateUserUseCase from '@/application/usecases/userUseCase/UpdateUserCase';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import { useForm } from 'react-hook-form';
import User from '@/domain/entities/user';

const EditUserPage = () => {
  const router = useRouter();
  const { userId } = router.query;
  const [userData, setUserData] = useState(null);
  const { control, handleSubmit } = useForm();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRepo = new UserRepo();
        const user = await userRepo.getUserById(userId);
        setUserData(user);
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const onSubmit = async (data) => {
    try {
      const updatedUser = new User(userId, data.name, data.rol, data.email, data.password);
      const userRepo = new UserRepo();
      const updateUserUseCase = new UpdateUserUseCase(userRepo);
      await updateUserUseCase.run(updatedUser);
      router.push(`/users`);
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
    }
  };

  return (
    <div>
      <h1>Editar Usuario</h1>
      {userData ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomInput label="Nombre" name="name" control={control} defaultValue={userData.name} />
          <CustomInput label="Rol" name="rol" control={control} defaultValue={userData.rol} />
          <CustomInput label="Email" name="email" control={control} defaultValue={userData.email} />
          <CustomInput label="Contraseña" type="password" name="password" control={control} />
          <CustomButton type="submit" buttonText="Actualizar" />
        </form>
      ) : (
        <p>Cargando datos del usuario...</p>
      )}
    </div>
  );
};

export default EditUserPage;
