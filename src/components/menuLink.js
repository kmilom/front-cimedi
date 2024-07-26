import React from 'react';
import { Link } from 'react-router-dom';

const MenuLink = ({ to, children }) => (
    <Link
        to={to}
        className="block py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition"
    >
        {children}
    </Link>
);

export default MenuLink;
