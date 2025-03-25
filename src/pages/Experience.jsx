import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ExperienceHero from '../assets/images/overview.webp'; // Add an experience-specific hero image
import Spa from '../assets/images/hero2.webp'; // Add experience images
import Dining from '../assets/images/dining.webp';
import Adventure from '../assets/images/adventure.webp';
import Cultural from '../assets/images/cultural.webp';

export default function Experiences() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  // Experience data
  const experiences = [
    {
      id: 1,
      image: Spa,
      title: 'Spa & Wellness',
      description: 'Rejuvenate your mind and body with our luxurious spa treatments and wellness programs.',
      detailedDescription: 'Our Spa & Wellness experience offers a sanctuary of relaxation with a comprehensive menu of treatments. Enjoy traditional massages, modern therapies, and holistic wellness programs in our serene environment. Our expert therapists use only the finest organic products to ensure complete rejuvenation.',
      features: ['Massage Therapies', 'Facials & Body Treatments', 'Yoga Sessions', 'Meditation Classes', 'Hydrotherapy', 'Private Treatment Rooms'],
      amenities: [
        { name: 'Aromatherapy', icon: '🌸' },
        { name: 'Hot Stone Massage', icon: '♨️' },
        { name: 'Detox Programs', icon: '🍃' },
        { name: 'Personalized Consultations', icon: '📋' }
      ],
      duration: '1-3 hours',
      bestFor: 'Relaxation, Rejuvenation',
      specialFeatures: ['Complimentary herbal tea', 'Private changing facilities', 'Post-treatment relaxation area']
    },
    {
      id: 2,
      image: Dining,
      title: 'Dining',
      description: 'Savor exquisite culinary creations crafted by our world-class chefs in stunning settings.',
      detailedDescription: 'Our dining experiences showcase the finest local ingredients transformed into culinary masterpieces. From beachfront seafood grills to elegant fine dining, each meal is an event to remember. Our sommeliers will guide you through perfect wine pairings from our extensive cellar.',
      features: ['Farm-to-Table Cuisine', 'Chef\'s Tasting Menu', 'Wine Pairings', 'Private Dining', 'Cooking Classes', 'Sunset Cocktails'],
      amenities: [
        { name: 'Local Ingredients', icon: '🍅' },
        { name: 'Signature Cocktails', icon: '🍸' },
        { name: 'Dietary Accommodations', icon: '🌱' },
        { name: 'Romantic Setup Available', icon: '💑' }
      ],
      duration: '1-2 hours',
      bestFor: 'Food Enthusiasts, Romantic Evenings',
      specialFeatures: ['Chef\'s table experience', 'Market tours available', 'Mixology classes']
    },
    {
      id: 3,
      image: Adventure,
      title: 'Adventure',
      description: 'Embark on thrilling adventures with our guided tours and outdoor activities.',
      detailedDescription: 'For the adventurous spirit, we offer a range of exciting activities from jungle trekking to water sports. Our expert guides will take you to hidden waterfalls, secret snorkeling spots, and breathtaking viewpoints. All equipment is provided and safety is our top priority.',
      features: ['Jungle Trekking', 'Water Sports', 'Island Hopping', 'Wildlife Spotting', 'Rock Climbing', 'Sunset Cruises'],
      amenities: [
        { name: 'Professional Guides', icon: '🧭' },
        { name: 'Safety Equipment', icon: '🦺' },
        { name: 'Photography Service', icon: '📸' },
        { name: 'Picnic Lunches', icon: '🧺' }
      ],
      duration: 'Half-day to Full-day',
      bestFor: 'Thrill-seekers, Nature Lovers',
      specialFeatures: ['Private tours available', 'Custom itineraries', 'GoPro rental included']
    },
    {
      id: 4,
      image: Cultural,
      title: 'Cultural',
      description: 'Immerse yourself in the rich culture and traditions of the local community.',
      detailedDescription: 'Discover the soul of our destination through authentic cultural experiences. Participate in traditional ceremonies, learn local crafts from master artisans, and enjoy performances of indigenous music and dance. These immersive experiences create meaningful connections with our heritage.',
      features: ['Traditional Workshops', 'Local Festivals', 'Heritage Tours', 'Artisan Visits', 'Cultural Performances', 'Historical Sites'],
      amenities: [
        { name: 'Expert Historians', icon: '🏛️' },
        { name: 'Hands-on Activities', icon: '✋' },
        { name: 'Traditional Attire', icon: '👘' },
        { name: 'Local Snacks', icon: '🍡' }
      ],
      duration: '2-4 hours',
      bestFor: 'Cultural Enthusiasts, Families',
      specialFeatures: ['Private demonstrations', 'Artisan marketplace', 'Custom souvenir creation']
    }
  ];

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(experience) {
    setSelectedExperience(experience);
    setIsOpen(true);
  }

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
            {experiences.map((experience, index) => (
              <div 
                key={experience.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 opacity-0 animate-fade-in-up" 
                style={{ animationDelay: `${0.3 * (index + 1)}s`, animationFillMode: 'forwards' }}
              >
                <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="object-cover w-full h-full transform hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{experience.title}</h3>
                  <p className="text-gray-600 mb-6">
                    {experience.description}
                  </p>
                  <button
                    onClick={() => openModal(experience)}
                    className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition duration-300 cursor-pointer"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Details Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {selectedExperience && (
                    <>
                      <div className="flex justify-between items-start">
                        <div>
                          <Dialog.Title
                            as="h3"
                            className="text-2xl font-bold leading-6 text-gray-900"
                          >
                            {selectedExperience.title}
                          </Dialog.Title>
                          <p className="text-gray-600 mt-2">
                            {selectedExperience.description}
                          </p>
                        </div>
                        <button
                          type="button"
                          className="text-gray-400 hover:text-gray-500 p-1"
                          onClick={closeModal}
                        >
                          <span className="sr-only">Close</span>
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <img 
                            src={selectedExperience.image} 
                            alt={selectedExperience.title} 
                            className="w-full h-64 md:h-80 object-cover rounded-lg mb-4"
                          />
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-800 mb-3">Detailed Description</h4>
                            <p className="text-gray-600 mb-4">{selectedExperience.detailedDescription}</p>
                            
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <p className="text-sm text-gray-500">Duration</p>
                                <p className="font-medium">{selectedExperience.duration}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Best For</p>
                                <p className="font-medium">{selectedExperience.bestFor}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-800 mb-3">Experience Features</h4>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {selectedExperience.features.map((feature, i) => (
                                <span key={i} className="text-xs bg-amber-50 text-amber-800 px-3 py-1 rounded-full">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-800 mb-3">Included Amenities</h4>
                            <div className="grid grid-cols-2 gap-3">
                              {selectedExperience.amenities.map((amenity, i) => (
                                <div key={i} className="flex items-center space-x-2">
                                  <span className="text-lg">{amenity.icon}</span>
                                  <span className="text-sm text-gray-700">{amenity.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                            <h4 className="font-semibold text-amber-800 mb-2">Special Highlights</h4>
                            <ul className="text-sm text-amber-700 list-disc pl-5 space-y-1">
                              {selectedExperience.specialFeatures.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 transition duration-300"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                        <Link
                          to="/booking"
                          className="inline-flex justify-center rounded-md border border-transparent bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 transition duration-300 text-center"
                        >
                          Book Experience
                        </Link>
                      </div>
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Footer />
    </div>
  );
}