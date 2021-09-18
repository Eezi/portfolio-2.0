import React from 'react'

const Footer = () => {

    return (
        <div className="hidden md:block text-primary text-center fixed bottom-0 inset-x-0 bg-gray-900 text-sm font-mono p-5">
           {'</>'} with passion by Tomi Salo © {new Date().getFullYear()}
        </div>
    );
}

export default Footer;