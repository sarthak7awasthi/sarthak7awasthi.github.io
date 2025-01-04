import React from "react";
import styles from "./Projects.module.css";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  links: { demo?: string; github?: string };
}

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  technologies,
  links,
}) => {
  return (
    <div className={`${styles.card} ${styles.expanded}`}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.details}>
        <p>{description}</p>
        <p>
          <strong>Concepts and Technologies:</strong>
        </p>
        <p>{technologies.join(", ")}</p>
        <div className={styles.links}>
          {links.demo && (
            <a href={links.demo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
          {links.github && (
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
