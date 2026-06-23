import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Certificates.css";

// ✅ Certificates data (added URLs for View button)
const CERTS = {
  tech: [
    {
      title: "Oxford Software Institute",
      org: "Web dev Competition",
      date: "2026",
      img: "/certs/f.jpeg",
      link: "/certs/f.jpeg",
    },
    {
      title: "Magic Bus",
      org: "Basic IT",
      date: "2023",
      img: "/certs/c.jpeg",
      link: "/certs/c.jpeg",
    },
    {
      title: "Yogdan",
      org: "Advance Computer",
      date: "2023",
      img: "/certs/e.jpeg",
      link: "/certs/e.jpeg",
    },
  ],
  other: [
    {
      title: "Magic Bus",
      org: "Skilling Programme",
      date: "2023",
      img: "/certs/a.jpeg",
      link: "/certs/a.jpeg",
    },
    {
      title: "Yogdan",
      org: "Computer Basic",
      date: "2023",
      img: "/certs/b.jpeg",
      link: "/certs/b.jpeg",
    },
    {
      title: "Magic Bus",
      org: "NIIT Foundation",
      date: "2023",
      img: "/certs/d.jpeg",
      link: "/certs/d.jpeg",
    },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container certs-inline-style-001">
      <div className="card certs-inline-style-002">
        <h2 className="certs-inline-style-003">Certificates 🏅</h2>
        <p className="lead certs-inline-style-004">Explore my certifications — technical & others.</p>

        {/* Tabs */}
        <div className="certs-inline-style-005">
          {["tech", "other"].map((t) => (
            <button key={t} onClick={() => setTab(t)} className={tab === t ? "tab active" : "tab"} style={{ padding: "8px 18px", borderRadius: 8, border: "none", cursor: "pointer", background: tab === t ? "#007bff" : "#333", color: "#fff", fontWeight: 500, transition: "0.3s" }}>
              {t === "tech" ? "Tech" : "Others"}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="certs-grid certs-inline-style-007">
          <AnimatePresence>
            {CERTS[tab].map((c, idx) => (
              <motion.div key={`${tab}-${idx}`} className="cert card certs-inline-style-008" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4, delay: idx * 0.1 }} whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)" }}>
                <img src={c.img} alt={c.title} className="certs-inline-style-009" />
                <strong className="certs-inline-style-010">{c.title}</strong>
                <div className="muted certs-inline-style-011">{c.org} • {c.date}</div>
                <div className="certs-inline-style-012">
                  <button className="btn certs-inline-style-013" onClick={() => setSelectedCert(c)}>View</button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div className="modal certs-inline-style-014" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedCert(null)}>
            <motion.img src={selectedCert.img} alt={selectedCert.title} initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} className="certs-inline-style-015" onClick={(e) => e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
