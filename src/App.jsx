import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Download,
  Award,
  Code2,
  Cpu,
  Server,
  ArrowRight,
} from "lucide-react";

import { TypeAnimation } from "react-type-animation";
import { FaBars, FaTimes } from "react-icons/fa";

import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

import ParticleBackground from "./components/ParticleBackground";
import Spotlight from "./components/Spotlight";
import ProjectModal from "./components/ProjectModal";
import ExperienceTimeline from "./components/ExperienceTimeline";
import blindAssistImg from "./assets/projects/blindassist.png";

import minditImg from "./assets/projects/mindit.png";
import roverImg from "./assets/projects/rover.png";
import smartGridImg from "./assets/projects/smartgrid.png";
import hpeImg from "./assets/projects/hpe.jpg";
import socialMediaImg from "./assets/projects/socialmedia.png";
import ciscoImg from "./assets/projects/cisco.png";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
  title: "Cisco Industrial IoT Routing",
  image: ciscoImg,
  tech: "Embedded Linux • Networking • Routing • Validation",

  description:
    "Working on Industrial IoT routing platforms at EmbedUR Systems for Cisco. Involved in networking workflows, packet analysis, validation, debugging and platform integration.",

  professional: true
},
  {
    title: "Blind Assist",
    image: blindAssistImg,
    tech: "YOLOv8 • OpenCV • Flutter • HuggingFace",
    description:
      "AI-powered navigation assistant for visually impaired users with obstacle detection, scene understanding and voice guidance.",
    github: "https://github.com/Athithyanaa/Blind-Assist",
    demo: "https://www.amazon.in/Blind-Assist-Navigation-Visually-Impaired/dp/B0GX2ZVQ63"
  },

  {
    title: "MINDIT",
    image: minditImg,
    tech: "Flutter • Firebase",
    description:
      "Mental wellness screening platform deployed at Rajaji Government Hospital with multilingual support and automated risk categorization.",
    github: "https://github.com/athi0058/MindIt-MyCopy",
  },

  {
    title: "Mars Rover Simulator",
    image: roverImg,
    tech: "Java • Spring Boot • Design Patterns",
    description:
      "Grid-based rover simulation featuring obstacle avoidance, command execution, OOP principles and design patterns.",
    github: "https://github.com/athi0058/MarsRover",
  },

  {
    title: "HPE Log Correlation Dashboard",
    image: hpeImg,
    tech: "Python • Streamlit • ML",
    description:
      "Machine learning powered log analysis dashboard with graph visualization, anomaly detection and interactive monitoring.",
    github: "https://github.com/Athithyanaa/hpe-log-analyzer",
  },

  {
    title: "Unified Social Media Manager",
    image: socialMediaImg,
    tech: "Spring Boot • MySQL • OAuth2",
    description:
      "Backend platform for multi-platform content scheduling, analytics and social media management.",
    github: "https://github.com/athi0058/Product-Management",
  },
  
  {
    title: "Smart Grid Optimization",
    image: smartGridImg,
    tech: "Python • NetworkX • Dijkstra",
    description:
      "POWER AI Hackathon winning solution that optimizes power distribution using graph algorithms and demand-aware routing.",
    github: "https://github.com/Athithyanaa/JSAP/tree/master",
  },
];

  return (
    <div className="app">
      <ParticleBackground />
      <Spotlight />

     <nav className="navbar">
  <div className="logo">Athithyan.dev</div>

  <div className="nav-links desktop-nav">
    <a href="#projects">Projects</a>
    <a href="#experience">Experience</a>
    <a href="/blog">Blog</a>
    <a href="#contact">Contact</a>
  </div>

  <button
    className="menu-btn"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <FaTimes /> : <FaBars />}
  </button>
</nav>

{menuOpen && (
  <div className="mobile-menu">
    <a
      href="#projects"
      onClick={() => setMenuOpen(false)}
    >
      Projects
    </a>

    <a
      href="#experience"
      onClick={() => setMenuOpen(false)}
    >
      Experience
    </a>

    <a
      href="/blog"
      onClick={() => setMenuOpen(false)}
    >
      Blog
    </a>

    <a
      href="#contact"
      onClick={() => setMenuOpen(false)}
    >
      Contact
    </a>
  </div>
)}

      <section className="hero">
        <div className="grid-bg"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="hero-title">
            Athithyan R
          </h1>

          <div className="hero-type">
            <TypeAnimation
              sequence={[
                   "Software Development Engineer",
                    2000,
                    "Industrial IoT Engineer",
                    2000,
                    "Backend Developer",
                    2000,
                    "Embedded Linux Engineer",
                    2000,
                    "Problem Solver",
                    2000,
              ]}
              repeat={Infinity}
            />
          </div>

      <p className="hero-subtitle">
  Building Industrial IoT Platforms,
  Scalable Backend Systems and AI Applications.
</p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="secondary-btn"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="socials">
            <a href="https://github.com/athithyanaa" target="_blank" rel="noreferrer">
  <FaGithub />
</a>

            <a href="https://www.linkedin.com/in/a%E1%B4%9B%CA%9C%C9%AAt%CA%9C%CA%8F%E1%B4%80%C9%B4-r-b07288254/" target="_blank" rel="noreferrer">
  <FaLinkedin />
</a>

           <a href="https://leetcode.com/u/athi0058/" target="_blank" rel="noreferrer">
  <FaCode />
</a>
          </div>
        </motion.div>
      </section>

      <section className="section">
        <h2>About Me</h2>

       <div className="glass-card">
  Software Engineer at EmbedUR Systems contributing to
  Cisco Industrial IoT Routing Platforms. Passionate about
  Networking, Embedded Linux, Backend Development, and
  Software Engineering. I enjoy solving challenging DSA
  problems, exploring system design, and building
  impactful applications that combine strong engineering
  fundamentals with real-world problem solving.
</div>
      </section>

      <section className="section">
        <h2>Technical Expertise</h2>

        <div className="skills-grid">
          <SkillCard
            icon={<Code2 />}
            title="Backend"
            text="Java, Spring Boot, REST APIs"
          />

          <SkillCard
            icon={<Server />}
            title="Networking"
            text="TCP/IP, Routing, Linux"
          />

          <SkillCard
            icon={<Cpu />}
            title="Embedded"
            text="Cisco IIoT Platforms"
          />

          <SkillCard
            icon={<Award />}
            title="AI"
            text="YOLOv8, OpenCV"
          />
        </div>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>

        <ExperienceTimeline />
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-grid">
          {projects.map((project) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={project.title}
              className="project-card"
            >
              <img
                src={project.image}
                alt={project.title}
              />

              <h3>{project.title}</h3>

              <p>{project.tech}</p>

              <button
                onClick={() =>
                  setSelectedProject(project)
                }
              >
                Learn More
                <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section stats">
        <Stat value="₹125K+" label="Prize Money" />
        <Stat value="9.18" label="CGPA" />
        <Stat value="7+" label="Projects" />
        <Stat value="3" label="Hackathon Win" />
      </section>

      <section id="contact" className="section contact">
        <h2>Let's Connect</h2>

        <p>
          <Mail size={18} />
          athi0058@gmail.com
        </p>

        <p>
          <Phone size={18} />
          +91 90251 11251
        </p>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

function SkillCard({ icon, title, text }) {
  return (
    <div className="glass-card">
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="glass-card stat">
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  );
}
