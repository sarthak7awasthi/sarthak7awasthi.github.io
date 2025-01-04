import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Humming-Bird",
    description:
      "Developed an autonomous drone safety application to enhance personal security for users during late night travels. Implemented live tracking and automated drone using a path-seeking algorithm for detection and avoidance. Built mobile app using React Native and JavaScript and developed APIs in Python and Flask for communication.",
    technologies: ["React Native", "JavaScript", "Python", "Flask"],
    links: {
      demo: "https://devpost.com/software/aerial-escort",
      github: "https://github.com/sarthak7awasthi/DronePublicSafety",
    },
  },
  {
    title: "PETGNN",
    description:
      "Developed a federated machine learning application for privacy-preserving generation of various neural networks. Implemented differential privacy, Private Set Intersection (PSI), and homomorphic encryption for dataset security. Leveraged secure multi-party computation and implemented a distributed system to enable seamless scalability.",
    technologies: [
      "Python",
      "Machine Learning",
      "Differential Privacy",
      "Private Set Intersection",
      "Homomorphic Encryption",
    ],
    links: {
      demo: "https://github.com/sarthak7awasthi/PETGNNs",
      github: "https://github.com/sarthak7awasthi/PETGNNs",
    },
  },
];

const Projects: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Projects</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
