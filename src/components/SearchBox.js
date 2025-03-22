import React from 'react';
import { Search } from 'lucide-react';

const SearchBox = ({ 
  searchTerm, 
  setSearchTerm, 
  categoryFilter, 
  setCategoryFilter,
  handleSearch,
  handleSearchKeyPress,
  clearSearch,
  categories
}) => {
  return (
    <div className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-yellow-300 p-4 rounded-lg mb-8 border-4 border-b-8 border-r-8 border-purple-700" 
      style={{boxShadow: "inset 2px 2px 10px white, inset -2px -2px 10px #666"}}
    >
      <h2 className="text-lg font-bold mb-3 text-purple-800 bg-yellow-200 p-2 text-center border-2 border-purple-700 transform rotate-1">
        <span className="animate-pulse inline-block">🔍 SEARCH FOR SMARTNESS TECHNIQUES 🔍</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Search Input */}
        <div className="bg-white p-4 border-4 border-blue-500 border-b-8 border-r-8 md:col-span-2">
          <label className="block text-blue-800 font-bold mb-3 text-lg">Search Strategies:</label>
          <div className="flex">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleSearchKeyPress}
              placeholder="Type your search and press Enter..."
              className="w-full p-3 border-4 border-purple-500 font-bold text-purple-800 text-lg"
              style={{fontFamily: "'Comic Sans MS', 'Comic Sans', Arial, sans-serif"}}
            />
            <button
              onClick={handleSearch}
              className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-6 border-4 border-b-8 border-purple-900 font-bold hover:from-purple-600 hover:to-fuchsia-600 transform hover:rotate-1 transition-transform flex items-center"
            >
              <Search className="w-6 h-6" />
            </button>
          </div>
          <p className="text-gray-600 mt-2 text-sm">Press Enter to search or click the search button!</p>
        </div>
        
        {/* Category Filter */}
        <div className="bg-white p-4 border-4 border-fuchsia-500 border-b-8 border-r-8">
          <label className="block text-fuchsia-800 font-bold mb-3">Filter by Category:</label>
          <select
            value={categoryFilter}
            onChange={(e) => {
              setCategoryFilter(e.target.value);
              if (searchTerm) handleSearch();
            }}
            className="w-full p-3 border-4 border-fuchsia-500 font-bold text-fuchsia-800 bg-white"
            style={{fontFamily: "'Comic Sans MS', 'Comic Sans', Arial, sans-serif"}}
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.title}</option>
            ))}
          </select>
        </div>
        
        {/* Clear Button */}
        <div className="bg-white p-4 border-4 border-cyan-500 border-b-8 border-r-8 flex items-center">
          <button
            onClick={clearSearch}
            className="w-full bg-gradient-to-r from-yellow-400 to-red-500 text-white py-3 px-4 border-4 border-b-8 border-yellow-700 font-bold hover:from-yellow-500 hover:to-red-600 transform hover:-rotate-1 transition-transform text-lg"
          >
            CLEAR SEARCH!
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SearchBox);