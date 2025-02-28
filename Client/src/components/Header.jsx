import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import GalgotiasLogo from "../assets/white logo.png";
import FestLogo from "../assets/festlogo.png";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <a href="#hero" className="block">
          <img
            src={GalgotiasLogo}
            alt="Galgotias Tech Council"
            className="w-36 lg:w-44 transition-transform hover:scale-105"
          />
        </a>

        {/* Navigation */}
        <nav
          className={`fixed top-0 left-0 h-screen w-full lg:relative lg:h-auto lg:w-auto lg:flex lg:items-center gap-6 ${
            openNavigation
              ? "bg-black/50 backdrop-blur-lg flex flex-col justify-center"
              : "hidden"
          }`}
        >
          {/* Back Button (Visible Only in Mobile Navigation) */}
          <button
            className="absolute top-5 left-5 text-white text-xl lg:hidden"
            onClick={toggleNavigation}
          >
            ✖
          </button>

          <a
            href="#attraction"
            className="text-white text-base uppercase tracking-wide hover:text-pink-500 transition"
            onClick={toggleNavigation} // Close menu on click
          >
            Event Attraction
          </a>
          <a
            href="#knowus"
            className="text-white text-base uppercase tracking-wide hover:text-pink-500 transition"
            onClick={toggleNavigation}
          >
            Know Us
          </a>
          <a
            href="#Workshops"
            className="text-white text-base uppercase tracking-wide hover:text-pink-500 transition"
            onClick={toggleNavigation}
          >
            Workshops
          </a>
          <a
            href="#Events"
            className="text-white text-base uppercase tracking-wide hover:text-pink-500 transition"
            onClick={toggleNavigation}
          >
            Events
          </a>
          <a
            href="#Competitions"
            className="text-white text-base uppercase tracking-wide hover:text-pink-500 transition"
            onClick={toggleNavigation}
          >
            Competitions
          </a>
        </nav>

        {/* Fest Logo */}
        <a href="#techverse" className="block">
          <img
            src={FestLogo} 
            alt="Fest Logo"
            className="w-36 lg:w-44 transition-transform hover:scale-105"
          />
        </a>

        {/* Hamburger Menu */}
        <button
          className="ml-4 text-white lg:hidden"
          onClick={toggleNavigation}
        >
          <div className="flex flex-col gap-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
