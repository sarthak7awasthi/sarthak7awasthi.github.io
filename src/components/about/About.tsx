import React, { useEffect, useRef } from "react";
import styles from "./About.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const techColors = ["B5FFE1", "#93E5AB", "#65B891", "#4E878C", "#00241B"];

const tetrisShapes = [
  // Line
  [[1, 1, 1, 1]],
  // Square
  [
    [1, 1],
    [1, 1],
  ],
  // T-shape
  [
    [0, 1, 0],
    [1, 1, 1],
  ],
  // L-shape
  [
    [1, 0],
    [1, 0],
    [1, 1],
  ],
  // Z-shape
  [
    [1, 1, 0],
    [0, 1, 1],
  ],
];

const About: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      shape: number[][];
      size: number;
      rotation: number;
      color: string;
      vx: number;
      vy: number;
    }[] = [];
    const particleCount = Math.random() * 10 + 5;

    // Generate random particles
    for (let i = 0; i < particleCount; i++) {
      const shape =
        tetrisShapes[Math.floor(Math.random() * tetrisShapes.length)];
      const size = Math.random() * 15 + 20; // Random block size
      const rotation = Math.floor(Math.random() * 4); // 0, 90, 180, or 270 degrees

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        color: techColors[Math.floor(Math.random() * techColors.length)], // Use tech-savvy colors
        shape,
        size,
        rotation,
      });
    }

    const drawTetrisPiece = (
      ctx: CanvasRenderingContext2D,
      particle: {
        x: number;
        y: number;
        shape: number[][];
        size: number;
        rotation: number;
        color: string;
      }
    ) => {
      const { x, y, shape, size, rotation, color } = particle;
      ctx.save();
      ctx.translate(x, y); // Move to particle position
      ctx.rotate((rotation * Math.PI) / 2); // Apply rotation

      ctx.fillStyle = color;

      // Draw the Tetris blocks
      shape.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (cell) {
            ctx.fillRect(colIndex * size, rowIndex * size, size, size);
          }
        });
      });

      ctx.restore();
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        drawTetrisPiece(ctx, particle);

        // Move particles
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce particles off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      });
    };

    const animationLoop = () => {
      drawParticles();
      requestAnimationFrame(animationLoop);
    };

    animationLoop();
  }, []);

  return (
    <div className={styles.aboutContainer}>
      {/* Background Canvas */}
      <canvas ref={canvasRef} className={styles.canvas}></canvas>

      {/* Foreground Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>Sarthak Awasthi</h1>
        <div className={styles.profilePicture}>
          <img src="src/assets/sarthak2.JPG" alt="Sarthak Awasthi" />
        </div>

        <p className={styles.subtitle}>Software Engineer</p>

        <div className={styles.contact}>
          <a href="mailto:sarthakawasthi06@gmail.com" className={styles.icon}>
            <MdEmail size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sarthak-awasthi-6107991a7"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/sarthak7awasthi"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
