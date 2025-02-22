import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import MailIcon from "@mui/icons-material/Mail";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-opacity-80 backdrop-blur-md shadow-xl">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <a
          href="/"
          className="text-3xl font-extrabold tracking-wide text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent transition-all duration-300 hover:scale-105"
        >
          Synchronous<span className="text-white">.</span>
        </a>

        {/* HAMBURGER MENU BUTTON */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <CloseIcon className="text-blue-400 w-8 h-8 transition-all duration-200 hover:rotate-180 hover:shadow-lg" />
          ) : (
            <MenuIcon className="text-blue-400 w-8 h-8 transition-all duration-200 hover:scale-110 hover:shadow-lg" />
          )}
        </button>

        {/* DESKTOP NAVIGATION */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href={link.href}
                className="flex items-center space-x-2 text-lg font-semibold text-gray-200 hover:text-blue-400 transition-all duration-300 hover:drop-shadow-xl"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-black bg-opacity-90 backdrop-blur-xl shadow-lg md:hidden"
          >
            <ul className="flex flex-col items-center space-y-6 py-6">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <a
                    href={link.href}
                    className="flex items-center space-x-3 text-lg font-semibold text-gray-200 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                    onClick={toggleMenu}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// NAVIGATION LINKS DATA
const navLinks = [
  {
    href: "#home",
    label: "Home",
    icon: <HomeIcon className="w-6 h-6 text-blue-400" />,
  },
  {
    href: "#about",
    label: "About",
    icon: <InfoIcon className="w-6 h-6 text-blue-400" />,
  },
  {
    href: "#services",
    label: "Services",
    icon: <BuildIcon className="w-6 h-6 text-blue-400" />,
  },
  {
    href: "#contact",
    label: "Contact",
    icon: <MailIcon className="w-6 h-6 text-blue-400" />,
  },
];

export default Header;
