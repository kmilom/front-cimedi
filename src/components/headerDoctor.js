import React from "react";
import logoUser from '../assets/logouser.png'

const HeaderDoctor = ({person}) => {
    return(
        <div className="grid grid-cols-5">
            <div className="text-white text-2xl col-span-2 flex items-center">
                <h1>Bienvenido, {person.name} {person.lastName} </h1>
            </div>
            <div className="col-start-5 flex justify-end">
                <img src={logoUser} alt="Logo de usuario" className="w-16 h-16 object-cover rounded-full"/>
            </div>
        </div>
    );
}

export default HeaderDoctor;