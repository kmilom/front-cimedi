import React, { useState } from 'react';
import Navbar from '../components/navBar';
import Footer from '../components/footer';
import Label from '../components/label';
import Input from '../components/input';

const RegisterView = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        birthday: '',
        email: '',
        phone: '',
        idDocumentType: '',
        document: '',
        idGender: '',
        idDepartment: '',
        idCity: '',
        idEps: '',
        userName: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        // Aquí iría el código para enviar los datos al backend
    };

    return (
        <div className="flex justify-center flex-col min-h-screen bg-gray-100">
            <Navbar />
            <main className="flex-grow">
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-4 p-4 bg-white shadow-md rounded-md border border-gray-700">
                    <h2 className="text-2xl font-bold mb-4 text-center">REGISTRO</h2>
                    <div className="mb-4">
                        <Label htmlFor="name">Nombre</Label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="lastName">Apellido</Label>
                        <Input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="birthday">Fecha Nacimiento</Label>
                        <Input
                            type="date"
                            id="birthday"
                            name="birthday"
                            value={formData.birthday}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="phone">Telefono</Label>
                        <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="idDocumentType">Tipo Documento</Label>
                        <select
                            id="idDocumentType"
                            name="idDocumentType"
                            value={formData.idDocumentType}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border border-gray-400 rounded-xl w-full p-1 text-gray-900 leading-tight"
                        >
                            <option value="">Select</option>
                            <option value="CC">Cedula De Ciudadania</option>
                            <option value="TI">Tarjeta De Identidad</option>
                            <option value="CE">Documento Extranjeria</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="document">Document Number</Label>
                        <Input
                            type="text"
                            id="document"
                            name="document"
                            value={formData.document}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="idGender">Genero</Label>
                        <select
                            id="idGender"
                            name="idGender"
                            value={formData.idGender}
                            onChange={handleChange}
                            required
                            className="shadow appearance-none border border-gray-400 rounded-xl w-full p-1 text-gray-900 leading-tight"
                        >
                            <option value="">Select</option>
                            <option value="Male">Masculino</option>
                            <option value="Female">Femenino</option>
                            <option value="Other">Otro</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="idDepartment">Departamento</Label>
                        <Input
                            type="text"
                            id="idDepartment"
                            name="idDepartment"
                            value={formData.idDepartment}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="idCity">Ciudad</Label>
                        <Input
                            type="text"
                            id="idCity"
                            name="idCity"
                            value={formData.idCity}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="idEps">EPS</Label>
                        <Input
                            type="text"
                            id="idEps"
                            name="idEps"
                            value={formData.idEps}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="userName">Nombre De Usuario</Label>
                        <Input
                            type="text"
                            id="userName"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="password">Contraseña</Label>
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='flex justify-center mt-4'>
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

export default RegisterView;
