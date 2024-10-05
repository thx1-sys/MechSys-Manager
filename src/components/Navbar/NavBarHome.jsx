// src/components/Navbar/NavBarHome.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetchImage from "../../hooks/useFetchImage";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import MenuIcon from "./MenuIcon";

const NavBarHome = () => {
  const { imageUrl } = useFetchImage("Logo_ITD.png");
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const linkClasses =
    "text-[#B4B4B8] opacity-50 text-xl md:text-xl font-medium hover:opacity-90 transform transition duration-500 px-2 md:px-4 py-2 rounded-md image-with-white-glow";

  const handleScroll = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    const offset = -50;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = section.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    history.replaceState(null, null, " ");
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "info", "equipos", "contacto", "ingresar"];
      const scrollPosition = window.scrollY + 60;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!imageUrl) return null;

  return (
    <div className="fixed top-0 left-0 w-full px-4 md:px-8 lg:px-16 h-16 md:h-24 bg-black/50 transform transition duration-500 border-b-2 border-[#303030] z-50 hover:bg-black/80 backdrop-blur-md backdrop-brightness-125">
      <div className="h-full flex items-center justify-between">
        <div className=" h-full flex items-center">
          <a href="#home" onClick={(e) => handleScroll(e, "home")}>
            <img
              className="w-12 md:w-16 opacity-50 hover:opacity-90 hover:scale-105 transform transition duration-500 image-with-white-glow"
              src={imageUrl}
              alt="Escudo del Instituto Tecnológico De Durango"
            />
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <NavLinks
            activeSection={activeSection}
            handleScroll={handleScroll}
            linkClasses={linkClasses}
          />
        </div>
        <div className="hidden md:flex">
          <a
            className={`bg-[#0A170D] cursor-pointer px-4 md:px-6 py-2 text-[#3E9055] font-inter rounded-xl hover:bg-[#3E9055] hover:text-[#0A170D] hover:shadow-green-lg transform transition duration-500 text-md border border-[#3E9055] ${
              activeSection === "ingresar" ? "bg-[#3E9055] text-[#0A170D]" : ""
            }`}
            onClick={handleLoginClick}
          >
            Ingresar
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-[#B4B4B8] focus:outline-none transform transition duration-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <MenuIcon isOpen={isMobileMenuOpen} />
          </button>
        </div>
      </div>

      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        activeSection={activeSection}
        handleScroll={handleScroll}
        handleLoginClick={handleLoginClick}
        linkClasses={linkClasses}
      />
    </div>
  );
};

export { NavBarHome };
