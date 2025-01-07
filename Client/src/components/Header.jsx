import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { HamburgerMenu } from "./design/Header";
import GalgotiasLogo from "../assets/white logo.png";
import { navigation } from "../constants";

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
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#hero" className="block w-28">
          <img
            src={GalgotiasLogo}
            alt="Galgotias Tech Council"
            className="w-full"
          />
        </a>

        {/* Navigation */}
        <nav
          className={`fixed top-0 left-0 h-screen w-full bg-gray-900 flex flex-col items-center justify-center gap-6 transform ${
            openNavigation ? "translate-x-0" : "-translate-x-full"
          } transition-transform lg:static lg:flex lg:flex-row lg:h-auto lg:w-auto lg:translate-x-0`}
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              onClick={() => setOpenNavigation(false)}
              className="text-white text-lg lg:text-sm uppercase font-medium hover:text-pink-500 transition"
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* GUTechFest Button */}
        <a
          href="#login"
          className="relative inline-block px-5 py-2 text-sm font-semibold text-white uppercase transition-transform transform border border-transparent rounded-full group hover:scale-105"
        >
          <span className="absolute inset-0 transition-transform bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full opacity-70 group-hover:opacity-100 group-hover:scale-110"></span>
          <span className="relative z-10">GUTechFest</span>
        </a>

        {/* Hamburger Menu */}
        <button
          className="ml-4 text-white lg:hidden"
          onClick={toggleNavigation}
        >
          <HamburgerMenu openNavigation={openNavigation} />
        </button>
      </div>
    </header>
  );
};

export default Header;
