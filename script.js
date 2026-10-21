/* ==========================================================================
   SHIV SAFAR HOLIDAYS - INTERACTIVE SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initSearchTabs();
  initTestimonials();
  initScrollTop();
  initActiveNavSpy();
  init3DTiltEffects();
  initScrollAnimations();
  initScrollCounters();
  initScrollPlaneAnimation();
  initJourneyFlow();
});

/* --- 1. Sticky Header & Scroll Spy --- */
function initHeader() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initActiveNavSpy() {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --- 2. Mobile Menu Toggle --- */
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

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileBtn.contains(e.target) && (navMenu.classList.contains('open') || navMenu.classList.contains('active'))) {
        navMenu.classList.remove('open');
        navMenu.classList.remove('active');
        mobileBtn.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Mobile dropdown accordion toggles
    navMenu.querySelectorAll('.nav-dropdown > a').forEach(dropTrigger => {
      dropTrigger.addEventListener('click', (e) => {
        if (window.innerWidth <= 992) {
          e.preventDefault();
          const parent = dropTrigger.closest('.nav-dropdown');
          parent.classList.toggle('active');
        }
      });
    });

    // Close menu when clicking normal links or submenu items
    navMenu.querySelectorAll('.nav-menu > a:not(.nav-dropdown > a), .dropdown-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileBtn.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}

/* --- 3. Hero Search Tabs --- */
function initSearchTabs() {
  const tabs = document.querySelectorAll('.search-tab');
  const destSelect = document.getElementById('searchDestination');
  const dateInput = document.getElementById('searchDate');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const mode = tab.getAttribute('data-tab');
      if (mode === 'flights') {
        dateInput.placeholder = 'Departure Date';
        showToast('Flight search mode activated. Select your destination & date.');
      } else if (mode === 'hotels') {
        dateInput.placeholder = 'Check-in Date';
        showToast('Hotel search mode activated. Select your city & check-in date.');
      } else {
        dateInput.placeholder = 'Travel Date';
      }
    });
  });
}

function handleHeroSearch(e) {
  e.preventDefault();
  const dest = document.getElementById('searchDestination').value;
  const date = document.getElementById('searchDate').value;
  const travellers = document.getElementById('searchTravellers').value;

  if (!dest) {
    showToast('Please select your destination');
    return;
  }

  // Pre-fill quote modal
  openQuoteModal(dest);
  if (date) {
    document.getElementById('quoteDate').value = date;
  }
}

/* --- 4. Scroll Helper --- */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });
}

