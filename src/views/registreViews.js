import React, { useState } from 'react';
import Navbar from '../components/navBar';
import Footer from '../components/footer';
import Label from '../components/label';
import Input from '../components/input';


const RegistreView = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        correo: '',
        celular: '',
        tipoDocumento: '',
        numeroDocumento: '',
        genero: '',
        departamento: '',
        ciudad: '',
        eps: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

   const handleSubmit = (e) => {
        e.preventDefault();      
    };

    return (
        <div className="flex justify-center flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-4 p-4 bg-white shadow-md rounded-md border border-gray-700">
                    <h2 className="text-2xl font-bold mb-4 text-center">REGISTRO DE USUARIO</h2>
                    <div className="mb-4">
                        <Label htmlFor="nombre">Nombre</Label>
                        <Input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="apellido">Apellido</Label>
                        <Input
                            type="text"
                            id="apellido"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="fechaNacimiento">Fecha de Nacimiento</Label>
                        <Input
                            type="date"
                            id="fechaNacimiento"
                            name="fechaNacimiento"
                            value={formData.fechaNacimiento}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="correo">Correo Electrónico</Label>
                        <Input
                            type="email"
                            id="correo"
                            name="correo"
                            value={formData.correo}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="celular">Celular</Label>
                        <Input
                            type="tel"
                            id="celular"
                            name="celular"
                            value={formData.celular}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="tipoDocumento">Tipo de Documento</Label>
                        <select
                            id="tipoDocumento"
                            name="tipoDocumento"
                            value={formData.tipoDocumento}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border border-gray-400 rounded-xl w-full p-1 text-gray-900 leading-tight"
                        >
                            <option value="">Seleccione</option>
                            <option value="CC">Cédula de Ciudadanía</option>
                            <option value="TI">Tarjeta de Identidad</option>
                            <option value="CE">Cédula de Extranjería</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="numeroDocumento">Número de Documento</Label>
                        <Input
                            type="text"
                            id="numeroDocumento"
                            name="numeroDocumento"
                            value={formData.numeroDocumento}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="genero">Género</Label>
                        <select
                            id="genero"
                            name="genero"
                            value={formData.genero}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border border-gray-400 rounded-xl w-full p-1 text-gray-900 leading-tight"
                        >
                            <option value="">Seleccione</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="departamento">Departamento</Label>
                        <Input
                            type="text"
                            id="departamento"
                            name="departamento"
                            value={formData.departamento}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="ciudad">Ciudad</Label>
                        <Input
                            type="text"
                            id="ciudad"
                            name="ciudad"
                            value={formData.ciudad}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="eps">EPS</Label>
                        <Input
                            type="text"
                            id="eps"
                            name="eps"
                            value={formData.eps}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full sm:w-auto"
                        >
                            Registrar
                        </button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default RegistreView;
