import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-500">My Portfolio</div>
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-blue-400">Home</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <nav>
            <a href="#home" className="block px-4 py-2">Home</a>
            <a href="#about" className="block px-4 py-2">About</a>
            <a href="#projects" className="block px-4 py-2">Projects</a>
            <a href="#skills" className="block px-4 py-2">Skills</a>
            <a href="#contact" className="block px-4 py-2">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
