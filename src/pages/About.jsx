import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
import Profile from "../assets/profile.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-page container">
      <Link to="/" className="back-home">
        ← 홈으로 돌아가기
      </Link>
      <div className="about-header">
        <img src={Profile} alt="프로필" className="about-profile-img" />
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>안녕하세요 👋</h1>
          <p>
            저는 성일정보고등학교에 재학 중인 안태성입니다. <br />
            프론트엔드 개발과 사용자 경험 디자인에 흥미를 가지고 있고, React,
            TypeScript, 인터랙션 중심의 UI를 공부하고 있습니다.
          </p>
        </motion.div>
      </div>

      <div className="about-social">
        <a href="https://github.com/chinred" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://ant-notion.super.site/"
          target="_blank"
          rel="noreferrer"
        >
          <SiNotion />
        </a>
        <a href="mailto:antaesoeng@email.com">
          <FaEnvelope />
        </a>
      </div>

      <div className="about-timeline">
        <ul>
          <li>2023 - 게임 개발 공부 시작</li>
          <li>2024 - 1학기 게임개발 / 2학기 웹 개발 및 디자인 공부</li>
          <li>2025 - 여러 포트폴리오 제작</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
