import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold">Synchronous</h2>
          <p className="mt-4 text-gray-400">
            Providing top-notch services in Blockchain, AI, Data Science,
            Website & App Development, IoT, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#home" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div>
          <h3 className="text-xl font-semibold">Subscribe to our Newsletter</h3>
          <div className="mt-4 flex items-center bg-gray-800 p-2 rounded-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-none outline-none flex-1 px-2 text-white"
            />
            <button className="bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-600 transition-all">
              Subscribe
            </button>
          </div>

          <h3 className="text-xl font-semibold mt-6">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a
              href="#"
              className="text-xl hover:text-indigo-500 transition-all"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-xl hover:text-indigo-500 transition-all"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-xl hover:text-indigo-500 transition-all"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="text-xl hover:text-indigo-500 transition-all"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 mt-8" />
      <p className="text-center text-gray-500 mt-4">
        &copy; 2025 Synchronous. All rights reserved.
      </p>
    </footer>
  );
}
