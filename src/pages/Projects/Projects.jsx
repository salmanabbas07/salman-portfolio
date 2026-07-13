import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import './Projects.css'

const PROJECTS = [
   {
    title: '🩺 Healthcare Website',
    desc: 'Modern responsive healthcare website built with HTML, CSS, Bootstrap, JavaScript, and React for seamless patient experience.',
    ss: '/three.png',
    tech: ['Bootstrap', 'React', "CSS"],
    live: 'https://healthcare-frontend-website.vercel.app/',
    code: 'https://github.com/salmanabbas07/Healthcare_Frontend_website'
  },
  {
    title: '📝 Contact Management System',
    desc: 'Interactive TODO web application built with HTML, CSS, and JavaScript featuring user-friendly interface and responsive design.',
    ss: '/one.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://contact-management-system-iota-tawny.vercel.app/',
    code: 'https://github.com/salmanabbas07/contact-management-system'
  },
  {
    title: '📇 Info Card Generator',
    desc: 'Interactive address card maker with modern design, copy-to-clipboard, download PDF, and responsive preview using Javascript.',
    ss: '/maker-card.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://card-maker-inky.vercel.app/',
    code: 'https://github.com/salmanabbas07/card-maker'
  },
  {
    title: '💼 Portfolio Website',
    desc: 'A modern and responsive portfolio built with React and Framer Motion, showcasing projects, skills, and achievements with smooth animations and interactive UI.',
    ss: '/portfolio.jpg',
    tech: ['React', 'Framer Motion', 'Tailwind CSS'],
    live: 'https://salman-portfolio-three.vercel.app/',
    code: 'https://github.com/salmanabbas07/salman-portfolio'
  },

  {
  title: '🧮 Calculator',
  desc: 'A simple and responsive calculator built with HTML, JavaScript, and Custom CSS. It performs basic arithmetic operations with a clean interface and smooth user experience.',
  ss: '/calcc.jpg',
  tech: ['HTML', 'JavaScript', 'Custom CSS'],
  live: 'https://calculator-kappa-ten-51.vercel.app/',
  code: 'https://github.com/salmanabbas07/Calculator'
},

{
  title: '🛒 ElectraX',
  desc: 'A full-stack MERN e-commerce platform built to simulate a real-world online shopping experience, featuring dynamic product listings, search filters, and responsive design.',
  ss: '/fullX.png',
  tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  live: 'https://electra-x-three.vercel.app/',
  code: 'https://github.com/salmanabbas07/ElectraX'
},


{
  title: '💬 Real-Time Chat App',
  desc: 'A full-stack real-time messaging application built with Socket.IO. Features include instant messaging, live typing indicators, global chat rooms, and persistent message history using SQLite.',
  ss: '/chat-app.jpg',
  tech: ['React.js', 'Node.js', 'Express.js', 'Socket.IO', 'SQLite'],
  live: 'https://react-socketio-chat.vercel.app/',
  code: 'https://github.com/salmanabbas07/react-socketio-chat'
},



]

export default function Projects() {
  return (
    <motion.section className="container" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} id="projects">
      <div className="card projects-inline-style-001">
        <motion.h2 className="text-4xl font-semibold text-cyan-400 mb-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          🚀 Projects
        </motion.h2>
        <p className="text-gray-400 mb-10">A collection of my major works and projects.</p>
        <div className="projects-grid projects-inline-style-002">
          {PROJECTS.map((p, idx) => (
            <motion.div key={idx} className="project-card projects-inline-style-003" initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.4, delay: idx * 0.15 }} whileHover={{ scale: 1.03 }} viewport={{ once: true }}>
              <motion.div className="ss projects-inline-style-004" whileHover={{ scale: 1.05 }}>
                <img src={p.ss} alt={p.title} className="projects-inline-style-005" />
              </motion.div>
              <div className="projects-inline-style-006">
                <h3 className="projects-inline-style-007">{p.title}</h3>
                <p className="projects-inline-style-008">{p.desc}</p>
                <div className="projects-inline-style-009">
                  {p.tech.map((t) => (
                    <span key={t} className="projects-inline-style-010">{t}</span>
                  ))}
                </div>
                <div className="projects-inline-style-011">
                  <motion.a href={p.code} target="_blank" rel="noreferrer" className="btn projects-inline-style-012" whileHover={{ scale: 1.08 }}>
                    <Github size={14} /> Code
                  </motion.a>
                  <motion.a href={p.live} target="_blank" rel="noreferrer" className="btn projects-inline-style-013" whileHover={{ scale: 1.08 }}>
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
