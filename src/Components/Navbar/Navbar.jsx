import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Darkmode from "./Darkmode";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { MdNightlight, MdLightMode } from "react-icons/md";

const Navlinks = [
  { id: 1, name: "Home", link: "#" },
  { id: 2, name: "Products", link: "#" },
  { id: 3, name: "Pricing", link: "#" },
  { id: 4, name: "Contact", link: "#" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="relative z-[9999] text-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="h-16" />
            <p className="text-3xl">
              VR <span className="font-bold">World</span>
            </p>
          </div>

          {/* Desktop Menu Section */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500"
                  >
                    {name}
                  </a>
                </li>
              ))}

              {/* Darkmode feature */}
              <Darkmode />
            </ul>
          </nav>

          {/* Mobile Menu Section */}
          <div className="md:hidden block">
            <div className="flex gap-4 items-center">
              {/* Darkmode feature */}
              <Darkmode />
              {showMenu ? (
                <HiMenuAlt1 className="cursor-pointer" size={30} />
              ) : (
                <HiMenuAlt3 className="cursor-pointer" size={30} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
