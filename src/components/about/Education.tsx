import React from "react";
import styles from "./About.module.css";

const Education: React.FC = () => {
  const education = [
    {
      institution: "Drexel University",
      degree: "Bachelor of Science in Computer Science",
      year: "2024",
    },
  ];

  return (
    <div className={styles.educationContainer}>
      <h2>Education</h2>
      <div className={styles.timeline}>
        {education.map((edu, index) => (
          <div key={index} className={styles.card}>
            <h3>{edu.institution}</h3>
            <p className={styles.company}>{edu.degree}</p>
            <p>Class of {edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
