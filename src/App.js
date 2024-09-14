import React from 'react';
import './App.css'; // Ensure this includes your dark theme styles
import Search from './components/Search';

function App() {
  return (
    <div className="App bg-gray-900 text-white min-h-screen">
      <header className="bg-gray-800 text-white p-4 shadow-md">
        <h1 className="text-3xl font-bold text-center">Country Search</h1>
      </header>
      <main className="p-4">
        <Search/>
      </main>
    </div>
  );
}

export default App;
