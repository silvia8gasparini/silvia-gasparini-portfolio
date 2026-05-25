import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TechSections from "../components/TechSections";
import { Trans, useTranslation } from "react-i18next";

const About = () => {
  const [showContent, setShowContent] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 6200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-radial-custom flex flex-col items-center justify-center px-8 pt-15 pb-4 text-gray-800 overflow-hidden">

    <AnimatePresence mode="wait">
  {!showContent ? (
    <IntroSection key={`intro-${i18n.language}`} />
  ) : (
    <>
      <ContentSection key={`content-${i18n.language}`} />
      <TechSections key={`tech-${i18n.language}`} />
    </>
  )}
</AnimatePresence>

    </section>

  );
};

const IntroSection = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="flex flex-col items-center gap-6 pt-5 -mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >

 <h1 className="text-5xl-tomtom sm:text-5xl md:text-7xl text-center text-black font-tangerine" style={{ textShadow: '0 0 6px rgba(252, 206, 230, 0.8)' }}>
        {t("about.intro.greeting")}
      </h1>

     <motion.span
  className="flex items-center justify-center font-cinzel"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.8 }}
  transition={{ duration: 1 }}
>
  <span className="text-5xl-tomcus md:text-7xl font-bold text-black text-center">
    {t("about.intro.role")}
  </span>
</motion.span>

      <div className="flex gap-4 text-5xl-tomtom md:text-7xl text-black font-tangerine" style={{ textShadow: '0 0 6px rgba(252, 206, 230, 0.8)' }}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
        {t("about.intro.words.0")}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
        {t("about.intro.words.1")}
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
        >
        {t("about.intro.words.2")}
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

       {/* Passato */}
        <motion.div
         className="flex flex-col md:flex-row items-center gap-6"
         initial={{ opacity: 0, x: -100 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 1 }}
       >
        <h2 className="text-5xl font-tangerine font-bold text-black md:w-1/3 text-center md:text-center md:pl-8"
            style={{ textShadow: "0 0 6px rgba(252, 206, 230, 0.8)" }}
        >
          <Trans i18nKey="about.past.title" />
        </h2>
        <p className="text-lg font-ysabeau leading-relaxed md:w-2/3 text-center md:text-left md:pl-8">
          <Trans i18nKey="about.past.text"
            components={{
            1: <strong />,
            2: <br className="hidden md:block" />,
            }}
          />
        </p>
        </motion.div>
       
        {/* Presente */}
         <motion.div className="flex flex-col md:flex-row-reverse items-center gap-8"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          >
          <h2 className="text-5xl font-tangerine font-bold text-black md:w-1/3 text-center md:text-center md:pl-8"
              style={{ textShadow: "0 0 6px rgba(252, 206, 230, 0.8)" }}
          >
          <Trans i18nKey="about.present.title" />
          </h2>
          <p className="text-lg font-ysabeau leading-relaxed md:w-2/3 text-center md:text-left md:pl-8">
          <Trans i18nKey="about.present.text"
            components={{
            1: <strong />,
            2: <strong />,
            3: <strong />,
            4: <br className="hidden md:block" />,
            5: <strong />,
            }}
            />
          </p>
          </motion.div>
       
        {/* Futuro */}
          <motion.div className="flex flex-col md:flex-row items-center gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
          >
          <h2 className="text-5xl font-tangerine font-bold text-black md:w-1/3 text-center md:text-center md:pl-8 pb-15"
              style={{ textShadow: "0 0 6px rgba(252, 206, 230, 0.8)" }}
          >
          <Trans i18nKey="about.future.title" />
          </h2>
          <p className="text-lg font-ysabeau leading-relaxed md:w-2/3 text-center md:text-left">
          <Trans i18nKey="about.future.text"
            components={{
            1: <strong />,
            2: <strong />,
            3: <br className="hidden md:block" />,
            4: <strong />,
            5: <strong />,
            6: <strong />,
            }}
            />
            </p>
          </motion.div> 
      </div>
      
    </motion.div>
    
  );
};

export default About;
