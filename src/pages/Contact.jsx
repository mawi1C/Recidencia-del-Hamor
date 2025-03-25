import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactImage from '../assets/images/contact.jpg';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Modal from '../components/Modal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [showModal, setShowModal] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      valid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    } else if (!/^[0-9+\-\s]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      valid = false;
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 7) {
      newErrors.phone = 'Phone number must be at least 7 digits';
      valid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form Data Submitted:', formData);
      setShowModal(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  // Initialize Leaflet Map
  useEffect(() => {
    if (document.getElementById('map')._leaflet_map) return;

    const map = L.map('map').setView([12.808024199490747, 124.05814417236486], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    L.marker([12.808061507043272, 124.05832616416681])
      .addTo(map)
      .bindPopup('Residencia del Hamor')
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Modal */}
      {showModal && (
        <Modal
          message="Thank you for contacting us! We will get back to you soon."
          onClose={() => setShowModal(false)}
        />
      )}

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${ContactImage})` }}>
        <div className="inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 opacity-0 animate-fade-in-down" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            We're here to help. Reach out to us anytime!
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm uppercase font-bold tracking-wider opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Send Us a Message
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-md opacity-0 animate-fade-in-up"
              style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
              noValidate
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  placeholder="Enter your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  rows="5"
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 rounded-lg transition duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </form>

            {/* Contact Information */}
            <div
              className="bg-white p-8 rounded-lg shadow-md opacity-0 animate-fade-in-up"
              style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-amber-500 p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700 font-semibold">Address</p>
                    <p className="text-gray-600">123 Paradise Road, Tropical Island</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-amber-500 p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700 font-semibold">Phone</p>
                    <p className="text-gray-600">+63 123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-amber-500 p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700 font-semibold">Email</p>
                    <p className="text-gray-600">info@residenciadelhamor.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-emerald-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 text-sm uppercase font-bold tracking-wider opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Find Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Our Location
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}></div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <div id="map" className="w-full h-96"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}