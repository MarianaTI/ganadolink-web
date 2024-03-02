import GetAllUserUseCase from "@/application/usecases/userUseCase/GetAllUserCase";
import UserRepo from "@/infraestructure/implementation/httpRequest/axios/UserRepo";
import React, { useEffect, useState } from "react";

const AllUser = () => {
  const [users, setUser] = useState([]);

  const fetchUser = async () => {
    const userRepo = new UserRepo();
    const getAllUserUseCase = new GetAllUserUseCase(userRepo);
    try {
      const userData = await getAllUserUseCase.run();
      console.log(userData);
      setUser(userData.users); // Ahora userData es un objeto, no un array
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
    <h1>Todos los Usuarios</h1>
    {users.length > 0 ? (
      users.map((user, index) => (
        <div key={index}>
          <p>Nombre: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Rol: {user.rol}</p>
        </div>
      ))
    ) : (
      <p>Cargando usuarios...</p>
    )}
  </div>
  );
};

export default AllUser;
 