/* --- 5. Package Details Modal --- */
const packageData = {
  dubai: {
    badge: 'Popular',
    badgeClass: 'badge-popular',
    title: 'Dubai Luxury Experience',
    duration: '6 Nights / 7 Days',
    price: '₹75,000',
    image: 'assets/images/pkg-dubai.jpg',
    description: 'Experience the grandeur of Dubai with luxury hotel stays, thrilling desert safaris with BBQ dinners, and entry to Burj Khalifa.',
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Dubai & Marina Dhow Cruise Dinner', desc: 'Private airport pickup, check-in to 4/5-star hotel, followed by romantic Marina Dhow Cruise with international buffet dinner.' },
      { day: 'Day 2', title: 'Dubai Half-Day City Tour & Burj Khalifa (124th Floor)', desc: 'Explore Dubai Frame, Palm Jumeirah, and enjoy panoramic 360° views from Burj Khalifa observation deck.' },
      { day: 'Day 3', title: 'Desert Safari with Dune Bashing, Camel Ride & BBQ', desc: 'Action-packed 4x4 dune bashing, quad biking, belly dance performance, and fire show under the desert stars.' },
      { day: 'Day 4', title: 'Abu Dhabi Day Trip & Sheikh Zayed Grand Mosque', desc: 'Visit the world-famous white marble Grand Mosque, Ferrari World photo stop, and Corniche drive.' },
      { day: 'Day 5', title: 'Miracle Garden & Global Village (Seasonal) / Aquaventure', desc: 'Wander through 150 million blooming flowers and international cultural pavilions.' },
      { day: 'Day 6-7', title: 'Gold Souk Shopping & Departure', desc: 'Free time for duty-free shopping at Dubai Mall and Gold Souk followed by airport transfer.' }
    ],
    inclusions: [
      '6 Nights in Luxury 4-Star / 5-Star Hotel',
      'Daily Lavish Buffet Breakfast',
      'Burj Khalifa 124th Floor Entry Ticket',
      'Desert Safari with Live Shows & BBQ Dinner',
      'Marina Dhow Cruise with Buffet',
      'All Private Airport & Sightseeing Transfers'
    ]
  },
  singapore: {
    badge: 'Best Seller',
    badgeClass: 'badge-bestseller',
    title: 'Singapore & Dream Cruise',
    duration: '6 Days / 5 Nights',
    price: '₹1,10,000',
    image: 'assets/images/pkg-singapore.jpg',
    description: 'A futuristic adventure with Gardens by the Bay, Universal Studios Sentosa, and 2 nights aboard a world-class luxury cruise ship.',
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Singapore & Night Safari', desc: 'Changi Airport welcome, hotel transfer, and the world’s first nocturnal wildlife park tram tour.' },
      { day: 'Day 2', title: 'Sentosa Island & Universal Studios Singapore', desc: 'Full-day access to thrilling roller coasters, SEA Aquarium, and Wings of Time laser water show.' },
      { day: 'Day 3', title: 'Gardens by the Bay & Boarding Dream Cruise', desc: 'Flower Dome, Cloud Forest waterfall, and boarding the luxury cruise liner in the evening.' },
      { day: 'Day 4', title: 'Full Day on Luxury Cruise at High Sea', desc: 'All meals, live Broadway entertainment, pool decks, water park, and casino aboard.' },
      { day: 'Day 5', title: 'Cruise Disembarkation & Marina Bay SkyPark', desc: 'Disembark cruise, visit Marina Bay Sands SkyPark and shopping at Orchard Road.' },
      { day: 'Day 6', title: 'Jewel Changi & Departure Flight', desc: 'Explore the HSBC Rain Vortex waterfall at Jewel Changi before departure.' }
    ],
    inclusions: [
      '3 Nights Hotel + 2 Nights Luxury Cruise Cabin',
      'All Meals Included on Cruise',
      'Universal Studios Sentosa One-Day Pass',
      'Gardens by the Bay Flower Dome Tickets',
      'Airport & Cruise Port Transfers',
      'Dedicated Tour Manager Support'
    ]
  },
  asia: {
    badge: 'Multi-Country',
    badgeClass: 'badge-multi',
    title: 'Singapore, Malaysia & Thailand Trio',
    duration: '10 Nights / 11 Days',
    price: '₹1,55,000',
    image: 'assets/images/pkg-asia.jpg',
    description: 'The ultimate Southeast Asian multi-country grand tour covering Singapore, Kuala Lumpur, Genting, Bangkok and Pattaya.',
    itinerary: [
      { day: 'Days 1-3', title: 'Singapore City & Sentosa Island', desc: 'City tour, Merlion Park, Marina Bay Sands, Sentosa Cable Car, and Universal Studios.' },
      { day: 'Days 4-6', title: 'Kuala Lumpur & Genting Highlands, Malaysia', desc: 'Petronas Twin Towers, Batu Caves, Genting Skyway cable car, and indoor theme parks.' },
      { day: 'Days 7-8', title: 'Pattaya, Thailand & Coral Island Speedboat Tour', desc: 'Speedboat cruise to Coral Island with parasailing, snorkeling, and Alcazar Cabaret Show.' },
      { day: 'Days 9-11', title: 'Bangkok City, Grand Temple & Safari World', desc: 'Golden Buddha, Marble Temple, Safari World & Marine Park, shopping at Pratunam.' }
    ],
    inclusions: [
      '10 Nights in Handpicked 4-Star Accommodations',
      'Daily Buffet Breakfast',
      'Inter-Country Flights / Luxury Coach Transfers',
      'Coral Island Tour with Indian Lunch in Pattaya',
      'Genting Cable Car & Batu Caves Excursion',
      'English Speaking Licensed Guides'
    ]
  },
  bali: {
    badge: 'Hot',
    badgeClass: 'badge-hot',
    title: 'Bali Tropical Paradise & Private Pool Villa',
    duration: '6 Nights / 7 Days',
    price: '₹76,999',
    image: 'assets/images/pkg-bali.jpg',
    description: 'Immerse in Bali’s romantic vibes, emerald rice terraces, Nusa Penida island speedboat trip, and private pool luxury villas.',
    itinerary: [
      { day: 'Day 1', title: 'Arrival at Denpasar & Private Pool Villa Check-in', desc: 'Traditional Balinese flower garland welcome, private transfer to Seminyak/Ubud pool villa.' },
      { day: 'Day 2', title: 'Kintamani Volcano, Coffee Plantation & Tegallalang Swing', desc: 'Scenic volcano view over Lake Batur, famous Bali jungle swing photo shoot, and Luwak coffee tasting.' },
      { day: 'Day 3', title: 'Full Day Nusa Penida West Island Speedboat Excursion', desc: 'Kelingking T-Rex Beach, Broken Beach, Angel’s Billabong, and Crystal Bay.' },
      { day: 'Day 4', title: 'Ulun Danu Beratan Lake Temple & Handara Gate', desc: 'Iconic water temple on Lake Bratan and famous Handara iconic golf gate.' },
      { day: 'Day 5', title: 'Ayung River White Water Rafting & Ubud Monkey Forest', desc: 'Thrilling white water rafting through jungle gorges, followed by Ubud royal palace.' },
      { day: 'Day 6-7', title: 'Tanah Lot Sunset & Departure', desc: 'Sea temple perched on rock formations during golden hour sunset, relaxing Balinese massage, and flight back.' }
    ],
    inclusions: [
      '4 Nights 4-Star Resort + 2 Nights Private Pool Villa',
      'Daily Breakfast & 2 Candlelight Dinners',
      'Nusa Penida Island Tour with Speedboat & Lunch',
      'Bali Jungle Swing & Luwak Coffee Tour',
      'Private AC Vehicle with Dedicated Driver-Guide',
      'Complimentary Balinese Massage Session'
    ]
  }
};

