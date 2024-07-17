import React from 'react';
import LoginForm from '../components/loginForms';
import authService from '../services/authenticationService';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import image from '../assets/imagelanding.jpg'

/* aca se renderiza el componente usando un componente funcional del tipo funcion flecha que permite que no se 
sobreescriba o exista una reasignacion*/
const LoginView = () => {
  //esta funcion hace uso de un servicio para validar el inicio de seccion 
  const handleLogin = async (credentials) => {
    try {
      const response = await authService.login(credentials);
      console.log('Inicio de sesión exitoso:', response);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión: ' + error.message);
    }
  };

  return (
    //contenedor principal
    <div className="min-h-screen flex flex-col bg-gray-200">
      <Navbar />
      {/* Contenedor secundario */}
      <div className="flex-grow flex flex-col md:flex-row items-stretch bg-yellow-50">
        {/*<div className="w-full md:w-1/2 p-4 border border-black flex flex-col justify-center">
          <h2>columna 1</h2>
        </div>*/}
        <div className="w-full md:w-1/2 border border-black">
          <img src={image} alt="Descripción de la imagen" className="h-full w-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-4 border border-black flex flex-col justify-center">
          <LoginForm onSubmit={handleLogin} />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LoginView;
