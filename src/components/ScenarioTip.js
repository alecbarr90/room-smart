import React from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';

const ScenarioTip = ({ tip, category, isSaved, onToggleSave }) => {
  const handleSave = (e) => {
    const element = e.currentTarget.closest('.bg-white');
    onToggleSave(tip.id, element);
  };

  return (
    <div className="bg-white p-4 rounded-md border-2 border-dashed border-fuchsia-500">
      <div className="flex justify-between">
        <h4 className="font-bold text-purple-800">⚡ {tip.title} ⚡</h4>
        <button 
          onClick={handleSave}
          className="text-gray-400 hover:text-red-600 transition-colors"
        >
          {isSaved ? (
            <BookmarkCheck className="w-5 h-5 text-red-600" />
          ) : (
            <Bookmark className="w-5 h-5" />
          )}
        </button>
      </div>
      <p className="text-blue-800 mt-1">{tip.content}</p>
      <div className="text-xs text-red-600 mt-2 font-bold">From: {category}</div>
    </div>
  );
};

export default ScenarioTip;
