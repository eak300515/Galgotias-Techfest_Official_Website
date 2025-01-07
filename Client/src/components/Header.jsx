import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import GalgotiasLogo from "../assets/white logo.png";

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
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between px-6 lg:py-5">
        {/* Logo */}
        <a href="#hero" className="block">
          <img
            src={GalgotiasLogo}
            alt="Galgotias Tech Council"
            className="w-40 lg:w-52 transition-transform hover:scale-105"
          />
        </a>

        {/* Navigation */}
        <nav
          className={`fixed top-0 left-0 h-screen w-full bg-black/50 backdrop-blur-lg flex flex-col items-center justify-center gap-8 transform ${
            openNavigation ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 lg:static lg:h-auto lg:w-auto lg:translate-x-0 lg:flex lg:flex-row`}
        >
          <a
            href="#attraction"
            className="text-white text-lg uppercase font-semibold tracking-wider hover:text-pink-500 transition"
          >
            Event Attraction
          </a>
          <a
            href="#knowus"
            className="text-white text-lg uppercase font-semibold tracking-wider hover:text-pink-500 transition"
          >
            Know Us
          </a>
          <a
            href="#workshops"
            className="text-white text-lg uppercase font-semibold tracking-wider hover:text-pink-500 transition"
          >
            Workshops
          </a>
          <a
            href="#events"
            className="text-white text-lg uppercase font-semibold tracking-wider hover:text-pink-500 transition"
          >
            Events
          </a>
          <a
            href="#aboutgu"
            className="text-white text-lg uppercase font-semibold tracking-wider hover:text-pink-500 transition"
          >
            About GU
          </a>
        </nav>

        {/* GUTechFest Button */}
        <a
          href="#gutechfest"
          className="relative px-6 py-3 text-white text-sm font-semibold uppercase tracking-wider rounded-full group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-40 rounded-lg blur-lg transition-transform transform group-hover:scale-105"></div>
          <span className="relative z-10">GUTechFest</span>
          <div className="absolute inset-0 rounded-lg border border-dashed border-pink-500 opacity-50 group-hover:animate-spin"></div>
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
