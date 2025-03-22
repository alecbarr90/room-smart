import React from 'react';
import { ChevronRight, ChevronDown, Bookmark, BookmarkCheck } from 'lucide-react';

const CategoryList = ({ categories, selectedCategory, toggleCategory, savedTips, toggleSavedTip }) => {
  return (
    <div className="bg-white rounded-lg mb-8 border-4 border-b-8 border-r-8 border-yellow-500" style={{
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'52\' height=\'26\' viewBox=\'0 0 52 26\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ff00ff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z\' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    }}>
      <div className="p-4 bg-gradient-to-r from-yellow-300 via-fuchsia-300 to-cyan-300 rounded-t-lg border-b-4 border-yellow-500 text-center all-techniques-header">
        <div className="mx-auto mb-2 border border-gray-500 bg-white p-2 text-center">
          <span className="animate-pulse text-red-600 font-bold text-xl">🔥 HOT NEW SMARTNESS TIPS! 🔥</span>
          <div className="text-xs text-blue-800">[ advertisement ]</div>
        </div>
        <h2 className="text-xl font-bold text-black">ALL SMARTNESS TECHNIQUES</h2>
        <div className="mt-2 bg-white inline-block px-4 py-1 border-2 border-red-500 transform -rotate-2">
          <span className="text-red-600 font-bold">🆕 UPDATED FOR 2025! 🆕</span>
        </div>
      </div>

      <div className="divide-y-4 divide-yellow-400">
        {categories.map(category => (
          <div key={category.id} className="overflow-hidden">
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full p-4 flex items-center justify-between hover:bg-cyan-100 transition-colors bg-gradient-to-r from-white to-yellow-100"
            >
              <div className="flex items-center">
                <div className="mr-3 text-red-500 bg-yellow-200 p-2 border-2 border-red-500">{category.icon}</div>
                <div className="text-left">
                  <h3 className="font-bold text-blue-800">{category.title}</h3>
                  <p className="text-sm text-purple-800">{category.description}</p>
                </div>
              </div>
              {selectedCategory === category.id ? (
                <ChevronDown className="h-5 w-5 text-blue-600" />
              ) : (
                <ChevronRight className="h-5 w-5 text-blue-600" />
              )}
            </button>

            {selectedCategory === category.id && (
              <div className="px-4 pb-4 bg-fuchsia-100">
                <ul className="divide-y-2 divide-cyan-400 border-2 border-cyan-500 bg-white">
                  {category.tips.map(tip => (
                    <li key={tip.id} className="py-3 px-3 hover:bg-yellow-50">
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
                          <p className="text-gray-800 mt-1">{tip.content}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(CategoryList);