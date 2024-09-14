import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import data from '../data/Country.json';
import Modal from './Modal';

const Search = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      if (query) {
        const lowerQuery = query.toLowerCase();
        const filtered = data.filter(item =>
          item.country.toLowerCase().includes(lowerQuery) ||
          item.capital.toLowerCase().includes(lowerQuery)
        ).slice(0, 5); // Show only top 5 results
        setSuggestions(filtered);
      } else {
        setSuggestions([]);
      }
      setLoading(false);
    };

    fetchSuggestions();
  }, [query]);

  const handleResultClick = (country) => {
    setSelectedCountry(country);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCountry(null);
  };

  return (
    <div className="relative w-full max-w-md mx-auto px-4 sm:px-6 mt-5 bg-gray-900 text-white">
      <input
        type="text"
        placeholder="Search for a country or capital..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-4 border border-gray-700 bg-gray-800 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
      />
      {loading ? (
        <Loader count={5} className="absolute w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg mt-2" />
      ) : (
        suggestions.length > 0 && (
          <ul className="absolute w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg mt-2">
            {suggestions.map((item, index) => (
              <li
                key={index}
                className="p-4 border-b last:border-b-0 hover:bg-gray-700 cursor-pointer transition duration-200 ease-in-out"
                onClick={() => handleResultClick(item)}
              >
                <div className="font-semibold text-white">{item.country}</div>
                <div className="text-sm text-gray-400">{item.capital}</div>
              </li>
            ))}
          </ul>
        )
      )}
      {selectedCountry && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          countryDetails={selectedCountry}
        />
      )}
    </div>
  );
};

export default Search;
