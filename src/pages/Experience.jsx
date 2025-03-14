import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ExperienceHero from '../assets/images/overview.webp'; // Add an experience-specific hero image
import Spa from '../assets/images/hero2.webp'; // Add experience images
import Dining from '../assets/images/dining.webp';
import Adventure from '../assets/images/adventure.webp';
import Cultural from '../assets/images/cultural.webp';

export default function Experiences() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${ExperienceHero})` }}>
        <div className="inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 opacity-0 animate-fade-in-down" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Experiences
          </h1>
          <p className="text-xl text-gray-200 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Discover unforgettable moments at Residencia del Hamor
          </p>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm uppercase font-bold tracking-wider opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              Explore
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Our Experiences
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Spa & Wellness */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                <img
                  src={Spa}
                  alt="Spa & Wellness"
                  className="object-cover w-full h-full transform hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Spa & Wellness</h3>
                <p className="text-gray-600 mb-6">
                  Rejuvenate your mind and body with our luxurious spa treatments and wellness programs.
                </p>
                <Link
                  to="#"
                  className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Dining */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                <img
                  src={Dining}
                  alt="Dining"
                  className="object-cover w-full h-full transform hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Dining</h3>
                <p className="text-gray-600 mb-6">
                  Savor exquisite culinary creations crafted by our world-class chefs in stunning settings.
                </p>
                <Link
                  to="#"
                  className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Adventure */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
              <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                <img
                  src={Adventure}
                  alt="Adventure"
                  className="object-cover w-full h-full transform hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Adventure</h3>
                <p className="text-gray-600 mb-6">
                  Embark on thrilling adventures with our guided tours and outdoor activities.
                </p>
                <Link
                  to="#"
                  className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Cultural */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
              <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                <img
                  src={Cultural}
                  alt="Cultural"
                  className="object-cover w-full h-full transform hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cultural</h3>
                <p className="text-gray-600 mb-6">
                  Immerse yourself in the rich culture and traditions of the local community.
                </p>
                <Link
                  to="#"
                  className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
