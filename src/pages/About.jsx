import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../assets/images/pool-suite.webp'; // Reuse or replace with an about-specific image
import Team1 from '../assets/images/manager.webp'; // Add team member images
import Team2 from '../assets/images/chef.jpg';
import Team3 from '../assets/images/guest.webp';
import Team4 from '../assets/images/nice.jpg';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${Hero})` }}>
        <div className="inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 opacity-0 animate-fade-in-down" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            About Us
          </h1>
          <p className="text-xl text-gray-200 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Discover the story behind Residencia del Hamor
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm uppercase font-bold tracking-wider opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Our Story
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
              <img
                src={Team4} // Replace with an about-specific image
                alt="Our Story"
                className="object-cover w-full h-full transform hover:scale-105 transition duration-700"
              />
            </div>
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">A Legacy of Luxury</h3>
              <p className="text-gray-600 mb-6">
                Residencia del Hamor was founded in 2005 with a vision to create a sanctuary of luxury and tranquility.
                Nestled in the heart of a tropical paradise, our resort has been a haven for travelers seeking unparalleled
                experiences and unforgettable memories.
              </p>
              <p className="text-gray-600 mb-8">
                Over the years, we have grown into a world-class destination, known for our exceptional service, stunning
                accommodations, and commitment to sustainability. Our journey is a testament to the passion and dedication
                of our team, who strive to make every guest's stay extraordinary.
              </p>
              <Link
                to="/rooms"
                className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition duration-300"
              >
                Explore Our Rooms
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-emerald-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm uppercase font-bold tracking-wider opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Meet the Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Our Dedicated Team
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
            >
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden mb-4">
                <img
                  src={Team1}
                  alt="Team Member 1"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Manager Doe</h3>
              <p className="text-gray-600">General Manager</p>
            </div>

            {/* Team Member 2 */}
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
            >
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden mb-4">
                <img
                  src={Team2}
                  alt="Team Member 2"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Chef Smith</h3>
              <p className="text-gray-600">Head Chef</p>
            </div>

            {/* Team Member 3 */}
            <div
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}
            >
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden mb-4">
                <img
                  src={Team3}
                  alt="Team Member 3"
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Guest</h3>
              <p className="text-gray-600">Guest Relations Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm uppercase font-bold tracking-wider opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Mission & Values
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide an unparalleled luxury experience, creating unforgettable memories for our guests while
                maintaining a commitment to sustainability and community.
              </p>
            </div>

            {/* Values */}
            <div
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Values</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Excellence in Service</li>
                <li>Sustainability</li>
                <li>Community Engagement</li>
                <li>Innovation</li>
              </ul>
            </div>

            {/* Vision */}
            <div
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading luxury resort destination, recognized for our exceptional service, stunning
                accommodations, and commitment to sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}