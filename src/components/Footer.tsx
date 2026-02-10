const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#fffffe] to-white shadow-none text-black text-1xl border-t border-gray-200 font-cinzel">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        
        <p className="mb-2 md:mb-0">
          © {new Date().getFullYear()} Silvia Gasparini — All rights reserved
        </p>

        <div className="flex space-x-4">
          <a href="https://github.com/silvia8gasparini" target="_blank" rel="noopener noreferrer" className="hover:font-bold transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/silviagasparini8/" target="_blank" rel="noopener noreferrer" className="hover:font-bold transition">
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
