/* ==========================================================================
   SHIV SAFAR HOLIDAYS - DESTINATIONS HUB INTERACTIVE JAVASCRIPT
   State-of-the-art filtering, scroll animations, quiz logic & modals
   ========================================================================== */

// --- Comprehensive International Destinations Database ---
const destinationsData = [
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    region: 'middle-east',
    vibe: ['luxury', 'family', 'shopping'],
    image: 'assets/images/dest-dubai.jpg',
    gallery: [
      'assets/images/dest-dubai.jpg',
      'assets/images/pkg-dubai.jpg',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80'
    ],
    price: '₹75,000',
    duration: '6N / 7D',
    bestSeason: 'Oct - Apr',
    flightTime: '3h 30m',
    visaType: 'Instant eVisa',
    visaClass: 'visa-evisa',
    weather: '26°C - 31°C Sunny',
    desc: 'The playground of futuristic architectural marvels, golden sand desert safaris, mega shopping paradises and Michelin-starred dining on the Persian Gulf.',
    attractions: ['Burj Khalifa 124th Floor', 'Desert Safari & BBQ Dinner', 'Marina Yacht Cruise', 'Museum of the Future', 'Dubai Mall & Fountain'],
    itinerarySnippet: [
      { day: 'Day 1', title: 'Arrival & Dubai Marina Dhow Cruise Dinner' },
      { day: 'Day 2', title: 'Half-day City Tour & Burj Khalifa Sky View' },
      { day: 'Day 3', title: 'Desert 4x4 Dune Bashing, Camel Ride & Fire Show' },
      { day: 'Day 4', title: 'Museum of the Future & Dubai Mall Fountain' },
      { day: 'Day 5', title: 'Abu Dhabi Day Trip: Sheikh Zayed Grand Mosque' },
      { day: 'Day 6-7', title: 'Gold Souk Shopping & Luxury Departure' }
    ],
    cuisine: ['Shawarma & Mezze Platter', 'Camel Milk Gelato', 'Al Machboos Spiced Rice', 'Luqaimat Sweet Dumplings'],
    popularFor: 'Luxury lovers, couples & family holidays'
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    region: 'southeast-asia',
    vibe: ['honeymoon', 'beaches', 'nature', 'wellness'],
    image: 'assets/images/dest-bali.jpg',
    gallery: [
      'assets/images/dest-bali.jpg',
      'assets/images/pkg-bali.jpg',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80'
    ],
    price: '₹76,999',
    duration: '6N / 7D',
    bestSeason: 'Apr - Oct',
    flightTime: '7h 45m',
    visaType: 'Visa on Arrival',
    visaClass: 'visa-on-arrival',
    weather: '27°C - 30°C Tropical',
    desc: 'The mythical Island of the Gods with dramatic emerald rice terraces, cliffside sea temples, pristine Nusa Penida secret beaches and luxury private pool villas.',
    attractions: ['Nusa Penida Kelingking T-Rex Beach', 'Ubud Jungle Swing & Rice Terraces', 'Tanah Lot Sunset Temple', 'Mount Batur Volcano Sunrise', 'Private Pool Villa Stay'],
    itinerarySnippet: [
      { day: 'Day 1', title: 'Denpasar Welcome & Private Pool Villa Check-in' },
      { day: 'Day 2', title: 'Kintamani Volcano, Coffee Plantation & Jungle Swing' },
      { day: 'Day 3', title: 'Nusa Penida Island Speedboat Day Cruise' },
      { day: 'Day 4', title: 'Ulun Danu Beratan Lake Temple & Handara Gate' },
      { day: 'Day 5', title: 'Ayung River White Water Rafting & Ubud Monkey Forest' },
      { day: 'Day 6-7', title: 'Tanah Lot Golden Sunset & Traditional Spa Day' }
    ],
    cuisine: ['Nasi Goreng & Satay', 'Babi Guling / Balinese Veg Curry', 'Fresh Coconut & Tropical Acai Bowls', 'Pisang Goreng Honey Bananas'],
    popularFor: 'Honeymooners, wellness seekers & photographers'
  },
  {
    id: 'singapore',
    name: 'Singapore & Cruise',
    country: 'Singapore',
    region: 'southeast-asia',
    vibe: ['family', 'luxury', 'cruise', 'shopping'],
    image: 'assets/images/dest-singapore.jpg',
    gallery: [
      'assets/images/dest-singapore.jpg',
      'assets/images/pkg-singapore.jpg',
      'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506351421178-63b52a2d15c2?auto=format&fit=crop&w=1200&q=80'
    ],
    price: '₹1,10,000',
    duration: '6D / 5N',
    bestSeason: 'Year-Round',
    flightTime: '5h 20m',
    visaType: 'eVisa via Agency',
    visaClass: 'visa-evisa',
    weather: '28°C - 32°C Warm Breeze',
    desc: 'The dazzling lion city where super-trees glow at night, Universal Studios delights all ages, and luxury cruise liners sail into the sunset with Broadway entertainment.',
    attractions: ['Gardens by the Bay Supertree Grove', 'Universal Studios Sentosa', 'Luxury Ocean Cruise (2 Nights)', 'Marina Bay Sands SkyPark', 'Jewel Changi Rain Vortex'],
    itinerarySnippet: [
      { day: 'Day 1', title: 'Singapore Arrival, Changi Rain Vortex & Night Safari' },
      { day: 'Day 2', title: 'Full Day Universal Studios Sentosa & Cable Car' },
      { day: 'Day 3', title: 'Gardens by the Bay & Boarding Dream Cruise Liner' },
      { day: 'Day 4', title: 'Full Day at High Sea: Waterpark, Shows & Gourmet Feasts' },
      { day: 'Day 5', title: 'Disembark Cruise & Marina Bay Sands SkyPark View' },
      { day: 'Day 6', title: 'Orchard Road Shopping & Changi Jewel Departure' }
    ],
    cuisine: ['Hainanese Chicken / Veg Fragrant Rice', 'Chilli Crab & Mantou Buns', 'Singapore Laksa Noodle Soup', 'Kaya Toast & Kopi'],
    popularFor: 'Families with kids, cruise enthusiasts & modern city explorers'
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    country: 'Malaysia',
    region: 'southeast-asia',
    vibe: ['family', 'nature', 'budget', 'culture'],
    image: 'assets/images/dest-malaysia.jpg',
    gallery: [
      'assets/images/dest-malaysia.jpg',
      'assets/images/pkg-asia.jpg',
      'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80'
    ],
    price: '₹62,000',
    duration: '5N / 6D',
    bestSeason: 'Year-Round',
    flightTime: '5h 10m',
    visaType: 'Visa-Free Entry',
    visaClass: 'visa-free',
    weather: '26°C - 32°C Tropical',
    desc: 'A vibrant kaleidoscope of colonial architecture, glowing Petronas Twin Towers, misty cool Genting Highlands cable cars and golden Batu Caves.',
    attractions: ['Petronas Twin Towers Skybridge', 'Batu Caves Rainbow Steps', 'Genting SkyWorlds Theme Park & Cable Car', 'Putrajaya Pink Mosque', 'KL Tower Observation Deck'],
    itinerarySnippet: [
      { day: 'Day 1', title: 'Kuala Lumpur Airport Welcome & Hotel Check-in' },
      { day: 'Day 2', title: 'KL City Tour, Petronas Towers & King Palace' },
      { day: 'Day 3', title: 'Batu Caves & Genting Highlands Skyway Cable Car' },
      { day: 'Day 4', title: 'Genting Indoor & Outdoor Theme Parks Adventure' },
      { day: 'Day 5-6', title: 'Bukit Bintang Street Market & Departure' }
    ],
    cuisine: ['Roti Canai with Dhal Curry', 'Nasi Lemak Coconut Rice', 'Char Kway Teow', 'Cendol Shaved Ice Dessert'],
    popularFor: 'Family vacations, budget international travel & theme park lovers'
  },
  {
    id: 'thailand',
    name: 'Thailand (Bangkok & Phuket)',
    country: 'Thailand',
    region: 'southeast-asia',
    vibe: ['beaches', 'shopping', 'nightlife', 'budget'],
    image: 'assets/images/dest-thailand.jpg',
    gallery: [
      'assets/images/dest-thailand.jpg',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1200&q=80'
    ],
    price: '₹55,000',
    duration: '5N / 6D',
    bestSeason: 'Nov - Apr',
    flightTime: '4h 15m',
    visaType: 'Visa-Free Entry',
    visaClass: 'visa-free',
    weather: '27°C - 33°C Sunny Coast',
    desc: 'The kingdom of smiling hospitality, emerald Phi Phi Island lagoons, golden Buddhist sanctuaries, buzzing night bazaars and exhilarating water sports.',
    attractions: ['Phi Phi Islands Speedboat Tour', 'James Bond Island Phang Nga Bay', 'Bangkok Grand Palace & Emerald Buddha', 'Chaophraya Princess River Dinner Cruise', 'Safari World & Marine Park'],
    itinerarySnippet: [
      { day: 'Day 1', title: 'Phuket Arrival & Patong Beach Walk' },
      { day: 'Day 2', title: 'Phi Phi Island & Maya Bay Speedboat Tour with Snorkeling' },
      { day: 'Day 3', title: 'Phuket to Bangkok Flight & Evening River Cruise' },
      { day: 'Day 4', title: 'Bangkok City Temples & Pratunam Wholesale Shopping' },
      { day: 'Day 5-6', title: 'Safari World Marine Park & Flight Back Home' }
    ],
    cuisine: ['Pad Thai Wok Noodles', 'Tom Yum Hot & Sour Soup', 'Mango Sticky Rice with Coconut Cream', 'Thai Green Coconut Curry'],
    popularFor: 'Friends group trips, budget holidays & beach lovers'
  },
  {
    id: 'maldives',
    name: 'Maldives Paradise',
    country: 'Maldives',
    region: 'island-escapes',
    vibe: ['luxury', 'honeymoon', 'beaches'],
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    price: '₹1,25,000',
    duration: '4N / 5D',
    bestSeason: 'Nov - Apr',
    flightTime: '4h 00m',
    visaType: 'Visa on Arrival (Free)',
    visaClass: 'visa-free',
    weather: '28°C - 31°C Tropical Calm',
    desc: 'Unrivaled tropical romance with overwater bungalows suspended over turquoise atolls, private infinity plunge pools, sunset dolphin cruises and vibrant house reefs.',
    attractions: ['Overwater Villa with Direct Lagoon Access', 'Sunset Dolphin Speedboat Cruise', 'Snorkeling with Manta Rays & Turtles', 'Candlelit Sandbank Private Dinner', 'Underwater Spa Experience'],
    itinerarySnippet: [
      { day: 'Day 1', title: 'Malé Arrival & Speedboat/Seaplane to Private Island Resort' },
      { day: 'Day 2', title: 'Overwater Villa Living & House Reef Snorkeling' },
      { day: 'Day 3', title: 'Sunset Dolphin Cruise & Starlit Beachfront Dinner' },
      { day: 'Day 4', title: 'Private Sandbank Picnic & Relaxing Aromatherapy Spa' },
      { day: 'Day 5', title: 'Seaplane Scenic Ride back to Malé International Airport' }
    ],
    cuisine: ['Fresh Grilled Reef Fish', 'Mas Huni Coconut Tuna Breakfast', 'Exotic Tropical Fruit Platters', 'International Fine Dining Buffets'],
    popularFor: 'Honeymoon couples & ultra-luxury barefoot escapes'
  },
  {
    id: 'switzerland',
    name: 'Switzerland Alpine Wonders',
    country: 'Switzerland',
    region: 'europe',
    vibe: ['luxury', 'nature', 'honeymoon', 'family'],
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80'
    ],
    price: '₹2,45,000',
    duration: '7N / 8D',
    bestSeason: 'May - Oct (Summer) / Dec - Mar (Snow)',
    flightTime: '9h 30m',
    visaType: 'Schengen Visa Required',
    visaClass: 'visa-evisa',
    weather: '18°C - 24°C Crisp Alpine',
    desc: 'The peak of European grandeur: snow-capped Matterhorn, emerald mountain lakes of Lucerne & Interlaken, scenic panoramic Glacier Express trains and Swiss chocolates.',
    attractions: ['Jungfraujoch - Top of Europe (3,454m)', 'Mount Titlis Rotating Cable Car & Cliff Walk', 'Lake Lucerne Scenic Steamboat Cruise', 'Interlaken & Lauterbrunnen Waterfalls Valley', 'Glacier Express Scenic Train Journey'],
    itinerarySnippet: [
      { day: 'Day 1', title: 'Zurich Arrival & Scenic Train to Lucerne' },
      { day: 'Day 2', title: 'Mount Titlis Ice Flyer & Chapel Bridge Lucerne' },
      { day: 'Day 3', title: 'Lucerne to Interlaken & Lauterbrunnen 72 Waterfalls' },
      { day: 'Day 4', title: 'Jungfraujoch Top of Europe Cogwheel Train' },
      { day: 'Day 5', title: 'Zermatt & Matterhorn Glacier Paradise' },
      { day: 'Day 6', title: 'Glacier Express Panoramic Ride to St. Moritz' },
      { day: 'Day 7-8', title: 'Zurich Old Town, Lindt Chocolate Home & Departure' }
    ],
    cuisine: ['Swiss Cheese Fondue & Raclette', 'Crispy Potato Rösti', 'Artisan Swiss Dark Chocolates', 'Fresh Alpine Berry Tarts'],
    popularFor: 'Dream family vacations, anniversary milestones & cinematic scenery'
  },
  {
    id: 'vietnam',
    name: 'Vietnam Highlights',
    country: 'Vietnam',
    region: 'southeast-asia',
    vibe: ['nature', 'culture', 'budget', 'adventure'],
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80'
    ],
    price: '₹58,000',
    duration: '6N / 7D',
    bestSeason: 'Oct - Apr',
    flightTime: '4h 45m',
    visaType: 'Instant eVisa',
    visaClass: 'visa-evisa',
    weather: '22°C - 28°C Pleasant',
    desc: 'Emerald limestone pillars rising from Ha Long Bay waters, lantern-lit romantic streets of Hoi An ancient town, and the viral Golden Hands bridge of Ba Na Hills.',
    attractions: ['Overnight Ha Long Bay Luxury Junk Boat Cruise', 'Ba Na Hills & Golden Giant Hands Bridge', 'Hoi An Lantern Town by Night', 'Cu Chi Tunnels Saigon Excursion', 'Hanoi Old Quarter & Train Street'],
    itinerarySnippet: [
      { day: 'Day 1', title: 'Hanoi Arrival, Train Street Coffee & French Quarter' },
      { day: 'Day 2', title: 'Transfer to Ha Long Bay & Board 5-Star Overnight Cruise' },
      { day: 'Day 3', title: 'Morning Tai Chi on Bay, Cave Exploration & Flight to Da Nang' },
      { day: 'Day 4', title: 'Ba Na Hills Sun World & Famous Golden Bridge Walk' },
      { day: 'Day 5', title: 'Hoi An Ancient Heritage Town, Coconut Basket Boat Tour' },
      { day: 'Day 6-7', title: 'Saigon War Remnants, Cu Chi Tunnels & Farewell Flight' }
    ],
    cuisine: ['Warm Pho Rice Noodle Soup', 'Crispy Banh Mi Baguettes', 'Vietnamese Egg Coffee / Coconut Coffee', 'Fresh Spring Rolls with Peanut Dip'],
    popularFor: 'Trending travelers, budget adventurers & culture enthusiasts'
  },
  {
    id: 'japan',
    name: 'Japan (Tokyo & Kyoto)',
    country: 'Japan',
    region: 'europe', // east-asia
    vibe: ['culture', 'luxury', 'family', 'shopping'],
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80'
    ],
    price: '₹1,95,000',
    duration: '7N / 8D',
    bestSeason: 'Mar - May (Cherry Blossom) / Oct - Nov (Autumn)',
    flightTime: '8h 15m',
    visaType: 'eVisa for Indians',
    visaClass: 'visa-evisa',
    weather: '15°C - 22°C Mild',
    desc: 'The seamless blend of neon-lit Shibuya crossings, tranquil thousand-torii shrine paths in Kyoto, high-speed Shinkansen bullet trains and majestic Mount Fuji.',
    attractions: ['Shinkansen Bullet Train Experience', 'Mount Fuji 5th Station & Lake Kawaguchi', 'Kyoto Fushimi Inari Shrine (10,000 Gates)', 'Tokyo Shibuya Crossing & TeamLab Planets', 'Arashiyama Bamboo Forest & Nara Deer Park'],
    itinerarySnippet: [
      { day: 'Day 1', title: 'Tokyo Haneda/Narita Arrival & Shinjuku Neon Night' },
      { day: 'Day 2', title: 'Sensoji Temple, TeamLab Planets Digital Art & Shibuya Sky' },
      { day: 'Day 3', title: 'Mount Fuji Day Excursion & Hakone Ropeway' },
      { day: 'Day 4', title: 'Shinkansen Bullet Train to Kyoto & Gion Geisha District' },
      { day: 'Day 5', title: 'Fushimi Inari Red Torii Gates & Kinkaku-ji Golden Pavilion' },
      { day: 'Day 6', title: 'Arashiyama Bamboo Grove & Nara Friendly Deer Park' },
      { day: 'Day 7-8', title: 'Osaka Dotonbori Street Food Feast & Kansai Departure' }
    ],
    cuisine: ['Authentic Ramen & Tempura', 'Sushi Moriawase & Wagyu Beef', 'Matcha Green Tea Parfaits & Mochi', 'Fluffy Japanese Souffle Pancakes'],
    popularFor: 'Culture lovers, tech explorers & once-in-a-lifetime journeys'
  },
  {
    id: 'turkey',
    name: 'Turkey (Istanbul & Cappadocia)',
    country: 'Turkey',
    region: 'middle-east',
    vibe: ['honeymoon', 'culture', 'nature', 'luxury'],
    image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80'
    ],
    price: '₹1,35,000',
    duration: '6N / 7D',
    bestSeason: 'Apr - Jun & Sep - Nov',
    flightTime: '6h 30m',
    visaType: 'eVisa (with valid US/UK/Schengen)',
    visaClass: 'visa-evisa',
    weather: '18°C - 25°C Spring Bliss',
    desc: 'Where East meets West across the Bosphorus Strait. Floating hot air balloons over surreal fairy chimneys in Cappadocia, ancient underground cities, and grand Ottoman palaces.',
    attractions: ['Cappadocia Hot Air Balloon Sunrise Flight', 'Hagia Sophia & Blue Mosque Istanbul', 'Bosphorus Sunset Yacht Cruise', 'Cave Hotel Luxury Stay in Goreme', 'Grand Bazaar 4,000-Shop Wonder'],
    itinerarySnippet: [
      { day: 'Day 1', title: 'Istanbul Airport Welcome & Taksim Square Walk' },
      { day: 'Day 2', title: 'Hagia Sophia, Blue Mosque & Grand Bazaar Shopping' },
      { day: 'Day 3', title: 'Bosphorus Private Yacht Cruise & Domestic Flight to Cappadocia' },
      { day: 'Day 4', title: 'Early Morning Hot Air Balloon Flight & Goreme Open Air Museum' },
      { day: 'Day 5', title: 'Derinkuyu Underground City & Pigeon Valley Sunset' },
      { day: 'Day 6-7', title: 'Return to Istanbul, Spice Bazaar & Departure' }
    ],
    cuisine: ['Turkish Kebabs & Pide Flatbreads', 'Baklava with Pistachio & Turkish Delight', 'Simit Sesame Bread with Turkish Tea', 'Rich Turkish Sand-Brewed Coffee'],
    popularFor: 'Couples, photography enthusiasts & history lovers'
  }
];

