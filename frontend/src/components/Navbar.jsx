import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
      menu: ["Overview", "Products", "Services", "Solutions", "Industries"],
      heading: "MRT is here to make a difference through technology.",
      subheading: "Leading the way in innovation for over 22 years...",
      Products: [
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
        "E-clinic Management",
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
        "Credit Cooperative Society Management Information System",
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
        "Remote Infrastructure Facility",
      ],
      Solutions: ["ERP", "AI", "IoT"],
      Industries: ["Education", "Healthcare", "Retail"],
    },
    "Who we are": {
      menu: ["Overview", "About Us", "Research & Innovation", "Our Brand"],
      heading: "We deliver excellence...",
      subheading: "MRT is committed to transforming lives...",
    },
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
        <div className="w-full py-3  px-10 flex items-center justify-between">
          {/* Logo Section */}
          <div className="pl-5 pr-2">
            <img src={Logo} alt="MRT" className="h-12" />
          </div>

          {/* Navigation Section */}
          <div className="flex-1">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between px-8">
              {/* Nav Items */}
              <ul className="hidden md:flex gap-6 text-[18px] font-medium items-center ml-6">
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
                <li className="text-gray-400 hover:text-white whitespace-nowrap">
                  CONTACT US
                </li>
              </ul>

              {/* Mobile Menu Button */}
              <div className="md:hidden pr-4">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                  {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden bg-black text-white px-4 py-4 space-y-4 text-base">
            {navItems.map((item, i) => (
              <li key={i} className="border-b border-gray-700 pb-2">
                {item}
              </li>
            ))}
            <li>CONTACT US</li>
          </ul>
        )}
      </nav>

      {/* Dropdown Content */}
      {activeDropdown && dropdownContent[activeDropdown] && (
        <div className="absolute top-18 left-0 w-full bg-[#1e1e1e] text-white z-40 shadow-lg transition-all duration-300 ease-in-out h-[80vh] overflow-hidden">
          <div className="max-w-screen-xl  px-6 py-8 flex h-full mt-4 ml-5 ">
            {/* Left Menu List */}
            <div className="w-1/3 pr-8 border-r border-gray-600 overflow-y-auto">
              {dropdownContent[activeDropdown].menu.map((menuItem, i) => (
                <div
                  key={i}
                  onMouseEnter={() => handleSubMenu(menuItem)} // ✅ Changed from onClick
                  className={`py-3 px-4 text-xl cursor-pointer flex justify-between items-center hover:bg-gray-500 border-b border-gray-700 font-basis text-gray-300 hover:text-white ${
                    activeSubMenu === menuItem
                      ? "bg-gray-700 border-l-4 border-white"
                      : ""
                  }`}
                >
                  {menuItem}
                  <span className="pl-1">
                    <FiChevronRight />
                  </span>
                </div>
              ))}
            </div>

            {/* Right Submenu or Info */}
            <div className="w-full pl-8 overflow-y-auto mt-4 ">
              {activeSubMenu && dropdownContent["What we do"][activeSubMenu] ? (
                <>
                  <h3 className="text-lg font-semibold mb-4">
                    {activeSubMenu}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pr-6">
                    {dropdownContent["What we do"][activeSubMenu].map(
                      (item, idx) => (
                        <div
                          key={idx}
                          className="text-sm text-gray-300 hover:text-white cursor-pointer hover:underline transition-all duration-200"
                        >
                          {item}
                        </div>
                      )
                    )}
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
                  <button className="px-6 py-2 border border-white rounded-full font-semibold hover:bg-white hover:text-black transition mt-20">
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
