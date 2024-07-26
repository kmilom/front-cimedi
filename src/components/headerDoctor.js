import React from "react";
import Logo from "./logo";

const HeaderDoctor = ({person}) => {
    return(
        <div>
            <div className="text-white text-2xl">
                <h1>Bienvenido, {person.name} {person.lastName} </h1>
            </div>
        </div>
    );
}

export default HeaderDoctor;