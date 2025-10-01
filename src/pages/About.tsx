import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TechSections from "../components/TechSections";

const About = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 6200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-[url('/pictures/wallpaper.jpg')] bg-cover flex flex-col items-center justify-center px-8 pt-15 pb-4 text-gray-800 overflow-hidden">

     <AnimatePresence mode="wait">
      {!showContent ? (
    <IntroSection key="intro" />
      ) : (
    <> <ContentSection key="content" />
    <TechSections key="techsections" />
    </>
   
    )}
    </AnimatePresence>

    </section>

  );
};

const IntroSection = () => {
  return (
    <motion.div
      className="flex flex-col items-center gap-6 pt-5 -mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >

 <h1 className="text-4xl sm:text-5xl md:text-5xl text-center text-black font-explora font-bold" style={{ textShadow: '0 0 6px rgba(202, 202, 202, 0.9)' }}>
        Piacere di conoscerti! Sono Silvia!
      </h1>

     <motion.span
  className="flex items-center justify-center font-explora"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.8 }}
  transition={{ duration: 1 }}
>
  <span className="text-xl md:text-7xl font-bold text-black text-center">
    Full-Stack Developer
  </span>
</motion.span>

      <div className="flex gap-4 text-4xl sm:text-5xl md:text-5xl text-red-800 font-explora font-bold"style={{ textShadow: '0 0 6px rgba(208, 172, 172, 0.9)' }}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Eclettica
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          Creativa
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
        >
          Determinata
        </motion.span>
      </div>
    </motion.div>
  );
};

const ContentSection = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-start justify-center gap-12 w-full max-w-6xl pt-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex-shrink-0 w-64 h-64 md:w-67 md:h-67 rounded-full overflow-hidden shadow-2xl mx-auto md:mx-0 md:self-start"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src="/pictures/silvia.jpg" alt="Silvia" className="w-full h-full object-cover" />
      </motion.div>
      <div className="flex flex-col gap-16 w-full">

        <motion.div
          className="flex flex-col md:flex-row items-center gap-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-explora font-bold text-red-800 md:w-1/3 text-center md:text-center md:pl-8"style={{ textShadow: '0 0 6px rgba(208, 172, 172, 0.9)' }}>
            Passato
          </h2>
          <p className="text-lg font-ysabeau leading-relaxed md:w-2/3 text-center md:text-left md:pl-8">
          Sono <strong>laureata in Lettere Moderne</strong> all'Università di Padova, con un breve epilogo a Ca' Foscari.  
          <br className="hidden md:block" />
          Ho lavorato tra <strong>archivi, biblioteche e uffici</strong>. Un mondo fatto di ordine e memoria, che mi ha insegnato <strong>rigore, pazienza e attenzione al dettaglio</strong>, ma nel tempo ho sentito il bisogno di rimettermi in discussione.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row-reverse items-center gap-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-5xl font-explora font-bold text-red-800 md:w-1/3 text-center md:text-center md:pl-8"style={{ textShadow: '0 0 6px rgba(208, 172, 172, 0.9)' }}>
            Presente
          </h2>
          <p className="text-lg font-ysabeau leading-relaxed md:w-2/3 text-center md:text-left md:pl-8">
          Ho da poco concluso un <strong>master Full-Stack Developer</strong> presso <strong>EPICODE</strong>,  
          ma sto continuando il mio percorso per <strong>specializzarmi nel front-end</strong>.  
          <br className="hidden md:block" />
          Voglio consolidare le mie competenze tecniche e progettuali in contesti che abbiano un’anima: <strong>ambienti etici, inclusivi, orientati all’innovazione consapevole</strong>.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <h2 className="text-5xl font-explora font-bold text-red-800 md:w-1/3 text-center md:text-center md:pl-8 pb-15"style={{ textShadow: '0 0 6px rgba(208, 172, 172, 0.9)' }}>
            Futuro
          </h2>
          <p className="text-lg font-ysabeau leading-relaxed md:w-2/3 text-center md:text-left">
          Il mio obiettivo è focalizzato sul <strong>design UX/UI</strong>, come strumento per <strong>mettere le persone al centro</strong>.
          <br className="hidden md:block" />
          Coniugo il mio background umanistico con le competenze tecniche per progettare <strong>interfacce accessibili, inclusive e significative</strong>, capaci di dialogare con chi le usa.
          <br className="hidden md:block" />
          Sogno un web meno standardizzato e più empatico, dove <strong>innovazione e creatività</strong> abbiano lo spazio per esprimersi fuori dagli schemi.  
          Voglio crescere come UX/UI Designer per rendere il digitale <strong>un posto più umano</strong>.
          </p>
        </motion.div>
           
      </div>
      
    </motion.div>
    
  );
};

export default About;