// --- Wishlist Management in LocalStorage ---
let wishlist = JSON.parse(localStorage.getItem('shiv_safar_wishlist') || '[]');

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initScrollProgressBar();
  initScrollReveals();
  initDestinationsGrid();
  initFiltersAndSearch();
  initFilterScroll();
  initWishlistUI();
  initVibeQuiz();
  initSeasonalCompass();
  initSpotlight();
});

/* --- Header & Mobile Menu --- */
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

function initMobileMenu() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileBtn.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileBtn.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileBtn.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileBtn.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}

/* ==========================================================================
   1. SCROLL PROGRESS BAR
   ========================================================================== */
function initScrollProgressBar() {
  const progressBar = document.getElementById('scrollProgressBar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}

/* ==========================================================================
   2. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
   ========================================================================== */
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Once revealed, unobserve to maintain smooth performance
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

/* ==========================================================================
   3. DESTINATIONS GRID RENDERING
   ========================================================================== */
let activeRegionFilter = 'all';
let activeVibeFilter = 'all';
let searchQuery = '';

function renderDestinations() {
  const grid = document.getElementById('destinationsMainGrid');
  const countEl = document.getElementById('destCountDisplay');
  const resetBtn = document.getElementById('resetFilterBtn');
  if (!grid) return;

  const filtered = destinationsData.filter(dest => {
    // Region match
    const matchRegion = (activeRegionFilter === 'all') || (dest.region === activeRegionFilter);
    
    // Vibe match
    const matchVibe = (activeVibeFilter === 'all') || (dest.vibe.includes(activeVibeFilter));
    
    // Search query match
    const q = searchQuery.toLowerCase().trim();
    const matchSearch = !q || 
      dest.name.toLowerCase().includes(q) || 
      dest.country.toLowerCase().includes(q) ||
      dest.desc.toLowerCase().includes(q) ||
      dest.attractions.some(a => a.toLowerCase().includes(q));

    return matchRegion && matchVibe && matchSearch;
  });

  if (countEl) countEl.textContent = `${filtered.length} Destination${filtered.length === 1 ? '' : 's'}`;
  if (resetBtn) {
    resetBtn.style.display = (activeRegionFilter !== 'all' || activeVibeFilter !== 'all' || searchQuery) ? 'inline-flex' : 'none';
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="dest-empty-state scroll-reveal revealed">
        <i class="fa-solid fa-compass-slash"></i>
        <h3>No Destinations Found</h3>
        <p>We couldn't find destinations matching your search filter. Try clearing filters or searching for another keyword.</p>
        <button class="btn btn-gold" onclick="resetAllFilters()">
          <i class="fa-solid fa-arrows-rotate"></i> Reset All Filters
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((dest, idx) => {
    const isWishlisted = wishlist.includes(dest.id);
    return `
      <div class="dest-lux-card scroll-reveal delay-${(idx % 4) + 1} revealed" data-id="${dest.id}">
        <!-- Thumbnail -->
        <div class="dest-card-hero-thumb">
          <img src="${dest.image}" alt="${dest.name}" class="dest-thumb-img" loading="lazy">
          <div class="dest-thumb-overlay"></div>
          
          <div class="card-top-badges">
            <span class="badge-visa ${dest.visaClass}">
              <i class="fa-solid fa-passport"></i> ${dest.visaType}
            </span>
            <button class="btn-card-wishlist ${isWishlisted ? 'active' : ''}" 
                    onclick="toggleWishlist('${dest.id}', event)" 
                    aria-label="Save to Wishlist" 
                    title="${isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}">
              <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart"></i>
            </button>
          </div>

          <div class="card-bottom-info">
            <span class="card-dest-country">${dest.country}</span>
            <h3 class="card-dest-title">${dest.name}</h3>
          </div>
        </div>

        <!-- Body -->
        <div class="dest-card-body">
          <p class="dest-card-desc">${dest.desc}</p>
          
          <!-- Key Metrics -->
          <div class="dest-metrics-row">
            <div class="metric-cell">
              <div class="m-label">Best Time</div>
              <div class="m-value"><i class="fa-regular fa-calendar-check"></i> ${dest.bestSeason}</div>
            </div>
            <div class="metric-cell">
              <div class="m-label">Duration</div>
              <div class="m-value"><i class="fa-regular fa-clock"></i> ${dest.duration}</div>
            </div>
            <div class="metric-cell">
              <div class="m-label">Flight</div>
              <div class="m-value"><i class="fa-solid fa-plane-departure"></i> ${dest.flightTime}</div>
            </div>
          </div>

          <!-- Signature Highlights -->
          <div class="dest-attractions-list">
            ${dest.attractions.slice(0, 3).map(attr => `
              <span class="attraction-tag"><i class="fa-solid fa-sparkles" style="color:var(--primary-gold); font-size:0.7rem;"></i> ${attr}</span>
            `).join('')}
          </div>

          <!-- Pricing & Actions -->
          <div class="dest-card-footer">
            <div class="dest-price-box">
              <span class="dest-price-label">Starting From</span>
              <div class="dest-price-value">${dest.price} <span>/person</span></div>
            </div>
            <div class="dest-card-btns">
              <button class="btn-card-explore" onclick="openDestinationDetail('${dest.id}')">
                Explore Guide <i class="fa-solid fa-arrow-right"></i>
              </button>
              <a href="https://wa.me/919102185599?text=Hello%20Shiv%20Safar%20Holidays,%20I%20am%20interested%20in%20traveling%20to%20${encodeURIComponent(dest.name)}" 
                 target="_blank" rel="noopener" class="btn-card-wa" title="WhatsApp Enquiry" aria-label="WhatsApp Enquiry">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function initDestinationsGrid() {
  renderDestinations();
}

/* ==========================================================================
   4. FILTERS & SEARCH DOCK
   ========================================================================== */
function initFiltersAndSearch() {
  // Region filter tabs
  const filterPillBtns = document.querySelectorAll('.filter-pill-btn');
  filterPillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterPillBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeRegionFilter = btn.getAttribute('data-region') || 'all';
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      renderDestinations();
    });
  });

  // Hero search dock input
  const dockSearchInput = document.getElementById('dockSearchInput');
  if (dockSearchInput) {
    dockSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderDestinations();
    });
  }

  // Hero region select
  const dockRegionSelect = document.getElementById('dockRegionSelect');
  if (dockRegionSelect) {
    dockRegionSelect.addEventListener('change', (e) => {
      activeRegionFilter = e.target.value;
      // Sync pill active state
      filterPillBtns.forEach(btn => {
        const isMatch = btn.getAttribute('data-region') === activeRegionFilter;
        btn.classList.toggle('active', isMatch);
        if (isMatch) {
          btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
      });
      renderDestinations();
    });
  }

  // Hero vibe select
  const dockVibeSelect = document.getElementById('dockVibeSelect');
  if (dockVibeSelect) {
    dockVibeSelect.addEventListener('change', (e) => {
      activeVibeFilter = e.target.value;
      renderDestinations();
    });
  }

  // Check URL hash for direct filter on load (e.g. #destinations?region=middle-east)
  const hash = window.location.hash;
  if (hash.includes('dubai') || hash.includes('bali') || hash.includes('singapore')) {
    const cleanWord = hash.replace('#', '').replace('destinations', '').trim();
    if (cleanWord) {
      searchQuery = cleanWord;
      if (dockSearchInput) dockSearchInput.value = cleanWord;
      renderDestinations();
    }
  }
}

/* --- Filter Navigation Scroll Control --- */
function initFilterScroll() {
  const tabsScroll = document.getElementById('filterTabsScroll');
  const btnLeft = document.getElementById('filterNavLeft');
  const btnRight = document.getElementById('filterNavRight');

  if (!tabsScroll) return;

  function updateArrowState() {
    if (!btnLeft || !btnRight) return;
    const scrollLeft = tabsScroll.scrollLeft;
    const maxScroll = tabsScroll.scrollWidth - tabsScroll.clientWidth - 5;
    btnLeft.classList.toggle('disabled', scrollLeft <= 4);
    btnRight.classList.toggle('disabled', scrollLeft >= maxScroll);
  }

  if (btnLeft) {
    btnLeft.addEventListener('click', () => {
      tabsScroll.scrollBy({ left: -260, behavior: 'smooth' });
    });
  }

  if (btnRight) {
    btnRight.addEventListener('click', () => {
      tabsScroll.scrollBy({ left: 260, behavior: 'smooth' });
    });
  }

  tabsScroll.addEventListener('scroll', updateArrowState, { passive: true });
  window.addEventListener('resize', updateArrowState, { passive: true });
  setTimeout(updateArrowState, 200);
}

function resetAllFilters() {
  activeRegionFilter = 'all';
  activeVibeFilter = 'all';
  searchQuery = '';
  
  const dockSearchInput = document.getElementById('dockSearchInput');
  const dockRegionSelect = document.getElementById('dockRegionSelect');
  const dockVibeSelect = document.getElementById('dockVibeSelect');
  const filterPillBtns = document.querySelectorAll('.filter-pill-btn');

  if (dockSearchInput) dockSearchInput.value = '';
  if (dockRegionSelect) dockRegionSelect.value = 'all';
  if (dockVibeSelect) dockVibeSelect.value = 'all';
  
  filterPillBtns.forEach((btn, idx) => {
    btn.classList.toggle('active', idx === 0);
  });

  renderDestinations();
}

/* ==========================================================================
   5. WISHLIST MANAGEMENT
   ========================================================================== */
function toggleWishlist(destId, e) {
  if (e) e.stopPropagation();
  const index = wishlist.indexOf(destId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`Removed from your travel wishlist.`);
  } else {
    wishlist.push(destId);
    const dest = destinationsData.find(d => d.id === destId);
    showToast(`Saved ${dest ? dest.name : 'destination'} to your wishlist! ❤️`);
  }

  localStorage.setItem('shiv_safar_wishlist', JSON.stringify(wishlist));
  initWishlistUI();
  renderDestinations();
}

function initWishlistUI() {
  const countEl = document.getElementById('navWishlistCount');
  const navBtn = document.getElementById('navWishlistBtn');
  if (countEl) countEl.textContent = wishlist.length;
  if (navBtn) navBtn.classList.toggle('has-items', wishlist.length > 0);
}

function openWishlistModal() {
  const content = document.getElementById('wishlistModalContent');
  if (!content) return;

  if (wishlist.length === 0) {
    content.innerHTML = `
      <div style="text-align:center; padding:40px 20px;">
        <i class="fa-regular fa-heart" style="font-size:3rem; color:#cbd5e1; margin-bottom:14px;"></i>
        <h4 style="font-family:var(--font-serif); font-size:1.4rem; color:var(--color-navy); margin-bottom:6px;">Your Wishlist is Empty</h4>
        <p style="color:var(--color-muted); font-size:0.92rem; margin-bottom:20px;">Click the heart icon on any destination card to save your dream vacation spots.</p>
        <button class="btn btn-gold" onclick="closeModal('wishlistModal')">Explore Destinations</button>
      </div>
    `;
  } else {
    const items = wishlist.map(id => destinationsData.find(d => d.id === id)).filter(Boolean);
    content.innerHTML = `
      <div class="wishlist-modal-body">
        <h4 style="font-family:var(--font-serif); font-size:1.4rem; color:var(--color-navy); margin-bottom:16px;">
          Saved Destinations (${items.length})
        </h4>
        <div style="display:flex; flex-direction:column; gap:12px;">
          ${items.map(item => `
            <div class="wishlist-item-row">
              <img src="${item.image}" alt="${item.name}" class="wishlist-item-thumb">
              <div class="wishlist-item-info">
                <div class="wishlist-item-title">${item.name}, ${item.country}</div>
                <div class="wishlist-item-price">From ${item.price} • ${item.duration}</div>
              </div>
              <button class="btn btn-gold btn-sm" style="padding:6px 14px; font-size:0.8rem;" onclick="closeModal('wishlistModal'); openDestinationDetail('${item.id}')">
                View Guide
              </button>
              <button class="btn-remove-wishlist" onclick="toggleWishlist('${item.id}'); openWishlistModal();" title="Remove">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          `).join('')}
        </div>
        <div style="margin-top:24px; padding-top:16px; border-top:1px solid var(--color-border); display:flex; gap:12px;">
          <button class="btn btn-gold" style="flex:1;" onclick="closeModal('wishlistModal'); openQuoteModal('Multiple Wishlist Destinations');">
            Get Combined Quote For All <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;
  }

  openModal('wishlistModal');
}

/* ==========================================================================
   6. INTERACTIVE DESTINATION DETAIL MODAL
   ========================================================================== */
function openDestinationDetail(destId) {
  const dest = destinationsData.find(d => d.id === destId);
  if (!dest) return;

  const modalBody = document.getElementById('destDetailModalBody');
  if (!modalBody) return;

  const isWishlisted = wishlist.includes(dest.id);

  modalBody.innerHTML = `
    <!-- Top Image Banner -->
    <div class="dest-modal-banner">
      <img src="${dest.gallery && dest.gallery[0] ? dest.gallery[0] : dest.image}" alt="${dest.name}">
      <div class="dest-modal-banner-overlay">
        <div style="display:flex; gap:10px; margin-bottom:8px;">
          <span class="badge-visa ${dest.visaClass}"><i class="fa-solid fa-passport"></i> ${dest.visaType}</span>
          <span class="badge-visa" style="background:rgba(212,163,64,0.9);"><i class="fa-regular fa-clock"></i> ${dest.duration}</span>
        </div>
        <h2 style="font-family:var(--font-serif); font-size:2.4rem; font-weight:700; line-height:1.1; margin-bottom:4px;">${dest.name}</h2>
        <p style="color:#cbd5e1; font-size:1rem;"><i class="fa-solid fa-location-dot" style="color:var(--primary-gold);"></i> ${dest.country}</p>
      </div>
    </div>

    <!-- Modal Content -->
    <div class="dest-modal-body-padding">
      <!-- Quick Facts Bar -->
      <div class="dest-quick-facts-bar">
        <div class="dest-fact-item">
          <div class="fact-label">Flight from India</div>
          <div class="fact-value"><i class="fa-solid fa-plane-departure" style="color:var(--primary-gold);"></i> ${dest.flightTime}</div>
        </div>
        <div class="dest-fact-item">
          <div class="fact-label">Best Season</div>
          <div class="fact-value"><i class="fa-regular fa-sun" style="color:#eab308;"></i> ${dest.bestSeason}</div>
        </div>
        <div class="dest-fact-item">
          <div class="fact-label">Weather Now</div>
          <div class="fact-value"><i class="fa-solid fa-cloud-sun" style="color:#0284c7;"></i> ${dest.weather}</div>
        </div>
        <div class="dest-fact-item">
          <div class="fact-label">Est. Package</div>
          <div class="fact-value" style="color:#059669;">${dest.price}</div>
        </div>
      </div>

      <!-- About Destination -->
      <h3 style="font-family:var(--font-serif); font-size:1.35rem; color:var(--color-navy); margin-bottom:10px;">
        About ${dest.name}
      </h3>
      <p style="color:#475569; font-size:0.95rem; line-height:1.68; margin-bottom:22px;">${dest.desc}</p>

      <!-- Signature Itinerary Highlights -->
      <h3 style="font-family:var(--font-serif); font-size:1.35rem; color:var(--color-navy); margin-bottom:14px; display:flex; align-items:center; gap:10px;">
        <i class="fa-solid fa-route" style="color:var(--primary-gold);"></i> Handcrafted Itinerary Highlights
      </h3>
      <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:26px;">
        ${dest.itinerarySnippet.map(item => `
          <div style="display:flex; gap:14px; padding:12px 14px; background:var(--color-bg-subtle); border-radius:var(--radius-sm); border:1px solid var(--color-border-light);">
            <span style="font-size:0.75rem; font-weight:800; background:var(--color-navy); color:#fff; padding:3px 10px; border-radius:var(--radius-full); height:fit-content; white-space:nowrap;">${item.day}</span>
            <span style="font-size:0.92rem; font-weight:600; color:var(--color-slate);">${item.title}</span>
          </div>
        `).join('')}
      </div>

      <!-- Must-Try Foods & Signature Experiences -->
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:28px;">
        <div style="background:var(--color-bg-warm); padding:18px; border-radius:var(--radius-md); border:1px solid var(--color-border-light);">
          <h4 style="font-family:var(--font-serif); font-size:1.1rem; color:var(--color-navy); margin-bottom:10px;">
            <i class="fa-solid fa-utensils" style="color:var(--primary-gold);"></i> Must-Try Local Delicacies
          </h4>
          <ul style="display:flex; flex-direction:column; gap:6px; font-size:0.88rem; color:#475569;">
            ${dest.cuisine.map(c => `<li><i class="fa-solid fa-check" style="color:#10b981; font-size:0.75rem; margin-right:6px;"></i> ${c}</li>`).join('')}
          </ul>
        </div>
        <div style="background:var(--color-bg-warm); padding:18px; border-radius:var(--radius-md); border:1px solid var(--color-border-light);">
          <h4 style="font-family:var(--font-serif); font-size:1.1rem; color:var(--color-navy); margin-bottom:10px;">
            <i class="fa-solid fa-camera" style="color:var(--primary-gold);"></i> Top Sights Included
          </h4>
          <ul style="display:flex; flex-direction:column; gap:6px; font-size:0.88rem; color:#475569;">
            ${dest.attractions.map(a => `<li><i class="fa-solid fa-star" style="color:var(--primary-gold); font-size:0.75rem; margin-right:6px;"></i> ${a}</li>`).join('')}
          </ul>
        </div>
      </div>

      <!-- Action Buttons -->
      <div style="display:flex; gap:14px; flex-wrap:wrap; margin-top:20px; padding-top:20px; border-top:1px solid var(--color-border);">
        <button class="btn btn-gold" style="flex:1;" onclick="closeModal('destDetailModal'); openQuoteModal('${dest.name}');">
          Plan My Trip To ${dest.name} <i class="fa-solid fa-arrow-right"></i>
        </button>
        <a href="https://wa.me/919102185599?text=Hello%20Shiv%20Safar%20Holidays,%20I%20am%20interested%20in%20customizing%20an%20itinerary%20for%20${encodeURIComponent(dest.name)}" 
           target="_blank" rel="noopener" class="btn" style="background:#25d366; color:#ffffff;">
          <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
        </a>
        <button class="btn" style="background:var(--color-bg-subtle); border:1px solid var(--color-border); color:var(--color-slate);" onclick="toggleWishlist('${dest.id}'); closeModal('destDetailModal');">
          <i class="fa-${isWishlisted ? 'solid' : 'regular'} fa-heart" style="color:#ef4444;"></i> ${isWishlisted ? 'Wishlisted' : 'Save'}
        </button>
      </div>
    </div>
  `;

  openModal('destDetailModal');
}

/* ==========================================================================
   7. "MATCH MY VIBE" AI TRAVEL QUIZ TOOL
   ========================================================================== */
let quizAnswers = {
  traveler: 'couple',
  scenery: 'luxury',
  duration: 'medium'
};

function initVibeQuiz() {
  const quizOptionBtns = document.querySelectorAll('.quiz-opt-btn');
  quizOptionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const step = btn.getAttribute('data-step');
      const value = btn.getAttribute('data-value');
      
      // Clear sibling active states
      const siblings = btn.closest('.quiz-options-grid').querySelectorAll('.quiz-opt-btn');
      siblings.forEach(s => s.classList.remove('selected'));
      btn.classList.add('selected');

      quizAnswers[step] = value;
      computeQuizMatch();
    });
  });

  computeQuizMatch();
}

