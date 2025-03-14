import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // Import the Footer component
import Hero from '../assets/images/hero.webp';
import Hero1 from '../assets/images/hero1.webp';
import Hero2 from '../assets/images/hero4.webp';
import Overview from '../assets/images/overview.webp';
import Deluxe from '../assets/images/deluxe-room.webp';
import PoolSuite from '../assets/images/pool-suite.webp';
import Private from '../assets/images/private.webp';
import Moments from '../assets/images/unforgetable.jpg';


// Import your icons (assuming you're using react-icons)
import { FaUmbrellaBeach, FaUtensils, FaCocktail, FaSpa, FaSwimmingPool, FaConciergeBell } from 'react-icons/fa';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slider images
  const heroSlides = [
    {
      image: Hero,
      heading: 'Experience Paradise',
      subheading: 'Sparkling poolside oasis with sun loungers and umbrellas'
    },
    {
      image: Hero1,
      heading: 'Relax & Rejuvenate',
      subheading: 'World-class spa and wellness facilities'
    },
    {
      image: Hero2,
      heading: 'Culinary Excellence',
      subheading: 'Exquisite dining experiences with local and international cuisine'
    }
  ];

  // Amenities data
  const amenities = [
    { icon: <FaUmbrellaBeach className="w-8 h-8" />, title: 'Private Pool', description: 'Exclusive access to our poolside lounge' },
    { icon: <FaUtensils className="w-8 h-8" />, title: 'Fine Dining', description: 'Gourmet restaurants featuring local and international cuisine' },
    { icon: <FaCocktail className="w-8 h-8" />, title: 'Cocktail Bar', description: 'Exotic cocktails and refreshments by the pool' },
    { icon: <FaSpa className="w-8 h-8" />, title: 'Luxury Spa', description: 'Rejuvenating treatments and massages' },
    { icon: <FaSwimmingPool className="w-8 h-8" />, title: 'Infinity Pool', description: 'Stunning views from our rooftop infinity pool' },
    { icon: <FaConciergeBell className="w-8 h-8" />, title: '24/7 Service', description: 'Personalized concierge service at your fingertips' }
  ];

  // Room types
  const roomTypes = [
    {
      image: Deluxe, // Corrected image reference
      type: 'Deluxe Room',
      price: '₱2,999',
      description: 'Spacious room with garden view, king-size bed, and modern amenities',
      features: ['Garden View', 'King Bed', 'Free WiFi', 'Mini Bar']
    },
    {
      image: PoolSuite, // Corrected image reference
      type: 'Pool Suite',
      price: '₱4,999',
      description: 'Luxurious suite with panoramic ocean views and separate living area',
      features: ['Ocean View', 'Private Balcony', 'Living Room', 'Premium Toiletries']
    },
    {
      image: Private, // Corrected image reference
      type: 'Private Villa',
      price: '₱8,999',
      description: 'Exclusive villa with private pool, personal butler, and beachfront access',
      features: ['Private Pool', 'Beach Access', 'Personal Butler', 'Full Kitchen']
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "Our stay at Residencia del Hamor was beyond expectations. The staff went above and beyond to make our anniversary special.",
      author: "Michael & Sarah",
      location: "New York, USA"
    },
    {
      quote: "The private pool and infinity pool are stunning. I've never experienced such luxury and attention to detail.",
      author: "Emma Rodriguez",
      location: "Madrid, Spain"
    },
    {
      quote: "The culinary experience was unforgettable. Chef Marco's seafood dishes are reason enough to visit again.",
      author: "James Chen",
      location: "Singapore"
    }
  ];

  // Auto-rotate hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-darken-100"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 opacity-0 animate-fade-in-down" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                  {slide.heading}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                  {slide.subheading}
                </p>
              </div>
            </div>
          </div>
        ))}
        {/* Slider Navigation */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-amber-500 w-8' : 'bg-white bg-opacity-50'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm uppercase font-bold tracking-wider opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Welcome to paradise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Discover Residencia del Hamor
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <img src={Overview} alt="Resort Overview" className="object-cover w-full h-full transform hover:scale-105 transition duration-700" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
                A Tropical Paradise Awaits You
              </h3>
              <p className="text-gray-600 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.8s' }}>
                Nestled on the pristine shores of a tropical paradise, Residencia del Hamor offers an unparalleled luxury experience.
              </p>
              <p className="text-gray-600 mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '2.1s' }}>
                Whether you're seeking a romantic getaway, a family vacation, or a rejuvenating retreat, our dedicated staff is committed
                to exceeding your expectations and creating memories that will last a lifetime.
              </p>
              <Link to="/about" className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition duration-300 opacity-0 animate-fade-in-up" style={{ animationDelay: '2.4s' }}>
                Discover Our Story
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-emerald-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm uppercase font-bold tracking-wider opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              World-class facilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Resort Amenities
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.3 * (index + 1)}s` }}
              >
                <div className="text-emerald-600 mb-4">{amenity.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm uppercase font-bold tracking-wider opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Luxury accommodations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Our Rooms & Suites
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roomTypes.map((room, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md group opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.3 * (index + 1)}s` }}
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.type}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{room.type}</h3>
                    <div className="text-amber-500 font-bold">from {room.price}<span className="text-gray-500 text-sm font-normal">/night</span></div>
                  </div>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.features.map((feature, i) => (
                      <span key={i} className="text-xs bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link
                    to='#'
                    className="block w-full bg-emerald-800 hover:bg-emerald-900 text-white text-center py-3 rounded-md transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Experience Section */}
      <section className="relative py-32 bg-cover bg-center opacity-0 animate-fade-in-up" style={{ backgroundImage: `url(${Moments})`, animationDelay: '1.2s' }}>
        <div className="inset-0 bg-black bg-opacity-10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <span className="text-amber-400 text-sm uppercase font-bold tracking-wider">Unforgettable moments</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">Curated Experiences</h2>
          <p className="text-xl text-gray-200 mb-10">
            From sunset cruises and snorkeling adventures to cooking classes and cultural tours,
            our resort offers a variety of extraordinary experiences designed to make your stay truly memorable.
          </p>
          <Link
            to="/experiences"
            className="bg-white text-emerald-800 hover:bg-amber-500 hover:text-white font-semibold px-8 py-3 rounded-full transition duration-300 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '1s' }}
          >
            Explore Experiences
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm uppercase font-bold tracking-wider opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Guest experiences
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              What Our Guests Say
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.3 * (index + 1)}s` }}
              >
                <svg className="w-10 h-10 text-amber-400 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 8v6a6 6 0 01-6 6H2v2c0 1.1.9 2 2 2h4a4 4 0 004-4v-12c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v2h4a2 2 0 002-2zm18-2h-2c-1.1 0-2 .9-2 2v2h4a2 2 0 002-2v-2zm-6 6a6 6 0 01-6 6h-2v2c0 1.1.9 2 2 2h4a4 4 0 004-4v-12c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v2h4a2 2 0 002-2z" />
                </svg>
                <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-emerald-800 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Special Offers</h2>
          <p className="text-emerald-100 mb-8">
            Subscribe to our newsletter and be the first to know about exclusive deals and seasonal promotions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              className="bg-white border border-gray-300 p-3 w-full sm:w-80 rounded-md text-gray-900 placeholder-gray-500"
              placeholder="Enter your email"
            />
            <button
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-full transition duration-300 mt-4 sm:mt-0 sm:ml-4"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
