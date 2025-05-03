import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import projectImages from "../assets/projectImages";
import { Link } from "react-router-dom";
import Profile from "../assets/profile.jpg"
import "./Home.css";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 10;
      const y = (e.clientY / innerHeight - 0.5) * 10;
      document.body.style.setProperty("--tilt", `rotateX(${-y}deg) rotateY(${x}deg)`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [darkMode]);

  return (
    <div className="container">
      {/* Theme Toggle */}
      <div className="theme-toggle">
        <button onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? "🌙 다크모드" : "☀️ 라이트모드"}
        </button>
      </div>

      {/* Intro Section */}
      <section className="intro">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          나의 프로젝트
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          스크롤하여 탐색해보세요
        </motion.p>
      </section>

      {/* Profile Section */}
      <section className="about">
        <motion.div
          className="card glass profile-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={Profile} alt="프로필" className="profile-img" />
          <h2>안태성</h2>
          <Link to="/about" className="about-link">자세히 보기 →</Link>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>나의 프로젝트</h2>
        <div className="project-list">
          {projectImages.map(({ id, src, alt, url, style }) => (
            <motion.a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              key={id}
              className={`project-card glass ${style || ""}`}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img src={src} alt={alt} />
            </motion.a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <motion.form
          className="contact-form glass"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>연락해보기</h2>
          <input type="text" placeholder="이름" />
          <input type="email" placeholder="이메일" />
          <textarea placeholder="메시지"></textarea>
          <button type="submit">보내기</button>
        </motion.form>
      </section>
    </div>
  );
};

export default Home;
