// src/assets/projectImages.js

import project1 from "./images/project1.jpg";
import project2 from "./images/project2.jpg";
import project3 from "./images/project3.jpg";
import project4 from "./images/project4.jpg"
import project5 from "./images/project5.jpg"

const projectImages = [
  {
    id: 1,
    src: project1,
    alt: "프로젝트 1",
    url: "https://mini-blog-main.vercel.app/",
    style: "large"  // 또는 "tall", "wide", ""
  },
  {
    id: 2,
    src: project2,
    alt: "프로젝트 2",
    url: "https://gamker.vercel.app/",
    style: ""
  },
  {
    id: 3,
    src: project3,
    alt: "프로젝트 3",
    url: "https://screenshot-editor-eight.vercel.app/",
  },
  {
    id: 4,
    src: project4,
    alt: "프로젝트 4",
    url: "https://emotion-diary-three-ivory.vercel.app/"
  },
  {
    id: 5,
    src: project5,
    alt: "프로젝트 5",
    url: "https://github-log.vercel.app/"
  },
];

export default projectImages;
