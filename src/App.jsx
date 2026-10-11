
import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2 className="logo">AD<span>.</span></h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main className="hero">
        <p className="intro">HELLO, I'M</p>

        <h1>
          Anirban
          <br />
          <span>Dutta.</span>
        </h1>

        <h3>Computer Science & Engineering Graduate | Aspiring Software Developer</h3>

        <p className="description">
          I build practical web applications and explore AI-powered
          solutions. Welcome to my portfolio.
        </p>

        <div className="buttons">
          <a href="#projects" className="primary-btn">
            Explore My Projects
          </a>

          <a
            href="https://github.com/Anirban31Dutta"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            GitHub ↗
          </a>
        </div>
      </main>

      
      <section id="about" className="about-section">
        <p className="section-label">GET TO KNOW ME</p>
        <h2>
          A little about me<span className="blue-dot">.</span>
        </h2>

        <div className="about-content">
          <p>
            I'm a Computer Science Engineering graduate from Sharda University
            with an interest in full-stack development and AI-powered applications.
          </p>

          <p>
            I enjoy building practical projects, exploring new technologies,
            and strengthening my problem-solving skills to create useful software.
          </p>
        </div>

        <div className="about-tags">
          <span>Full-Stack Development</span>
          <span>AI &amp; NLP</span>
          <span>Problem Solving</span>
        </div>
      </section>


      
      <section id="skills" className="skills-section">
        <p className="section-label">MY TOOLKIT</p>
        <h2>Technical Skills<span className="blue-dot">.</span></h2>
        <p className="section-description">
          Technologies and tools I use to build applications and solve problems.
        </p>

        <div className="skills-grid">
          <article className="skill-card">
            <div className="skill-icon">01</div>
            <h3>Programming Languages</h3>
            <div className="skill-tags">
              <span>Java</span>
              <span>Python</span>
              <span>C</span>
              <span>JavaScript</span>
            </div>
          </article>

          <article className="skill-card">
            <div className="skill-icon">02</div>
            <h3>Frontend Development</h3>
            <div className="skill-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>React.js</span>
            </div>
          </article>

          <article className="skill-card">
            <div className="skill-icon">03</div>
            <h3>Backend Development</h3>
            <div className="skill-tags">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>REST APIs</span>
            </div>
          </article>

          <article className="skill-card">
            <div className="skill-icon">04</div>
            <h3>Databases</h3>
            <div className="skill-tags">
              <span>MySQL</span>
              <span>MongoDB</span>
            </div>
          </article>

          <article className="skill-card">
            <div className="skill-icon">05</div>
            <h3>AI & Machine Learning</h3>
            <div className="skill-tags">
              <span>NLP</span>
              <span>RAG</span>
              <span>Embeddings</span>
              <span>Image Processing</span>
            </div>
          </article>

          <article className="skill-card">
            <div className="skill-icon">06</div>
            <h3>Developer Tools</h3>
            <div className="skill-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
            </div>
          </article>
        </div>
      </section>


      
      <section id="projects" className="projects-section">
        <p className="section-label">MY WORK</p>
        <h2>Featured Projects<span className="blue-dot">.</span></h2>
        <p className="section-description">
          Projects where I apply software development, AI, and problem-solving skills.
        </p>

        <div className="projects-grid">
          <article className="project-card">
            <div className="project-number">PROJECT 01</div>
            <h3>CareerMatch</h3>
            <p>
              An AI-powered job platform that helps match candidates with relevant
              opportunities through resume processing and skill matching.
            </p>
            <div className="tech-tags">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>
            <a href="https://github.com/Anirban31Dutta/Job-Portal-And-Resume-Matcher" target="_blank" rel="noreferrer">
              View on GitHub ↗
            </a>
          </article>

          <article className="project-card">
            <div className="project-number">PROJECT 02</div>
            <h3>RAG Document Question Answering</h3>
            <p>
              A document question-answering system that retrieves relevant content
              from uploaded documents to generate context-based answers.
            </p>
            <div className="tech-tags">
              <span>Python</span>
              <span>RAG</span>
              <span>Embeddings</span>
              <span>LLMs</span>
            </div>
            <a href="https://github.com/Anirban31Dutta/RAG-Document-Question-Answering-System" target="_blank" rel="noreferrer">
              View on GitHub ↗
            </a>
          </article>

          <article className="project-card">
            <div className="project-number">PROJECT 03</div>
            <h3>Image &amp; Text Plagiarism Detector</h3>
            <p>
              A web application that analyzes text and images to identify potentially
              duplicated content using similarity analysis and image processing.
            </p>
            <div className="tech-tags">
              <span>Python</span>
              <span>NLP</span>
              <span>Flask</span>
              <span>Image Processing</span>
            </div>
            <a
              href="https://github.com/Anirban31Dutta/Image-and-Text-Based-Plagiarism-Detection-Tool"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub ↗
            </a>
          </article>
        </div>
      </section>


      
      <section id="education" className="education-section">
        <p className="section-label">MY BACKGROUND</p>
        <h2>Education & Certifications<span className="blue-dot">.</span></h2>

        <div className="education-list">
          <article className="education-card">
            <div>
              <span className="education-year">2022 — 2026</span>
              <h3>B.Tech in Computer Science Engineering</h3>
              <p>Sharda University</p>
            </div>
            <span className="education-result">CGPA: 7.572</span>
          </article>

          <article className="education-card">
            <div>
              <span className="education-year">2022</span>
              <h3>Class XII — CBSE</h3>
              <p>Kendriya Vidyalaya Barrackpore (Army), Kolkata</p>
            </div>
            <span className="education-result">70.8%</span>
          </article>

          <article className="education-card">
            <div>
              <span className="education-year">2020</span>
              <h3>Class X — CBSE</h3>
              <p>Kendriya Vidyalaya Barrackpore (Army), Kolkata</p>
            </div>
            <span className="education-result">70%</span>
          </article>
        </div>

        <h3 className="certifications-title">Certifications</h3>
        <div className="certification-tags">
          <span>Oracle — Java Course</span>
          <span>Udemy — Full Stack Web Development</span>
          <span>Sharda University — MERN Stack Bootcamp</span>
        </div>
      </section>



      
      <section id="contact" className="contact-section">
        <p className="section-label">GET IN TOUCH</p>

        <h2>
          Let's work
          <br />
          <span className="contact-highlight">together.</span>
        </h2>

        <p className="contact-description">
          I'm open to software development opportunities and collaborations.
          Feel free to reach out.
        </p>

        <div className="contact-buttons">
          <a
            className="primary-btn"
            href="mailto:anirban311004@gmail.com"
          >
            Email Me ↗
          </a>

          <a
            className="secondary-btn"
            href="/Anirban_Dutta_Resume_Final.pdf"
            download
          >
            Download Resume ↓
          </a>
        </div>

        <div className="contact-socials">
          <a
            href="https://www.linkedin.com/in/anirban-dutta-048670253"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          
          <a
            href="https://leetcode.com/u/anirban-31/"
            target="_blank"
            rel="noreferrer"
            
          >
            LeetCode ↗
          </a>


          <a
            href="https://github.com/Anirban31Dutta"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </section>


      <footer>
        © 2026 Anirban Dutta
      </footer>
    </div>
  );
}

export default App;
