import React, {useState} from 'react';
import LoginForm from '../components/loginForms';
import authService from '../services/authenticationService';
import Footer from '../components/footer';
import Navbar from '../components/navBar';
import Modal from '../components/modalLogin';
import image from '../assets/imagelanding.jpg'
import Header from '../components/header';

/* aca se renderiza el componente usando un componente funcional del tipo funcion flecha que permite que no se 
sobreescriba o exista una reasignacion*/
const LoginView = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
      <Header>
        <Navbar />
      </Header>
      {/* Contenedor secundario */}
      <div className="flex-grow flex flex-col md:flex-row items-stretch bg-yellow-50">
        <div className="w-full md:w-1/2 border border-black">
          <img src={image} alt="Descripción de la imagen" className="h-full w-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-4 border border-black flex flex-col justify-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <div className="flex items-center justify-center">
            <button
              className="px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={openModal}
            >
              Iniciar Sesi&oacute;n
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <LoginForm onSubmit={handleLogin} />
            </Modal>
          </div>          
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LoginView;
