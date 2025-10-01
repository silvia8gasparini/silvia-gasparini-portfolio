const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#f6f3ee] to-white shadow-none text-black text-2xl border-t border-gray-200 font-explora">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        
        <p className="mb-2 md:mb-0">
          © {new Date().getFullYear()} Silvia Gasparini — Tutti i diritti riservati
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
