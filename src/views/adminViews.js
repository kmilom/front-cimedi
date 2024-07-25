import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/navBar';

const AdminView = () => {
    const [activeMenu, setActiveMenu] = React.useState('');

    return (
        <div className="min-h-screen bg-gray-100 ">
            <Navbar />
            <div className="container mx-auto flex flex-col lg:flex-row">
                {/* Barra Lateral */}
                <aside className="lg:w-1/4 bg-white shadow-md p-6 rounded-lg mb-4 lg:mb-0 lg:mr-4 ">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Menú Administrador</h2>
                    <ul className="space-y-4">
                        <li><Link to="/admin/users" className="block py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition">Listar Usuarios</Link></li>
                        <li><Link to="/admin/doctors" className="block py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition">Listar Médicos</Link></li>
                        <li><Link to="/admin/patients" className="block py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition">Listar Pacientes</Link></li>
                        <li
                            onMouseEnter={() => setActiveMenu('info')}
                            onMouseLeave={() => setActiveMenu('')}
                            className="relative"
                        >
                            {/* Botón Ver Información */}
                            <button
                                onClick={() => setActiveMenu(activeMenu === 'info' ? '' : 'info')}
                                className="block py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition w-full text-left"
                            >
                                Ver Información
                            </button>
                            {/* Menú desplegable de Ver Información en pantallas pequeñas */}
                            {activeMenu === 'info' && (
                                <div className="lg:hidden relative left-0 mt-2 bg-white shadow-md rounded-lg w-48 z-10">
                                    <Link to="/admin/info/personal" className="block py-2 px-4 hover:bg-blue-500 hover:text-white transition">Información Personal</Link>
                                    <Link to="/admin/info/user" className="block py-2 px-4 hover:bg-blue-500 hover:text-white transition">Información Usuario</Link>
                                </div>
                            )}
                            {/* Menú desplegable de Ver Información en pantallas grandes */}
                            {activeMenu === 'info' && (
                                <div className="lg:block hidden absolute left-full top-0 mt-2 bg-white shadow-md rounded-lg w-48 lg:w-56 z-10">
                                    <Link to="/admin/info/personal" className="block py-2 px-4 hover:bg-blue-500 hover:text-white transition">Información Personal</Link>
                                    <Link to="/admin/info/user" className="block py-2 px-4 hover:bg-blue-500 hover:text-white transition">Información Usuario</Link>
                                </div>
                            )}

                        </li>
                        <li
                            onMouseEnter={() => setActiveMenu('edit')}
                            onMouseLeave={() => setActiveMenu('')}
                            className="relative"
                        >
                            {/* Botón Editar Información */}
                            <button
                                onClick={() => setActiveMenu(activeMenu === 'edit' ? '' : 'edit')}
                                className="block py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition w-full text-left"
                            >
                                Editar Información
                            </button>
                            {/* Menú desplegable de Editar Información en pantallas pequeñas */}
                            {activeMenu === 'edit' && (
                                <div className="lg:hidden relative left-0 mt-2 bg-white shadow-md rounded-lg w-48 z-10">
                                    <Link to="/admin/edit-user/personal" className="block py-2 px-4 hover:bg-blue-500 hover:text-white transition">Editar Información Personal</Link>
                                    <Link to="/admin/edit-user" className="block py-2 px-4 hover:bg-blue-500 hover:text-white transition">Editar Información Usuario</Link>
                                </div>
                            )}
                            {/* Menú desplegable de Editar Información en pantallas grandes */}
                            {activeMenu === 'edit' && (
                                <div className="lg:block hidden absolute left-full top-0 mt-2 bg-white shadow-md rounded-lg w-48 lg:w-56 z-10">
                                    <Link to="/admin/edit-user/personal" className="block py-2 px-4 hover:bg-blue-500 hover:text-white transition">Editar Información Personal</Link>
                                    <Link to="/admin/edit-user" className="block py-2 px-4 hover:bg-blue-500 hover:text-white transition">Editar Información Usuario</Link>
                                </div>
                            )}
                        </li>
                        <li><Link to="/admin/enable-schedule" className="block py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition">Habilitar Horarios</Link></li>
                        <li><Link to="/admin/edit-schedule" className="block py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition">Editar Horarios</Link></li>
                        <li><Link to="/admin/edit-appointments" className="block py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition">Editar Citas</Link></li>
                        <li><Link to="/admin/register-user" className="block py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition">Registro de Usuario</Link></li>
                    </ul>
                </aside>
                {/* Contenido Principal */}
                <main className="lg:w-3/4 p-4 bg-white shadow-md rounded-lg ">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Bienvenido, Admin</h1>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminView;
