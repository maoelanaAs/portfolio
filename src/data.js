import HeroImage from "/assets/hero-img.png";

const Image = {
  HeroImage,
};

export default Image;

export const listTools = [
  {
    id: 1,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    nama: "HTML",
    ket: "Language",
  },
  {
    id: 2,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    nama: "CSS",
    ket: "Language",
  },
  {
    id: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    nama: "Javascript",
    ket: "Language",
  },
  {
    id: 4,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    nama: "PHP",
    ket: "Language",
  },
  {
    id: 5,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    nama: "Bootstrap",
    ket: "Framework",
  },
  {
    id: 6,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    nama: "Laravel",
    ket: "Framework",
  },
  {
    id: 8,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    nama: "TailwindCSS",
    ket: "Framework",
  },
  {
    id: 8,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    nama: "React",
    ket: "Library",
  },
  {
    id: 9,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
    nama: "jQuery",
    ket: "Library",
  },
  {
    id: 10,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    nama: "Vite",
    ket: "Build Tool",
  },
  {
    id: 11,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    nama: "MySQL",
    ket: "DB Management",
  },
  {
    id: 12,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    nama: "Git",
    ket: "Version Control",
  },
  {
    id: 13,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    nama: "Github",
    ket: "Platform Repository",
  },
  {
    id: 14,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    nama: "Visual Studio Code",
    ket: "Code Editor",
  },
  {
    id: 15,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    nama: "Figma",
    ket: "Design Tool",
  },
  {
    id: 16,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
    nama: "Canva",
    ket: "Design Tool",
  },
];

import Project1 from "/assets/projects/project1.png";
import Project2 from "/assets/projects/project2.png";
import Project3 from "/assets/projects/project3.png";
import Project4 from "/assets/projects/project4.png";

export const listProyek = [
  {
    id: 1,
    gambar: Project1,
    nama: "Website Antrian Online Disdukcapil",
    desk: "Memudahkan masyarakat dalam melakukan pendaftaran antrian secara online",
    tools: ["HTML", "CSS", "Javascript", "PHP", "Bootstrap", "Laravel"],
    link: "https://github.com/maoelanaAs/Antrian-Online-Disdukcapil",
  },
  {
    id: 2,
    gambar: Project2,
    nama: "Website Portfolio",
    desk: "Website Portfolio pribadi yang dibuat menggunakan Vite dan ReactJS",
    tools: ["HTML", "CSS", "Javascript", "TailwindCSS", "ReactJS", "Vite"],
    link: "https://maoelanaas.github.io/portfolio",
  },
  {
    id: 4,
    gambar: Project3,
    nama: "Website Poliklinik Online",
    desk: "Website untuk memudahkan pasien dalam melakukan pendaftaran secara online",
    tools: ["HTML", "CSS", "Javascript", "jQuery", "Bootstrap"],
    link: "https://github.com/maoelanaAs/polidinus",
  },
  {
    id: 3,
    gambar: Project4,
    nama: "Detikhealth Sudirman Run 2023",
    desk: "Proyek Landing Page untuk Assignmet Seleksi Detikcom Internship (Frontend Designer)",
    tools: ["HTML", "CSS", "Javascript", "Bootstrap"],
    link: "https://maoelanaas.github.io/Detikcom_FEDesignAssignment",
  },
];

export const listPlatform = [
  {
    id: 1,
    icon: "ri-instagram-fill",
    nama: "Instagram",
    uname: "@maul.an10",
    link: "https://www.instagram.com/maul.an10/",
    dad: "200",
  },
  {
    id: 2,
    icon: "ri-github-fill",
    nama: "Github",
    uname: "@maoelanaas",
    link: "https://github.com/maoelanaas",
    dad: "300",
  },
  {
    id: 3,
    icon: "ri-linkedin-box-fill",
    nama: "LinkedIn",
    uname: "maulana-asan",
    link: "https://www.linkedin.com/in/maulana-asan/",
    dad: "400",
  },
  {
    id: 4,
    icon: "ri-mail-open-fill",
    nama: "Gmail",
    uname: "maulanaasan10@gmail.com",
    link: "mailto:maulanaasan10@gmail.com",
    dad: "500",
  },
];
