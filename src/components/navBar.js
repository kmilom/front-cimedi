import React, { useState } from 'react';
import logo from '../assets/logo.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-blue-400 to-blue-600 py-2 px-4 md:px-8 shadow-lg mb-2 ">
            <div className="container mx-auto flex justify-between items-center ">
                <div className="text-white text-2xl font-bold flex items-center ">
                    <img src={logo} alt="Logo De La Empresa" className="inline-block  w-15 h-16" />
                </div>
                <div className='text-3xl font-extrabold font-serif text-white'> CIMEDI </div>
                <div className="hidden md:flex space-x-4">
                    <a href="/" className="text-white">Inicio</a>
                    <a href="/about" className="text-white">Acerca de</a>
                    <a href="/contact" className="text-white">Contacto</a>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {/* Menu desplegable */}
            {isMenuOpen && (
                <div className="md:hidden bg-blue-500 flex flex-col items-start p-4 space-y-2">
                    <a href="/" className="text-white">Inicio</a>
                    <a href="/about" className="text-white">Acerca de</a>
                    <a href="/contact" className="text-white">Contacto</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