function openPackageModal(pkgKey) {
  const data = packageData[pkgKey];
  if (!data) return;

  const content = document.getElementById('packageModalContent');
  content.innerHTML = `
    <div class="pkg-modal-hero">
      <img src="${data.image}" alt="${data.title}">
      <span class="pkg-modal-badge ${data.badgeClass}">${data.badge}</span>
    </div>
    <div class="pkg-modal-headline">
      <div>
        <h3 class="pkg-modal-title">${data.title}</h3>
        <span class="pkg-modal-duration"><i class="fa-regular fa-clock"></i> ${data.duration}</span>
      </div>
      <div>
        <div class="pkg-modal-price">${data.price}</div>
        <span style="font-size:0.8rem; color:#64748b;">per person on twin sharing</span>
      </div>
    </div>
    <p style="color:#475569; font-size:0.95rem; line-height:1.6; margin-bottom:16px;">${data.description}</p>
    
    <h4 style="font-family:var(--font-serif); font-size:1.2rem; color:var(--color-slate); margin-top:20px;">
      <i class="fa-solid fa-map-location-dot" style="color:var(--primary-gold);"></i> Day-wise Highlights
    </h4>
    <div class="itinerary-list">
      ${data.itinerary.map(item => `
        <div class="itinerary-day">
          <span class="day-badge">${item.day}</span>
          <div class="day-title">${item.title}</div>
          <div class="day-desc">${item.desc}</div>
        </div>
      `).join('')}
    </div>

    <h4 style="font-family:var(--font-serif); font-size:1.2rem; color:var(--color-slate); margin-top:24px;">
      <i class="fa-solid fa-circle-check" style="color:#10b981;"></i> What's Included
    </h4>
    <div class="pkg-modal-inclusions">
      ${data.inclusions.map(inc => `
        <div class="inc-item"><i class="fa-solid fa-check"></i> <span>${inc}</span></div>
      `).join('')}
    </div>

    <div style="margin-top:28px; display:flex; gap:14px; flex-wrap:wrap;">
      <button class="btn btn-gold" style="flex:1;" onclick="closeModal('packageModal'); openQuoteModal('${data.title}');">
        Book This Package Now <i class="fa-solid fa-arrow-right"></i>
      </button>
      <a href="https://wa.me/919102185599?text=Hello%20Shiv%20Safar%20Holidays,%20I%20am%20interested%20in%20${encodeURIComponent(data.title)}" 
         target="_blank" rel="noopener" class="btn" style="background:#25d366; color:#fff;">
        <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
      </a>
    </div>
  `;

  openModal('packageModal');
}

/* --- 6. Generic Modal Controls --- */
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

  // Stop video iframe if closing video modal
  if (id === 'videoModal') {
    const iframe = document.getElementById('videoIframe');
    if (iframe) iframe.src = '';
  }
}