function computeQuizMatch() {
  const { traveler, scenery, duration } = quizAnswers;
  
  let matchId = 'bali';
  let matchScore = 98;
  let reason = 'Bali offers the perfect harmony of secluded pool villas, romantic sunsets and rejuvenating nature.';

  if (traveler === 'couple' && scenery === 'luxury') {
    matchId = 'dubai';
    matchScore = 99;
    reason = 'Dubai offers world-class dining, skyline views from Burj Khalifa, desert glamping and lavish private tours.';
  } else if (traveler === 'couple' && scenery === 'beach') {
    matchId = 'maldives';
    matchScore = 99;
    reason = 'The Maldives is the ultimate romantic escape with overwater villa luxury and private sandbank dinners.';
  } else if (traveler === 'family') {
    matchId = 'singapore';
    matchScore = 97;
    reason = 'Singapore is the safest and most entertaining haven for families with Universal Studios and high-seas cruise adventures.';
  } else if (scenery === 'nature') {
    matchId = 'switzerland';
    matchScore = 96;
    reason = 'Switzerland’s alpine meadows, snowy peaks and scenic trains create an unforgettable cinematic journey.';
  } else if (traveler === 'friends') {
    matchId = 'thailand';
    matchScore = 95;
    reason = 'Thailand gives you high-speed island boat parties, bustling night markets and budget-friendly thrills.';
  } else if (scenery === 'culture') {
    matchId = 'turkey';
    matchScore = 96;
    reason = 'Cappadocia hot air balloons and Istanbul’s ancient bazaars create an enchanting cultural tapestry.';
  }

  const dest = destinationsData.find(d => d.id === matchId);
  const resultCard = document.getElementById('vibeResultCard');
  if (!resultCard || !dest) return;

  resultCard.innerHTML = `
    <div class="result-badge-circle">
      <span class="match-pct">${matchScore}%</span>
      <span class="match-lbl">Match</span>
    </div>
    <div class="result-info">
      <h4>${dest.name}, ${dest.country}</h4>
      <p>${reason}</p>
      <div style="margin-top:8px; display:flex; gap:12px; font-size:0.85rem; color:var(--primary-gold-light);">
        <span><i class="fa-regular fa-clock"></i> ${dest.duration}</span>
        <span>•</span>
        <span><i class="fa-solid fa-tag"></i> From ${dest.price}</span>
        <span>•</span>
        <span><i class="fa-regular fa-sun"></i> Best: ${dest.bestSeason}</span>
      </div>
    </div>
    <div style="display:flex; gap:10px;">
      <button class="btn btn-gold" onclick="openDestinationDetail('${dest.id}')">
        View Itinerary <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  `;
}

