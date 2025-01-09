import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import GalgotiasLogo from "https://res.cloudinary.com/di1mfyjus/image/upload/v1736408583/vnbs1td7ygyjmesoorv1.png";

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
          <a
            href="#attraction"
            className="text-white text-base uppercase tracking-wide hover:text-pink-500 transition"
          >
            Event Attraction
          </a>
          <a
            href="#knowus"
            className="text-white text-base uppercase tracking-wide hover:text-pink-500 transition"
          >
            Know Us
          </a>
          <a
            href="#Workshops"
            className="text-white text-base uppercase tracking-wide hover:text-pink-500 transition"
          >
            Workshops
          </a>
          <a
            href="#Events"
            className="text-white text-base uppercase tracking-wide hover:text-pink-500 transition"
          >
            Events
          </a>
          <a
            href="#Competitions"
            className="text-white text-base uppercase tracking-wide hover:text-pink-500 transition"
          >
            Competitions
          </a>
        </nav>

        {/* GUTechFest Button */}
        <a
          href="#techverse"
          className="relative flex items-center justify-center w-24 h-10 text-white text-xs font-semibold uppercase tracking-wider group"
        >
          <div className="absolute inset-0 clip-hexagon bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-40 transition-transform transform group-hover:scale-105"></div>
          <span className="relative z-10">TECHVERSE</span>
          <div className="absolute inset-0 clip-hexagon border border-pink-500 opacity-50 group-hover:animate-pulse"></div>
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
