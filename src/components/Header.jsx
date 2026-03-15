import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">

      {/* Top Bar */}
      <div className="bg-amber-400 text-gray-700 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4">

          <div className="flex space-x-6">
            <a href="tel:+971501478398" className="hover:text-black">
              📞 +971501478398
            </a>

            <a href="mailto:info@tyrefixerruae.com" className="hover:text-black">
              ✉️ info@tyrefixerruae.com
            </a>
          </div>

        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-black text-white relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">

          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="logo" className="h-8" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li><Link to="/" className="hover:text-amber-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-amber-400">About</Link></li>
            <li><Link to="/service" className="hover:text-amber-400">Services</Link></li>
            <li><Link to="/contact" className="hover:text-amber-400">Contact</Link></li>
          </ul>

          {/* Button */}
          <a
            href="https://wa.me/971501478398"
            className="hidden md:block bg-amber-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition"
          >
            Book Now
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setOpen(!open)}
          >
            <span className={`w-6 h-0.5 bg-amber-400 transition ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-amber-400 transition ${open ? "opacity-0" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-amber-400 transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </button>

        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-black transition-all duration-300 overflow-hidden ${
            open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li><Link to="/" onClick={()=>setOpen(false)} className="hover:text-amber-400">Home</Link></li>
            <li><Link to="/about" onClick={()=>setOpen(false)} className="hover:text-amber-400">About</Link></li>
            <li><Link to="/service" onClick={()=>setOpen(false)} className="hover:text-amber-400">Services</Link></li>
            <li><Link to="/contact" onClick={()=>setOpen(false)} className="hover:text-amber-400">Contact</Link></li>
          </ul>
        </div>

      </nav>

    </header>
  );
};

export default Header;