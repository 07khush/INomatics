import React from 'react';

const Loader = ({ count, className }) => {
  return (
    <>
      {[...Array(count)].map((_, index) => (
        <div key={index} className={`p-4 border-b border-gray-700 animate-pulse ${className}`}>
          <div className="bg-gray-600 h-4 mb-2 rounded"></div>
          <div className="bg-gray-600 h-4 rounded"></div>
        </div>
      ))}
    </>
  );
};

export default Loader;
