import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/loginForms';
import authService from '../services/authenticationService';

/* aca se renderiza el componente usando un componente funcional del tipo funcion flecha que permite que no se 
sobreescriba o exista una reasignacion*/
const LoginView = () => {
  const navigate = useNavigate();
  //esta funcion hace uso de un servicio para validar el inicio de seccion 
  const handleLogin = async (credentials) => {
    try {
      const response = await authService.login(credentials);
      console.log('Inicio de sesión exitoso:', response);
      navigate('/profile');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión: ' + error.message);
    }
  };

  return (
      //contenedor del formulario
      <div className="min-h-screen flex items-center justify-center bg-gray-200 "> 
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginView;
