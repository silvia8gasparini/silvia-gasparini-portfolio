import { motion } from "framer-motion";

const techStack = {
  "Front-End": [
    { name: "HTML", src: "/logos/HTML5.svg" },
    { name: "CSS", src: "/logos/CSS3.svg" },
    { name: "JavaScript", src: "/logos/JavaScript.svg" },
    { name: "TypeScript", src: "/logos/TypeScript.svg" },
    { name: "React", src: "/logos/React.svg" },
    { name: "Redux", src: "/logos/Redux.svg" },
    { name: "TailwindCSS", src: "/logos/Tailwind CSS.svg" },
    { name: "Bootstrap", src: "/logos/Bootstrap.svg" },
    { name: "Sass", src: "/logos/Sass.svg" },
    { name: "Vite", src: "/logos/Vite.js.svg" },
  ],
  "Back-End": [
    { name: "Node.js", src: "/logos/Nodejs.svg" },
    { name: "Java", src: "/logos/Java.svg" },
    { name: "Spring", src: "/logos/Spring.svg" },
    { name: "JSON", src: "/logos/JSON.svg" },
  ],
  "Database": [
    { name: "PostgresSQL", src: "/logos/PostgresSQL.svg" },
  ],
  "Tools": [
    { name: "VS Code", src: "/logos/Vscode.png" },
    { name: "IntelliJ", src: "/logos/Intellij.svg.png" },
    { name: "Postman", src: "/logos/Postman.svg" },
    { name: "Git", src: "/logos/Git.svg" },
    { name: "GitHub", src: "/logos/GitHub.svg" },
  ],
};

const TechSections = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
      {Object.entries(techStack).map(([category, items], idx) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: idx * 0.2 }}
          className=" p-8"
        >
          <h3 className="text-5xl font-explora font-bold text-red-800 mb-6 text-center"style={{ textShadow: '0 0 6px rgba(208, 172, 172, 0.9)' }}>
            {category}
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {items.map((logo) => (
              <div
                key={logo.name}
                className="w-20 h-20 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="w-full h-full object-contain grayscale hover:grayscale-0 transition duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default TechSections;
