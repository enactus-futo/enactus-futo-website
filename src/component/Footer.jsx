import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";
import Logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "The Team", to: "/team" },
  { label: "Contact Us", to: "/contact" },
];

// const contactInfo = [
//   { label: "enactusfuto@facebook.com", href: "https://facebook.com/enactusfuto" },
//   { label: "futoenactus@gmail.com", href: "mailto:futoenactus@gmail.com" },
//   { label: "enactus.futo.org", href: "https://enactus.futo.org" },
//   { label: "enactusfuto.linkedin.com", href: "https://linkedin.com/company/enactusfuto" },
// ];

const socials = [
  {
    icon: FaFacebook,
    href: "https://facebook.com/enactusfuto",
    label: "Facebook",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/company/enactusfuto",
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    href: "https://twitter.com/enactusfuto",
    label: "Twitter",
  },
  { icon: Mail, href: "mailto:futoenactus@gmail.com", label: "Gmail" },
];

const Footer = () => {
  return (
    <footer className="bg-white   border-gray-200">
      <div className="w-full mx-auto px-6  lg:px-12 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 ">
            <Link to="/" className="flex items-center gap-2 w-fit">
              <img src={Logo} alt="Enactus Logo" />
            </Link>
            <p className="text-gray-500 text-sm  md:text-lg leading-relaxed max-w-xs  ">
              Empowering students to create positive change through
              entrepreneurial action.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:pl-10">
            <h4 className="text-[#1B1464] font-bold text-sm uppercase tracking-widest mb-4 md:text-lg">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2 px-2">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gray-500 text-sm md:text-lg  hover:text-[#F5A623] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}

          <div className="text-[#1B1464] font-bold text-sm uppercase tracking-widest md:text-lg lg:pl-20">
            <p>Follow Us</p>
            <div className="flex items-center gap-4 mt-4 ">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#F5A623] hover:text-[#F5A623] transition-all duration-200"
                >
                  <Icon size={16} md:size={30} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          {/* <div>
            <h4 className="text-[#1B1464] font-bold text-sm uppercase tracking-widest mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-2">
              {contactInfo.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 text-sm hover:text-[#F5A623] transition-colors duration-200 break-all"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Divider */}
        <div className=" border-gray-200 pt-2">
          {/* Copyright */}
          <p className="text-center text-gray-400 text-sm md:text-md">
            © {new Date().getFullYear()} Enactus FUTO. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
