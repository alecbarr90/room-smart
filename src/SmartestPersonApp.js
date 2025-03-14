import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Bookmark, BookmarkCheck, Brain, Lightbulb, BookOpen, PieChart, Users, Smile, Shuffle, ScrollText, Mic, Trophy } from 'lucide-react';

// 90s styled component
const SmartestPersonApp = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [savedTips, setSavedTips] = useState([]);
  const [currentScenario, setCurrentScenario] = useState(null);
  const [showScenarioModal, setShowScenarioModal] = useState(false);
  const [visitorCount] = useState(Math.floor(Math.random() * 10000) + 5000);

  const categories = [
    {
      id: 'keep-it-simple',
      title: 'Keep it Simple',
      icon: <Brain className="w-6 h-6" />,
      description: 'Make complex things seem simple and straightforward.',
      tips: [
        {
          id: 'break-it-down',
          title: 'Break it Down',
          content: 'Break any problem into smaller manageable tasks. Build confidence by solving one thing at a time. Simply saying "let\'s break this down" sounds smart!'
        },
        {
          id: 'helicopter-view',
          title: 'Step Back (Helicopter View)',
          content: 'Say "let\'s step back a moment" to gain perspective. Return to the original purpose of the meeting or view the problem from above to see obvious solutions.'
        },
        {
          id: 'circles-influence',
          title: 'Circles of Influence',
          content: 'Draw two circles: things you can directly influence and things you cannot. Focus only on what you can control to cut through anxiety and confusion.'
        },
        {
          id: 'connections',
          title: 'Make Connections',
          content: 'See connections others don\'t. Look for the "why behind the why." Connect seemingly unrelated ideas to simplify problems and find elegant solutions.'
        }
      ]
    },
    {
      id: 'models-magical',
      title: 'Models Are Magical',
      icon: <PieChart className="w-6 h-6" />,
      description: 'Introduce a visual model to explain things simply and memorably.',
      tips: [
        {
          id: 'triangles',
          title: 'Triangles',
          content: 'Use triangles to show three connected points with space in the middle for your conclusion. The rule of three makes concepts memorable and complete.'
        },
        {
          id: 'shapes',
          title: 'Squares and Shapes',
          content: 'Different shapes serve different purposes: squares for four points, circles to show inside/outside, temples to show structure and vision.'
        },
        {
          id: 'semiotic-myths',
          title: 'Semiotic Myths',
          content: 'Bring together things that shouldn\'t go together to create something new. Think oxymoronically rather than logically to generate excitement.'
        },
        {
          id: 'zigging',
          title: 'Zigging',
          content: 'Identify the "rules" everyone follows in your category, then break or bend them to stand out. This creates distinctiveness that gets people talking.'
        }
      ]
    },
    {
      id: 'story-pocket',
      title: 'Pull a Story from Your Pocket',
      icon: <BookOpen className="w-6 h-6" />,
      description: 'Wrap your points in stories to engage your audience.',
      tips: [
        {
          id: 'my-mum',
          title: 'My Mum Said...',
          content: 'Reference someone else (like your mum) to introduce controversial thoughts or blindingly obvious simplicity with authenticity. Never yourself!'
        },
        {
          id: 'dead-fish',
          title: 'The Dead Fish Story',
          content: 'Wrap up your point in a story (true or not). A good anecdote can count for a thousand charts and helps people remember your point.'
        },
        {
          id: 'another-account',
          title: 'Reference Another Account',
          content: 'Mention insights from other projects you\'ve worked on to provide analogies. This shows your breadth of experience and worldly wisdom.'
        },
        {
          id: 'cultural-connections',
          title: 'Cultural References',
          content: 'Connect films, books, TV shows to brands, business or social issues. Shows you\'re culturally aware and can make clever connections.'
        }
      ]
    },
    {
      id: 'book-club',
      title: 'The Radical Book Club',
      icon: <ScrollText className="w-6 h-6" />,
      description: 'Read widely and differently to have unique insights.',
      tips: [
        {
          id: 'subversive',
          title: 'Supplement Regular with Subversive',
          content: 'Read about topics you dislike or disagree with. Escape your echo chamber to gain fresh perspectives and unexpected insights.'
        },
        {
          id: 'patterning',
          title: 'Look for Patterns',
          content: 'Read books about connections, models, and patterns in how we think or act. Find one useful pattern to share to appear incredibly smart.'
        },
        {
          id: 'review',
          title: 'Cheat with Reviews',
          content: 'Read weekend book reviews to get the gist of many books quickly. Pick up one insight each week to share with clients or colleagues.'
        },
        {
          id: 'slice-dice',
          title: 'Slice and Dice Books',
          content: 'You don\'t need to read books cover to cover! Read the first and last chapters to get the main points, then skim the rest for examples.'
        }
      ]
    },
    {
      id: 'never-about-you',
      title: 'It\'s Never About You',
      icon: <Users className="w-6 h-6" />,
      description: 'Stop expressing your personal opinions as if they represent others.',
      tips: [
        {
          id: 'observation',
          title: 'Be an Observer',
          content: 'Say "I\'ve noticed that people..." instead of "When I..." Watch body language and decode it - "listen to the music, not just the lyrics."'
        },
        {
          id: 'obsession',
          title: 'Develop an Obsession',
          content: 'Be genuinely obsessed with your target audience. Clients love hearing real anecdotes, videos or tweets from actual consumers.'
        },
        {
          id: 'brand-autopsy',
          title: 'Brand Autopsy',
          content: 'Ask people how they\'d feel if a brand disappeared. Their response reveals true emotional attachment or lack thereof, fascinating to clients.'
        }
      ]
    },
    {
      id: 'double-art',
      title: 'Double Art on Friday',
      icon: <Smile className="w-6 h-6" />,
      description: 'Understand clients as people not just professionals.',
      tips: [
        {
          id: 'fun-time',
          title: 'Make It Fun',
          content: 'Clients want agency time to be fun, like double art class on Friday afternoons. They\'re escaping their normal pressures - make it special!'
        },
        {
          id: 'wish-i-was-you',
          title: 'They Wish They Were You',
          content: 'Clients could have been you in another life. They\'re fascinated by what you do. Engage them human-to-human, not just professionally.'
        },
        {
          id: 'speed-seduction',
          title: 'Speed Seduction',
          content: 'Ask questions, listen genuinely, then refer back to details later. Shows you truly listen and care, not fake-listening for show.'
        },
        {
          id: 'junior-important',
          title: 'Not-So-Junior-Junior',
          content: 'Pay attention to the most junior person in meetings. They may have more influence than you think, and their manager will notice your inclusivity.'
        }
      ]
    },
    {
      id: 'defy-expectations',
      title: 'Defy Expectations',
      icon: <Shuffle className="w-6 h-6" />,
      description: 'Do the unexpected to gain trust and respect.',
      tips: [
        {
          id: 'against-idea',
          title: 'Go Against the Idea',
          content: 'Sometimes agree with the client against your agency. Become their ally by taking their position and building out their argument thoughtfully.'
        },
        {
          id: 'win-by-agreeing',
          title: 'Win by Agreeing',
          content: 'Let others speak first, summarise their view, agree with some aspect, find shared ground, get them agreeing with you, then deliver your view.'
        }
      ]
    },
    {
      id: 'knowledge',
      title: 'A Little Bit of Knowledge',
      icon: <Lightbulb className="w-6 h-6" />,
      description: 'A small amount of preparation makes you appear amazingly smart.',
      tips: [
        {
          id: 'porter',
          title: 'The Porter Principle',
          content: 'Always be more prepared than expected. Before client meetings, check recent news about their brand and scan business headlines weekly.'
        },
        {
          id: 'website-reviews',
          title: 'Website Reviews',
          content: 'Find your "thing" to reference often. Read customer reviews, social comments, or have a unique perspective that shows you\'re switched on.'
        },
        {
          id: 'window-blind',
          title: 'The Window Blind',
          content: 'Start conversations by getting people to "raise their blind" gradually. Small talk about journey, weather, etc. before important business.'
        }
      ]
    },
    {
      id: 'last-word',
      title: 'Own the Last Word',
      icon: <Mic className="w-6 h-6" />,
      description: 'Take control of how meetings end to appear in charge.',
      tips: [
        {
          id: 'sum-it-up',
          title: 'Sum It Up',
          content: 'Be the one to summarise what people have said and outline next actions. The last voice is often the most remembered.'
        },
        {
          id: 'close-it-down',
          title: 'Close It Down',
          content: 'Be the person who says "enough already" and moves things along. People appreciate someone who can end unproductive discussions.'
        },
        {
          id: 'momentum',
          title: 'Keep Momentum',
          content: 'Be the "what\'s nexter" by leading the charge on next steps. Even if you contributed little, owning the momentum makes you valuable.'
        }
      ]
    },
    {
      id: 'competitive-advantage',
      title: 'Be the Competitive Advantage',
      icon: <Trophy className="w-6 h-6" />,
      description: 'Give clients something they can\'t get elsewhere.',
      tips: [
        {
          id: 'success',
          title: 'Want Success More',
          content: 'Be the beacon of hope, optimism and can-do attitude. Your desire for success will encourage clients to buy into your recommendations.'
        },
        {
          id: 'hate-enemy',
          title: 'Hate the Enemy',
          content: 'Show passion by focusing on a shared "enemy" - competition, complacency, etc. Show clients you\'re in the trenches with them.'
        },
        {
          id: 'enthusiasm',
          title: 'Massive Enthusiasm',
          content: 'Generate enthusiasm in every meeting. The brightest, bushiest-tailed person holds the centre of gravity. This could be you!'
        }
      ]
    }
  ];

  const scenarios = [
    {
      id: 'meeting',
      title: 'In a Meeting',
      description: 'You need to appear smart during a team or client meeting',
      recommendedTips: ['helicopter-view', 'sum-it-up', 'triangles', 'break-it-down']
    },
    {
      id: 'presentation',
      title: 'Giving a Presentation',
      description: 'You need to impress during a formal presentation',
      recommendedTips: ['dead-fish', 'zigging', 'shapes', 'enthusiasm']
    },
    {
      id: 'client',
      title: 'With a New Client',
      description: 'You need to establish credibility with a new client',
      recommendedTips: ['window-blind', 'observation', 'porter', 'another-account']
    },
    {
      id: 'brainstorm',
      title: 'During a Brainstorm',
      description: 'You want to contribute meaningfully to a creative session',
      recommendedTips: ['semiotic-myths', 'connections', 'cultural-connections', 'win-by-agreeing']
    },
    {
      id: 'crisis',
      title: 'During a Crisis',
      description: 'You need to appear calm and in control during a problem',
      recommendedTips: ['circles-influence', 'close-it-down', 'against-idea', 'momentum']
    }
  ];

  const toggleCategory = (id) => {
    if (selectedCategory === id) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(id);
    }
  };

  const toggleSavedTip = (tipId) => {
    if (savedTips.includes(tipId)) {
      setSavedTips(savedTips.filter(id => id !== tipId));
    } else {
      setSavedTips([...savedTips, tipId]);
    }
  };

  const openScenario = (scenario) => {
    setCurrentScenario(scenario);
    setShowScenarioModal(true);
  };
  
  // Handle ESC key press to close modal
  React.useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && showScenarioModal) {
        setShowScenarioModal(false);
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [showScenarioModal]);

  const getTipById = (tipId) => {
    for (const category of categories) {
      const tip = category.tips.find(t => t.id === tipId);
      if (tip) return { ...tip, category: category.title };
    }
    return null;
  };

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

      <marquee scrollamount="3" className="bg-yellow-300 text-blue-800 font-bold py-1 border-b-4 border-blue-500">
        ** WELCOME TO THE ULTIMATE GUIDE TO SMARTNESS ** THIS SITE IS BEST VIEWED IN NETSCAPE NAVIGATOR 3.0 ** UNDER CONSTRUCTION ** LAST UPDATED: 03/14/2025 **
      </marquee>

      <div className="p-6 max-w-4xl mx-auto w-full flex-grow">
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="bg-cyan-300 p-4 rounded-lg md:w-1/2 border-4 border-b-8 border-r-8 border-fuchsia-700 scenario-box" style={{boxShadow: "inset 2px 2px 10px white, inset -2px -2px 10px #666", background: "linear-gradient(to right, #ff00ff, #00ffff)"}}>
            <h2 className="text-lg font-bold mb-3 text-fuchsia-800 bg-yellow-200 p-2 text-center border-2 border-fuchsia-700 transform -rotate-1">
              <blink>*** CHOOSE YOUR SCENARIO ***</blink>
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

          <div className="bg-fuchsia-300 p-4 rounded-lg md:w-1/2 border-4 border-b-8 border-r-8 border-cyan-700 saved-box" style={{boxShadow: "inset 2px 2px 10px white, inset -2px -2px 10px #666", background: "linear-gradient(to right, #ff00ff, #00ffff)"}}>
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
        </div>

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
      </div>

      {showScenarioModal && currentScenario && (
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
      )}

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
        <p className="text-xs mt-2 font-bold blink">
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