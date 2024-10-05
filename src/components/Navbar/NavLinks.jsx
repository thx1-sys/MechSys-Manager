// src/components/Navbar/NavLinks.jsx
import React from "react";

const NavLinks = ({ activeSection, handleScroll, linkClasses }) => {
  const links = [
    { id: "home", label: "Inicio" },
    { id: "info", label: "Información" },
    { id: "equipos", label: "Equipos" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className={`${linkClasses} ${
            activeSection === link.id ? "text-[#3E9055] opacity-100" : ""
          }`}
          onClick={(e) => handleScroll(e, link.id)}
        >
          {link.label}
        </a>
      ))}
    </>
  );
};

export default NavLinks;
