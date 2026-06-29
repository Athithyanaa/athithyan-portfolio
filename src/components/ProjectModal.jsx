import { AnimatePresence, motion } from "framer-motion";

export default function ProjectModal({
  project,
  onClose,
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-overlay"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
            }}
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <img
              src={project.image}
              alt={project.title}
            />

          
            <h2>
              {project.title}
            </h2>

            {project.professional && (
  <p className="company-tag">
    EmbedUR Systems • Cisco Team
  </p>
)}

            <p>
              {project.tech}
            </p>

            <p>
              {project.description}
            </p>
            <div className="modal-actions">
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn"
    >
      GitHub Repo
    </a>
  )}

  {project.demo && (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="project-btn secondary"
    >
      Live Demo
    </a>
  )}
</div>

            <button
              onClick={onClose}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}