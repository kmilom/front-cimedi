import React from "react";
import logo from"../assets/logo.png"
import { Link } from "react-router-dom";

const Logo = () => {
    return(
        <div>
            <Link to="/" ><img src={logo} alt="Logo de la empresa" className="w-16 h-16 object-cover rounded-full shadow-lg" /></Link>
        </div>
    );
}

export default Logo;