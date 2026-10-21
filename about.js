/**
 * SHIV SAFAR HOLIDAYS - ABOUT US PAGE SCRIPT (2026 EDITION)
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeaderScroll();
  initCounters();
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

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileBtn.contains(e.target) && (navMenu.classList.contains('open') || navMenu.classList.contains('active'))) {
        navMenu.classList.remove('open');
        navMenu.classList.remove('active');
        mobileBtn.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Close on nav link click
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

// Animated Stat Counters
function initCounters() {
  const counters = document.querySelectorAll('.counter-val');
  if (!counters.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10);
          const duration = 1800; // ms
          const stepTime = 30;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target.toLocaleString();
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current).toLocaleString();
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsContainer = document.querySelector('.about-floating-stats-bar, .stats-bar-container');
  if (statsContainer) {
    observer.observe(statsContainer);
  }
}

// Sync Wishlist Count from LocalStorage
function syncWishlistCount() {
  const countBadge = document.getElementById('navWishlistCount');
  if (!countBadge) return;

  try {
    const saved = localStorage.getItem('shiv_safar_wishlist');
    const items = saved ? JSON.parse(saved) : [];
    countBadge.textContent = items.length;
    countBadge.style.display = items.length > 0 ? 'inline-flex' : 'none';
  } catch (e) {
    countBadge.textContent = '0';
    countBadge.style.display = 'none';
  }
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

// Terms & Policy Modal Notice
function openTerms(type) {
  alert(`${type} - Shiv Safar Holidays\n\nAll journeys booked through Shiv Safar Holidays are backed by our transparent upfront pricing guarantee and MSME verified compliance. For any policy details, contact our concierge at shivsafarholidays@gmail.com or call 9512165599.`);
}
