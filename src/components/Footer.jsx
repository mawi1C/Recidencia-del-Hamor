import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaTripadvisor, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Resort Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Residencia del Hamor</h3>
          <p className="mb-6 text-gray-400">
            Experience luxury like never before at our exclusive beachfront resort. Your paradise getaway awaits.
          </p>
          <ul className="flex space-x-4">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition duration-300">
                <FaFacebookF className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition duration-300">
                <FaTwitter className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
            </li>
            <li>
              <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition duration-300">
                <FaTripadvisor className="w-5 h-5" />
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/rooms" className="text-gray-400 hover:text-amber-500 transition duration-300">Rooms</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-amber-500 transition duration-300">About Us</Link>
            </li>
            <li>
              <Link to="/experiences" className="text-gray-400 hover:text-amber-500 transition duration-300">Experiences</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-amber-500 transition duration-300">Contact</Link>
            </li>
            <li>
              <Link to="/booking" className="text-gray-400 hover:text-amber-500 transition duration-300">Book</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <FaMapMarkerAlt className="w-5 h-5 text-amber-500 mt-1 mr-3" />
              <span>Inlagadian, Casiguran, Philippines</span>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="w-5 h-5 text-amber-500 mr-3" />
              <span>+63 123 456-7890</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="w-5 h-5 text-amber-500 mr-3" />
              <span>info@residenciadelhamor.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
          <p className="mb-4 text-gray-400">
            Subscribe to receive special offers and updates.
          </p>
          <form className="space-y-3">
            <div>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-2 rounded-md transition duration-300 w-full cursor-pointer">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Residencia del Hamor. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-gray-300 text-sm transition duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-300 text-sm transition duration-300">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-gray-500 hover:text-gray-300 text-sm transition duration-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;