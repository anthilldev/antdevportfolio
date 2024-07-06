import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white flex justify-between p-4">
      <div className="flex items-center">
        
        <span className="text-sm">&copy; {currentYear} - antdevportfolio, All Rights Reserved</span>

      </div>

      <div className="flex gap-2">
      <a href="https://www.linkedin.com/in/anthony-freeman-jr-76687326a/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-xl text-white" />
      </a>
      <a href="https://x.com/anthillvibes" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-xl text-blue-500" />
      </a>
      </div>
        
    </footer>
  );
};

export default Footer;
