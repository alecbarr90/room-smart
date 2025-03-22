import React from 'react';
import { Brain, PieChart, BookOpen, ScrollText, Users, Smile, Shuffle, Lightbulb, Mic, Trophy } from 'lucide-react';

export const categories = [
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

export const scenarios = [
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

export const getTipById = (tipId) => {
  for (const category of categories) {
    const tip = category.tips.find(t => t.id === tipId);
    if (tip) return { ...tip, category: category.title };
  }
  return null;
};

export const getAllTips = () => {
  return categories.flatMap(category => 
    category.tips.map(tip => ({
      ...tip,
      categoryId: category.id,
      categoryTitle: category.title
    }))
  );
};