// Close modals when clicking backdrop
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
    document.body.style.overflow = '';
    const iframe = document.getElementById('videoIframe');
    if (iframe) iframe.src = '';
  }
});

/* --- 7. Quote / Enquiry Modal Specifics --- */
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

/* --- 8. Video Modal --- */
function openVideoModal() {
  const iframe = document.getElementById('videoIframe');
  // High quality cinematic luxury travel video trailer
  iframe.src = 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1'; 
  // Let's use an inspiring travel reel:
  iframe.src = 'https://www.youtube.com/embed/P670P_9_51I?autoplay=1&mute=0';
  openModal('videoModal');
}

/* --- 9. About Story Modal --- */
function openStoryModal() {
  openModal('storyModal');
}

/* --- 10. Destination Card Click Info --- */
function openDestinationInfo(destName) {
  openQuoteModal(destName);
}

function highlightDestination(destName) {
  scrollToSection('destinations');
  showToast(`Viewing destinations: ${destName}`);
}

/* --- 11. Testimonials Controls & Carousel --- */
function initTestimonials() {
  const grid = document.getElementById('testiGrid');
  const prevBtn = document.getElementById('testiPrev');
  const nextBtn = document.getElementById('testiNext');
  const dots = document.querySelectorAll('.carousel-indicators-dots .c-dot');

  function updateDots() {
    if (!grid || !dots.length) return;
    const scrollLeft = grid.scrollLeft;
    const card = grid.querySelector('.testimonial-card');
    const cardWidth = card ? card.offsetWidth + 28 : 368;
    const activeIndex = Math.min(dots.length - 1, Math.round(scrollLeft / cardWidth));
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIndex);
    });
  }

  if (grid) {
    grid.addEventListener('scroll', updateDots, { passive: true });
  }

  if (prevBtn && nextBtn && grid) {
    prevBtn.addEventListener('click', () => {
      const card = grid.querySelector('.testimonial-card');
      const cardWidth = card ? card.offsetWidth + 28 : 368;
      grid.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      const card = grid.querySelector('.testimonial-card');
      const cardWidth = card ? card.offsetWidth + 28 : 368;
      grid.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });
  }
}

function scrollTestimonials(index) {
  const grid = document.getElementById('testiGrid');
  const dots = document.querySelectorAll('.carousel-indicators-dots .c-dot');
  if (!grid) return;
  const card = grid.querySelector('.testimonial-card');
  const cardWidth = card ? card.offsetWidth + 28 : 368;
  grid.scrollTo({
    left: index * cardWidth,
    behavior: 'smooth'
  });
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === index);
  });
}

function openReviewsModal() {
  showToast('Shiv Safar Holidays holds a 4.9/5 Star Rating with 500+ satisfied clients!');
  openQuoteModal();
}

/* --- 12. Toast Notification --- */
function showToast(msg) {
  const toast = document.getElementById('toastNotify');
  const toastMsg = document.getElementById('toastMsg');
  if (toast && toastMsg) {
    toastMsg.textContent = msg;
    toast.classList.add('show');
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }
}

/* --- 13. Policy & Terms Modal --- */
function openTerms(title) {
  showToast(`${title} details: For inquiries or terms, please contact us at shivsafarholidays@gmail.com or 9512165599.`);
}

/* --- 14. 3D Card Tilt Physics --- */
function init3DTiltEffects() {
  const tiltElements = document.querySelectorAll('[data-tilt], .prop-item, .dest-card, .package-card, .station-pod, .service-glass-card, .about-showcase-box, .showcase-signature-card, .bento-hero-tile, .bento-subtile, .testimonial-card');

  tiltElements.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;
      
      const maxTilt = 7; // degrees
      const rotX = -deltaY * maxTilt;
      const rotY = deltaX * maxTilt;
      
      card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-8px) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s ease';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
    });
  });
}

/* --- 15. Cinematic Scroll Reveal Animations --- */
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) return;

  const observerOptions = {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  };

  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        animObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.prop-item, .dest-card, .package-card, .journey-station, .testimonial-card, .collage-card, .collage-badge-card, .service-glass-card, .trust-metric-bar').forEach((el, idx) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.65s cubic-bezier(0.25, 0.8, 0.25, 1) ${(idx % 4) * 0.1}s, transform 0.65s cubic-bezier(0.25, 0.8, 0.25, 1) ${(idx % 4) * 0.1}s`;
    animObserver.observe(el);
  });
}

