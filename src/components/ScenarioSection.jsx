import React from 'react';

const ScenarioSection = ({ scenarios, openScenario }) => {
  return (
    <div className="bg-cyan-300 p-4 rounded-lg md:w-1/2 border-4 border-b-8 border-r-8 border-fuchsia-700 scenario-box" 
      style={{
        boxShadow: "inset 2px 2px 10px white, inset -2px -2px 10px #666", 
        background: "linear-gradient(to right, #ff00ff, #00ffff)"
      }}
    >
      <h2 className="text-lg font-bold mb-3 text-fuchsia-800 bg-yellow-200 p-2 text-center border-2 border-fuchsia-700 transform -rotate-1">
        <span className="blink">*** CHOOSE YOUR SCENARIO ***</span>
      </h2>
      <p className="text-blue-800 mb-4 font-bold text-center">Click a situation below!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {scenarios.map(scenario => (
          <button
            key={scenario.id}
            onClick={() => openScenario(scenario)}
            className="p-3 bg-yellow-200 hover:bg-yellow-300 text-left transition-colors border-2 border-b-4 border-r-4 border-blue-800 font-bold text-blue-800 hover:text-blue-600"
          >
            <div className="font-bold">{scenario.title} ➔</div>
            <div className="text-sm">{scenario.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default React.memo(ScenarioSection);