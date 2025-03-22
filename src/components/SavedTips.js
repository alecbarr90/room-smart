import React from 'react';
import { BookmarkCheck } from 'lucide-react';

const SavedTips = ({ savedTips, toggleSavedTip, getTipById }) => {
  return (
    <div className="bg-fuchsia-300 p-4 rounded-lg md:w-1/2 border-4 border-b-8 border-r-8 border-cyan-700 saved-box" 
      style={{
        boxShadow: "inset 2px 2px 10px white, inset -2px -2px 10px #666", 
        background: "linear-gradient(to right, #ff00ff, #00ffff)"
      }}
    >
      <h2 className="text-lg font-bold mb-3 text-cyan-800 bg-yellow-200 p-2 text-center border-2 border-cyan-700 transform rotate-1">
        ★★★ YOUR SAVED TECHNIQUES ★★★
      </h2>
      {savedTips.length === 0 ? (
        <div className="text-purple-800 p-4 text-center font-bold bg-white border-2 border-dashed border-purple-600">
          <p className="blink">You haven't saved any techniques yet.</p>
          <p className="text-sm mt-2">Click the bookmark icons to save your favourites!</p>
          <div className="inline-block mt-2 text-xl">👉👉👉</div>
        </div>
      ) : (
        <ul className="divide-y-2 divide-fuchsia-400 bg-white p-2 border-2 border-fuchsia-800">
          {savedTips.map(tipId => {
            const tip = getTipById(tipId);
            return tip ? (
              <li key={tipId} className="py-2">
                <div className="flex items-start">
                  <button 
                    onClick={() => toggleSavedTip(tipId)}
                    className="flex-shrink-0 text-red-600 mt-1"
                  >
                    <BookmarkCheck className="w-5 h-5" />
                  </button>
                  <div className="ml-2 flex-grow">
                    <div className="font-bold">{tip.title}</div>
                    <div className="text-xs text-fuchsia-800">From: {tip.category}</div>
                  </div>
                  <button 
                    onClick={() => toggleSavedTip(tipId)}
                    className="flex-shrink-0 text-red-600 mt-1"
                    aria-label="Delete this tip"
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ) : null;
          })}
        </ul>
      )}
    </div>
  );
};

export default React.memo(SavedTips);