import React from "react";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Education from "./components/about/Education";
import "./index.css";

const App: React.FC = () => {
  return (
    <div>
      <main>
        <About />
        <div className="content">
          <Education />
          <Experience />
          <Projects />
        </div>
      </main>
    </div>
  );
};

export default App;
