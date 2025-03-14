import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Deluxe from '../assets/images/nice.jpg';
import PoolSuite from '../assets/images/pool-suite.webp';
import Private from '../assets/images/private.webp';
import Room1 from '../assets/images/overview.webp'; // Add more room images
import Room2 from '../assets/images/hero2.webp';
import Room3 from '../assets/images/unforgetable.jpg';
import Room4 from '../assets/images/hero.webp';

const Room = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showAllRooms, setShowAllRooms] = useState(false); // State to toggle "See More"

  // Room types data
  const roomTypes = [
    {
      id: 1,
      image: Deluxe,
      type: 'Deluxe Room',
      price: '₱2,999',
      description: 'Spacious room with garden view, king-size bed, and modern amenities',
      features: ['Garden View', 'King Bed', 'Free WiFi', 'Mini Bar'],
      size: '45 sqm',
      capacity: '2 Adults, 1 Child',
    },
    {
      id: 2,
      image: PoolSuite,
      type: 'Pool Suite',
      price: '₱4,999',
      description: 'Luxurious suite with panoramic ocean views and separate living area',
      features: ['Ocean View', 'Private Balcony', 'Living Room', 'Premium Toiletries'],
      size: '60 sqm',
      capacity: '2 Adults, 2 Children',
    },
    {
      id: 3,
      image: Private,
      type: 'Private Villa',
      price: '₱8,999',
      description: 'Exclusive villa with private pool, personal butler, and beachfront access',
      features: ['Private Pool', 'Beach Access', 'Personal Butler', 'Full Kitchen'],
      size: '120 sqm',
      capacity: '4 Adults, 2 Children',
    },
    {
      id: 4,
      image: Room1,
      type: 'Executive Suite',
      price: '₱5,999',
      description: 'Elegant suite with city views, modern decor, and a spacious bathroom',
      features: ['City View', 'Queen Bed', 'Free WiFi', 'Work Desk'],
      size: '50 sqm',
      capacity: '2 Adults',
    },
    {
      id: 5,
      image: Room2,
      type: 'Family Room',
      price: '₱6,999',
      description: 'Perfect for families, with two bedrooms and a shared living area',
      features: ['Two Bedrooms', 'Living Area', 'Free WiFi', 'Kitchenette'],
      size: '80 sqm',
      capacity: '4 Adults, 2 Children',
    },
    {
      id: 6,
      image: Room3,
      type: 'Honeymoon Suite',
      price: '₱9,999',
      description: 'Romantic suite with a private jacuzzi and stunning sunset views',
      features: ['Private Jacuzzi', 'King Bed', 'Free WiFi', 'Champagne on Arrival'],
      size: '70 sqm',
      capacity: '2 Adults',
    },
    {
      id: 7,
      image: Room4,
      type: 'Penthouse Suite',
      price: '₱12,999',
      description: 'Luxurious penthouse with a rooftop terrace and 360-degree views',
      features: ['Rooftop Terrace', 'King Bed', 'Free WiFi', 'Personal Chef'],
      size: '150 sqm',
      capacity: '4 Adults',
    },
  ];

  // Handle room selection
  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  // Toggle "See More" button
  const toggleShowAllRooms = () => {
    setShowAllRooms(!showAllRooms);
  };

  // Number of rooms to show initially
  const initialRoomsToShow = 3;
  const roomsToDisplay = showAllRooms ? roomTypes : roomTypes.slice(0, initialRoomsToShow);

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
                onClick={() => handleRoomSelect(room)}
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
                    {room.features.map((feature, index) => (
                      <span key={index} className="text-xs bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link
                    to='#'
                    className="block w-full bg-emerald-800 hover:bg-emerald-900 text-white text-center py-3 rounded-md transition duration-300"
                  >
                    Book Now
                  </Link>
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

      {/* Selected Room Details Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full">
            <div className="relative">
              <img
                src={selectedRoom.image}
                alt={selectedRoom.type}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedRoom.type}</h2>
              <p className="text-gray-600 mb-6">{selectedRoom.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Features</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {selectedRoom.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Details</h3>
                  <p className="text-gray-600"><strong>Size:</strong> {selectedRoom.size}</p>
                  <p className="text-gray-600"><strong>Capacity:</strong> {selectedRoom.capacity}</p>
                </div>
              </div>
              <Link
                to='#'
                className="block w-full bg-emerald-800 hover:bg-emerald-900 text-white text-center py-3 rounded-md transition duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Room;