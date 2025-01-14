import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu toggle

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-10 shadow-md">
      {/* Main container */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="text-2xl font-bold">
          <a href="/">Shravani's Portfolio</a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" className="cursor-pointer hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="cursor-pointer hover:text-blue-400">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="cursor-pointer hover:text-blue-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="cursor-pointer hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)} > ☰ </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 text-center space-y-4 py-4">
          <li>
            <a
              href="#home"
              className="cursor-pointer hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="cursor-pointer hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="cursor-pointer hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="cursor-pointer hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
