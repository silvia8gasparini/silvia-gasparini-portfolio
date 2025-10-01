import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="bg-gradient-to-t from-[#f6f3ee] to-white shadow-none sticky top-0 z-50 font-explora border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
        <Link to="/" className="text-2xl sm:text-4xl md:text-4xl text-black">Silvia Gasparini - Full-Stack Developer</Link>

        <div className="hidden md:flex space-x-8 text-4xl">
          <Link to="/" className="text-black hover:font-bold">Home</Link>
          <Link to="/About" className="text-black hover:font-bold">About</Link>
          <Link to="/Projects" className="text-black hover:font-bold">Projects</Link>
          <Link to="/Contacts" className="text-black hover:font-bold">Contacts</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-black focus:outline-none font-explora">
            Menu
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 px-4 pb-4 text-3xl">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-black hover:font-bold">Home</Link>
          <Link to="/About" onClick={() => setIsOpen(false)} className="text-black hover:font-bold">About</Link>
          <Link to="/Projects" onClick={() => setIsOpen(false)} className="text-black hover:font-bold">Projects</Link>
          <Link to="/Contacts" onClick={() => setIsOpen(false)} className="text-black hover:font-bold">Contacts</Link>
        </div>
      )}


    </nav>
  );
};

export default Navbar;
