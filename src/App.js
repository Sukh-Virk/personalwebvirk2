import React, { useState, useEffect } from "react";
import "./App.css";
import Blog from "./Blog.js";
import { motion } from "framer-motion";
import GithubStatsChart from "./GithubStatsChart.js";
import ContactForm from "./Contact.jsx";
import Particles from "./p";
import VirkAnimation from "./VirkAnimation";
import heroImageFile from "./a1/unnamed.jpg";
import aboutMeImage from "./a1/Screenshot_20250209-031626.png";

function App() {
  const [showWebsite, setShowWebsite] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState([
    "Welcome to the Terminal... Type 'git push' to explore Sukhman's journey.",
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMilestoneIndex, setCurrentMilestoneIndex] = useState(0);

  const milestones = [
    {
      date: "01/2021",
      text: "Sukhman took his first programming class at Queen Elizabeth Secondary.",
    },
    {
      date: "09/2022",
      text: "He enrolled in CMPT 125 and learned the basics of programming.",
    },
    {
      date: "01/2023",
      text: "Sukhman started CMPT 225 with David Mitchell, mastering data structures.",
    },
    {
      date: "09/2023",
      text: "He took CMPT 310 (AI) and CMPT 353 (Data Science) to push his skills further.",
    },
    {
      date: "02/2025",
      text: "Currently, Sukhman is expanding his knowledge in AI and data science while building cool projects.",
    },
    {
      date: "??????",
      text: "Stay tuned... Sukhman's journey is just beginning!",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowWebsite(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Apply dark/light mode to the body
  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  // Fix: Scroll to top and handle URL hash
  useEffect(() => {
    // Disable browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Remove the hash from the URL
    if (window.location.hash) {
      window.history.replaceState(null, null, " ");
    }

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isTyping) {
      if (userInput.toLowerCase() === "git push") {
        processMilestone();
      } else {
        setTerminalOutput((prev) => [
          ...prev,
          `$ ${userInput}`,
          "Command not recognized. Try 'git push'.",
        ]);
        setUserInput("");
      }
    }
  };

  const processMilestone = () => {
    if (currentMilestoneIndex < milestones.length) {
      const milestone = milestones[currentMilestoneIndex];
      setIsTyping(true);

      // Directly append the milestone text to the terminal output
      setTerminalOutput((prev) => [
        ...prev,
        `$ git push`,
        `[commit ${milestone.date}] ${milestone.text}`,
      ]);

      setIsTyping(false);
      setCurrentMilestoneIndex((prev) => prev + 1);
      setUserInput("");
    } else {
      setTerminalOutput((prev) => [...prev, "No more milestones."]);
      setUserInput("");
    }
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {!showWebsite ? (
        <div className="preloader-container">
          <VirkAnimation />
        </div>
      ) : (
        <>
          {/* Navigation */}
          <nav className={darkMode ? "dark-nav" : "light-nav"}>
            <h1 className="logo">Sukhman</h1>
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Hero Section */}
          <motion.section
            id="hero"
            className="hero"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Particles />
            <div className="hero-content">
              <h1>Hello, I’m Sukhman</h1>
              <img
                src={heroImageFile}
                alt="Hero"
                style={{
                  width: "280px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  margin: "20px 0",
                }}
              />
              <p>Other people see code. I see poetry in motion.</p>
              <div className="buttons">
                <a href="#contact" className="button button-primary">
                  Hire Me 🚀
                </a>
                <a href="#experience" className="button button-secondary">
                  My Work 📂
                </a>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="theme-toggle"
              >
                {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
              </button>
            </div>
          </motion.section>

          {/* About Section */}
          <motion.section
            id="about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="glitch-text" data-text="About Me">
              About Me
            </h2>
            <div className="about-section">
              <div className="about-part">
                <img
                  src={aboutMeImage}
                  alt="About me"
                  style={{
                    width: "250px",
                    borderRadius: "50%",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                    marginBottom: "20px",
                  }}
                />
              </div>
              <div className="about-part">
                <h3>🎓 School</h3>
                <p>I’m a student at SFU pursuing Computer Science.</p>
              </div>
              <div className="about-part">
                <h3>📚 Grades</h3>
                <p>
                  Strong performance: A in MACM, A+ in Calculus 1-3 and other
                  CMPT courses.
                </p>
              </div>
              <div className="about-part">
                <h3>🌟 Future Plans</h3>
                <p>
                  Career goals: Cybersecurity, DevOps, or software engineering.
                </p>
              </div>
              <div className="terminal">
                <h3 className="terminal-title">Sukhman's Terminal</h3>
                {terminalOutput.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
                <div className="input-line">
                  <span className="prompt">$</span>
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isTyping}
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            id="experience"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="fire-text">Experience & Skills</h2>
            <div className="experience-section">
              <div className="large-card">
                <h3>💻 Web Development</h3>
                <p>
                  Built interactive web applications using React.js, creating
                  custom components, integrating APIs, and ensuring responsive
                  design.
                </p>
                <span>Tools: React.js, JavaScript, CSS, Spoonacular API</span>
              </div>
              <div className="large-card">
                <h3>📊 Data Visualization</h3>
                <p>
                  Worked with large datasets to uncover patterns and insights.
                  Created visualizations and dashboards using Pandas and
                  Matplotlib.
                </p>
                <span>Tools: Python, Pandas, Matplotlib</span>
              </div>
              <div className="large-card">
                <h3>🛡️ Cyber Security</h3>
                <p>
                  Engineered a Python-based dark web scraper to monitor forums
                  and marketplaces for potential security threats.
                </p>
                <span>Tools: Python, Discord API</span>
              </div>
              <div className="large-card">
                <h3>⚙️ DevOps & CI/CD</h3>
                <p>
                  Streamlined development workflows by configuring CI/CD
                  pipelines with GitHub Actions.
                </p>
                <span>Tools: GitHub Actions, Jest, Supertest</span>
              </div>
            </div>
          </motion.section>

          {/* Tech Stack Section */}
          <motion.section
            id="tech-stack"
            className="tech-stack-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Particles />
            <h2>My Tech Stack</h2>
            <div className="cube-container">
              <div className="cube">
                <div className="cube-face cube-face-front">JavaScript</div>
                <div className="cube-face cube-face-back">Python</div>
                <div className="cube-face cube-face-left">React.js</div>
                <div className="cube-face cube-face-right">CSS</div>
                <div className="cube-face cube-face-top">HTML</div>
                <div className="cube-face cube-face-bottom">Node.js</div>
              </div>
            </div>
          </motion.section>

          {/* Blog Section */}
          <motion.div
            id="blog"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Particles />
            <Blog />
          </motion.div>

        {/* GitHub Stats Section */}
<motion.section
  id="stats"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  style={{
  }}
>
  <h2 className="glitch-text1" data-text="GitHub Stats">
    paddingTop: "150px",
    GitHub Stats
  </h2>
  <p
    style={{
    
      textAlign: "center",
      fontSize: "1.2rem",
      color: darkMode ? "#c9d6ff" : "#37474f",
    }}
  >
    Feel free to follow me on GitHub! These are live stats from my GitHub profile. 📊✨
  </p>
  <GithubStatsChart theme={darkMode ? "dark" : "light"} />
</motion.section>


          {/* Contact Section */}
          <motion.section
            id="contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Particles />
            <h2>Contact Me</h2>
            <p>
              Feel free to reach out for collaborations or just to say hello!
            </p>
            <ContactForm />
          </motion.section>

          {/* Footer */}
          <footer
            className={`footer ${darkMode ? "dark-footer" : "light-footer"}`}
          >
            <p>
              Made with 💻 by <strong>Sukhman</strong> | Follow me on{" "}
              <a
                href="https://www.instagram.com/sukhman_virk16/?hl=tr"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </p>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
