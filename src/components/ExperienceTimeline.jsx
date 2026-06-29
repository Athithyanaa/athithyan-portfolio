import { motion } from "framer-motion";

const experiences = [
  {
    year: "2026",
    title:
      "Software Development Engineer",
    company:
      "EmbedUR Systems",
    description:
       "Working on Cisco Industrial IoT Routing Platforms, Embedded Linux workflows, networking validation, packet analysis, and debugging.",
  },
  {
    year: "2025",
    title: "HPE Career Program",
    company: "Hewlett Packard Enterprise",
    description:
      "Developed a Log Correlation & Visualization Dashboard using Machine Learning, NetworkX, PyVis, and Streamlit to analyze system logs and visualize event relationships.",
  },
    {
    year: "2024",
    title: "Software Development Intern",
    company: "TCE Technology Business Incubator (TBI)",
    description:
      "Developed a Unified Social Media Management platform using Spring Boot, MySQL, REST APIs, and OAuth-based integrations for content scheduling and management.",
  },
   {
    year: "2022",
    title: "Started B.E Computer Science",
    company: "Thiagarajar College of Engineering",
    description:
      "Began Computer Science journey with focus on Software Engineering, Networking and Problem Solving.",
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="timeline">
      {experiences.map(
        (item, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="timeline-year">
              {item.year}
            </div>

            <div className="timeline-card">
              <h3>
                {item.title}
              </h3>

              <h4>
                {item.company}
              </h4>

              <p>
                {item.description}
              </p>
            </div>
          </motion.div>
        )
      )}
    </div>
  );
}