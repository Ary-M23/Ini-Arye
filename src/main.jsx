import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import profile from "./image/arye.jpeg";
import premiumImg from "./image/premium.png";
import travelImg from "./image/travel.png";
import officeImg from "./image/office.png";
import codecamp1 from "./image/1 codecamp.jpeg";
import codecamp2 from "./image/2 codecamp.jpeg";
import codecamp3 from "./image/3 codecamp.jpeg";
import BE from "./image/be.jpg";
import dataAnalisis from "./image/data analisis.jpg";
import Data from "./image/data.jpg";
import mikro from "./image/mikro.jpeg";
import word from "./image/word.jpg";

const SECTIONS = [
  { id: "dashboard", label: "Dashboard" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

const CERTIFICATES = [
  { id: "codecamp1", title: "CodeCamp — Responsive Web Design", img: codecamp1, alt: "Sertifikat CodeCamp 1", desc: "Earned the Responsive Web Design Certification from freeCodeCamp, gaining strong foundations in HTML, CSS, Flexbox, Grid, and media queries. Experienced in building responsive, accessible, and user-friendly websites with modern design practices." },
  { id: "codecamp2", title: "CodeCamp — Javascript algorithms and Data structures", img: codecamp2, alt: "Sertifikat CodeCamp 2", desc: "Earned the JavaScript Algorithms and Data Structures Certification from freeCodeCamp, gaining proficiency in modern JavaScript (ES6), algorithmic problem-solving, and data structure implementation through hands-on projects." },
  { id: "codecamp3", title: "CodeCamp — Front End Development Libraries", img: codecamp3, alt: "Sertifikat CodeCamp 3", desc: "Completed the Front End Development Libraries Certification from freeCodeCamp. Developed expertise in React, Bootstrap, and jQuery, applying modern design principles to create dynamic and interactive user interfaces." },
  { id: "BE", title: "MySkill Short Class — Backend Development Fundamental ", img: BE, alt: "Sertifikat Backend Engineering", desc: "Completed the Backend Development Fundamental Short Class by MySkill, gaining foundational knowledge in backend architecture, API development, server-side programming, and database management to support software development." },
  { id: "dataAnalisis", title: "RevoU Mini Course — Intro to Data Analytics", img: dataAnalisis, alt: "Sertifikat Data Analytics 1", desc: "Completed the Intro to Data Analytics Mini Course by RevoU, developing foundational skills in data processing, visualization, and the use of analytical tools to support data-driven decision making." },
  { id: "Data", title: "MySkill Short Class — Data Visualization with Looker Data Studio", img: Data, alt: "Sertifikat Data Visualization", desc: "Completed the Data Visualization with Looker Data Studio Short Class by MySkill, gaining hands-on experience in building interactive dashboards, designing effective visualizations, and presenting insights to support business decision-making" },
  { id: "mikro", title: "Maestro Academy — MikroTik", img: mikro, alt: "Sertifikat Microservices", desc: "Earned MikroTIK Training and Certification from HTP – Maestro Academy, gaining practical skills in networking fundamentals, router configuration, and managing network infrastructure for reliable connectivity." },
  { id: "word", title: "MySkill Short Class — Wordpres Introduction", img: word, alt: "Sertifikat Microsoft Word", desc: "Completed the WordPress Introduction Short Class by MySkill, gaining practical knowledge in WordPress setup, content management, and customization of themes and plugins to build functional and user-friendly websites." },
];

function App() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const [menuOpen, setMenuOpen] = useState(false);     // NEW: mobile menu
  const [openMap, setOpenMap] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(null); // null | 'ok' | 'err'

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActive(id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* HEADER (responsive + hamburger) */}
      <header className="bg-gray-900 text-white sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6">
          <h1 className="text-lg sm:text-xl font-bold">Arye Abisha Munthe</h1>

          {/* Desktop nav */}
          <ul className="hidden md:flex gap-6">
            {SECTIONS.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleNavClick(e, id)}
                    className={
                      "pb-1 transition-colors " +
                      (isActive
                        ? "text-emerald-400 border-b-2 border-emerald-400 font-semibold"
                        : "text-white/90 hover:text-emerald-300")
                    }
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded hover:bg-white/10"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10">
            <ul className="max-w-6xl mx-auto px-4 py-3 grid gap-3">
              {SECTIONS.map(({ id, label }) => {
                const isActive = active === id;
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => { handleNavClick(e, id); setMenuOpen(false); }}
                      className={
                        "block py-2 " +
                        (isActive ? "text-emerald-400 font-semibold" : "text-white/90")
                      }
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="gray">
        {/* Dashboard */}
        <section id="dashboard" className="min-h-screen flex items-center scroll-mt-24 md:scroll-mt-28">
          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-12 md:py-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">Welcome to My Dashboard</h2>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mt-2">
              HALO, saya Arye bisa dipanggil Ary
            </h2>
            <p className="text-gray-700 mt-4 text-center">
              This is where I showcase my work and journey.
            </p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="min-h-screen flex items-center scroll-mt-24 md:scroll-mt-28">
          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-12 md:py-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 text-center">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
              <div className="flex justify-center">
                <img
                  src={profile}
                  alt="Arye Abisha Munthe"
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg border-4 border-emerald-400"
                />
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed">
                  I’m <span className="font-semibold">Arye Abisha Munthe</span>, a <span className="font-semibold">Software Engineer</span> yang fokus pada pengembangan end-to-end (frontend, backend, database, hingga deployment). Saya membangun aplikasi web dengan
                  <span className="font-medium text-blue-600"> React</span>,
                  <span className="font-medium text-emerald-600"> Laravel</span>, dan
                  <span className="font-medium text-lime-600"> Node.js</span> (<span className="font-medium">Express</span>), merancang API <span className="font-medium">REST</span> dengan autentikasi <span className="font-medium">JWT/OAuth</span>, serta mengelola data menggunakan
                  <span className="font-medium text-amber-600"> MongoDB</span> dan
                  <span className="font-medium text-sky-600"> PostgreSQL</span>. 
                  Saya familiar dengan <span className="font-medium">testing</span> (Jest/Postman), <span className="font-medium">CI/CD</span> (GitHub Actions), kontainerisasi <span className="font-medium">Docker</span>, dan deployment ke <span className="font-medium">Vercel/Render</span>. 
                  Tujuan saya: merancang sistem yang bersih, terukur, aman, dan mudah dirawat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="min-h-screen scroll-mt-24 md:scroll-mt-28">
          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-12 md:py-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">Projects</h2>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <li className="p-4 bg-white rounded shadow hover:shadow-lg transition">
                <img src={premiumImg} alt="Premium Portal" className="w-full h-40 sm:h-48 object-cover rounded mb-3" />
                <h3 className="font-semibold text-lg">Premium Portal</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Web platform untuk manajemen data internal.
                </p>
              </li>
              <li className="p-4 bg-white rounded shadow hover:shadow-lg transition">
                <img src={travelImg} alt="TravelAble" className="w-full h-40 sm:h-48 object-cover rounded mb-3" />
                <h3 className="font-semibold text-lg">TravelAble</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Ini merupakan tugas kuliah dimana kami membuat web travel untuk kaum disabilitas agar bisa travelling ke sektitar bandung.
                  Kami menggunakan framework MERN untuk mengembangkan web nya.
                </p>
              </li>
              <li className="p-4 bg-white rounded shadow hover:shadow-lg transition">
                <img src={officeImg} alt="OfficeHub" className="w-full h-40 sm:h-48 object-cover rounded mb-3" />
                <h3 className="font-semibold text-lg">OfficeHub (Mobile App)</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Mobile app untuk kolaborasi dan booking ruang kerja.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="min-h-[60vh] scroll-mt-24 md:scroll-mt-28">
          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-12 md:py-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-black">Skills</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {/* HTML5 */}
              <div className="flip-card w-full h-40">
                <div className="flip-card-inner w-full h-full relative">
                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 bg-black rounded-lg p-5 flex flex-col items-center justify-center shadow">
                    <i className="fab fa-html5 text-4xl text-orange-500"></i>
                    <p className="mt-2 font-semibold text-white">HTML5</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back absolute inset-0 bg-gray-900 rounded-lg p-5 flex flex-col justify-center items-center shadow">
                    <p className="text-white font-semibold">Skill Level</p>
                    <div className="w-full h-2 bg-gray-700 mt-2 rounded">
                      <div className="w-4/5 h-full bg-emerald-400 rounded"></div>
                    </div>
                    <p className="text-emerald-400 mt-2">100%</p>
                  </div>
                </div>
              </div>

              {/* Tailwind CSS */}
              <div className="flip-card w-full h-40">
                <div className="flip-card-inner w-full h-full relative">
                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 bg-black rounded-lg p-5 flex flex-col items-center justify-center shadow">
                    <i className="fab fa-css3-alt text-4xl text-blue-500"></i>
                    <p className="mt-2 font-semibold text-white">Tailwind CSS</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back absolute inset-0 bg-gray-900 rounded-lg p-5 flex flex-col justify-center items-center shadow">
                    <p className="text-white font-semibold">Skill Level</p>
                    <div className="w-full h-2 bg-gray-700 mt-2 rounded">
                      <div className="w-4/5 h-full bg-emerald-400 rounded"></div>
                    </div>
                    <p className="text-emerald-400 mt-2">95%</p>
                  </div>
                </div>
              </div>

              {/* JavaScript */}
              <div className="flip-card w-full h-40">
                <div className="flip-card-inner w-full h-full relative">
                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 bg-black rounded-lg p-5 flex flex-col items-center justify-center shadow">
                    <i className="fab fa-js-square text-4xl text-yellow-400"></i>
                    <p className="mt-2 font-semibold text-white">JavaScript</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back absolute inset-0 bg-gray-900 rounded-lg p-5 flex flex-col justify-center items-center shadow">
                    <p className="text-white font-semibold">Skill Level</p>
                    <div className="w-full h-2 bg-gray-700 mt-2 rounded">
                      <div className="w-4/5 h-full bg-emerald-400 rounded"></div>
                    </div>
                    <p className="text-emerald-400 mt-2">95%</p>
                  </div>
                </div>
              </div>

              {/* PHP */}
              <div className="flip-card w-full h-40">
                <div className="flip-card-inner w-full h-full relative">
                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 bg-black rounded-lg p-5 flex flex-col items-center justify-center shadow">
                    <i className="fab fa-php text-4xl text-indigo-400"></i>
                    <p className="mt-2 font-semibold text-white">PHP</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back absolute inset-0 bg-gray-900 rounded-lg p-5 flex flex-col justify-center items-center shadow">
                    <p className="text-white font-semibold">Skill Level</p>
                    <div className="w-full h-2 bg-gray-700 mt-2 rounded">
                      <div className="w-3/4 h-full bg-emerald-400 rounded"></div>
                    </div>
                    <p className="text-emerald-400 mt-2">80%</p>
                  </div>
                </div>
              </div>

              {/* GitHub */}
              <div className="flip-card w-full h-40">
                <div className="flip-card-inner w-full h-full relative">
                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 bg-black rounded-lg p-5 flex flex-col items-center justify-center shadow">
                    <i className="fab fa-github text-4xl text-white"></i>
                    <p className="mt-2 font-semibold text-white">GitHub</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back absolute inset-0 bg-gray-900 rounded-lg p-5 flex flex-col justify-center items-center shadow">
                    <p className="text-white font-semibold">Skill Level</p>
                    <div className="w-full h-2 bg-gray-700 mt-2 rounded">
                      <div className="w-4/5 h-full bg-emerald-400 rounded"></div>
                    </div>
                    <p className="text-emerald-400 mt-2">90%</p>
                  </div>
                </div>
              </div>

              {/* MySQL */}
              <div className="flip-card w-full h-40">
                <div className="flip-card-inner w-full h-full relative">
                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 bg-black rounded-lg p-5 flex flex-col items-center justify-center shadow">
                    <i className="fas fa-database text-4xl text-blue-500"></i>
                    <p className="mt-2 font-semibold text-white">MySQL</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back absolute inset-0 bg-gray-900 rounded-lg p-5 flex flex-col justify-center items-center shadow">
                    <p className="text-white font-semibold">Skill Level</p>
                    <div className="w-full h-2 bg-gray-700 mt-2 rounded">
                      <div className="w-3/4 h-full bg-emerald-400 rounded"></div>
                    </div>
                    <p className="text-emerald-400 mt-2">85%</p>
                  </div>
                </div>
              </div>

              {/* MongoDB */}
              <div className="flip-card w-full h-40">
                <div className="flip-card-inner w-full h-full relative">
                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 bg-black rounded-lg p-5 flex flex-col items-center justify-center shadow">
                    <i className="fas fa-database text-4xl text-green-500"></i>
                    <p className="mt-2 font-semibold text-white">MongoDB</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back absolute inset-0 bg-gray-900 rounded-lg p-5 flex flex-col justify-center items-center shadow">
                    <p className="text-white font-semibold">Skill Level</p>
                    <div className="w-full h-2 bg-gray-700 mt-2 rounded">
                      <div className="w-3/5 h-full bg-emerald-400 rounded"></div>
                    </div>
                    <p className="text-emerald-400 mt-2">70%</p>
                  </div>
                </div>
              </div>

              {/* Laravel */}
              <div className="flip-card w-full h-40">
                <div className="flip-card-inner w-full h-full relative">
                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 bg-black rounded-lg p-5 flex flex-col items-center justify-center shadow">
                    <i className="fab fa-laravel text-4xl text-red-500"></i>
                    <p className="mt-2 font-semibold text-white">Laravel</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back absolute inset-0 bg-gray-900 rounded-lg p-5 flex flex-col justify-center items-center shadow">
                    <p className="text-white font-semibold">Skill Level</p>
                    <div className="w-full h-2 bg-gray-700 mt-2 rounded">
                      <div className="w-3/4 h-full bg-emerald-400 rounded"></div>
                    </div>
                    <p className="text-emerald-400 mt-2">90%</p>
                  </div>
                </div>
              </div>

              {/* React */}
              <div className="flip-card w-full h-40">
                <div className="flip-card-inner w-full h-full relative">
                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 bg-black rounded-lg p-5 flex flex-col items-center justify-center shadow">
                    <i className="fab fa-react text-4xl text-blue-500"></i>
                    <p className="mt-2 font-semibold text-white">React</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back absolute inset-0 bg-gray-900 rounded-lg p-5 flex flex-col justify-center items-center shadow">
                    <p className="text-white font-semibold">Skill Level</p>
                    <div className="w-full h-2 bg-gray-700 mt-2 rounded">
                      <div className="w-4/5 h-full bg-emerald-400 rounded"></div>
                    </div>
                    <p className="text-emerald-400 mt-2">90%</p>
                  </div>
                </div>
              </div>

              {/* Vue */}
              <div className="flip-card w-full h-40">
                <div className="flip-card-inner w-full h-full relative">
                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 bg-black rounded-lg p-5 flex flex-col items-center justify-center shadow">
                    <i className="fab fa-vuejs text-4xl text-green-500"></i>
                    <p className="mt-2 font-semibold text-white">Vue</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back absolute inset-0 bg-gray-900 rounded-lg p-5 flex flex-col justify-center items-center shadow">
                    <p className="text-white font-semibold">Skill Level</p>
                    <div className="w-full h-2 bg-gray-700 mt-2 rounded">
                      <div className="w-3/4 h-full bg-emerald-400 rounded"></div>
                    </div>
                    <p className="text-emerald-400 mt-2">80%</p>
                  </div>
                </div>
              </div>

              {/* Python */}
              <div className="flip-card w-full h-40">
                <div className="flip-card-inner w-full h-full relative">
                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 bg-black rounded-lg p-5 flex flex-col items-center justify-center shadow">
                    <i className="fab fa-python text-4xl text-yellow-500"></i>
                    <p className="mt-2 font-semibold text-white">Python</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back absolute inset-0 bg-gray-900 rounded-lg p-5 flex flex-col justify-center items-center shadow">
                    <p className="text-white font-semibold">Skill Level</p>
                    <div className="w-full h-2 bg-gray-700 mt-2 rounded">
                      <div className="w-4/5 h-full bg-emerald-400 rounded"></div>
                    </div>
                    <p className="text-emerald-400 mt-2">85%</p>
                  </div>
                </div>
              </div>

              {/* Golang */}
              <div className="flip-card w-full h-40">
                <div className="flip-card-inner w-full h-full relative">
                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 bg-black rounded-lg p-5 flex flex-col items-center justify-center shadow">
                    <i className="fab fa-golang text-4xl text-blue-500"></i>
                    <p className="mt-2 font-semibold text-white">Golang</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back absolute inset-0 bg-gray-900 rounded-lg p-5 flex flex-col justify-center items-center shadow">
                    <p className="text-white font-semibold">Skill Level</p>
                    <div className="w-full h-2 bg-gray-700 mt-2 rounded">
                      <div className="w-3/4 h-full bg-emerald-400 rounded"></div>
                    </div>
                    <p className="text-emerald-400 mt-2">85%</p>
                  </div>
                </div>
              </div>

              {/* Vercel */}
              <div className="flip-card w-full h-40">
                <div className="flip-card-inner w-full h-full relative">
                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 bg-black rounded-lg p-5 flex flex-col items-center justify-center shadow">
                    <i className="fab fa-vercel text-4xl text-white"></i>
                    <p className="mt-2 font-semibold text-white">Vercel</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back absolute inset-0 bg-gray-900 rounded-lg p-5 flex flex-col justify-center items-center shadow">
                    <p className="text-white font-semibold">Skill Level</p>
                    <div className="w-full h-2 bg-gray-700 mt-2 rounded">
                      <div className="w-3/4 h-full bg-emerald-400 rounded"></div>
                    </div>
                    <p className="text-emerald-400 mt-2">70%</p>
                  </div>
                </div>
              </div>

              {/* Java */}
              <div className="flip-card w-full h-40">
                <div className="flip-card-inner w-full h-full relative">
                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 bg-black rounded-lg p-5 flex flex-col items-center justify-center shadow">
                    <i className="fab fa-java text-4xl text-red-500"></i>
                    <p className="mt-2 font-semibold text-white">Java</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back absolute inset-0 bg-gray-900 rounded-lg p-5 flex flex-col justify-center items-center shadow">
                    <p className="text-white font-semibold">Skill Level</p>
                    <div className="w-full h-2 bg-gray-700 mt-2 rounded">
                      <div className="w-3/4 h-full bg-emerald-400 rounded"></div>
                    </div>
                    <p className="text-emerald-400 mt-2">75%</p>
                  </div>
                </div>
              </div>

              {/* Communication */}
              <div className="flip-card w-full h-40">
                <div className="flip-card-inner w-full h-full relative">
                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 bg-black rounded-lg p-5 flex flex-col items-center justify-center shadow">
                    <i className="fas fa-comments text-4xl text-blue-600"></i>
                    <p className="mt-2 font-semibold text-white">Communication</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back absolute inset-0 bg-gray-900 rounded-lg p-5 flex flex-col justify-center items-center shadow">
                    <p className="text-white font-semibold">Skill Level</p>
                    <div className="w-full h-2 bg-gray-700 mt-2 rounded">
                      <div className="w-4/5 h-full bg-emerald-400 rounded"></div>
                    </div>
                    <p className="text-emerald-400 mt-2">90%</p>
                  </div>
                </div>
              </div>

              {/* Team Work */}
              <div className="flip-card w-full h-40">
                <div className="flip-card-inner w-full h-full relative">
                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 bg-black rounded-lg p-5 flex flex-col items-center justify-center shadow">
                    <i className="fas fa-users text-4xl text-purple-500"></i>
                    <p className="mt-2 font-semibold text-white">Team Work</p>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back absolute inset-0 bg-gray-900 rounded-lg p-5 flex flex-col justify-center items-center shadow">
                    <p className="text-white font-semibold">Skill Level</p>
                    <div className="w-full h-2 bg-gray-700 mt-2 rounded">
                      <div className="w-4/5 h-full bg-emerald-400 rounded"></div>
                    </div>
                    <p className="text-emerald-400 mt-2">95%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates */}
        <section id="certificates" className="min-h-screen scroll-mt-24 md:scroll-mt-28">
          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-12 md:py-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">Certificates</h2>
            <p className="text-gray-600 mt-2 text-center">
              Certificates from various training programs and bootcamps I have successfully completed.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CERTIFICATES.map((item) => (
                <li key={item.id} className="p-4 bg-white rounded shadow hover:shadow-lg transition">
                  <img src={item.img} alt={item.alt} className="w-full h-40 sm:h-48 object-cover rounded mb-3" loading="lazy" />
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="min-h-screen scroll-mt-24 md:scroll-mt-28">
          <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-12 md:py-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-center">Contact</h2>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {/* LEFT: Info list */}
              <div className="space-y-4">
                {/* No HP → WhatsApp */}
                <a
                  href="https://api.whatsapp.com/send/?phone=6282166304219&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 sm:p-4 border rounded hover:bg-emerald-50 transition"
                >
                  <i className="fas fa-phone text-emerald-600 text-xl" aria-hidden="true"></i>
                  <div>
                    <div className="text-sm text-gray-500">No. HP</div>
                    <div className="text-lg font-semibold text-emerald-700">+62 821-6630-4219</div>
                    <div className="text-xs text-gray-500 mt-1">Klik untuk chat via WhatsApp</div>
                  </div>
                </a>

                {/* Lokasi → popup map */}
                <button
                  type="button"
                  onClick={() => setOpenMap(true)}
                  className="flex items-center gap-3 w-full text-left p-3 sm:p-4 border rounded hover:bg-emerald-50 transition"
                >
                  <i className="fas fa-map-marker-alt text-red-500 text-xl" aria-hidden="true"></i>
                  <div>
                    <div className="text-sm text-gray-500">Lokasi</div>
                    <div className="text-lg font-semibold text-gray-800">
                      Telkom University Landmark Tower (TULT)
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Klik untuk lihat peta</div>
                  </div>
                </button>

                {/* Gmail */}
                <div className="flex items-center gap-3 p-3 sm:p-4 border rounded">
                  <i className="fas fa-envelope text-blue-500 text-xl" aria-hidden="true"></i>
                  <div>
                    <div className="text-sm text-gray-500">Gmail</div>
                    <div className="text-lg font-semibold text-gray-800 select-all">
                      aryemunthe26@gmail.com
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: Form */}
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setSending(true); setSent(null);

                  const form = e.currentTarget;
                  const data = new FormData(form);

                  try {
                    const res = await fetch("https://formspree.io/f/mwpnolvd", {
                      method: "POST",
                      headers: { Accept: "application/json" },
                      body: data,
                    });

                    if (res.ok) {
                      setSent('ok');
                      form.reset();
                    } else {
                      setSent('err');
                    }
                  } catch (err) {
                    setSent('err');
                  } finally {
                    setSending(false);
                  }
                }}
                className="mt-0 grid gap-4 max-w-md md:max-w-none"
              >
                <input name="name" placeholder="Your Name" className="p-3 border rounded" required />
                <input type="email" name="email" placeholder="Email" className="p-3 border rounded" required />
                <textarea name="message" placeholder="Message" className="p-3 border rounded h-32" required />

                {/* optional fields */}
                <input type="hidden" name="_subject" value="New message from Portfolio" />
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                <button
                  disabled={sending}
                  className={"bg-emerald-500 text-white py-2.5 sm:py-3 rounded " + (sending ? "opacity-60 cursor-not-allowed" : "hover:opacity-80")}
                >
                  {sending ? "Sending..." : "Send"}
                </button>

                {sent === 'ok' && (
                  <p className="text-sm text-emerald-600">Thanks! Your message has been sent. 🎉</p>
                )}
                {sent === 'err' && (
                  <p className="text-sm text-red-600">Oops, failed to send. Please try again..</p>
                )}
              </form>
            </div>
          </div>

          {/* MAP MODAL */}
          {openMap && (
            <div
              className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
              onClick={() => setOpenMap(false)}
              aria-modal="true"
              role="dialog"
            >
              <div
                className="bg-white w-full max-w-4xl max-h-[80vh] rounded-xl shadow-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between px-4 py-3 border-b">
                  <h3 className="font-semibold">Lokasi — TULT</h3>
                  <button
                    type="button"
                    onClick={() => setOpenMap(false)}
                    className="px-3 py-1 rounded border border-red-200 text-red-600 hover:bg-red-50 active:bg-red-100 transition-colors"
                    aria-label="Close map"
                  >
                    Close
                  </button>
                </div>
                <div className="aspect-video">
                  <iframe
                    title="TULT Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.1663401331189!2d107.62819900087723!3d-6.970022406931092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9bc3974981d%3A0x613eec0feec9fcf7!2sTelkom%20University%20Landmark%20Tower%20(TULT)!5e0!3m2!1sid!2sid!4v1721804022112!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Arye Abisha Munthe
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
