import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Swal from "sweetalert2"; // Import SweetAlert2
import emailjs from "emailjs-com"; // Import EmailJS
// Initialize AOS
AOS.init();

// Initialize EmailJS
emailjs.init("mz5yo18bx_bXcmm6gS"); // Replace with your own EmailJS user ID

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Fungsi untuk menambahkan kelas 'visible' saat elemen memasuki viewport
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fade-in'); // Pilih semua elemen dengan kelas fade-in

    const options = {
      root: null, // Menggunakan viewport sebagai root
      threshold: 0.1, // 10% dari elemen harus terlihat di viewport untuk memicu animasi
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Menambahkan kelas 'visible' untuk memulai animasi
          observer.unobserve(entry.target); // Menghentikan observasi setelah animasi dijalankan
        }
      });
    }, options);

    fadeInElements.forEach(element => {
      observer.observe(element); // Mulai observasi pada setiap elemen dengan kelas fade-in
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-lg font-bold text-indigo-600">Portfolio</div>
            <div className="hidden md:flex space-x-4">
              <a href="#home" className="nav-link fade-in" onClick={handleSmoothScroll}>
                <i className="bi bi-house-door"></i> Home
              </a>
              <a href="#portfolio" className="nav-link fade-in" onClick={handleSmoothScroll}>
                <i className="bi bi-briefcase"></i> Portfolio
              </a>
              <a href="#skills" className="nav-link fade-in" onClick={handleSmoothScroll}>
                <i className="bi bi-tools"></i> Skills
              </a>
              <a href="#contact" className="nav-link fade-in" onClick={handleSmoothScroll}>
                <i className="bi bi-envelope"></i> Contact
              </a>
            </div>
            <button className="md:hidden text-gray-500" onClick={handleMenuToggle}>
              {isMenuOpen ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-4 py-2 space-y-2 bg-white">
            <a href="#home" className="nav-link fade-in" onClick={handleSmoothScroll}>
              <i className="bi bi-house-door"></i> Home
            </a>
            <a href="#portfolio" className="nav-link fade-in" onClick={handleSmoothScroll}>
              <i className="bi bi-briefcase"></i> Portfolio
            </a>
            <a href="#skills" className="nav-link fade-in" onClick={handleSmoothScroll}>
              <i className="bi bi-tools"></i> Skills
            </a>
            <a href="#contact" className="nav-link fade-in" onClick={handleSmoothScroll}>
              <i className="bi bi-envelope"></i> Contact
            </a>
          </div>
        )}
      </nav>

      {/* Other sections of your portfolio */}
      <section id="home" className="fade-in">
        <h2 className="text-4xl">Welcome to My Portfolio</h2>
        <p className="text-xl">Explore my projects and skills.</p>
      </section>

      <section id="portfolio" className="fade-in">
        <h2 className="text-4xl">Portfolio</h2>
        <p>Here are some of my best works.</p>
      </section>

      <section id="skills" className="fade-in">
        <h2 className="text-4xl">Skills</h2>
        <p>Here are the skills I excel at.</p>
      </section>

      <section id="contact" className="fade-in">
        <h2 className="text-4xl">Contact</h2>
        <p>If you'd like to get in touch, feel free to contact me.</p>
      </section>
    </div>
  );
};

ReactDOM.render(<Portfolio />, document.getElementById("root"));
