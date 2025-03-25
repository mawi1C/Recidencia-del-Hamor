import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Deluxe from '../assets/images/nice.jpg';
import PoolSuite from '../assets/images/pool-suite.webp';
import Private from '../assets/images/private.webp';
import Room1 from '../assets/images/overview.webp';
import Room2 from '../assets/images/hero3.webp';
import Room3 from '../assets/images/unforgetable.jpg';
import Room4 from '../assets/images/hero.webp';

const Room = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showAllRooms, setShowAllRooms] = useState(false);

  // Enhanced room types data
  const roomTypes = [
    {
      id: 1,
      image: Deluxe,
      type: 'Deluxe Room',
      price: '₱2,999',
      description: 'Spacious room with garden view, king-size bed, and modern amenities',
      detailedDescription: 'Our Deluxe Rooms offer a perfect blend of comfort and style, featuring elegant contemporary design with local artisan touches. Wake up to garden views from your private space in these 45 sqm retreats. The room features a plush king-size bed with premium linens and a marble bathroom with rain shower.',
      features: ['Garden View', 'King Bed', 'Free WiFi', 'Mini Bar', 'Private Balcony', 'Air Conditioning'],
      amenities: [
        { name: 'Bathrobes & Slippers', icon: '🧖' },
        { name: 'Premium Toiletries', icon: '🧴' },
        { name: 'Coffee/Tea Maker', icon: '☕' },
        { name: '24-hour Room Service', icon: '🛎️' }
      ],
      size: '45 sqm',
      capacity: '2 Adults, 1 Child',
      view: 'Garden View',
      specialFeatures: ['Daily housekeeping', 'Turndown service', 'Complimentary bottled water']
    },
    {
      id: 2,
      image: Room4,
      type: 'Penthouse Suite',
      price: '₱12,999',
      description: 'Luxurious penthouse with a rooftop terrace and 360-degree views',
      detailedDescription: 'The crown jewel of our property, the Penthouse Suite spans 150 sqm with a rooftop terrace offering 360-degree views. Featuring a grand living room, dining area for eight, and a master bedroom with his-and-hers bathrooms. Includes exclusive access to VIP services and amenities.',
      features: ['Rooftop Terrace', 'King Bed', 'Free WiFi'],
      amenities: [
        { name: 'VIP Airport Transfer', icon: '✈️' },
        { name: 'Dedicated Concierge', icon: '🎩' },
        { name: 'Reserved Parking', icon: '🅿️' },
        { name: 'Premium Liquor Selection', icon: '🥃' }
      ],
      size: '150 sqm',
      capacity: '4 Adults',
      view: 'Panoramic View',
      specialFeatures: ['Private butler service', 'Exclusive lounge access', 'Complimentary spa treatments']
    },
    {
      id: 3,
      image: Room1,
      type: 'Executive Suite',
      price: '₱5,999',
      description: 'Elegant suite with city views, modern decor, and a spacious bathroom',
      detailedDescription: 'The Executive Suite offers sophisticated comfort with panoramic city views. This 50 sqm suite features a separate living area, work desk, and luxurious marble bathroom. Ideal for business travelers or those seeking extra space and comfort.',
      features: ['City View', 'Queen Bed', 'Free WiFi', 'Work Desk', 'Marble Bathroom', 'Express Check-in'],
      amenities: [
        { name: 'Executive Lounge Access', icon: '🏙️' },
        { name: 'Complimentary Pressing', icon: '👔' },
        { name: 'Evening Canapés', icon: '🍢' },
        { name: 'Premium Office Supplies', icon: '📎' }
      ],
      size: '50 sqm',
      capacity: '2 Adults',
      view: 'City View',
      specialFeatures: ['Complimentary meeting room access', 'Late checkout available', 'Business center services']
    },
    {
      id: 4,
      image: PoolSuite,
      type: 'Pool Suite',
      price: '₱4,999',
      description: 'Luxurious suite with panoramic ocean views and separate living area',
      detailedDescription: 'These 60 sqm suites feature a separate living area, a luxurious king bedroom, and stunning ocean views. The spacious bathroom includes both a rain shower and deep soaking tub. Enjoy beautiful sunset views from your private terrace with comfortable loungers.',
      features: ['Ocean View', 'Private Balcony', 'Living Room', 'Premium Toiletries', 'Bath Tub', 'Twice Daily Housekeeping'],
      amenities: [
        { name: 'Welcome Fruit Basket', icon: '🍎' },
        { name: 'Evening Turndown Service', icon: '🌙' },
        { name: 'Bath Salts & Candles', icon: '🛁' },
        { name: 'Nespresso Machine', icon: '☕' }
      ],
      size: '60 sqm',
      capacity: '2 Adults, 2 Children',
      view: 'Ocean View',
      specialFeatures: ['Complimentary breakfast', 'Poolside cabana access', 'Priority restaurant reservations']
    },
    {
      id: 7,
      image: Private,
      type: 'Private Villa',
      price: '₱8,999',
      description: 'Exclusive villa with private pool, personal butler, and beachfront access',
      detailedDescription: 'Our 120 sqm private villas are the epitome of tropical luxury, featuring a private infinity pool, outdoor rain shower, and spacious sun deck. The villa includes a king bedroom with canopy bed, a living/dining pavilion, and a fully-stocked premium bar. Your personal butler will attend to your every need throughout your stay.',
      features: ['Private Pool', 'Beach Access', 'Personal Butler', 'Full Kitchen', 'Outdoor Dining', '24/7 Butler Service'],
      amenities: [
        { name: 'Champagne on Arrival', icon: '🍾' },
        { name: 'Private Chef Available', icon: '👨‍🍳' },
        { name: 'In-Villa Spa Treatments', icon: '💆' },
        { name: 'Premium Sound System', icon: '🔊' }
      ],
      size: '120 sqm',
      capacity: '4 Adults, 2 Children',
      view: 'Beachfront',
      specialFeatures: ['Airport transfers included', 'Daily laundry service', 'Private beach cabana']
    },
    {
      id: 5,
      image: Room2,
      type: 'Family Room',
      price: '₱6,999',
      description: 'Perfect for families, with two bedrooms and a shared living area',
      detailedDescription: 'Our Family Rooms provide ample space for families, featuring two separate bedrooms and a shared living area. The 80 sqm layout includes a master bedroom with king bed, children\'s room with twin beds, and a kitchenette for added convenience.',
      features: ['Two Bedrooms', 'Living Area', 'Free WiFi', 'Kitchenette', 'Child Amenities', 'Family Activities'],
      amenities: [
        { name: 'Children\'s Welcome Gift', icon: '🎁' },
        { name: 'Baby Sitting Services', icon: '👶' },
        { name: 'Kids\' Menu Options', icon: '🍟' },
        { name: 'Board Games & Toys', icon: '🎲' }
      ],
      size: '80 sqm',
      capacity: '4 Adults, 2 Children',
      view: 'Garden View',
      specialFeatures: ['Children eat free program', 'Family movie nights', 'Child safety features']
    },
    {
      id: 6,
      image: Room3,
      type: 'Honeymoon Suite',
      price: '₱9,999',
      description: 'Romantic suite with a private jacuzzi and stunning sunset views',
      detailedDescription: 'Designed for romance, our Honeymoon Suite features a private jacuzzi on the balcony with breathtaking sunset views. The 70 sqm suite includes a luxurious king canopy bed, rose petal turndown service, and special honeymoon amenities to celebrate your love.',
      features: ['Private Jacuzzi', 'King Bed', 'Free WiFi', 'Champagne on Arrival', 'Romantic Decor', 'Sunset Views'],
      amenities: [
        { name: 'Couples Massage Setup', icon: '💑' },
        { name: 'Chocolate Covered Strawberries', icon: '🍓' },
        { name: 'Romantic Dinner Setup', icon: '🍽️' },
        { name: 'Late Checkout Guaranteed', icon: '⏰' }
      ],
      size: '70 sqm',
      capacity: '2 Adults',
      view: 'Sunset View',
      specialFeatures: ['Complimentary photo session', 'Romantic turndown service', 'Priority spa bookings']
    }
  ];

  const toggleShowAllRooms = () => {
    setShowAllRooms(!showAllRooms);
  };

  const initialRoomsToShow = 3;
  const roomsToDisplay = showAllRooms ? roomTypes : roomTypes.slice(0, initialRoomsToShow);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(room) {
    setSelectedRoom(room);
    setIsOpen(true);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${Deluxe})` }}>
        <div className="inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 opacity-0 animate-fade-in-down" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Our Rooms & Suites
          </h1>
          <p className="text-xl text-gray-200 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Luxury accommodations designed for your comfort
          </p>
        </div>
      </section>

      {/* Room List Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Explore Our Rooms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomsToDisplay.map((room, index) => (
              <div
                key={room.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 cursor-pointer opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.3 * (index + 1)}s`, animationFillMode: 'forwards' }}
                onClick={() => openModal(room)}
              >
                <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.type}
                    className="object-cover w-full h-full transform hover:scale-110 transition duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{room.type}</h3>
                    <div className="text-amber-500 font-bold">from {room.price}<span className="text-gray-500 text-sm font-normal">/night</span></div>
                  </div>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.features.slice(0, 4).map((feature, index) => (
                      <span key={index} className="text-xs bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => openModal(room)}
                    className="block w-full bg-emerald-800 hover:bg-emerald-900 text-white text-center py-3 rounded-md transition duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* "See More" Button */}
          {roomTypes.length > initialRoomsToShow && (
            <div className="text-center mt-8">
              <button
                onClick={toggleShowAllRooms}
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full transition duration-300 cursor-pointer opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.3 * (roomTypes.length + 1)}s`, animationFillMode: 'forwards' }}
              >
                {showAllRooms ? 'Show Less' : 'See More'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Room Details Modal with Animation */}
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
                  {selectedRoom && (
                    <>
                      <div className="flex justify-between items-start">
                        <div>
                          <Dialog.Title
                            as="h3"
                            className="text-2xl font-bold leading-6 text-gray-900"
                          >
                            {selectedRoom.type}
                          </Dialog.Title>
                          <p className="text-amber-500 font-bold mt-1">
                            from {selectedRoom.price}<span className="text-gray-500 text-sm font-normal">/night</span>
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
                            src={selectedRoom.image} 
                            alt={selectedRoom.type} 
                            className="w-full h-64 md:h-80 object-cover rounded-lg mb-4"
                          />
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-800 mb-3">Detailed Description</h4>
                            <p className="text-gray-600 mb-4">{selectedRoom.detailedDescription}</p>
                            
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <p className="text-sm text-gray-500">Capacity</p>
                                <p className="font-medium">{selectedRoom.capacity}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">View</p>
                                <p className="font-medium">{selectedRoom.view}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Size</p>
                                <p className="font-medium">{selectedRoom.size}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-800 mb-3">Room Features</h4>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {selectedRoom.features.map((feature, i) => (
                                <span key={i} className="text-xs bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-800 mb-3">Special Amenities</h4>
                            <div className="grid grid-cols-2 gap-3">
                              {selectedRoom.amenities.map((amenity, i) => (
                                <div key={i} className="flex items-center space-x-2">
                                  <span className="text-lg">{amenity.icon}</span>
                                  <span className="text-sm text-gray-700">{amenity.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                            <h4 className="font-semibold text-amber-800 mb-2">Exclusive Benefits</h4>
                            <ul className="text-sm text-amber-700 list-disc pl-5 space-y-1">
                              {selectedRoom.specialFeatures.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 transition duration-300"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                        <Link
                          to="/book-now"
                          className="inline-flex justify-center rounded-md border border-transparent bg-emerald-800 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 transition duration-300 text-center"
                        >
                          Book Now
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
};

export default Room;