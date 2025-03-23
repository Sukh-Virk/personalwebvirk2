import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const finalLetters = Array.from("VIRK");
const particles = Array.from({ length: 100 }, (_, i) => i);

function VirkAnimation({ onComplete }) {
  const controls = useAnimation();
  const [lettersCompleted, setLettersCompleted] = useState(0);

  useEffect(() => {
    if (lettersCompleted === finalLetters.length) {
      // All letters have completed their animations
      controls
        .start({
          opacity: 0,
          transition: { duration: 3 },
        })
        .then(onComplete);
    }
  }, [lettersCompleted, controls, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={controls}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "radial-gradient(circle at center, #0a192f, #000)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* PARTICLES */}
      {particles.map((_, i) => (
        <motion.span
          key={`particle-${i}`}
          initial={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            opacity: 0.5,
            scale: 0.3,
          }}
          animate={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          transition={{ delay: i * 0.02, duration: 2 }} // faster particle effect
          style={{
            position: "absolute",
            fontSize: "1rem",
            color: "#ff6ec7", // Updated particle color
            textShadow: "0 0 15px rgba(255, 110, 199, 0.6)", // Glow effect
            pointerEvents: "none",
            zIndex: 1, // Ensure particles are below letters
          }}
        >
          {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
        </motion.span>
      ))}

      {/* LETTERS */}
      {finalLetters.map((letter, index) => (
        <motion.span
          key={`virk-${index}`}
          initial={{ opacity: 0, y: 50, rotate: -5 }} // y reduced from 150 -> 50
          animate={{
            opacity: 1,
            y: 0,
            rotate: 0,
            scale: [1, 1.4, 1],
          }}
          transition={{ delay: 2 + index * 0.3, duration: 1 }} // faster entry
          style={{
            margin: "0 15px",
            fontSize: "7rem",
            fontWeight: "bold",
            color: "#ff6ec7", // Updated letter color
            textShadow: "0 0 15px rgba(255, 110, 199, 0.6)", // Glow effect
            zIndex: 10, // Ensure letters are above particles
          }}
          onAnimationComplete={() => {
            console.log(`Letter ${letter} animation complete`);
            setLettersCompleted((prev) => prev + 1); // Increment completed letters count
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default VirkAnimation;
