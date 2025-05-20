import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-sans bg-white text-gray-800 scroll-smooth">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600 tracking-wide">Joko Aiko</h1>
          <ul className="flex space-x-6 font-medium">
            <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
            <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100 text-center"
        id="hero"
        data-aos="fade-up"
      >
        <h2 className="text-5xl font-extrabold mb-4 text-blue-800">Hi, I’m Joko Aiko</h2>
        <p className="text-gray-700 text-lg max-w-md mb-6">
          Frontend developer passionate about building beautiful and responsive web interfaces.
        </p>
        <a
          href="#projects"
          className="mt-2 inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all"
        >
          See My Work
        </a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="h-screen py-20 bg-white text-center flex flex-col justify-center items-center px-4"
        data-aos="fade-up"
      >
        <h3 className="text-4xl font-bold mb-6 text-blue-800">About Me</h3>
        <p className="max-w-2xl text-gray-700 text-lg leading-relaxed mb-8">
          I’m a self-taught frontend developer with a deep interest in building interactive, accessible, and responsive websites. With a strong focus on React and TailwindCSS, I transform ideas into real web experiences that are fast and user-friendly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition" data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-xl font-semibold mb-2 text-blue-700">🧠 Skills</h4>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>React, Vite</li>
              <li>TailwindCSS, CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition" data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-xl font-semibold mb-2 text-blue-700">🚀 Experience</h4>
            <p className="text-gray-700 text-sm">
              1+ years building responsive web apps, contributing to open source, and collaborating in team-based projects.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition" data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-xl font-semibold mb-2 text-blue-700">🎯 Goals</h4>
            <p className="text-gray-700 text-sm">
              Keep learning, create impactful web experiences, and collaborate with creative teams to solve meaningful problems.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="h-screen py-20 bg-gray-100 text-center flex flex-col justify-center items-center px-4"
        data-aos="fade-up"
      >
        <h3 className="text-4xl font-bold mb-10 text-blue-800">Projects</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          {/* Project 1 */}
          <div
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-all"
            data-aos="zoom-in"
          >
            <img
              src="/src/assets/Pomodoro.png"
              alt="Pomodoro App Screenshot"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-2xl font-semibold mb-2 text-blue-700">
              🕒 Pomodoro Desktop App
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              A productivity timer app built using <strong>React</strong> + <strong>Electron</strong>, featuring session tracking, dark/light themes, alarm sounds, and long/short break modes.
            </p>
            <a
              href="https://github.com/nodtsprinG/Pomodoro"
              className="inline-block text-blue-600 hover:underline text-sm"
            >
              View Project →
            </a>
          </div>

          {/* Project 2 */}
          <div
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-all"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src="/images/portfolio-website.png"
              alt="Portfolio Website Screenshot"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-2xl font-semibold mb-2 text-blue-700">
              🌐 Ledger
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Ledger is a personal portfolio website yang dibuat dengan <strong>Vite + React</strong> dan <strong>TailwindCSS</strong>. Website ini menampilkan animasi scroll, desain responsif, serta navigasi yang sederhana dan mudah digunakan.
            </p>
            <a
              href="#"
              className="inline-block text-blue-600 hover:underline text-sm"
            >
              View Project →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen py-20 bg-white text-center flex flex-col justify-center items-center px-4"
        data-aos="fade-up"
      >
        <h3 className="text-4xl font-bold mb-6 text-blue-800">Contact Me</h3>
        <p className="text-gray-700 text-lg mb-6 max-w-xl">
          Let’s connect! Feel free to reach out for collaboration, questions, or just to say hello.
        </p>

        <div className="space-y-4">
          <a
            href="mailto:jokoaiko8b@gmail.com"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12H8m8 0l-8-8m8 8l-8 8"
              />
            </svg>
            <span>jokoaiko8b@gmail.com</span>
          </a>

          <div className="flex justify-center space-x-6 mt-6 text-blue-600">
            <a href="https://github.com/nodtspring" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition">
              <i className="fab fa-github text-2xl">Github</i>
            </a>
            <a href="https://linkedin.com/in/JokoAiko" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition">
              <i className="fab fa-linkedin text-2xl">Linkedin</i>
            </a>
            <a href="https://twitter.com/jjoaiko_" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition">
              <i className="fab fa-twitter text-2xl">X</i>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-6">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;