import React from "react";

const Header = ({children}) => {
    return(
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-2 px-4 md:px-8 shadow-lg mb-2 ">
            {children}
        </div>
    );
}

export default Header;