import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  return (
<nav className=" bg-white shadow-none py-2sticky top-0 z-50 font-cinzel bg-#ffffff border-b border-gray-200">
        <div className="w-full flex h-16 items-center px-6">

        <Link to="/" className="flex items-center space-x-3">
        <img
        src="/icons/favicon_sg.png"
        alt="logo"
        className="h-9 w-auto"/>        
        <span className="hidden lg:block lg:text-5xl-custom text-black" style={{ textShadow: "0 0 6px rgba(202, 202, 202, 0.9)" }}>Silvia Gasparini - Web Developer</span></Link>

        <div className="hidden lg:flex items-center gap-6 justify-end flex-1">

          <div className="flex space-x-4 text-5xl-ricustom">
          <Link to="/" className="text-black hover:font-bold">Home</Link>
          <Link to="/About" className="text-black hover:font-bold">About</Link>
          <Link to="/Projects" className="text-black hover:font-bold">Projects</Link>
           <Link to="/Contacts" className="text-black hover:font-bold">Contacts</Link>
          </div>

          <div className="flex gap-2 text-5xl-ricustom">{["it", "en", "jp"].map((lng) => (
          <button key={lng} onClick={() => i18n.changeLanguage(lng)} 
          className={`min-w-[33px] px-2 py-1 text-sm rounded-full border transition-all ${i18n.language === lng
          ? "bg-black text-white border-black"
          : "bg-trasparent text-black border-black hover:bg-black hover:text-white"
          }`}
          >
          {lng.toUpperCase()}
          </button>
          ))}
        </div>
        </div>

        <div className="lg:hidden ml-auto">
          <button onClick={() => setIsOpen(!isOpen)} className="text-5xl-custom text-black justify-end focus:outline-none">
            Menu
          </button>
        </div>
      </div>
       

      {isOpen && (
        <div className="lg:hidden flex flex-col space-y-4 px-4 pb-4 text-5xl-ricustom">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-black hover:font-bold">Home</Link>
          <Link to="/About" onClick={() => setIsOpen(false)} className="text-black hover:font-bold">About</Link>
          <Link to="/Projects" onClick={() => setIsOpen(false)} className="text-black hover:font-bold">Projects</Link>
          <Link to="/Contacts" onClick={() => setIsOpen(false)} className="text-black hover:font-bold">Contacts</Link>
          
          <div className="flex gap-2 mt-4 justify-center">{["it", "en", "jp"].map((lng) => (
            <button
              key={lng}
              onClick={() => {i18n.changeLanguage(lng);
              setIsOpen(false); 
              }}
              className={`min-w-[33px] px-2 py-1 text-sm rounded-full border transition-all  ${
                i18n.language === lng
                ? "bg-black text-white border-black"
                : "bg-trasparent text-black border-black hover:bg-black hover:text-white"
                }`}
              >
              {lng.toUpperCase()}
            </button>
            ))}
          </div>
        </div>  
      )}
    </nav>
  );
};

export default Navbar;
