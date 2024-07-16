import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 p-4 text-white mt-2 ">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <h3 className="font-bold">Contacto</h3>
                    <p>Tel: 123-456-7890</p>
                    <p>Email: contacto@miplataforma.com</p>
                </div>
                <div>
                    <h3 className="font-bold">Síguenos</h3>
                    <p>Facebook | Twitter | Instagram</p>
                </div>
                <div>
                    <h3 className="font-bold">Enlaces Rápidos</h3>
                    <p><a href="/privacy" className="text-white">Política de Privacidad</a></p>
                    <p><a href="/terms" className="text-white">Términos y Condiciones</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;