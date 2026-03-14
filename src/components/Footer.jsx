import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-800 text-white pt-10">
    <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <img
          src="https://tyreservicesuae.com/wp-content/uploads/elementor/thumbs/Tyre-Services-Uae-Logo-1-r794v3aulu23p393qzejblvwghmkz03whl6nh8tp1c.png"
          alt="Logo"
          className="h-12 mb-4"
        />
        <p className="text-sm">
          Flat tyre? We'll fix it on the spot! Mobile tyre puncture repair in Dubai.
          24/7 service. Call now!
        </p>
        <div className="flex space-x-3 mt-4">
          {/* social icons could be added here */}
          <a href="#" aria-label="Facebook" className="hover:text-green-400">
            F
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-green-400">
            I
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-green-400">
            T
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-green-400">
            Y
          </a>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-2 text-amber-400">Services</h4>
        <ul className="space-y-1 text-sm">
          <li>
            <a href="http://wa.me/971501478398" className="hover:text-green-400">
              Tyre Puncture Repair
            </a>
          </li>
          <li>
            <a href="http://wa.me/971501478398" className="hover:text-green-400">
              Mobile Tyre Repair
            </a>
          </li>
          <li>
            <a href="http://wa.me/971501478398" className="hover:text-green-400">
              Tyre Alignment Services
            </a>
          </li>
          <li>
            <a href="http://wa.me/971501478398" className="hover:text-green-400">
              Flat Tyre Puncture Repair
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2 text-amber-400">Support</h4>
        <ul className="space-y-1 text-sm">
          <li>
            <a href="http://wa.me/971501478398" className="hover:text-green-400">
              Help Center
            </a>
          </li>
          <li>
            <a href="http://wa.me/971501478398" className="hover:text-green-400">
              Appointment
            </a>
          </li>
          <li>
            <a href="http://wa.me/971501478398" className="hover:text-green-400">
              Contact us
            </a>
          </li>
          <li>
            <a href="http://wa.me/971501478398" className="hover:text-green-400">
              FAQ
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2 text-amber-400">Company</h4>
        <ul className="space-y-1 text-sm">
          <li>
            <Link to="/" className="hover:text-green-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-400">
              About us
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-green-400">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="text-center text-xs text-gray-400 py-4">
      Developed &amp; Google Ads by{' '}
      <a href="http://wa.me/971501478398" className="text-yellow-300">
        Tire Service
      </a>
    </div>
  </footer>
);

export default Footer;
