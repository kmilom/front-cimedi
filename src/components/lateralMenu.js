import React from "react";

const LateralMenu = ({children}) => {
    return(
        <div className="bg-white p-4 rounded ml-6 shadow-lg min-h-screen">
            {children}
        </div>
    );
}

export default LateralMenu;