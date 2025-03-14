import { useEffect } from 'react';

export default function Modal({ message, onClose }) {
  // Close the modal after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center animate-fade-in">
        <svg
          className="w-16 h-16 mx-auto text-emerald-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h2 className="text-2xl font-bold text-gray-900 mt-4">Thank You!</h2>
        <p className="text-gray-600 mt-2">{message}</p>
      </div>
    </div>
  );
}