import React, { useState, useEffect, useCallback } from 'react';
import { categories, scenarios, getTipById } from './data/smartData';
import SearchBox from './components/SearchBox';
import SearchResults from './components/SearchResults';
import SavedTips from './components/SavedTips';
import ScenarioSection from './components/ScenarioSection';
import CategoryList from './components/CategoryList';
import ScenarioModal from './components/ScenarioModal';

// 90s styled component
const SmartestPersonApp = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [savedTips, setSavedTips] = useState([]);
  const [currentScenario, setCurrentScenario] = useState(null);
  const [showScenarioModal, setShowScenarioModal] = useState(false);
  const [visitorCount] = useState(Math.floor(Math.random() * 10000) + 5000);
  
  // Search state
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  
  // Search function
  const handleSearch = useCallback(() => {
    let results = [];
    
    // Get all tips from all categories
    categories.forEach(category => {
      const categoryId = category.id;
      const categoryTitle = category.title;
      
      // Filter by category if not "all"
      if (categoryFilter !== 'all' && categoryId !== categoryFilter) {
        return;
      }
      
      category.tips.forEach(tip => {
        // Filter by search term (case insensitive)
        const matchesSearchTerm = searchTerm === '' || 
          tip.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          tip.content.toLowerCase().includes(searchTerm.toLowerCase());
        
        if (matchesSearchTerm) {
          results.push({
            ...tip,
            categoryId,
            categoryTitle
          });
        }
      });
    });
    
    setSearchResults(results);
    setShowSearchResults(true);
  }, [searchTerm, categoryFilter]);
  
  // Clear search
  const clearSearch = useCallback(() => {
    setSearchTerm('');
    setCategoryFilter('all');
    setShowSearchResults(false);
    setSearchResults([]);
  }, []);

  // Handle search on Enter key press
  const handleSearchKeyPress = useCallback((event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }, [handleSearch]);

  const toggleCategory = useCallback((id) => {
    setSelectedCategory(prevSelected => prevSelected === id ? null : id);
  }, []);

  const toggleSavedTip = useCallback((tipId) => {
    setSavedTips(prevSaved => {
      if (prevSaved.includes(tipId)) {
        return prevSaved.filter(id => id !== tipId);
      } else {
        return [...prevSaved, tipId];
      }
    });
  }, []);

  const openScenario = useCallback((scenario) => {
    setCurrentScenario(scenario);
    setShowScenarioModal(true);
  }, []);
  
  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && showScenarioModal) {
        setShowScenarioModal(false);
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [showScenarioModal]);

  return (
    <div className="flex flex-col min-h-screen bg-black" style={{
      backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\' viewBox=\'0 0 800 800\'%3E%3Cg fill=\'none\' stroke=\'%23404\' stroke-width=\'1\'%3E%3Cpath d=\'M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63\'/%3E%3Cpath d=\'M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764\'/%3E%3Cpath d=\'M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880\'/%3E%3Cpath d=\'M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382\'/%3E%3Cpath d=\'M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269\'/%3E%3C/g%3E%3Cg fill=\'%2300FFFF\'%3E%3Ccircle cx=\'769\' cy=\'229\' r=\'5\'/%3E%3Ccircle cx=\'539\' cy=\'269\' r=\'5\'/%3E%3Ccircle cx=\'603\' cy=\'493\' r=\'5\'/%3E%3Ccircle cx=\'731\' cy=\'737\' r=\'5\'/%3E%3Ccircle cx=\'520\' cy=\'660\' r=\'5\'/%3E%3Ccircle cx=\'309\' cy=\'538\' r=\'5\'/%3E%3Ccircle cx=\'295\' cy=\'764\' r=\'5\'/%3E%3Ccircle cx=\'40\' cy=\'599\' r=\'5\'/%3E%3Ccircle cx=\'102\' cy=\'382\' r=\'5\'/%3E%3Ccircle cx=\'127\' cy=\'80\' r=\'5\'/%3E%3Ccircle cx=\'370\' cy=\'105\' r=\'5\'/%3E%3Ccircle cx=\'578\' cy=\'42\' r=\'5\'/%3E%3Ccircle cx=\'237\' cy=\'261\' r=\'5\'/%3E%3Ccircle cx=\'390\' cy=\'382\' r=\'5\'/%3E%3C/g%3E%3C/svg%3E")',
      fontFamily: "'Comic Sans MS', 'Comic Sans', Arial, sans-serif"
    }}>
      <header className="bg-gradient-to-r from-fuchsia-600 via-yellow-400 to-cyan-500 text-white p-6 text-center border-b-8 border-t-8 border-yellow-300 hero-banner" style={{boxShadow: "0 10px 0 #333"}}>
        <div className="animate-bounce inline-block mb-2">⭐⭐⭐</div>
        <h1 className="text-3xl font-bold mb-2 text-black" style={{textShadow: "2px 2px 0 #fff", background: "linear-gradient(to right, #ff00ff, #00ffff)", WebkitBackgroundClip: "text", color: "transparent"}}>
          HOW TO BE THE SMARTEST PERSON IN THE ROOM!
        </h1>
        <div className="animate-pulse">
          <p className="text-black font-bold bg-yellow-200 inline-block p-1 rotate-2 transform border-2 border-red-500">
            🔥🔥🔥 SELECT YOUR SMARTNESS STRATEGY! 🔥🔥🔥
          </p>
        </div>
        <div className="mt-2 text-black bg-white inline-block px-3 py-1 rounded-lg border-2 border-b-4 border-black">
          <span className="animate-pulse inline-block">Visitors: {visitorCount}</span> since 1997
        </div>
      </header>

      <div className="bg-yellow-300 text-blue-800 font-bold py-1 border-b-4 border-blue-500 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          ** WELCOME TO THE ULTIMATE GUIDE TO SMARTNESS ** THIS SITE IS BEST VIEWED IN NETSCAPE NAVIGATOR 3.0 ** UNDER CONSTRUCTION ** LAST UPDATED: 03/14/2025 **
        </div>
      </div>

      <div className="p-6 max-w-4xl mx-auto w-full flex-grow">
        {/* Search Box Component */}
        <SearchBox 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          handleSearch={handleSearch}
          handleSearchKeyPress={handleSearchKeyPress}
          clearSearch={clearSearch}
          categories={categories}
        />
        
        {/* Search Results Component */}
        <SearchResults 
          searchResults={searchResults}
          savedTips={savedTips}
          toggleSavedTip={toggleSavedTip}
          showSearchResults={showSearchResults}
          clearSearch={clearSearch}
        />

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          {/* Scenario Section Component */}
          <ScenarioSection 
            scenarios={scenarios}
            openScenario={openScenario}
          />

          {/* Saved Tips Component */}
          <SavedTips 
            savedTips={savedTips}
            toggleSavedTip={toggleSavedTip}
            getTipById={getTipById}
          />
        </div>

        {/* Category List Component */}
        <CategoryList 
          categories={categories}
          selectedCategory={selectedCategory}
          toggleCategory={toggleCategory}
          savedTips={savedTips}
          toggleSavedTip={toggleSavedTip}
        />
      </div>

      {/* Scenario Modal Component */}
      <ScenarioModal 
        showScenarioModal={showScenarioModal}
        currentScenario={currentScenario}
        setShowScenarioModal={setShowScenarioModal}
        getTipById={getTipById}
        savedTips={savedTips}
        toggleSavedTip={toggleSavedTip}
      />

      <footer className="bg-gradient-to-r from-purple-800 via-fuchsia-700 to-blue-800 text-white p-6 text-center border-t-8 border-yellow-300 relative footer-gradient">
        <div className="absolute top-0 left-0 w-full h-4 bg-yellow-300"></div>
        <div className="inline-block mr-2 border bg-gray-200 text-blue-900 text-xs p-1 font-bold">
          <span className="block">VALID HTML</span>
          <span className="block">4.01!</span>
        </div>
        <div className="inline-block mr-2 border bg-blue-900 text-white text-xs p-1 font-bold">
          <span className="block">BEST VIEWED IN</span>
          <span className="block">NETSCAPE 3.0</span>
        </div>
        
        <p className="mt-3 font-bold">
          © 1997-2025 - This site made with 
          <span className="mx-1 text-red-500">❤️</span> 
          on a Pentium 166MHz
        </p>
        <p className="text-xs mt-2 font-bold">
          E-MAIL THE WEBMASTER: <a href="#" className="text-yellow-300 underline">webmaster@geocities.com</a>
        </p>
        <div className="text-center mt-4">
          <a href="#" className="text-yellow-300 inline-block border-2 border-yellow-300 p-2 mx-2 font-bold hover:bg-yellow-300 hover:text-purple-800">HOME</a>
          <a href="#" className="text-yellow-300 inline-block border-2 border-yellow-300 p-2 mx-2 font-bold hover:bg-yellow-300 hover:text-purple-800">GUESTBOOK</a>
          <a href="#" className="text-yellow-300 inline-block border-2 border-yellow-300 p-2 mx-2 font-bold hover:bg-yellow-300 hover:text-purple-800">LINKS</a>
        </div>
      </footer>
    </div>
  );
};

export default SmartestPersonApp;