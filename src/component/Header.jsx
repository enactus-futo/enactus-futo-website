import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ScrollToTop from "./ScrollToTop";
import Logo from "../assets/logo.png";
const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "Projects", to: "/projects" },
  { label: "Contact Us", to: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  const handleLinkClick = () => setMenuOpen(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // Close menu when scrolling in either direction
      if (currentScrollY !== lastScrollY) {
        setMenuOpen(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white  shadow-lg backdrop-blur-sm"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-14 ">
        <div className="flex items-center justify-between h-16 md:h-20  ">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={Logo} alt="Enactus Logo" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 text-black">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm md:text-lg  font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#F5A623] text-[#1B1464] font-semibold"
                      : "text-black hover:text-[#f5a623] "
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden text-black p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white border  border-black/10 px-4  py-4 mx-4 mb-4 rounded-2xl flex flex-col gap-4 text-center ">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `px-4 py-3 rounded-full text-sm font-medium text-center transition-all duration-200 border ${
                  isActive
                    ? "bg-[#F5A623] text-[#1B1464] font-semibold border-[#F5A623]"
                    : "text-gray-700 border-gray-200 hover:border-[#F5A623] hover:text-[#1B1464]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
