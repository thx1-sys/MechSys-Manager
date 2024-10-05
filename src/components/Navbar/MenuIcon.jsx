// src/components/Navbar/MenuIcon.jsx
import React from "react";

const MenuIcon = ({ isOpen }) => {
  return (
    <svg
      className="w-6 h-6 text-[#B4B4B8]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
      ></path>
    </svg>
  );
};

export default MenuIcon;
