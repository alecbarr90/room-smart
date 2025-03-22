import React from 'react';
import { BookmarkCheck, Bookmark } from 'lucide-react';

const SearchResults = ({ 
  searchResults, 
  savedTips, 
  toggleSavedTip, 
  showSearchResults,
  clearSearch 
}) => {
  if (!showSearchResults) return null;

  return (
    <div className="bg-white rounded-lg mb-8 border-4 border-b-8 border-r-8 border-green-500">
      <div className="p-4 bg-gradient-to-r from-green-300 via-cyan-300 to-blue-300 rounded-t-lg border-b-4 border-green-500 text-center">
        <h2 className="text-xl font-bold text-black">SEARCH RESULTS</h2>
        <div className="mt-2 bg-white inline-block px-4 py-1 border-2 border-blue-500 transform rotate-1">
          <span className="text-blue-600 font-bold">Found {searchResults.length} techniques!</span>
        </div>
      </div>
      
      {searchResults.length === 0 ? (
        <div className="p-8 text-center">
          <p className="text-purple-800 font-bold text-lg">No results found!</p>
          <p className="text-gray-600 mt-2">Try different search terms or filters.</p>
          <div className="mt-4 animate-bounce text-2xl">😢</div>
        </div>
      ) : (
        <ul className="divide-y-2 divide-green-200 p-4">
          {searchResults.map(tip => (
            <li key={tip.id} className="py-4">
              <div className="flex items-start">
                <button 
                  onClick={() => toggleSavedTip(tip.id)} 
                  className="flex-shrink-0 text-gray-400 hover:text-red-600 transition-colors mt-1"
                  aria-label={savedTips.includes(tip.id) ? "Unsave this tip" : "Save this tip"}
                >
                  {savedTips.includes(tip.id) ? (
                    <BookmarkCheck className="w-5 h-5 text-red-600" />
                  ) : (
                    <Bookmark className="w-5 h-5" />
                  )}
                </button>
                <div className="ml-2">
                  <h4 className="font-bold text-purple-800">{tip.title}</h4>
                  <div className="text-xs text-fuchsia-800 mb-1">From: {tip.categoryTitle}</div>
                  <p className="text-gray-800">{tip.content}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default React.memo(SearchResults);