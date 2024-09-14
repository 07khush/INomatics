import React from 'react';
import { X } from 'lucide-react'; // Using Lucide icons

const Modal = ({ isOpen, onClose, countryDetails }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-60" onClick={onClose}></div>
      <div className="relative bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-4 z-60">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <h2 className="text-2xl font-bold mb-4">{countryDetails.country}</h2>
        <p className="text-lg mb-2"><strong>Capital:</strong> {countryDetails.capital}</p>
        <p className="text-lg mb-2"><strong>Population:</strong> {countryDetails.population.toLocaleString()}</p>
        <p className="text-lg mb-2"><strong>Official Language:</strong> {Array.isArray(countryDetails.official_language) ? countryDetails.official_language.join(', ') : countryDetails.official_language}</p>
        <p className="text-lg"><strong>Currency:</strong> {countryDetails.currency}</p>
      </div>
    </div>
  );
};

export default Modal;
