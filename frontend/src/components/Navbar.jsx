import React, { useState } from "react";
import Logo from "../assets/MRTPL-Logo1.png";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gray-800 h-10 flex justify-between px-4 md:px-20 items-center text-white fixed top-0 left-0 w-full z-50 text-sm">
        <div className="flex items-center gap-2">
          <FaPhone />
          <span>+012 345 6789</span>
          <span className="px-2">|</span>
          <FaEnvelope />
          <span>info@example.com</span>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="https://www.facebook.com/profile.php?id=100066869172911">
            <FaFacebook />
          </a>
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-black text-white pt-12 px-4 md:px-20">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img src={Logo} alt="Logo" className="h-12" />

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 text-[16px] font-medium text-gray-400">
            {["What we do", "Who we are", "Insights", "Career", "Newsroom", "Investors"].map((item, index) => (
              <li key={index} className="flex items-center gap-1 cursor-pointer hover:text-white">
                <a href="">{item}</a>
                <IoIosArrowDown />
              </li>
            ))}
          </ul>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center gap-4 text-sm">
            <a href="" className="text-gray-300 hover:text-white">CONTACT US</a>
            <span className="text-gray-300">MRT WORLDWIDE</span>
            <FiSearch className="text-2xl cursor-pointer" />
            <button className="bg-orange-600 px-3 py-1 rounded-md">Login</button> 
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            {menuOpen ? (
              <FaTimes className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
            ) : (
              <FaBars className="text-2xl cursor-pointer" onClick={() => setMenuOpen(true)} />
            )}
          </div>
        </div>

  {/* Mobile Menu */}
{menuOpen && (
  <div className="fixed top-0 left-0 w-screen h-screen bg-gray-900 text-white z-50 p-4 flex flex-col gap-4 text-sm">
    
    {/* Top Bar: Logo + Close Button */}
    <div className="flex justify-between items-center mb-4">
      <img src={Logo} alt="Logo" className="h-10" />
      <FaTimes className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
    </div>

    {/* Menu Items */}
    {["What we do", "Who we are", "Insights", "Career", "Newsroom", "Investors"].map((item, index) => (
      <div key={index} className="flex items-center justify-between border-b border-gray-700 py-3 px-2">
        <a href="#" className="text-base">{item}</a>
        <IoIosArrowDown className="text-lg" />
      </div>
    ))}

    {/* Footer Links */}
    <div className="flex flex-col gap-2 mt-4 px-2  border-gray-700">
      <a href="#" className="text-gray-300 hover:text-white text-sm tracking-wider">CONTACT US</a>
      <span className="text-gray-300 text-sm tracking-wider">MRT WORLDWIDE</span>
    </div>
  </div>
)}

      </nav>
    </>
  );
};

export default Navbar;
