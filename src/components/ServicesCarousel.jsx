import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import {
  FaRobot,
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaMicrochip,
  FaGlobe,
} from "react-icons/fa";
import { Menu, X } from "lucide-react";

// Services Data
const services = [
  { title: "Blockchain Solutions", icon: <FaGlobe /> },
  { title: "AI & Machine Learning", icon: <FaRobot /> },
  { title: "Data Science & Analytics", icon: <FaDatabase /> },
  { title: "Website Development", icon: <FaCode /> },
  { title: "Mobile App Development", icon: <FaMobileAlt /> },
  { title: "IoT & Embedded Systems", icon: <FaMicrochip /> },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 shadow-md z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold tracking-wide text-white">
            Synchronous
          </a>
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <ul
            className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent p-6 md:p-0 flex flex-col md:flex-row items-center gap-6 transition-all duration-300 ease-in-out ${
              isOpen ? "flex" : "hidden md:flex"
            }`}
          >
            <li>
              <a href="#home" className="hover:text-gray-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-300 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <h1 className="text-5xl font-extrabold mb-4">
          Empowering Innovation with Technology
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mb-6">
          We provide cutting-edge solutions in Blockchain, AI, Data Science, Web
          & Mobile Development, and IoT.
        </p>
        <a
          href="#services"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-medium transition"
        >
          Explore Our Services
        </a>
      </section>

      {/* Services Carousel */}
      <section id="services" className="py-20">
        <h2 className="text-4xl font-extrabold text-center mb-10">
          Our Services
        </h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="w-72 h-64 flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg rounded-xl p-6 transform hover:scale-105 transition duration-500 ease-in-out">
                <div className="text-5xl mb-4">{service.icon}</div>
                <p className="text-xl font-semibold text-center">
                  {service.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center py-6">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Synchronous. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
