import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import githubLogo from "/github.png";
import linkedinLogo from "/linkedin.png";
import gmailLogo from "/gmail.png";
import whatsappLogo from "/whatsapp.png";

import "./Contact.css"
import '../../index.css' 

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Initialize EmailJS with public key
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    console.log("=== EmailJS Configuration Debug ===");
    console.log("Public Key:", publicKey);
    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);

    // Check for placeholder values
    const isPlaceholder = (value) => !value || value === "your_key" || value.includes("your_") || value.includes("YOUR_");

    if (isPlaceholder(publicKey) || isPlaceholder(serviceId) || isPlaceholder(templateId)) {
      console.error("❌ EmailJS is using placeholder values. Please configure real credentials in .env file:");
      if (isPlaceholder(publicKey)) console.error("  - VITE_EMAILJS_PUBLIC_KEY is missing or invalid");
      if (isPlaceholder(serviceId)) console.error("  - VITE_EMAILJS_SERVICE_ID is missing or invalid");
      if (isPlaceholder(templateId)) console.error("  - VITE_EMAILJS_TEMPLATE_ID is missing or invalid");
    }

    if (publicKey && !isPlaceholder(publicKey)) {
      emailjs.init(publicKey);
      console.log("✅ EmailJS initialized successfully");
    } else {
      console.error("❌ EmailJS initialization failed: Invalid or missing public key");
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.contact || !form.subject || !form.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const isEmail = emailPattern.test(form.contact);
    if (!isEmail && isNaN(form.contact)) {
      setStatus("⚠️ Please enter a valid email or phone number.");
      return;
    }

    setStatus("Sending...");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    console.log("=== Sending Email ===");
    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);
    console.log("Form Data:", {
      from_name: form.name,
      contact_info: form.contact,
       
      subject: form.subject,
      message: form.message,
    });

    // Validate credentials before sending
    const isPlaceholder = (value) => !value || value === "your_key" || value.includes("your_") || value.includes("YOUR_");
    if (isPlaceholder(serviceId) || isPlaceholder(templateId)) {
      console.error("❌ Cannot send email: EmailJS credentials are not configured");
      setStatus("❌ EmailJS not configured. Please check .env file.");
      return;
    }

    emailjs
      .send(serviceId, templateId, {
        from_name: form.name,
        contact_info: form.contact,
        subject: form.subject,
        message: form.message,
      })
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setStatus("✅ Message sent successfully!");
          setForm({ name: "", contact: "", subject: "", message: "" });
        },
        (error) => {
          console.error("EmailJS error:", error);
          console.error("Error details:", {
            text: error.text,
            status: error.status,
          });
          setStatus("❌ Failed to send. Try again later.");
        }
      );
  };

  const quickLinks = [
    { img: githubLogo, title: "GitHub", link: "https://github.com/salmanabbas07" },
    { img: linkedinLogo, title: "LinkedIn", link: "https://www.linkedin.com/in/salman-abbas-3090413a8/" },
    { img: gmailLogo, title: "Email", link: "mailto:abbassalman813@gmail.com" },
    { img: whatsappLogo, title: "WhatsApp", link: "https://wa.me/919310661019" },
    ];

  return (
    <section className="contact-section">
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="contact-title"
      >
        Let’s Connect & Collaborate 🤝
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="contact-subtitle"
      >
        Whether it’s a new project, a collaboration, or just to say hi — I’d love to hear from you!
      </motion.p>

      {/* Quick Links */}
      <motion.div className="contact-links">
        {quickLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="social-icon"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        className="contact-form"
      >
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input type="text" name="contact" placeholder="Your Email or Phone" value={form.contact} onChange={handleChange} required />
        <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message..." value={form.message} onChange={handleChange} rows="5" required />
        <motion.button type="submit" className="contact-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          🚀 Send Message
        </motion.button>

        {status && <motion.p initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="contact-status">{status}</motion.p>}
      </motion.form>
    </section>
  );
}
