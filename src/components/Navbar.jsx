import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        } opacity-0 animate-fade-in-down`} // Add animation here
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span
              className={`font-serif text-2xl font-bold ${isScrolled ? 'text-emerald-800' : 'text-white'
                }`}
            >
              Residencia
            </span>
            <span
              className={`font-serif text-lg italic ${isScrolled ? 'text-amber-600' : 'text-amber-400'
                }`}
            >
              del Hamor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${isScrolled ? 'text-gray-800' : 'text-white'
                } hover:text-amber-500 transition duration-300`}
            >
              Home
            </Link>
            <Link
              to="/rooms"
              className={`${isScrolled ? 'text-gray-800' : 'text-white'
                } hover:text-amber-500 transition duration-300`}
            >
              Rooms
            </Link>
            <Link
              to="/about"
              className={`${isScrolled ? 'text-gray-800' : 'text-white'
                } hover:text-amber-500 transition duration-300`}
            >
              About Us
            </Link>
            <Link
              to="/experiences"
              className={`${isScrolled ? 'text-gray-800' : 'text-white'
                } hover:text-amber-500 transition duration-300`}
            >
              Experiences
            </Link>
            <Link
              to="/contact"
              className={`${isScrolled ? 'text-gray-800' : 'text-white'
                } hover:text-amber-500 transition duration-300`}
            >
              Contact
            </Link>
            <Link
              to="/booking"
              className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md transition duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-gray-800' : 'text-white'
                } focus:outline-none`}
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 px-2 pt-2 pb-4 bg-white rounded-lg mt-2 shadow-lg">
              <Link
                to="/"
                className="text-gray-800 hover:text-amber-500 transition duration-300 px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/rooms"
                className="text-gray-800 hover:text-amber-500 transition duration-300 px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                Rooms
              </Link>
              <Link
                to="/about"
                className="text-gray-800 hover:text-amber-500 transition duration-300 px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/experiences"
                className="text-gray-800 hover:text-amber-500 transition duration-300 px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                Experiences
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 hover:text-amber-500 transition duration-300 px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/booking"
                className="bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-md transition duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}