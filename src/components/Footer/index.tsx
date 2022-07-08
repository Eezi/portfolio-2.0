import React from 'react';

const Footer = () => {
  return (
    <div className="hidden md:block dark:text-primary text-center fixed bottom-0 inset-x-0 text-xs font-mono p-5">
      {'</>'} with passion by Tomi Salo © {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
