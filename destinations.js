/* ==========================================================================
   SHIV SAFAR HOLIDAYS - DESTINATIONS HUB INTERACTIVE JAVASCRIPT
   State-of-the-art filtering, scroll animations, quiz logic & modals
   ========================================================================== */

// --- Comprehensive International Destinations Database (Official Itineraries) ---
const destinationsData = [
  {
    id: 'dubai',
    name: 'Dubai Luxury Oasis',
    country: 'United Arab Emirates',
    region: 'middle-east',
    vibe: ['luxury', 'family', 'shopping'],
    image: 'assets/images/dest-dubai.jpg',
    gallery: [
      'assets/images/dest-dubai.jpg',
      'assets/images/pkg-dubai.jpg',
      'assets/images/hero-bg.jpg'
    ],
    price: '₹75,000',
    duration: '6N / 7D',
    bestSeason: 'Oct - Apr',
    flightTime: '3h 30m',
    visaType: 'Instant eVisa',
    visaClass: 'visa-evisa',
    weather: '26°C - 31°C Sunny',
    desc: 'Futuristic architectural marvels, golden sand desert safaris, mega shopping paradises and private yacht cruises on the Arabian Gulf.',
    attractions: ['Burj Khalifa 124th Floor', 'Desert Safari & BBQ Dinner', 'Marina Yacht Cruise', 'Museum of the Future', 'Abu Dhabi Sheikh Zayed Grand Mosque'],
    itinerarySnippet: [
      { day: 'Day 1', title: 'Arrival & Dubai Marina Dhow Cruise Dinner' },
      { day: 'Day 2', title: 'Half-day City Tour & Burj Khalifa Sky View' },
      { day: 'Day 3', title: 'Desert 4x4 Dune Bashing, Camel Ride & Fire Show' },
      { day: 'Day 4', title: 'Museum of the Future & Dubai Mall Fountain' },
      { day: 'Day 5', title: 'Abu Dhabi Day Trip: Sheikh Zayed Grand Mosque' },
      { day: 'Day 6-7', title: 'Gold Souk Shopping & Luxury Departure' }
    ],
    pdfFile: 'Dubai_Luxury_Itinerary_Premium_Edition shiv-safar-holidays.1.pdf',
    cuisine: ['Pure Veg Indian Dinners Everyday', 'Jain Meal Arrangements', 'Traditional Sweets', 'Fresh Dates & Mocktails'],
    popularFor: 'Luxury lovers, couples & family holidays'
  },
  {
    id: 'bali',
    name: 'Bali Tropical Paradise',
    country: 'Indonesia',
    region: 'southeast-asia',
    vibe: ['honeymoon', 'beaches', 'nature', 'wellness'],
    image: 'assets/images/dest-bali.jpg',
    gallery: [
      'assets/images/dest-bali.jpg',
      'assets/images/pkg-bali.jpg'
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
    pdfFile: 'bali package 2 (1).pdf',
    cuisine: ['Indian Veg Curries', 'Pure Jain Dining Assistance', 'Fresh Coconut & Tropical Fruits', 'Balinese Vegetarian Delicacies'],
    popularFor: 'Honeymooners, wellness seekers & private villa lovers'
  },
  {
    id: 'singapore-cruise',
    name: 'Singapore & Royal Dream Cruise',
    country: 'Singapore & High Seas',
    region: 'southeast-asia',
    vibe: ['family', 'luxury', 'cruise'],
    image: 'assets/images/pkg-singapore.jpg',
    gallery: [
      'assets/images/pkg-singapore.jpg',
      'assets/images/dest-singapore.jpg'
    ],
    price: '₹1,10,000',
    duration: '6D / 5N',
    bestSeason: 'Year-Round',
    flightTime: '5h 20m Direct',
    visaType: 'eVisa via Agency',
    visaClass: 'visa-evisa',
    weather: '28°C - 32°C Warm Breeze',
    desc: 'The ultimate luxury duo: explore Singapore Marina Bay Sands and Universal Studios Sentosa, then board a world-class luxury high seas cruise with lavish dining and theatrical shows.',
    attractions: ['Luxury High Seas Cruise Liner', 'Universal Studios Sentosa', 'Gardens by the Bay Supertree Grove', 'Marina Bay Sands SkyPark', 'Jewel Changi Rain Vortex'],
    itinerarySnippet: [
      { day: 'Day 1', title: 'Singapore Arrival, Changi Rain Vortex & Hotel Check-in' },
      { day: 'Day 2', title: 'Full Day Universal Studios Sentosa & Cable Car' },
      { day: 'Day 3', title: 'Gardens by the Bay & Boarding Dream Cruise Liner' },
      { day: 'Day 4', title: 'Full Day at High Sea: Waterpark, Shows & Gourmet Feasts' },
      { day: 'Day 5', title: 'Disembark Cruise & Marina Bay Sands SkyPark View' },
      { day: 'Day 6', title: 'Orchard Road Shopping & Departure' }
    ],
    pdfFile: 'Shiv_Safar_Holidays_Singapore_Cruise_Package_2 Adults.pdf.pdf',
    cuisine: ['Onboard Indian & Jain Buffets', 'Pure Veg Counters on Cruise', 'Marina Bay Indian Specialties', 'International Desserts'],
    popularFor: 'Families with kids, cruise lovers & anniversary celebrations'
  },
  {
    id: 'asia',
    name: 'Singapore, Malaysia & Thailand Trio',
    country: 'Singapore, Malaysia, Thailand',
    region: 'southeast-asia',
    vibe: ['family', 'culture', 'shopping'],
    image: 'assets/images/pkg-asia.jpg',
    gallery: [
      'assets/images/pkg-asia.jpg',
      'assets/images/dest-singapore.jpg',
      'assets/images/dest-malaysia.jpg',
      'assets/images/dest-thailand.jpg'
    ],
    price: '₹1,55,000',
    duration: '10N / 11D',
    bestSeason: 'Year-Round',
    flightTime: 'Connecting flights',
    visaType: 'eVisa / Visa-Free',
    visaClass: 'visa-free',
    weather: '27°C - 32°C Tropical',
    desc: 'The iconic 3-country Southeast Asian expedition covering Singapore Marina Bay, Genting Highlands, Kuala Lumpur Petronas Towers, Pattaya Coral Island, and Bangkok temples.',
    attractions: ['Universal Studios Sentosa', 'Genting Skyway & SkyWorlds', 'Petronas Twin Towers & Batu Caves', 'Pattaya Coral Island Speedboat', 'Bangkok Golden Buddha Temples'],
    itinerarySnippet: [
      { day: 'Day 1-3', title: 'Singapore: Changi, Sentosa Universal, Gardens by the Bay' },
      { day: 'Day 4', title: 'Luxury Coach to Malaysia, Genting Highlands Cable Car' },
      { day: 'Day 5-6', title: 'Batu Caves, Kuala Lumpur City Tour & Petronas Towers' },
      { day: 'Day 7-8', title: 'Flight to Bangkok, Transfer to Pattaya & Alcazar Show' },
      { day: 'Day 9-10', title: 'Coral Island Speedboat Tour & Bangkok City Temples' },
      { day: 'Day 11', title: 'Indira Gandhi / Mumbai Flight Back Home' }
    ],
    pdfFile: 'Shiv_Safar_Holidays_Singapore_Malaysia_Thailand_Itineraryfor 5 adults.pdf',
    cuisine: ['Guaranteed Indian Dinners Everyday', 'Jain & Veg Meals Arranged', 'Fresh Tropical Fruit Feasts', 'Pure Veg Partner Restaurants'],
    popularFor: 'Complete multi-country family vacations & group tours'
  },
  {
    id: 'singapore',
    name: 'Singapore Classic Discovery',
    country: 'Singapore',
    region: 'southeast-asia',
    vibe: ['family', 'luxury', 'shopping'],
    image: 'assets/images/dest-singapore.jpg',
    gallery: [
      'assets/images/dest-singapore.jpg',
      'assets/images/pkg-singapore.jpg'
    ],
    price: '₹88,000',
    duration: '6D / 5N',
    bestSeason: 'Year-Round',
    flightTime: '5h 20m Direct',
    visaType: 'eVisa via Agency',
    visaClass: 'visa-evisa',
    weather: '28°C - 32°C Pleasant',
    desc: 'An immersive 6-day holiday exploring the wonders of Singapore: Marina Bay Sands, Gardens by the Bay Cloud Forest, Universal Studios Sentosa, Night Safari, and private transfers.',
    attractions: ['Universal Studios Sentosa All-Access', 'Gardens by the Bay Flower Dome', 'Marina Bay Sands SkyPark Observation Deck', 'Singapore Night Safari Tram', 'Jewel Changi Canopy & Rain Vortex'],
    itinerarySnippet: [
      { day: 'Day 1', title: 'Singapore Arrival, Changi Jewel & Night Safari Adventure' },
      { day: 'Day 2', title: 'Full Day Sentosa: Universal Studios & S.E.A. Aquarium' },
      { day: 'Day 3', title: 'City Tour: Merlion Park, Chinatown & Marina Bay Sands' },
      { day: 'Day 4', title: 'Gardens by the Bay (Flower Dome & Cloud Forest)' },
      { day: 'Day 5', title: 'Orchard Road Shopping & Little India Discovery' },
      { day: 'Day 6', title: 'Private Airport Transfer & Departure' }
    ],
    pdfFile: 'Shiv_Safar_Holidays_Singapore_Package_2 Adults-6 days 5 nights.pdf',
    cuisine: ['Indian Vegetarian Meals Arranged', 'Authentic Little India Dining', 'Pure Jain Food Options', 'Gourmet Cafes'],
    popularFor: 'First-time international travelers, couples & families'
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
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = !navMenu.classList.contains('open') && !navMenu.classList.contains('active');
      navMenu.classList.toggle('open', willOpen);
      navMenu.classList.toggle('active', willOpen);
      mobileBtn.classList.toggle('active', willOpen);
      document.body.style.overflow = willOpen ? 'hidden' : '';
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileBtn.contains(e.target) && (navMenu.classList.contains('open') || navMenu.classList.contains('active'))) {
        navMenu.classList.remove('open');
        navMenu.classList.remove('active');
        mobileBtn.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navMenu.classList.remove('active');
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
              <a href="https://wa.me/919512186116?text=Hello%20SHIV%20SAFAR%20HOLIDAYS,%20I%20am%20interested%20in%20traveling%20to%20${encodeURIComponent(dest.name)}" 
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
        <a href="https://wa.me/919512186116?text=Hello%20SHIV%20SAFAR%20HOLIDAYS,%20I%20am%20interested%20in%20customizing%20an%20itinerary%20for%20${encodeURIComponent(dest.name)}" 
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
  let reason = 'Bali offers the perfect harmony of secluded private pool villas, romantic sunsets and rejuvenating nature.';

  if (traveler === 'couple' && scenery === 'luxury') {
    matchId = 'dubai';
    matchScore = 99;
    reason = 'Dubai offers world-class dining, skyline views from Burj Khalifa, desert safaris and lavish private tours.';
  } else if (traveler === 'couple' && scenery === 'beach') {
    matchId = 'bali';
    matchScore = 99;
    reason = 'Bali is the ultimate romantic escape with private pool villa luxury, Nusa Penida island and couple spa pampering.';
  } else if (traveler === 'family') {
    matchId = 'singapore';
    matchScore = 98;
    reason = 'Singapore is the safest and most entertaining haven for families with Universal Studios Sentosa and Gardens by the Bay.';
  } else if (scenery === 'nature') {
    matchId = 'singapore-cruise';
    matchScore = 97;
    reason = 'Experience panoramic high seas, ocean breezes, and world-class luxury aboard Dream Cruise liners.';
  } else if (traveler === 'friends' || scenery === 'culture') {
    matchId = 'asia';
    matchScore = 96;
    reason = 'The 3-country expedition combines Singapore, Genting Highlands, Kuala Lumpur, and Bangkok into one unforgettable journey.';
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
    { id: 'dubai', weather: '24°C • Perfect Cool Sunshine', tip: 'Dubai Shopping Festival, pleasant desert dune safaris and outdoor Marina walks.' },
    { id: 'singapore-cruise', weather: '28°C • Warm Ocean Breeze', tip: 'Gentle sea breezes, high-seas sun decks and festive onboard gala celebrations.' },
    { id: 'singapore', weather: '27°C • Ideal City Weather', tip: 'Comfortable sightseeing at Universal Studios Sentosa and Gardens by the Bay.' }
  ],
  feb: [
    { id: 'dubai', weather: '25°C • Mild Winter Breeze', tip: 'Ideal for skydiving, yacht charters, desert safaris and Miracle Garden in full bloom.' },
    { id: 'singapore', weather: '28°C • Festive Spring', tip: 'Vibrant city celebrations, Night Safari tram rides and Marina Bay SkyPark views.' },
    { id: 'bali', weather: '28°C • Tropical Charm', tip: 'Romantic pool villa seclusion and lush green terraces in Ubud.' }
  ],
  mar: [
    { id: 'dubai', weather: '27°C • Sunny Spring', tip: 'Burj Khalifa sunset views, dhow cruise dining and gold souk shopping.' },
    { id: 'asia', weather: '28°C • Vibrant Southeast Asia', tip: 'Explore Singapore, Genting Highlands cable cars and Bangkok temples.' },
    { id: 'bali', weather: '28°C • Refreshing Tropics', tip: 'Serene temple visits and relaxing Balinese spa therapies.' }
  ],
  apr: [
    { id: 'bali', weather: '28°C • Dry Season Begins', tip: 'Clear blue skies over Nusa Penida and ideal sunrise views over Mount Batur.' },
    { id: 'singapore-cruise', weather: '29°C • High Seas Sunshine', tip: 'Smooth sailing, crystal pool deck fun and Broadway theatrical shows.' },
    { id: 'dubai', weather: '29°C • Pleasant Warmth', tip: 'Abu Dhabi Sheikh Zayed Mosque visits and air-conditioned luxury shopping.' }
  ],
  may: [
    { id: 'bali', weather: '27°C • Sunny & Breezy', tip: 'Cool mountain breezes in Ubud and perfect beach days in Seminyak.' },
    { id: 'singapore', weather: '29°C • Summer Thrills', tip: 'Universal Studios Sentosa, Jewel Changi and Gardens by the Bay.' },
    { id: 'asia', weather: '29°C • Multi-City Adventure', tip: 'Pattaya Coral Island watersports, Genting indoor parks and Kuala Lumpur towers.' }
  ],
  jun: [
    { id: 'bali', weather: '26°C • Pleasant Island Breeze', tip: 'Low humidity, spectacular sunsets and cultural temple festivals.' },
    { id: 'singapore-cruise', weather: '29°C • Summer High Seas', tip: 'Family vacations aboard luxury liners with dedicated Indian buffets.' },
    { id: 'singapore', weather: '29°C • Great City Escapes', tip: 'Sentosa Cable Car rides and Night Safari excursions.' }
  ],
  jul: [
    { id: 'bali', weather: '26°C • Dry Season Peak', tip: 'Coolest and driest month in Bali, ideal for Nusa Penida island speedboat tours.' },
    { id: 'singapore', weather: '29°C • Festive Energy', tip: 'Full day at Sentosa theme parks and Marina Bay Sands shopping.' },
    { id: 'asia', weather: '29°C • Grand Trio Season', tip: 'Genting SkyWorlds, Petronas Twin Towers and Bangkok shopping.' }
  ],
  aug: [
    { id: 'bali', weather: '26°C • Optimal Island Weather', tip: 'Clear underwater coral snorkeling, cliffside temples and private villa peace.' },
    { id: 'singapore-cruise', weather: '29°C • Ocean Vacation', tip: 'Unwind on luxury cruise balconies with 24/7 concierge support.' },
    { id: 'dubai', weather: '34°C • Indoor Luxury Season', tip: 'Museum of the Future, Dubai Mall Aquarium, and indoor theme parks.' }
  ],
  sep: [
    { id: 'bali', weather: '27°C • Peaceful Tropics', tip: 'Fewer crowds, serene private pool villas and calm waters.' },
    { id: 'asia', weather: '28°C • Complete Circuit', tip: 'Singapore, Malaysia & Thailand trio with private transport.' },
    { id: 'singapore', weather: '28°C • Pleasant City Breeze', tip: 'Gardens by the Bay and Marina Bay sunset views.' }
  ],
  oct: [
    { id: 'dubai', weather: '29°C • Outdoor Season Starts', tip: 'Desert safaris, yacht sunset cruises and rooftop dining in Dubai Marina.' },
    { id: 'bali', weather: '28°C • Warm & Sunny', tip: 'Romantic beach dinners and Kintamani volcano excursions.' },
    { id: 'singapore-cruise', weather: '28°C • High Seas Comfort', tip: 'Royal Caribbean and Dream Cruise sailings with Indian dining.' }
  ],
  nov: [
    { id: 'dubai', weather: '27°C • Peak Season Begins', tip: 'Perfect weather for desert dune bashing, Burj Khalifa and Abu Dhabi tours.' },
    { id: 'singapore', weather: '28°C • Year-End Lights', tip: 'Festive street lighting, Sentosa island attractions and Changi Jewel.' },
    { id: 'asia', weather: '28°C • Ideal Winter Vacation', tip: 'Comfortable weather across Singapore, Malaysia and Thailand.' }
  ],
  dec: [
    { id: 'dubai', weather: '25°C • World Capital of Winter', tip: 'World-famous Burj Khalifa festivities, cool desert evenings and luxury yachting.' },
    { id: 'singapore-cruise', weather: '28°C • High Seas Celebration', tip: 'Grand Christmas and New Year gala dinners on the ocean.' },
    { id: 'asia', weather: '27°C • Grand Holiday Trio', tip: 'Year-end celebrations across 3 countries with complete family comfort.' }
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
