// components/Chatbot.js
import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg w-80 max-w-full overflow-hidden">
          <div className="p-4 bg-emerald-800 text-white">
            <h2 className="text-lg font-semibold">How can we assist you?</h2>
          </div>
          <div className="p-4">
            {selectedOption ? (
              <div>
                <p className="text-gray-700 mb-4">You selected: {selectedOption}</p>
                <button
                  onClick={() => setSelectedOption(null)}
                  className="text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                  Go Back
                </button>
              </div>
            ) : (
              <div>
                <p className="text-gray-700 mb-4">Please choose an option:</p>
                <button
                  onClick={() => handleOptionClick('How much is it?')}
                  className="block w-full text-left p-2 mb-2 bg-emerald-50 text-emerald-800 rounded-md hover:bg-emerald-100 transition duration-300"
                >
                  How much is it?
                </button>
                <button
                  onClick={() => handleOptionClick('Where is it located?')}
                  className="block w-full text-left p-2 mb-2 bg-emerald-50 text-emerald-800 rounded-md hover:bg-emerald-100 transition duration-300"
                >
                  Where is it located?
                </button>
                <button
                  onClick={() => handleOptionClick('Available transactions')}
                  className="block w-full text-left p-2 bg-emerald-50 text-emerald-800 rounded-md hover:bg-emerald-100 transition duration-300"
                >
                  Available transactions
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-emerald-800 text-white p-4 rounded-full shadow-lg hover:bg-emerald-900 transition duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  );
}