/* --- 16. Dynamic Scroll-Triggered Counter Numbers --- */
function initScrollCounters() {
  const statElements = document.querySelectorAll('.stat-number, .stat-num, .about-stat-num');
  if (!statElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const text = target.textContent.trim();
        const numMatch = text.match(/\d+/);
        if (numMatch) {
          const targetNum = parseInt(numMatch[0], 10);
          const suffix = text.replace(numMatch[0], '');
          let current = 0;
          const duration = 1600;
          const stepTime = 25;
          const totalSteps = duration / stepTime;
          const increment = targetNum / totalSteps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= targetNum) {
              current = targetNum;
              clearInterval(timer);
            }
            target.textContent = Math.floor(current) + suffix;
          }, stepTime);
        }
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.25 });

  statElements.forEach(el => observer.observe(el));
}

/* --- 17. Scroll-Linked Airplane Parallax in CTA Banner --- */
function initScrollPlaneAnimation() {
  const plane = document.getElementById('ctaAirplane');
  const ctaSection = document.getElementById('ctaSection');
  if (!plane || !ctaSection) return;

  let ticking = false;

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const rect = ctaSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Check if CTA section is in or near viewport
        if (rect.top < windowHeight + 100 && rect.bottom > -100) {
          const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
          const clamped = Math.max(0, Math.min(1, progress));
          // Gentle flight movement: smooth glide forward and slight altitude ascent
          const translateX = (clamped - 0.5) * 35;
          const translateY = -(clamped - 0.5) * 20;
          const rotate = -1 + (clamped * 3);
          plane.style.transform = `translate3d(${translateX.toFixed(1)}px, ${translateY.toFixed(1)}px, 0) rotate(${rotate.toFixed(1)}deg)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* --- 18. Interactive Travel Journey Pathway --- */
let journeyTimer = null;
let currentJourneyStep = 0;

function activateJourneyStep(stepIndex) {
  currentJourneyStep = stepIndex;
  const stations = document.querySelectorAll('.journey-station');
  const progressBar = document.getElementById('routeProgressBar');
  const planeMarker = document.getElementById('routePlaneMarker');

  stations.forEach((station, idx) => {
    station.classList.toggle('active', idx === stepIndex);
  });

  if (progressBar && planeMarker) {
    // 4 stations: centers at ~12.5%, 37.5%, 62.5%, 87.5%
    const targetPercent = 12.5 + stepIndex * 25;
    progressBar.style.width = targetPercent + '%';
    planeMarker.style.left = targetPercent + '%';
    
    // Dynamic bank flight angle
    const flightAngle = 38 + (stepIndex * 4);
    planeMarker.style.transform = `translateX(-50%) rotate(${flightAngle}deg) scale(1.15)`;
    setTimeout(() => {
      planeMarker.style.transform = `translateX(-50%) rotate(45deg) scale(1)`;
    }, 450);
  }
}

function onHoverJourneyStep(stepIndex) {
  activateJourneyStep(stepIndex);
  if (journeyTimer) {
    clearInterval(journeyTimer);
    journeyTimer = null;
  }
}

function initJourneyFlow() {
  const journeyWrap = document.querySelector('.journey-experience-wrap');
  if (!journeyWrap) return;

  // Initialize step 0
  activateJourneyStep(0);

  // Auto-tour through milestones every 3.8 seconds if user is not hovering
  function startAutoTour() {
    if (journeyTimer) clearInterval(journeyTimer);
    journeyTimer = setInterval(() => {
      currentJourneyStep = (currentJourneyStep + 1) % 4;
      activateJourneyStep(currentJourneyStep);
    }, 3800);
  }

  // Start auto tour when section comes into view
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startAutoTour();
        } else {
          if (journeyTimer) {
            clearInterval(journeyTimer);
            journeyTimer = null;
          }
        }
      });
    }, { threshold: 0.15 });

    observer.observe(journeyWrap);
  } else {
    startAutoTour();
  }

  // Pause on mouseenter, resume on mouseleave
  journeyWrap.addEventListener('mouseenter', () => {
    if (journeyTimer) {
      clearInterval(journeyTimer);
      journeyTimer = null;
    }
  });

  journeyWrap.addEventListener('mouseleave', () => {
    startAutoTour();
  });
}
