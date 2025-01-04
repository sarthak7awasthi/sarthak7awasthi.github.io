import React from "react";
import styles from "./Experience.module.css";

interface Experience {
  title: string;
  company: string;
  dates: string;
  description: string;
}

const experienceData: Experience[] = [
  {
    title: "Software Engineer",
    company: "Zen Music Group",
    dates: "June 2024 - Present",
    description: "",
  },
  {
    title: "Software Engineer Intern",
    company: "Moberg Analytics",
    dates: "September 2022 - March 2023",
    description:
      "Automated secrets management using Python and Vault for a clinical trial and research management platform. Built REST APIs using Python and Flask and developed user-friendly UI components using React and JavaScript. Optimized CI/CD workflows using Bitbucket, reducing deployment failures by 25% and improving release reliability.",
  },
  {
    title: "Software Engineer Intern",
    company: "Bentley Systems",
    dates: "September 2021 - March 2022",
    description:
      "Contributed to a feature-rich web application enabling secure collaboration on projects across dispersed teams. Developed essential UI components with React and TypeScript and implemented backend APIs using .NET and C#. Reduced coordination time and effort across engineering teams boosting productivity and overall efficiency.",
  },
  {
    title: "Software Engineer Intern",
    company: "CurveBeam LLC",
    dates: "September 2020 - March 2021",
    description:
      "Enhanced a bone density measurement tool by applying object-oriented programming techniques for modularity. Developed a dynamic reporting tool in Python and C to display 3D bone scan renders, improving diagnostic insights. Improved the search algorithm reducing tool runtime by 30% allowing for quicker processing of bone scan data",
  },
  {
    title: "Software Engineer Intern",
    company: "Moberg Analytics",
    dates: "September 2022 - March 2023",
    description:
      "Automated secrets management using Python and Vault for a clinical trial and research management platform. Built REST APIs using Python and Flask and developed user-friendly UI components using React and JavaScript. Optimized CI/CD workflows using Bitbucket, reducing deployment failures by 25% and improving release reliability.",
  },
];

const Experience: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Experience</h2>
        <div className={styles.timeline}>
          {experienceData.map((experience, index) => (
            <div key={index} className={styles.card}>
              <h3>{experience.title}</h3>
              <p className={styles.company}>{experience.company}</p>
              <p className={styles.dates}>{experience.dates}</p>
              <p className={styles.description}>{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
