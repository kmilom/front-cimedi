import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navBar';
import MenuLink from '../components/menuLink';
import DropdownMenu from '../components/dropDownMenu';

const AdminView = () => {
    const [activeMenu, setActiveMenu] = React.useState('');

    const handleMouseEnter = (menu) => {
        setActiveMenu(menu);
    };

    const handleMouseLeave = () => {
        setActiveMenu('');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="container mx-auto flex flex-col lg:flex-row">
                {/* Barra Lateral */}
                <aside className="lg:w-1/4 bg-white shadow-md p-6 rounded-lg mb-4 border-2 border-gray-300 lg:mb-0 lg:mr-4">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Menú Administrador</h2>
                    <ul className="space-y-4">
                        <li><MenuLink to="/admin/users">Listar Usuarios</MenuLink></li>
                        <li><MenuLink to="/admin/doctors">Listar Médicos</MenuLink></li>
                        <li><MenuLink to="/admin/patients">Listar Pacientes</MenuLink></li>
                        <li
                            onMouseEnter={() => handleMouseEnter('info')}
                            onMouseLeave={handleMouseLeave}
                            className="relative"
                        >
                            <button
                                className="block py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition w-full text-left"
                            >
                                Ver Información
                            </button>
                            <DropdownMenu
                                isOpen={activeMenu === 'info'}
                                items={[
                                    { to: '/admin/info/personal', label: 'Información Personal' },
                                    { to: '/admin/info/user', label: 'Información Usuario' }
                                ]}
                            />
                        </li>
                        <li
                            onMouseEnter={() => handleMouseEnter('edit')}
                            onMouseLeave={handleMouseLeave}
                            className="relative"
                        >
                            <button
                                className="block py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition w-full text-left"
                            >
                                Editar Información
                            </button>
                            <DropdownMenu
                                isOpen={activeMenu === 'edit'}
                                items={[
                                    { to: '/admin/edit-user/personal', label: 'Editar Información Personal' },
                                    { to: '/admin/edit-user', label: 'Editar Información Usuario' }
                                ]}
                            />
                        </li>
                        <li><MenuLink to="/admin/enable-schedule">Habilitar Horarios</MenuLink></li>
                        <li><MenuLink to="/admin/edit-schedule">Editar Horarios</MenuLink></li>
                        <li><MenuLink to="/admin/edit-appointments">Editar Citas</MenuLink></li>
                        <li><MenuLink to="/admin/register-user">Registro de Usuario</MenuLink></li>
                    </ul>
                </aside>
                {/* Contenido Principal */}
                <main className="lg:w-3/4 p-4 bg-white shadow-md rounded-lg border-2 border-gray-300">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Bienvenido, Admin</h1>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminView;
