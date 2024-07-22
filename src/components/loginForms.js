import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//onsubmit es un prop que permite la comunicacion entre nuestro componente y nuestra vista
const LoginForm = ({ onSubmit }) => {
//inicializacion de los datos para nuestro formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  //función que recopila los datos ingresados en el formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email, password }); //aca se llama onsubmit que es lo que loginview esta esperando para que la funcion handlelogin haga sus instruciones
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-100">
      
      <div className="mb-4">
        <label className="block text-gray-700">Correo Electrónico</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)} //captura del dato ingresado
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)} //captura del dato ingresado
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
        Iniciar Sesión
      </button>
      <div className='flex justify-center hover:text-blue-500'><Link to="/registro">Reg&iacute;strate aqu&iacute;</Link></div>
    </form>
  );
};

export default LoginForm;
