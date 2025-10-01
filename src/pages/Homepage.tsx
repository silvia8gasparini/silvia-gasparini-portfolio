import { Link } from "react-router-dom";
import { useState } from "react";
import FallingLeaves from "../components/FallingLeaves";
import WelcomeWords from "../components/WelcomeWords";
import FoxIntro from "../components/FoxIntro";

const Homepage = () => {
  const [shadow, setShadow] = useState('0 0 8px rgba(158, 158, 158, 0.9)');
  return (
    <section className="falling-section min-h-screen px-6 py-16 bg-gray-50 text-gray-800">
       <FallingLeaves />
       <WelcomeWords />
      <FoxIntro />
     <div className="absolute bottom-[28%] sm:bottom-[23%] md:bottom-[33%] lg:bottom-[25%] left-[51%] left-1/2 transform -translate-x-1/2 z-50">
        <Link
          to="/about"
          className="px-4 py-3 sm:px-7 py-3 md:px-5 py-3 bg-gradient-to-b from-white to-[#fdb159] text-2xl sm:text-4xl font-explora rounded-full border border-black shadow-lg hover:from-white hover:to-[#dc4614] hover:text-white hover:border border-white transition duration-300"
          style={{ textShadow: shadow }}
      onMouseEnter={() => setShadow('0 0 10px rgba(255,255,255,0.9)')}
      onMouseLeave={() => setShadow('0 0 6px rgba(191, 191, 191, 0.9)')}
        >
          Scopri chi sono!
        </Link>
      </div>
  
      
    </section>
  );
};

export default Homepage;