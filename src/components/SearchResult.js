import React from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';

const SearchResult = ({ tip, isSaved, onToggleSave }) => {
  const handleSave = (e) => {
    const element = e.currentTarget.closest('li');
    onToggleSave(tip.id, element);
  };

  return (
    <div className="flex items-start">
      <button 
        onClick={handleSave}
        className="flex-shrink-0 text-gray-400 hover:text-red-600 transition-colors mt-1"
        aria-label={isSaved ? "Unsave this tip" : "Save this tip"}
      >
        {isSaved ? (
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
  );
};

export default SearchResult;
