import React from 'react';
import { BookmarkCheck, Bookmark } from 'lucide-react';

const ScenarioModal = ({ 
  showScenarioModal, 
  currentScenario, 
  setShowScenarioModal, 
  getTipById, 
  savedTips, 
  toggleSavedTip 
}) => {
  if (!showScenarioModal || !currentScenario) return null;
  
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center p-4 z-50 overflow-y-auto"
      onClick={() => setShowScenarioModal(false)}
    >
      <div 
        className="bg-yellow-100 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto my-12 relative border-8 border-purple-500"
        onClick={(e) => e.stopPropagation()}
        style={{boxShadow: "10px 10px 0 #000"}}
      >
        <div className="sticky top-0 bg-gradient-to-r from-cyan-400 via-fuchsia-300 to-yellow-300 z-10 border-b-4 border-purple-500 scenario-modal-header">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-xl font-bold text-purple-900 bg-white py-1 px-3 border-2 border-purple-800 transform -rotate-1">⭐ {currentScenario.title} ⭐</h2>
            <button 
              onClick={() => setShowScenarioModal(false)}
              className="text-red-500 hover:text-red-700 p-2 rounded-full bg-white hover:bg-yellow-200 transition-colors border-2 border-red-500 font-bold"
              aria-label="Close modal"
              title="Close (or press ESC)"
            >
              <span className="text-xl">X</span>
            </button>
          </div>
        </div>
        <div className="p-6 pt-4">
          <p className="text-black font-bold mb-6 bg-white p-3 border-2 border-dashed border-blue-500">{currentScenario.description}</p>
          
          <h3 className="font-bold text-purple-900 bg-cyan-200 p-2 text-center mb-3 border-2 border-purple-800">
            <span className="animate-pulse inline-block">!!! RECOMMENDED TECHNIQUES !!!</span>
          </h3>
          
          <div className="space-y-4">
            {currentScenario.recommendedTips.map(tipId => {
              const tip = getTipById(tipId);
              return tip ? (
                <div key={tipId} className="bg-white p-4 rounded-md border-2 border-dashed border-fuchsia-500">
                  <div className="flex justify-between">
                    <h4 className="font-bold text-purple-800">⚡ {tip.title} ⚡</h4>
                    <button 
                      onClick={() => toggleSavedTip(tipId)}
                      className="text-gray-400 hover:text-red-600 transition-colors"
                    >
                      {savedTips.includes(tipId) ? (
                        <BookmarkCheck className="w-5 h-5 text-red-600" />
                      ) : (
                        <Bookmark className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <p className="text-blue-800 mt-1">{tip.content}</p>
                  <div className="text-xs text-red-600 mt-2 font-bold">From: {tip.category}</div>
                </div>
              ) : null;
            })}
          </div>
          
          <div className="mt-6 pt-4 border-t-4 border-purple-500 flex justify-center">
            <button
              onClick={() => setShowScenarioModal(false)}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white rounded-md hover:from-purple-700 hover:to-fuchsia-600 focus:ring-2 focus:ring-yellow-300 focus:outline-none font-bold border-4 border-b-8 border-purple-900 transform hover:rotate-1 transition-transform"
              aria-label="Close scenario recommendations"
            >
              CLICK HERE TO CLOSE!!! (ESC)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ScenarioModal);