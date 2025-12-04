/* ========== ABOUT PAGE: CONTACT + REVIEWS (single clean block) ========== */
document.addEventListener('DOMContentLoaded', () => {
  // --- CONFIG: put your real contact details here ---
  const CONTACT_EMAIL   = 'IFAlearninghub@gmail.com';   // ✅ real email (no spaces)
  const WHATSAPP_E164   = '447470831407';        // ✅ WhatsApp number (no +)

  // --- DOM hooks (only exist on aboutus.html) ---
  const contactEmailEl  = document.getElementById('contactEmail');
  const contactWaEl     = document.getElementById('contactWhatsApp');
  const reviewsListEl   = document.getElementById('reviewsList');
  const reviewFormEl    = document.getElementById('reviewForm');
  const revNameEl       = document.getElementById('revName');
  const revStarsEl      = document.getElementById('revStars');
  const revTextEl       = document.getElementById('revText');

  // If we're not on the About page, bail out
  const onAboutPage = contactEmailEl || contactWaEl || reviewsListEl || reviewFormEl;
  if (!onAboutPage) return;

  // -------------------- CONTACT LINKS --------------------
  if (contactEmailEl) {
    const subject = encodeURIComponent('IFA Learning Hub Query');
    const body    = encodeURIComponent('Assalamu Alaikum,\n\nI would like to know more about IFA Learning Hub.');
    contactEmailEl.href   = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    contactEmailEl.target = '_self'; // mail clients work best in same tab
  }

  if (contactWaEl) {
    const msg = encodeURIComponent('Assalamu Alaikum! I would like to know more about IFA Learning Hub.');
    contactWaEl.href   = `https://wa.me/${WHATSAPP_E164}?text=${msg}`;
    contactWaEl.target = '_blank';
    contactWaEl.rel    = 'noopener';
  }

  // -------------------- REVIEWS (localStorage) --------------------
  const REV_KEY = 'ifaReviews';

  function loadReviews() {
    try { return JSON.parse(localStorage.getItem(REV_KEY)) || []; }
    catch { return []; }
  }
  function saveReviews(list) {
    localStorage.setItem(REV_KEY, JSON.stringify(list));
  }
  function starsToText(n) {
    return '★★★★★'.slice(0, n) + '☆☆☆☆☆'.slice(0, 5 - n);
  }
  function renderReviews() {
    if (!reviewsListEl) return;
    const data = loadReviews();
    if (!data.length) {
      reviewsListEl.innerHTML =
        `<div class="review-card"><div class="text">No reviews yet — be the first!</div></div>`;
      return;
    }
    reviewsListEl.innerHTML = data.map(r => `
      <div class="review-card">
        <div class="who">${r.name} <span class="stars">${starsToText(r.stars)}</span></div>
        <div class="text">${r.text}</div>
      </div>
    `).join('');
  }

  if (reviewFormEl) {
    reviewFormEl.addEventListener('submit', (e) => {
      e.preventDefault();
      const name  = (revNameEl?.value || '').trim();
      const stars = parseInt(revStarsEl?.value || '', 10);
      const text  = (revTextEl?.value || '').trim();
      if (!name || !stars || !text) return;

      const list = loadReviews();
      list.unshift({ name, stars, text, ts: Date.now() });
      saveReviews(list);
      renderReviews();               // show immediately
      reviewFormEl.reset();
      if (revStarsEl) revStarsEl.selectedIndex = 0;
    });
  }

  renderReviews();                    // render on page load
});