/* ==========================================================================
   8. SEASONAL TRAVEL COMPASS
   ========================================================================== */
const monthlyRecommendations = {
  jan: [
    { id: 'dubai', weather: '24°C • Perfect Cool Sunshine', tip: 'Dubai Shopping Festival, pleasant desert safaris and outdoor Marina walks.' },
    { id: 'thailand', weather: '28°C • Peak Beach Weather', tip: 'Calm turquoise waters in Phuket, Krabi & sunny skies.' },
    { id: 'maldives', weather: '29°C • Clear Waters', tip: 'Unmatched underwater visibility for manta ray snorkeling.' }
  ],
  feb: [
    { id: 'dubai', weather: '25°C • Mild Winter Breeze', tip: 'Ideal for skydiving, yacht charters and Miracle Garden in full bloom.' },
    { id: 'singapore', weather: '28°C • Festive Spring', tip: 'Lunar New Year celebrations, vibrant Chinatown and night river cruises.' },
    { id: 'maldives', weather: '29°C • Romantic Season', tip: 'Valentine’s week candlelit beach dinners under starlit skies.' }
  ],
  mar: [
    { id: 'vietnam', weather: '24°C • Pleasant Spring', tip: 'Ha Long Bay cruising and walking through lantern-lit Hoi An.' },
    { id: 'japan', weather: '16°C • Cherry Blossom Bloom', tip: 'Sakura blossoms in Tokyo & Kyoto parks with crisp spring breeze.' },
    { id: 'malaysia', weather: '28°C • Warm & Tropical', tip: 'Cool evenings in Genting Highlands and pleasant island escapes.' }
  ],
  apr: [
    { id: 'bali', weather: '28°C • Dry Season Begins', tip: 'Clear blue skies over Nusa Penida and ideal surf conditions in Uluwatu.' },
    { id: 'turkey', weather: '19°C • Spring Tulip Festival', tip: 'Istanbul parks blanketed with colorful tulips and pleasant balloon flights.' },
    { id: 'japan', weather: '18°C • Spring Peak', tip: 'Scenic train rides under pink sakura trees and mountain hikes.' }
  ],
  may: [
    { id: 'switzerland', weather: '19°C • Alpine Meadows', tip: 'Wildflowers in bloom, sparkling glacial lakes and cable cars open.' },
    { id: 'bali', weather: '27°C • Sunny & Breezy', tip: 'Cool mountain breezes in Ubud and perfect beach days.' },
    { id: 'turkey', weather: '23°C • Ideal Mediterranean', tip: 'Warm sunny weather across Cappadocia valleys and Aegean coast.' }
  ],
  jun: [
    { id: 'switzerland', weather: '22°C • Summer Perfection', tip: 'Hiking Lauterbrunnen waterfalls, Matterhorn views and outdoor cafes.' },
    { id: 'bali', weather: '26°C • Pleasant Island Breeze', tip: 'Low humidity, spectacular sunsets and cultural temple festivals.' },
    { id: 'singapore', weather: '30°C • Summer Great Sale', tip: 'Great Singapore Sale discounts, Universal Studios summer thrill.' }
  ],
  jul: [
    { id: 'bali', weather: '26°C • Dry Season Peak', tip: 'Coolest and driest month in Bali, ideal for Mount Batur sunrise treks.' },
    { id: 'switzerland', weather: '24°C • Alpine Summer', tip: 'Swimming in crystal clear Lake Lucerne and Top of Europe visits.' },
    { id: 'malaysia', weather: '29°C • Rain-Free Coasts', tip: 'East coast beaches and cool indoor shopping pavilions in KL.' }
  ],
  aug: [
    { id: 'bali', weather: '26°C • Optimal Island Weather', tip: 'Kite festivals, clear underwater coral diving and outdoor beach clubs.' },
    { id: 'switzerland', weather: '23°C • Swiss National Day', tip: 'Fireworks over Lake Lucerne and panoramic Glacier Express rides.' },
    { id: 'vietnam', weather: '28°C • Tropical Charm', tip: 'Da Nang coastal resorts and Golden Hands Bridge views.' }
  ],
  sep: [
    { id: 'turkey', weather: '24°C • Autumn Golden Hour', tip: 'Mild temperatures in Istanbul and Cappadocia hot air balloon season.' },
    { id: 'bali', weather: '27°C • Shoulder Season Bliss', tip: 'Fewer crowds, great resort deals and calm waters.' },
    { id: 'switzerland', weather: '18°C • Golden Autumn Peaks', tip: 'Crisp mountain air, golden foliage and uncrowded trains.' }
  ],
  oct: [
    { id: 'dubai', weather: '29°C • Outdoor Season Starts', tip: 'Desert safaris, Global Village opening and rooftop dining.' },
    { id: 'turkey', weather: '21°C • Mild & Romantic', tip: 'Pleasant Bosphorus cruising and exploring underground cities.' },
    { id: 'vietnam', weather: '25°C • Best Time for Ha Long', tip: 'Clear tranquil waters and pleasant Hanoi autumn weather.' }
  ],
  nov: [
    { id: 'dubai', weather: '27°C • Peak Season Begins', tip: 'F1 Grand Prix season, yacht parties and ideal beach sunshine.' },
    { id: 'thailand', weather: '28°C • Cool Season Launch', tip: 'Loy Krathong lantern festival and calm seas in Andaman.' },
    { id: 'maldives', weather: '29°C • Tropical Sun', tip: 'Dry sunny days and crystal-clear calm atoll waters.' }
  ],
  dec: [
    { id: 'dubai', weather: '25°C • World Capital of New Year', tip: 'Burj Khalifa fireworks, cool desert nights and world-class celebrations.' },
    { id: 'singapore', weather: '28°C • Christmas Wonderland', tip: 'Orchard Road illumination and Gardens by the Bay Christmas Wonderland.' },
    { id: 'thailand', weather: '27°C • Year-End Holiday Haven', tip: 'Festive beach celebrations, island hopping and night markets.' }
  ]
};

