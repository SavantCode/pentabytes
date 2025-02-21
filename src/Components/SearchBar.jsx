import React, { useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // You can handle search logic here, such as routing or calling an API
    console.log('Search Query:', searchQuery);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex items-center">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search..."
        className="px-4 py-2  text-black rounded-l-lg focus:outline-none"
      />
      <button
        type="submit"
        className="bg-[rgba(0,0,0,0.28)] text-white px-4 py-2 rounded-r-lg hover:bg-[rgba(0,0,0,0.9)] transition duration-300"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
