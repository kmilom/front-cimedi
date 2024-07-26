import React from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ items, isOpen }) => {
    return (
        <>
            {/* Menú desplegable en pantallas pequeñas */}
            {isOpen && (
                <div className="lg:hidden relative left-0 mt-2 bg-white shadow-lg rounded-lg w-48 z-20 transform transition-transform duration-300 ease-out">
                    <div className="border border-gray-300 rounded-lg overflow-hidden">
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                to={item.to}
                                className="block py-2 px-4 hover:bg-blue-600 hover:text-white transition-colors duration-300 rounded-lg"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Menú desplegable en pantallas grandes */}
            {isOpen && (
                <div className="lg:block hidden absolute left-full top-0 mt-2 bg-white shadow-lg rounded-lg w-48 lg:w-56 z-20 transform transition-transform duration-300 ease-out">
                    <div className="border border-gray-300 rounded-lg overflow-hidden">
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                to={item.to}
                                className="block py-2 px-4 hover:bg-blue-600 hover:text-white transition-colors duration-300 rounded-lg"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default DropdownMenu;
