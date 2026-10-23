/**
 * SHIV SAFAR HOLIDAYS - PACKAGES HUB LOGIC (2026 LUXURY EDITION)
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeaderScroll();
  initFilterPills();
  initSpotlightGallery();
  initWishlistToggles();
  initTripCustomizer();
  syncWishlistCount();
  initScrollTop();
});

// Mobile Navigation Toggle
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

// Header background change on scroll
function initHeaderScroll() {
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

// Package Filter Command Bar
function initFilterPills() {
  const pills = document.querySelectorAll('.filter-pill-btn');
  const spotlightSection = document.getElementById('dubaiSpotlight');
  const cruiseSection = document.getElementById('cruiseSection');
  const catalogSection = document.getElementById('allPackages');
  const allCards = document.querySelectorAll('[data-pkg-type]');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-filter');

      if (filter === 'all') {
        allCards.forEach(card => {
          card.style.display = '';
          card.style.opacity = '1';
        });
        if (catalogSection) {
          catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        return;
      }

      // If specific destination selected, scroll smoothly to it and highlight
      allCards.forEach(card => {
        const type = card.getAttribute('data-pkg-type');
        if (type === filter) {
          card.style.display = '';
          card.style.opacity = '1';
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.style.transition = 'box-shadow 0.6s ease';
          card.style.boxShadow = '0 0 35px rgba(212, 163, 64, 0.6)';
          setTimeout(() => {
            card.style.boxShadow = '';
          }, 2000);
        } else {
          // If in catalog, hide non-matching catalog cards
          if (card.classList.contains('catalog-card')) {
            card.style.display = (filter === 'bali' || filter === 'singapore') ? (type === filter ? '' : 'none') : '';
          }
        }
      });
    });
  });
}

// Spotlight Image Gallery Switcher
function initSpotlightGallery() {
  const thumbs = document.querySelectorAll('.spotlight-thumb-item');
  const mainImg = document.getElementById('spotlightMainImg');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');

      const newSrc = thumb.getAttribute('data-img');
      if (mainImg && newSrc) {
        mainImg.style.opacity = '0.4';
        setTimeout(() => {
          mainImg.src = newSrc;
          mainImg.style.opacity = '1';
        }, 150);
      }
    });
  });
}

// Wishlist Toggles with LocalStorage sync
function initWishlistToggles() {
  const toggleBtns = document.querySelectorAll('.bento-wishlist-toggle');
  let wishlist = getWishlist();

  toggleBtns.forEach(btn => {
    const pkgId = btn.getAttribute('data-id');
    if (wishlist.includes(pkgId)) {
      btn.classList.add('active');
      const icon = btn.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-heart';
    }

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      wishlist = getWishlist();

      const icon = btn.querySelector('i');
      if (wishlist.includes(pkgId)) {
        wishlist = wishlist.filter(id => id !== pkgId);
        btn.classList.remove('active');
        if (icon) icon.className = 'fa-regular fa-heart';
      } else {
        wishlist.push(pkgId);
        btn.classList.add('active');
        if (icon) icon.className = 'fa-solid fa-heart';
      }

      saveWishlist(wishlist);
      syncWishlistCount();
    });
  });
}

function getWishlist() {
  try {
    const saved = localStorage.getItem('shiv_safar_wishlist');
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
}

function saveWishlist(items) {
  try {
    localStorage.setItem('shiv_safar_wishlist', JSON.stringify(items));
  } catch (e) {}
}

function syncWishlistCount() {
  const countBadge = document.getElementById('navWishlistCount');
  if (!countBadge) return;

  const items = getWishlist();
  countBadge.textContent = items.length;
  countBadge.style.display = items.length > 0 ? 'inline-flex' : 'none';
}

// Interactive VIP Trip Customizer
function initTripCustomizer() {
  const destSelect = document.getElementById('customDest');
  const styleSelect = document.getElementById('customStyle');
  const durationSelect = document.getElementById('customDuration');
  const mealSelect = document.getElementById('customMeal');
  const estimateDisplay = document.getElementById('customEstimateVal');
  const waBtn = document.getElementById('customWABtn');

  if (!destSelect || !estimateDisplay) return;

  const basePrices = {
    dubai: 75000,
    bali: 76999,
    cruise: 110000,
    asia: 155000,
    singapore: 88000
  };

  const destMeta = {
    dubai: { img: 'assets/images/pkg-dubai.jpg', name: 'Dubai, UAE • Desert Safaris & Skyline Luxury' },
    bali: { img: 'assets/images/pkg-bali.jpg', name: 'Bali, Indonesia • Private Pool Villas & Emerald Terraces' },
    cruise: { img: 'assets/images/pkg-singapore.jpg', name: 'Singapore & Dream Cruise • Marina Bay & High Seas Voyage' },
    asia: { img: 'assets/images/pkg-asia.jpg', name: 'Singapore, Malaysia & Thailand • 3-Country Grand Odyssey' },
    singapore: { img: 'assets/images/dest-singapore.jpg', name: 'Singapore Classic Discovery • City & Sentosa Highlights' }
  };

  function updateEstimate() {
    const dest = destSelect.value;
    const style = styleSelect.value;
    const duration = durationSelect.value;
    const meal = mealSelect.value;

    const previewImg = document.getElementById('customPreviewImg');
    const previewTitle = document.getElementById('customPreviewTitle');

    if (destMeta[dest]) {
      if (previewImg) previewImg.src = destMeta[dest].img;
      if (previewTitle) previewTitle.textContent = `${destMeta[dest].name} (${duration} Days)`;
    }

    let base = basePrices[dest] || 75000;

    if (style === 'luxury') base *= 1.35;
    if (style === 'honeymoon') base *= 1.2;

    if (duration === '10') base *= 1.3;
    if (duration === '14') base *= 1.6;

    const formatted = '₹' + Math.round(base).toLocaleString('en-IN');
    estimateDisplay.textContent = formatted;

    const waMsg = `Hello SHIV SAFAR HOLIDAYS, I customized a trip spec on your website:%0A• Destination: ${dest.toUpperCase()}%0A• Stays: ${style}%0A• Duration: ${duration} Days%0A• Dietary: ${meal}%0A• Estimate: ${formatted} per person.%0APlease share the detailed proposed itinerary!`;
    if (waBtn) {
      waBtn.href = `https://wa.me/919512186116?text=${waMsg}`;
    }
  }

  [destSelect, styleSelect, durationSelect, mealSelect].forEach(select => {
    if (select) select.addEventListener('change', updateEstimate);
  });

  updateEstimate();
}

// Scroll to Top
function initScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function openTerms(type) {
  alert(`${type} - SHIV SAFAR HOLIDAYS\n\nAll package departures are backed by our transparent upfront pricing guarantee and 24/7 dedicated tour manager on-call. For queries, call 9512186116 or email shivsafarholidays@gmail.com.`);
}
