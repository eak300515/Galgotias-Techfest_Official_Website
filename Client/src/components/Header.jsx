import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import GalgotiasLogo from "../assets/white logo.png";
import { navigation } from "../constants";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const handleScrollToForm = () => {
    const element = document.getElementById("registration-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Toggle navigation visibility
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  // Handle click to close mobile menu and enable scrolling
  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-gray-800 bg-gray-900/90 backdrop-blur-sm ${
        openNavigation ? "bg-gray-900" : "bg-gray-900/90"
      }`}
    >
      <div className="flex items-center px-5 lg:px-8 xl:px-10 py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img
            src={GalgotiasLogo}
            width={190}
            height={40}
            alt="Galgotias Tech Council"
          />
        </a>

        {/* Navigation Links */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-gray-900 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="flex flex-col items-center justify-center lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative text-lg uppercase text-white transition-colors hover:text-pink-400 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-4 lg:text-sm lg:font-semibold ${
                  location.hash === item.url
                    ? "text-pink-400"
                    : "text-white/70"
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        {/* About GU Link */}
        <a
          href="#Galgotias"
          className="hidden mr-8 text-white/70 transition-colors hover:text-white lg:block"
        >
          About GU
        </a>

        {/* GUTechFest Button */}
        <a
          href="#login"
          onClick={handleScrollToForm}
          className="relative px-5 py-3 text-white font-semibold rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-lg hover:scale-105 transition-all before:absolute before:top-[-2px] before:left-[-2px] before:w-full before:h-full before:rounded-md before:bg-[linear-gradient(45deg,#FF0000,#FF7300,#FFFB00,#48FF00,#00FFD5,#002BFF,#FF00C8,#FF0000)] before:bg-size-600% before:blur-md before:animate-glowing"
        >
          GUTechFest
        </a>

        {/* Hamburger Menu for Mobile */}
        <button
          className="ml-auto lg:hidden text-white"
          onClick={toggleNavigation}
        >
          <HamburgerMenu openNavigation={openNavigation} />
        </button>
      </div>
    </div>
  );
};

export default Header;
