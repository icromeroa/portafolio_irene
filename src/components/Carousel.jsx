import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/carousel.css";

const projects = [
  {
    id: 1,
    title: "BeatMatch",
    category: "FullStack Development",
    description: "An interactive web platform connected to the Spotify API that allows users to register, analyze their listening habits, and generate collaborative musical matchmaking playlists.",
    technologies: ["React", "SpotifyAPI", "MySQL", "Figma"],
    github: "https://github.com/icromeroa/BeatMatch.git",
    figma: "https://www.figma.com/proto/cx4usmsGdtgdfYYHSq4OK2/Beatmatch?page-id=0%3A1&node-id=1-1225&starting-point-node-id=1%3A1225&scaling=min-zoom&content-scaling=fixed&t=rKE8tpJ0qsbcHmgV-1",
    demo: null 
  },
  {
    id: 2,
    title: "UniRepo",
    category: "Software & Databases",
    description: "A comprehensive digital repository engineered for educational institutions to showcase, manage, and interact with academic projects, featuring secure user roles and administration panels.",
    technologies: ["Java", "JavaFX", "MySQL", "Figma"],
    github: "https://github.com/icromeroa/PIGaleriaProyectos.git",
    figma: "https://www.figma.com/design/68dqOJ74w2vkxjU9AP36vL/UniRepo?node-id=0-1&t=DTYS9LUxONTbczgA-1",
    demo: null 
  },
  {
    id: 3,
    title: "Virtual Letters App",
    category: "Frontend Development",
    description: "A personalized, interactive static web application built as a virtual birthday gift simulation, featuring custom state-driven card animations and tailored messaging templates.",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/catryry/2204.git",
    figma: null, 
    demo: "https://2204.netlify.app"
  }
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Escuchar el cambio de tamaño de la pantalla en tiempo real
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Breakpoints idénticos a los del CSS
  const isMobile = windowWidth <= 768;   // 1 Card en pantalla
  const isTablet = windowWidth > 768 && windowWidth <= 1024; // 2 Cards en pantalla

  // Ajuste del límite máximo según el espacio visible
  const maxIndex = isMobile ? projects.length - 1 : isTablet ? projects.length - 2 : projects.length - 3;

  const nextProject = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevProject = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Desplazamiento dinámico: Móvil va de 100% en 100%, Tablet de 50% en 50%, Desktop de 33.33%
  const translationFactor = isMobile ? 100 : isTablet ? 50 : 33.3333;
  const translationValue = currentIndex * translationFactor;

  return (
    <div className="carousel_container">
      
      <div className="carousel_viewport">
        {/* CORRECCIÓN: Quitamos style={{transform}} y usamos animate={{x}} controlado por Framer Motion */}
        <motion.div 
          className="carousel_track"
          animate={{ x: `-${translationValue}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          {projects.map((project) => (
            <div key={project.id} className="project_mini_card">
              <span className="featured_tag">✦ Featured Project</span>
              <h2 className="project_title">{project.title}</h2>
              <p className="project_category">{project.category.toUpperCase()}</p>
              <p className="project_description">{project.description}</p>

              <div className="tech_text_row">
                {project.technologies.map((tech, index) => (
                  <span key={tech} className="tech_item">
                    {tech}
                    {index < project.technologies.length - 1 && ", "}
                  </span>
                ))}
              </div>

              <div className="project_links">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="pill_btn text_break">
                    Live<br />Demo
                  </a>
                )}
                
                {project.figma && (
                  <a href={project.figma} target="_blank" rel="noreferrer" className="pill_btn">
                    Figma
                  </a>
                )}
                
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="pill_btn">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {(isMobile || isTablet || projects.length > 3) && (
        <div className="carousel_arrows">
          <button onClick={prevProject} className="arrow_btn" aria-label="Anterior">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={nextProject} className="arrow_btn" aria-label="Siguiente">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}