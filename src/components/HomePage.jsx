import React from "react";
import {
  FaRobot,
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaMicrochip,
  FaGlobe,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  { title: "Blockchain Solutions", icon: <FaGlobe /> },
  { title: "AI & Machine Learning", icon: <FaRobot /> },
  { title: "Data Science & Analytics", icon: <FaDatabase /> },
  { title: "Website Development", icon: <FaCode /> },
  { title: "Mobile App Development", icon: <FaMobileAlt /> },
  { title: "IoT & Embedded Systems", icon: <FaMicrochip /> },
];

export default function HomePage() {
  return (
    <section className="bg-gray-900 text-white min-h-screen pt-20">
      {/* Hero Section */}
      <div className="text-center py-16 px-6">
        <h1 className="text-5xl font-extrabold leading-tight">
          Empowering Innovations with{" "}
          <span className="text-indigo-400">Technology</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Providing cutting-edge solutions in AI, Blockchain, IoT, and more.
        </p>
        <button className="mt-6 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-lg transition-all">
          Get Started
        </button>
      </div>

      {/* Services Section */}
      <div className="container mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-800 rounded-2xl shadow-lg text-center flex flex-col items-center transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-5xl text-indigo-400 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
