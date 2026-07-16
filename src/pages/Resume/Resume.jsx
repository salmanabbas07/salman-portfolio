import React from "react";
import { motion } from "framer-motion";
import "./Resume.css";

export default function Resume() {
  return (
    <section className="container resume-inline-style-001">
      <motion.div className="card resume-inline-style-002" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <motion.h2 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="resume-inline-style-003">
          📄 Resume
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="resume-inline-style-004">
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="resume-inline-style-005">
          <div>
            <h3 className="resume-inline-style-006">
              👨‍💻 Salman Abbas
            </h3>
            <p className="resume-inline-style-007">
              pursuing BA — Indira Gandhi National Open University
            </p>
            <p className="resume-inline-style-008">
              📍 New Delhi, Kalkaji
            </p>
            <p className="resume-inline-style-008">
              ✉️ abbassalman813@gmail.com | 📞 +91 9310661019
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} className="resume-inline-style-009">
            <strong className="resume-inline-style-010">Professional Summary:</strong>
            <p className="resume-inline-style-011">
              Full Stack Web Developer trained at <strong>Oxford Software Institute.</strong> Proficient in <strong>React, Node.js, JavaScript, HTML, CSS, MongoDB & MySQL</strong>. Building complete web applications from <strong>frontend UI to backend APIs and databases.</strong> Experienced with <strong>Bootstrap, Tailwind CSS, responsive design,</strong> and modern web development.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="resume-inline-style-012">
          <h4 className="resume-inline-style-013">
            🎓 Education
          </h4>
          <ul className="resume-inline-style-014">
            <li>
              <strong>Bachelor of Arts</strong> — IGNOU (Indira Gandhi National Open University), 2024–2028
            </li>
            <li className="resume-inline-style-015">
              <strong>12th Board — GOVT BOYS SR SEC SCHOOL DEOLI</strong>  (CBSE Board, 2023)
            </li>
            <li className="resume-inline-style-015">
              <strong>10th Board — JAGRITI PUBLIC SCHOOL</strong> (CBSE Board, 2021)
              <br />
            </li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} style={{ marginTop: 40 }}>
          <h4 className="resume-inline-style-013">💼 Projects</h4>
          <ul className="resume-inline-style-014">
            <li>1️⃣ Todo List App (Vanilla JavaScript)</li>
            <li>2️⃣ Healthcare Website (Bootstrap, ReactJS)</li>
            <li>3️⃣ Address Card Generator (Interactive JavaScript App)</li>
            <li>4️⃣ Modern Portfolio Website (React + Framer Motion + Tailwind CSS)</li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} style={{ marginTop: 40 }}>
          <h4 className="resume-inline-style-013">⚙️ Skills</h4>
          <div className="resume-inline-style-016">
            {["JavaScript", "Node JS", "Express JS", "Tailwind CSS", "Bootstrap", "CSS Animation", "GitHub", "Redux-Toolkit", "React JS", "MySQL", "MongoDB", "Git", "Problem Solving", "Teamwork", "Adaptability", "Creativity", "Postman Tool", "Responsive Design", "HTML"].map((skill) => (
              <motion.span key={skill} whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }} className="resume-inline-style-017">
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} className="resume-inline-style-018">
          {[{ name: "💻 GitHub", link: "https://github.com/salmanabbas07" }, { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/salman-abbas-3090413a8/" }].map((site) => (
            <motion.a key={site.name} href={site.link} target="_blank" rel="noreferrer" whileHover={{ scale: 1.1, color: "#00b4ff" }} className="resume-inline-style-019">
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="resume-inline-style-020">
          <iframe src="/salman_resume.pdf" title="Resume" className="resume-inline-style-021" />
        </motion.div>

        {/* Download Button */}
        <motion.a href="/salman_resume.pdf" download whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="resume-download">
          ⬇️ Download Resume
        </motion.a>


      </motion.div>
    </section>
  );
}
