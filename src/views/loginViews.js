import React from 'react';
import LoginForm from '../components/loginForms';
import authService from '../services/authenticationService';
import Footer from '../components/footer';
import Navbar from '../components/navBar';

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
      {/* Contenedor del formulario */}
      <div className="flex-grow flex items-center justify-center">
        <LoginForm onSubmit={handleLogin} />
      </div>
      {/* Footer */}
      <Footer className="bg-blue-500 text-white p-4" />
    </div>
  );
};

export default LoginView;
