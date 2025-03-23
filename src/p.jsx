import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const particles = Array.from({ length: 100 }, (_, i) => i);

function Particles() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth - 0.5, // normalized -0.5 to 0.5
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {particles.map((_, i) => {
        const driftFactor = 30 + Math.random() * 30;

        return (
          <motion.span
            key={`particle-${i}`}
            initial={{
              x: Math.random() * 1000 - 500,
              y: Math.random() * 1000 - 500,
              opacity: 0.3 + Math.random() * 0.2,
              scale: 0.5 + Math.random() * 0.5,
            }}
            animate={{
              x: [
                `+=${driftFactor * mousePos.x}`,
                `-=${driftFactor * mousePos.x}`,
              ],
              y: [
                `+=${driftFactor * mousePos.y}`,
                `-=${driftFactor * mousePos.y}`,
              ],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 5 + Math.random() * 5,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              fontSize: "0.9rem",
              color: "rgba(255, 105, 180, 0.5)", // brighter subtle pink
              pointerEvents: "none",
              zIndex: 0,
              textShadow: "0 0 8px rgba(255, 105, 180, 0.3)",
            }}
          >
            {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
          </motion.span>
        );
      })}
    </>
  );
}

export default Particles;
