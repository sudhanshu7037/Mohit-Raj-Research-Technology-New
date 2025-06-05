import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import Logo from "../assets/MRTPL-Logo1.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const navItems = [
    "What we do",
    "Who we are",
    "Insights",
    "Careers",
    "Newsroom",
    "Investors",
  ];

  const dropdownContent = {
    "What we do": {
      menu: ["Overview", "Products and Platforms", "Services", "Solutions", "Industries"],
      heading: "MRT is here to make a difference through technology.",
      subheading:
        "Leading the way in innovation for over 22 years, we build greater futures for businesses across multiple industries and 55 countries.",
      "Products and Platforms": [
        "University Automation Software",
        "Engineering College Management and Information System",
        "College/Institute Management Systems",
        "School Management System",
        "Online Examination Management System",
        "Entrance Exam Management and Information System",
        "Smart Learning & Content Management System (SLCMS)",
        "Library Management System",
        "Medical College Management and Information System",
        "Hospital Management & Information System",
        "E-Hospital Management",
        "E-Clinic Management",
        "Bioinformatics Management and Information System",
        "E-Company System",
        "E-Business Management",
        "CRM Software",
        "Account Management System (Trulymax-S)",
        "Account Management System (Trulymax-M)",
        "Finance Account Management System (Trulymax-L)",
        "Human Resource Management System",
        "Inventory Management System",
        "Purchase Management System",
        "E-Banking Management System",
        "Police Management System",
        "E-Govt. Office Management System",
        "Credit Cooperative Society Management Information System"
      ],
      Services: [
  "Software Development",
  "Development, Hosting & Promotion of Websites",
  "Hardware & Networking Management Solutions",
  "Multimedia & Animation Solutions",
  "Digital Marketing",
  "Data Centers Development Facility",
  "E-Learning",
  "Video Conferencing",
  "Security & Surveillances Solutions",
  "Data Digitization Services",
  "Remote Infrastructure Facility"
],

      Solutions: ["Solution 1", "Solution 2", "Solution 3", "Solution 4"],
      Industries: ["Industry 1", "Industry 2", "Industry 3", "Industry 4"]
    },
    "Who we are": {
      menu: ["Mission", "Vision", "Leadership", "Our Values"],
      heading: "Driven by purpose, powered by people.",
      subheading:
        "MRT is committed to transforming lives and communities through technology, innovation, and inclusive progress."
    }
  };

  const handleDropdown = (title) => {
    setActiveDropdown((prev) => (prev === title ? null : title));
    setActiveSubMenu(null);
  };

  const handleSubMenu = (menuItem) => {
    setActiveSubMenu(menuItem === activeSubMenu ? null : menuItem);
  };

  return (
    <>
      <nav className="bg-black text-white w-full relative z-50">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 flex-shrink-0">
            <img src={Logo} alt="MRT" className="h-14" />
          </div>

          <ul className="hidden md:flex gap-6 text-base font-medium items-center">
            {navItems.map((item, i) => (
              <li
                key={i}
                className="cursor-pointer flex items-center gap-1 hover:text-gray-300 whitespace-nowrap"
                onClick={() => handleDropdown(item)}
              >
                {item}
                <FiChevronDown className="text-sm mt-[1px]" />
              </li>
            ))}
            <li className="text-gray-400 hover:text-white whitespace-nowrap">CONTACT US</li>
            <li className="text-gray-400 hover:text-white whitespace-nowrap">MRT WORLDWIDE</li>
            <li><FaSearch className="cursor-pointer" /></li>
            <li><img src="/mrt-icon.svg" alt="MRT" className="h-6" /></li>
          </ul>

          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <ul className="md:hidden bg-black text-white px-4 py-4 space-y-4 text-base">
            {navItems.map((item, i) => (
              <li key={i} className="border-b border-gray-700 pb-2">{item}</li>
            ))}
            <li>CONTACT US</li>
            <li>MRT WORLDWIDE</li>
          </ul>
        )}
      </nav>

      {activeDropdown && dropdownContent[activeDropdown] && (
        <div className="absolute top-18 left-0  w-full bg-[#1e1e1e] text-white z-40 shadow-lg transition-all duration-300 ease-in-out h-[80vh] overflow-hidden">
          <div className="max-w-screen-xl mx-auto px-6 py-8 flex h-full">
            <div className="w-1/3 pr-8 border-r border-gray-600 overflow-y-auto">
              {dropdownContent[activeDropdown].menu.map((menuItem, i) => (
                <div
                  key={i}
                  onClick={() => handleSubMenu(menuItem)}
                  className={`py-3 px-4 text-sm cursor-pointer flex justify-between items-center hover:bg-gray-700 border-b border-gray-700 ${
                    activeSubMenu === menuItem ? "bg-gray-700 border-l-4 border-white" : ""
                  }`}
                >
                  {menuItem}
                  <FiChevronRight />
                </div>
              ))}
            </div>

            <div className="w-2/3 pl-8 overflow-y-auto">
              {activeSubMenu && dropdownContent["What we do"][activeSubMenu] ? (
                <>
                  <h3 className="text-lg font-semibold mb-4">{activeSubMenu}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pr-4">
                    {dropdownContent["What we do"][activeSubMenu].map((item, idx) => (
                      <div
                        key={idx}
                        className="text-sm text-gray-300 hover:text-white cursor-pointer"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-light mb-4">
                    {dropdownContent[activeDropdown].heading}
                  </h2>
                  <p className="text-gray-300 mb-6">
                    {dropdownContent[activeDropdown].subheading}
                  </p>
                  <button className="px-6 py-2 border border-white rounded-full font-semibold hover:bg-white hover:text-black transition">
                    Discover all solutions
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
