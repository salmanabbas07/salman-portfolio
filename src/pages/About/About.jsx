import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";
import "./About.css";

const AboutMe = () => {
  return (
    <div className="about-inline-style-001">
      {/* --- About Me + Education Section --- */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="about-inline-style-002">
        {/* --- Header --- */}
        <h2 className="about-inline-style-003">About Me</h2>

        {/* --- Description --- */}
        <p className="about-inline-style-004">Hi, I'm <strong>SALMAN</strong> — an aspiring <strong>Web Developer</strong> and <strong>Frontend Enthusiast</strong> who loves turning ideas into responsive and interactive websites. I'm deeply fascinated by how modern web technologies like React, animations, and clean code can create exceptional user experiences.</p>
        <p className="about-inline-style-005">Beyond code, I enjoy exploring <strong>Frontend design</strong>, experimenting with <strong>Framer Motion</strong> and interactive components, and finding ways to blend <strong>artistic creativity</strong> with <strong>technical precision</strong>. My goal is to build websites that not only perform flawlessly — but also inspire and engage users.</p>
        <p><b>Oxford Software Institute</b> trained <b>Web Developer</b> with hands-on experience in React projects, Framer Motion animations, responsive design, and modern frontend technologies. Seeking internship opportunities to build impactful web solutions.</p>

        {/* --- Education Section --- */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }} className="about-inline-style-006">
          <h3 className="about-inline-style-007">Education</h3>
          <div className="about-inline-style-008">
            {/* --- Education Card 1 --- */}
            <motion.div whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0,255,200,0.15)" }} transition={{ duration: 0.3 }} className="about-inline-style-009">
              <FaUniversity size={40} color="var(--accent)" />
              <div>
                <h4 className="about-inline-style-010">Bachelor of Arts (BA)</h4>
                <p className="about-inline-style-011"><strong>IGNOU (Indira Gandhi National Open University)</strong> — New Delhi</p>
                <p className="about-inline-style-012">2nd Year (Pursuing)</p>
                <p className="about-inline-style-012">2025 – 2028</p>
              </div>
            </motion.div>

            {/* --- Education Card 2 --- */}
            <motion.div whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0,255,200,0.15)" }} transition={{ duration: 0.3 }} className="about-inline-style-009">
              <FaGraduationCap size={38} color="var(--accent)" />
              <div>
                <h4 className="about-inline-style-010">Higher Secondary Education (12th Grade)</h4>
                <p className="about-inline-style-011"><strong>GOVT BOYS SR SEC SCHOOL DEOLI</strong> — Sangam Vihar, New Delhi</p>
                <p className="about-inline-style-012">CBSE Board</p>
                <p className="about-inline-style-012">Completed in 2023</p>
              </div>
            </motion.div>

            {/* --- Education Card 3 --- */}
            <motion.div whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0,255,200,0.15)" }} transition={{ duration: 0.3 }} className="about-inline-style-009">
              <FaSchool size={36} color="var(--accent)" />
              <div>
                <h4 className="about-inline-style-010">Secondary Education (10th Grade)</h4>
                <p className="about-inline-style-011"><strong>Jagriti Public School</strong> — New Delhi</p>
                <p className="about-inline-style-012">CBSE Board</p>
                <p className="about-inline-style-012">Completed in 2020</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
