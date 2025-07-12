import React, { useState, useEffect } from "react";
import "./App.css";
import Blog from "./Blog.js";
import { motion } from "framer-motion";
import ContactForm from "./Contact.jsx";
import Particles from "./p";
import VirkAnimation from "./VirkAnimation";
import heroImageFile from "./a1/unnamed.jpg";
import aboutMeImage from "./a1/Screenshot_20250209-031626.png";
import project1Image from "./a1/Project1.png";
import project2Image from "./a1/Project2.png";
import project3Image from "./a1/Project3.png";
import project4Image from "./a1/Project4.png";
import p3 from "./a1/p3.jpg";

function App() {
  const [showWebsite, setShowWebsite] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState([
    "Welcome to the Terminal... Type 'git push' to explore Sukhman's journey.",
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMilestoneIndex, setCurrentMilestoneIndex] = useState(0);

  // Tech & framework icons
  const techIcons = [
    { name: "Python", slug: "python" },
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "Ruby", slug: "ruby" },
    { name: "C++", slug: "cplusplus" },
    { name: "Git", slug: "git" },
    { name: "HTML", slug: "html5" },
    { name: "CSS", slug: "css" },
    { name: "JavaScript", slug: "javascript" },
    { name: "TypeScript", slug: "typescript" },
    { name: "React JS", slug: "react" },
    { name: "NextJS", slug: "nextdotjs" },
    { name: "NodeJS", slug: "nodedotjs" },
  ];

  // Library icons
  const libIcons = [
    { name: "NumPy", slug: "numpy" },
    { name: "Pandas", slug: "pandas" },
    { name: "Plotly", slug: "plotly" },
    { name: "Scikit-learn", slug: "scikitlearn" },
    { name: "TensorFlow", slug: "tensorflow" },
    { name: "PyTorch", slug: "pytorch" },
  ];

  const milestones = [
    { date: "01/2021", text: "Sukhman took his first programming class at Queen Elizabeth Secondary." },
    { date: "09/2022", text: "He enrolled in CMPT 125 and learned the basics of programming." },
    { date: "01/2023", text: "Sukhman started CMPT 225 with David Mitchell, mastering data structures." },
    { date: "09/2023", text: "He took CMPT 310 (AI) and CMPT 353 (Data Science) to push his skills further." },
    { date: "02/2025", text: "Currently, Sukhman is expanding his knowledge in AI and data science while building cool projects." },
    { date: "??????", text: "Stay tuned... Sukhman's journey is just beginning!" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowWebsite(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (window.location.hash) {
      window.history.replaceState(null, null, " ");
    }
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
          <motion.nav 
            className={darkMode ? "dark-nav" : "light-nav"}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h1 className="logo">Sukhman</h1>
            <ul>
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

{/* Hero Section */}
<motion.section
  id="hero"
  className="hero"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <div className="hero-content">
    <h1 style={{ color: '#ff6ec7' }}>Hello, I'm Sukhman</h1>
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
    <p style={{ color: '#a0e0ff' }}>Other people see code. I see poetry in motion.</p>
    
    <div className="buttons-container">
      {/* Pink Button with Rocket Emoji */}
      <motion.a 
        href="#contact" 
        className="button button-pink"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Hire Me <motion.span 
          style={{ display: 'inline-block' }}
          animate={{ 
            rotate: [0, 10, -10, 10, -10, 0],
            y: [0, -5, 5, -5, 5, 0]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >🚀</motion.span>
      </motion.a>
      
      {/* Blue Button with Folder Emoji */}
      <motion.a 
        href="#experience" 
        className="button button-blue"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        My Work 📂
      </motion.a>
      
      {/* Pink Button with Sun/Moon Emoji */}
      <motion.button
        onClick={() => setDarkMode(!darkMode)}
        className="button button-pink"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </motion.button>
    </div>
  </div>
</motion.section>
          {/* About Section */}
          <motion.section
            id="about"
            className="section-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="glitch-text" data-text="About Me">About Me</h2>
            <div className="about-section">
              <motion.div 
                className="about-part"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={p3}
                  alt="About me"
                  style={{
                    width: "250px",
                    borderRadius: "50%",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                    marginBottom: "20px",
                  }}
                />
              </motion.div>
              <motion.div 
                className="about-part"
                whileHover={{ scale: 1.02 }}
              >
                <h3>🎓 School</h3>
                <p>I'm a student at SFU pursuing Computer Science.</p>
              </motion.div>
              <motion.div 
                className="about-part"
                whileHover={{ scale: 1.02 }}
              >
                <h3>📚 Grades</h3>
                <p>Strong performance: A in MACM, A+ in Calculus 1-3 and other CMPT courses.</p>
              </motion.div>
              <motion.div 
                className="about-part"
                whileHover={{ scale: 1.02 }}
              >
                <h3>🌟 Future Plans</h3>
                <p>Career goals: Cybersecurity, DevOps, or software engineering.</p>
              </motion.div>
              <div className="terminal">
                <h3 className="terminal-title">Sukhman's Terminal</h3>
                {terminalOutput.map((line, idx) => (
                  <motion.p 
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {line}
                  </motion.p>
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
            className="section-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="fire-text">Experience & Skills</h2>
            <div className="experience-section">
              {[
                {
                  icon: "💻",
                  title: "Web Development",
                  desc: "Built interactive web applications using React.js, creating custom components, integrating APIs, and ensuring responsive design.",
                  tools: "React.js, JavaScript, CSS, Spoonacular API"
                },
                {
                  icon: "📊",
                  title: "Data Visualization",
                  desc: "Worked with large datasets to uncover patterns and insights. Created visualizations and dashboards using Pandas and Matplotlib.",
                  tools: "Python, Pandas, Matplotlib"
                },
                  {
                  icon: "🤖",
                  title: "AI Integration",
                  desc: "Developed machine-learning models to analyze data and automate decision-making workflows.",
                  tools: "Python, TensorFlow, scikit-learn"
                  },

                {
                  icon: "⚙️",
                  title: "DevOps & CI/CD",
                  desc: "Streamlined development workflows by configuring CI/CD pipelines with GitHub Actions.",
                  tools: "GitHub Actions, Jest, Supertest"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="large-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px rgba(255, 110, 199, 0.5)"
                  }}
                >
                  <h3>{item.icon} {item.title}</h3>
                  <p>{item.desc}</p>
                  <span>Tools: {item.tools}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Tech Stack Section */}
          <motion.section
            id="tech-stack"
            className="tech-stack-section section-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
          
            <h2>My Tech Stack</h2>
            <div className="cube-container">
              <div className="cube">
                {["JavaScript", "Python", "React.js", "CSS", "HTML", "Node.js"].map((tech, i) => (
                  <motion.div
                    key={i}
                    className={`cube-face cube-face-${["front", "back", "left", "right", "top", "bottom"][i]}`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Languages/Frameworks Section */}
          <motion.section
            className="lang-grid-section section-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2>Languages / Frameworks</h2>
            <p style={{ color: '#a0e0ff' }}>Personal favorite languages and frameworks:</p>
            <div className="lang-grid">
              {techIcons.map(({ name, slug }, index) => (
                <motion.div 
                  key={slug} 
                  className="lang-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={`https://cdn.simpleicons.org/${slug}/569CD6`}
                    alt={name}
                    width={48}
                    height={48}
                  />
                  <span>{name}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Libraries Section */}
          <motion.section 
            className="lang-grid-section section-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2>Libraries</h2>
            <p style={{ color: '#a0e0ff' }}>Personal favorite libraries:</p>
            <div className="lang-grid">
              {libIcons.map(({ name, slug }, index) => (
                <motion.div 
                  key={slug} 
                  className="lang-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={`https://cdn.simpleicons.org/${slug}/569CD6`}
                    alt={name}
                    width={48}
                    height={48}
                  />
                  <span>{name}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            id="projects"
            className="section-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2>My Projects</h2>
            <p style={{ color: '#a0e0ff' }}>Check out my recent projects!:</p>
            
            <div className="projects-grid">
              {[
                {
                  title: "Birch & Bloom",
                  desc: "A client-guided mental health website showcasing therapy services, practitioner profiles, and integrated session booking.",
                  img: project1Image,
                  link: "https://birchandbloom.netlify.app/"
                },
                {
                  title: "Sentiment Stock Forecasting",
                  desc: "An NLP and AI-powered tool that analyzes social media sentiment to predict and visualize stock price movements.",
                  img: project2Image,
                  link: "https://github.com/Sukh-Virk/Sentiment-Driven-Stock-Forecasting"
                },
                {
                  title: "Digital Cookbook",
                  desc: "An interactive web app for browsing, customizing, and saving recipes with real-time serving adjustments and shopping-list export.",
                  img: project3Image,
                  link: "https://ramtin-mandom.github.io/Cloud-14-Project/"
                },
                {
                  title: "Finance Manager",
                  desc: "A Dockerized web app with automated CI/CD pipelines for tracking personal finances and generating AI-driven financial forecasts.",
                  img: project4Image,
                  link: "https://github.com/Sukh-Virk/Finance-Manager"
                },
              ].map((project, index) => (
                <motion.div 
                  key={index}
                  className="project-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img 
                      src={project.img} 
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p>{project.desc}</p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Blog Section */}
          <motion.div
            id="blog"
            className="section-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Blog />
          </motion.div>

{/* Find Me Section */}
<motion.section
  id="find-me"
  className="find-me-section"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <div className="find-me-container">
    <h2 className="section-title">
      <span className="glitch-text" data-text="Find Me">Find Me</span>
    </h2>
    <p className="connect-subtitle">Connect with me on these platforms:</p>
    
    <div className="social-platforms">
      {/* Instagram */}
      <motion.a
        href="https://www.instagram.com/sukhman_virk16/"
        target="_blank"
        rel="noopener noreferrer"
        className="platform-card instagram"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="platform-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </div>
        <span>Instagram</span>
      </motion.a>

      {/* GitHub */}
      <motion.a
        href="https://github.com/Sukh-Virk"
        target="_blank"
        rel="noopener noreferrer"
        className="platform-card github"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="platform-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
        </div>
        <span>GitHub</span>
      </motion.a>
    </div>
  </div>
</motion.section>
          {/* Contact Section */}
          <motion.section
            id="contact"
            className="section-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
      
            <h2>Contact Me</h2>
            <p>Feel free to reach out for collaborations or just to say hello!</p>
            <ContactForm />
          </motion.section>

          {/* Footer */}
          <motion.footer 
            className={`footer ${darkMode ? "dark-footer" : "light-footer"}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p>
              Made with 💻 by <strong>Sukhman</strong> | Follow me on{" "}
              <a href="https://www.instagram.com/sukhman_virk16/?hl=tr" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </p>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </motion.footer>
        </>
      )}
    </div>
  );
}

export default App;