function initSeasonalCompass() {
  const monthBtns = document.querySelectorAll('.month-btn');
  monthBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      monthBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const month = btn.getAttribute('data-month');
      renderSeasonalDestinations(month);
    });
  });

  // Default to current month or October
  const currentMonthIdx = new Date().getMonth();
  const monthKeys = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  const currentKey = monthKeys[currentMonthIdx] || 'oct';
  
  const activeBtn = document.querySelector(`.month-btn[data-month="${currentKey}"]`);
  if (activeBtn) {
    monthBtns.forEach(b => b.classList.remove('active'));
    activeBtn.classList.add('active');
  }
  renderSeasonalDestinations(currentKey);
}

function renderSeasonalDestinations(monthKey) {
  const container = document.getElementById('seasonalDestContainer');
  if (!container) return;

  const recs = monthlyRecommendations[monthKey] || monthlyRecommendations['oct'];
  
  container.innerHTML = recs.map(rec => {
    const dest = destinationsData.find(d => d.id === rec.id);
    if (!dest) return '';
    return `
      <div class="month-rec-card scroll-reveal revealed" onclick="openDestinationDetail('${dest.id}')">
        <img src="${dest.image}" alt="${dest.name}" class="month-rec-thumb" loading="lazy">
        <div class="month-rec-body">
          <h4>${dest.name}, ${dest.country}</h4>
          <div class="month-rec-weather"><i class="fa-solid fa-temperature-half"></i> ${rec.weather}</div>
          <p class="month-rec-desc">${rec.tip}</p>
          <div style="margin-top:8px; font-size:0.8rem; font-weight:700; color:var(--primary-gold-dark);">
            Starting ${dest.price} • ${dest.duration} <i class="fa-solid fa-arrow-right" style="margin-left:4px;"></i>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   9. SPOTLIGHT DESTINATION OF THE MONTH
   ========================================================================== */
function initSpotlight() {
  // Can expand to switch between Dubai & Bali dynamically
}

/* ==========================================================================
   10. MODAL UTILITIES & TOASTS
   ========================================================================== */
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close on backdrop click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
    document.body.style.overflow = '';
  }
});

function openQuoteModal(prefDest) {
  if (prefDest) {
    const destSelect = document.getElementById('quoteDest');
    if (destSelect) {
      for (let i = 0; i < destSelect.options.length; i++) {
        if (destSelect.options[i].text.toLowerCase().includes(prefDest.toLowerCase()) || 
            destSelect.options[i].value.toLowerCase().includes(prefDest.toLowerCase())) {
          destSelect.selectedIndex = i;
          break;
        }
      }
    }
  }
  openModal('quoteModal');
}

function submitQuoteForm(e) {
  e.preventDefault();
  const name = document.getElementById('quoteName').value;
  const phone = document.getElementById('quotePhone').value;
  const dest = document.getElementById('quoteDest').value;

  closeModal('quoteModal');
  showToast(`Thank you, ${name}! Your enquiry for ${dest} has been submitted. Our holiday expert will call you on ${phone}.`);
  document.getElementById('quoteForm').reset();
}

function showToast(msg) {
  const toast = document.getElementById('toastNotify');
  const msgEl = document.getElementById('toastMsg');
  if (toast && msgEl) {
    msgEl.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
