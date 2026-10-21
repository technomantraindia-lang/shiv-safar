/* ==========================================================================
   SHIV SAFAR HOLIDAYS - CONTACT US PAGE JAVASCRIPT
   Form handling, WhatsApp instant encoder, FAQ accordion & UI logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initScrollTop();
  initPresetPills();
  initContactModePills();
  initFaqAccordion();
  initWishlistBadge();
});

/* --- 1. Sticky Header --- */
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

/* --- 2. Mobile Menu Toggle --- */
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

/* --- 3. Preset Quick Destination Pills --- */
function initPresetPills() {
  const presetBtns = document.querySelectorAll('.preset-pill-btn');
  const destSelect = document.getElementById('cDest');

  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const val = btn.getAttribute('data-dest');
      if (destSelect && val) {
        destSelect.value = val;
      }
    });
  });

  if (destSelect) {
    destSelect.addEventListener('change', () => {
      presetBtns.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-dest') === destSelect.value);
      });
    });
  }
}

/* --- 4. Preferred Contact Mode Radio Pills --- */
function initContactModePills() {
  const modePills = document.querySelectorAll('.contact-mode-pill');
  modePills.forEach(pill => {
    pill.addEventListener('click', () => {
      modePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const radio = pill.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });
}

/* --- 5. Interactive FAQ Accordion --- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    const answerBody = item.querySelector('.faq-answer-body');

    if (questionBtn && answerBody) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close other items
        faqItems.forEach(other => {
          other.classList.remove('active');
          const otherAns = other.querySelector('.faq-answer-body');
          if (otherAns) otherAns.style.maxHeight = null;
        });

        if (!isActive) {
          item.classList.add('active');
          answerBody.style.maxHeight = answerBody.scrollHeight + 'px';
        }
      });
    }
  });
}

/* --- 6. Form Submission & Celebration Toast --- */
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('cName').value.trim();
  const phone = document.getElementById('cPhone').value.trim();
  const dest = document.getElementById('cDest').value;
  
  showToast(`Thank you, ${name}! Your travel inquiry for ${dest || 'your vacation'} has been received. Our senior holiday designer will call you on ${phone} within 15 minutes.`);
  document.getElementById('contactForm').reset();
  
  const presetBtns = document.querySelectorAll('.preset-pill-btn');
  presetBtns.forEach(b => b.classList.remove('active'));
}

/* --- 7. Send Inquiry Directly to WhatsApp --- */
function sendInquiryViaWhatsApp() {
  const name = document.getElementById('cName').value.trim() || 'Traveler';
  const phone = document.getElementById('cPhone').value.trim();
  const dest = document.getElementById('cDest').value || 'International Holiday';
  const month = document.getElementById('cDate').value || 'Upcoming Month';
  const guests = document.getElementById('cGuests').value || '2 Adults';
  const budget = document.getElementById('cBudget').value || '4-Star Premium';
  const notes = document.getElementById('cNotes').value.trim();

  let message = `Hello Shiv Safar Holidays!\n\nI would like to plan my vacation with details:\n` +
    `• Name: ${name}\n` +
    `• Phone: ${phone || 'Not provided'}\n` +
    `• Destination: ${dest}\n` +
    `• Travel Month: ${month}\n` +
    `• Travelers: ${guests}\n` +
    `• Preferred Stay: ${budget}\n`;

  if (notes) {
    message += `• Special Notes: ${notes}\n`;
  }

  message += `\nPlease share customized itinerary options and best quote. Thank you!`;

  const url = `https://wa.me/919102185599?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

/* --- 8. Toast Notifications --- */
function showToast(msg) {
  const toast = document.getElementById('toastNotify');
  const msgEl = document.getElementById('toastMsg');
  if (toast && msgEl) {
    msgEl.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 5000);
  }
}

/* --- 9. Wishlist Counter Badge --- */
function initWishlistBadge() {
  const countEl = document.getElementById('navWishlistCount');
  const wishlist = JSON.parse(localStorage.getItem('shiv_safar_wishlist') || '[]');
  if (countEl) {
    countEl.textContent = wishlist.length;
  }
}

/* --- 10. Scroll to Top --- */
function initScrollTop() {
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (!scrollBtn) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  }, { passive: true });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
