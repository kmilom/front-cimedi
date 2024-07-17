import React from 'react';

const Header = ({ userName }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <div className="flex items-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/387/693/large_2x/user-profile-icon-free-vector.jpg" // Reemplaza esta ruta con la URL real de la imagen
          alt="Foto de perfil"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div className="text-xl font-bold">
          {userName}
        </div>
      </div>
      <div className="space-x-4">
        <button className="hover:underline">Editar Información Personal</button>
        <button className="hover:underline">Cambiar Contraseña</button>
        <button className="hover:underline">Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default Header;
