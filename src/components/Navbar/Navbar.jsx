import React, { useState , useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const links = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Certificates", to: "/certificates" },
  { label: "Resume", to: "/resume" },
  { label: "About Me", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 900) {
      setIsOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

  return (
    <>
      <nav className="navbar-inline-style-001">
        {/* Logo */}
        <div className="navbar-inline-style-002">
          <motion.div
            className="logo navbar-inline-style-003"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            SA
          </motion.div>

          <div className="navbar-inline-style-004">
            <h1 className="navbar-inline-style-005">Salman Abbas</h1>
            <div className="navbar-inline-style-006">
              MERN Stack Developer
            </div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="desktop-links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              className="navbar-inline-style-007"
            >
              {({ isActive }) => (
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    color: "var(--accent)",
                    textShadow: "0 0 8px var(--accent)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="navbar-inline-style-008"
                >
                  <motion.span
                    animate={{
                      color: isActive ? "var(--accent)" : "white",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {l.label}
                  </motion.span>

                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="navbar-inline-style-009"
                    />
                  )}
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>

        {/* Hamburger */}
        <div className="mobile-btn">
          <button
            className="navbar-inline-style-010"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar-inline-style-011"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="navbar-inline-style-012"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setIsOpen(false)}
                className="navbar-inline-style-013"
              >
                {l.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}