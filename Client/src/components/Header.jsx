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

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

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
        <a className="block w-[10rem] xl:mr-8" href="#hero">
          <img
            src={GalgotiasLogo}
            width={160}
            height={35}
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
                className={`block text-lg uppercase text-white transition-colors hover:text-pink-400 ${
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

        {/* Slim GUTechFest Button */}
        <a
          href="#login"
          onClick={handleScrollToForm}
          className="relative px-4 py-1.5 text-sm font-medium text-white transition-all duration-300 border-2 border-transparent rounded-full bg-transparent hover:text-black before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-blue-500 before:z-[-1] before:opacity-50 before:transition-opacity before:duration-300 before:hover:opacity-100 after:absolute after:inset-0 after:rounded-full after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:hover:scale-x-100 after:z-[-2]"
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
