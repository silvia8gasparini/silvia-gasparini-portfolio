import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: "capstone",
    title: "しおりと色の息吹 - Il respiro dei colori tra le pagine",
    image: "/projects/capstone.png",
    github: "https://github.com/silvia8gasparini/Shiori-to-iro-no-ibuki_Frontend_Capstone_Project",
    live: "https://shiori-to-iro-no-ibuki-frontend-cap.vercel.app/",
  },
  {
    id: "genkitenki",
    title: "元気天気 - Genki Tenki Weather App",
    image: "/projects/genkitenki.png",
    github: "https://github.com/silvia8gasparini/Genki-Tenki-Weather",
    live: "https://genki-tenki-weather.vercel.app/",
  },
  {
    id: "applemusic",
    title: "Apple Music Clone",
    image: "/projects/applemusic.png",
    github: "https://github.com/silvia8gasparini/Apple-Music-Clone",
    live: "https://apple-music-clone-lime.vercel.app/",
  },
];

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen px-6 py-16 bg-[url('/pictures/wallpaper.jpg')] bg-cover text-gray-800">
      <div className="max-w-5xl mx-auto">

        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-8`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >

              <div className="w-full md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
                />
              </div>

              <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-bonheur text-red-800 mb-4" style={{ textShadow: '0 0 5px rgba(183, 157, 157, 0.9)' }}>
                  {project.title}
                </h2>
                <p className="text-lg font-ysabeau text-gray-700 leading-relaxed whitespace-pre-line">
                  {t(`projects.${project.id}`)}
                </p>

                <div className="flex justify-center gap-6 mt-4">
                  <a
                    href={project.github}
                    target="_black"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-black transition"
                  >
                    <img
                      src="/icons/github.svg"
                      alt="GitHub"
                      className="w-6 h-6 color-red-800"
                    />
                    <span className="font-medium font-ysabeau">GitHub</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-black transition"
                  >
                    <img
                      src="/icons/vercel.svg"
                      alt="Live"
                      className="w-6 h-6"
                    />
                    <span className="font-medium font-ysabeau">Live</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
