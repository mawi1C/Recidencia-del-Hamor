import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Modal from '../components/Modal'; // Import the Modal component
import BookingHero from '../assets/images/hero.webp'; // Add a booking-specific hero image

export default function BookNow() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        roomType: '',
        guests: 1,
        specialRequests: '',
    });

    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to backend)
        console.log('Form Data Submitted:', formData);

        // Show the modal
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-96 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${BookingHero})` }}>
                <div className="inset-0 bg-black bg-opacity-50"></div>
                <div className="relative text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 opacity-0 animate-fade-in-down" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                        Book Now
                    </h1>
                    <p className="text-xl text-gray-200 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                        Reserve your stay at Residencia del Hamor
                    </p>
                </div>
            </section>

            {/* Booking Form Section */}
            <section className="py-16 px-4">
                <div className="text-center mb-16">
                    <span className="text-amber-500 text-sm uppercase font-bold tracking-wider opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        Book Now
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        Book your Stay
                    </h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}></div>
                </div>
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Booking Details</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    required
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    required
                                />
                            </div>

                            {/* Check-In Date */}
                            <div>
                                <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-2">
                                    Check-In Date
                                </label>
                                <input
                                    type="date"
                                    id="checkIn"
                                    name="checkIn"
                                    value={formData.checkIn}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    required
                                />
                            </div>

                            {/* Check-Out Date */}
                            <div>
                                <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-2">
                                    Check-Out Date
                                </label>
                                <input
                                    type="date"
                                    id="checkOut"
                                    name="checkOut"
                                    value={formData.checkOut}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    required
                                />
                            </div>

                            {/* Room Type */}
                            <div>
                                <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-2">
                                    Room Type
                                </label>
                                <select
                                    id="roomType"
                                    name="roomType"
                                    value={formData.roomType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    required
                                >
                                    <option value="" disabled>Select a room type</option>
                                    <option value="Deluxe Room">Deluxe Room</option>
                                    <option value="Pool Suite">Pool Suite</option>
                                    <option value="Private Villa">Private Villa</option>
                                </select>
                            </div>

                            {/* Number of Guests */}
                            <div>
                                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                                    Number of Guests
                                </label>
                                <input
                                    type="number"
                                    id="guests"
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    min="1"
                                    max="10"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                    required
                                />
                            </div>
                        </div>

                        {/* Special Requests */}
                        <div className="mt-6">
                            <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
                                Special Requests
                            </label>
                            <textarea
                                id="specialRequests"
                                name="specialRequests"
                                value={formData.specialRequests}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                placeholder="Any special requests or notes?"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-8 text-center">
                            <button
                                type="submit"
                                className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-full transition duration-300 cursor-pointer"
                            >
                                Confirm Booking
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Modal for Confirmation */}
            {showModal && (
                <Modal
                    message="Your booking has been submitted successfully!"
                    onClose={closeModal}
                />
            )}

            <Footer />
        </div>
    );
}