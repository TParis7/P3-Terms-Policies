(function() {
  /* ═══════════════════════════════════════════════════════════════════
     terms-combined.js — P3 Terms & Policies

     Repo:  TParis7/P3-Terms-Policies
     CDN:   https://tparis7.github.io/P3-Terms-Policies/terms-combined.js
     Pages: /app-terms-conditions  and  /app-privacy-policy  (both render
            this same current document; the privacy URL is kept because the
            App Store and Play listings point at it)

     Why this exists: the two legal pages were the last ones still on the old
     Webflow template, with the old nav, the old cart and a 2025 copyright.
     They are now built the way every other rebuilt page is, so the text can
     be edited in git and published by pushing.

     THE LEGAL TEXT IS THE LIVE TEXT. Every paragraph below was lifted from
     https://www.pulseofp3.org/app-terms-conditions on Sep 6 2026, not
     rewritten. What changed, and only this:
       - three typos fixed (osr -> our, Intelectual, Idemnification);
       - the last-updated date;
       - three additions covering the Sep 2026 student-memory work, in
         AI-Assisted Features, Information We Collect and Minor / Children.
     Anything else is a formatting change, never a wording one.

     Architecture mirrors fs-combined.js: the nav, the mobile overlay and the
     footer are BODY-LEVEL SIBLINGS of #tp-root, never nested inside it, so
     they inherit Webflow's site-level body font the way every other page's
     chrome does. Their markup and CSS are copied from fs-combined.js
     verbatim. (See the Donate page note in CLAUDE.md for what nesting them
     costs.)
     ═══════════════════════════════════════════════════════════════════ */

  if (document.getElementById('tp-root')) return;

  /* Webflow IX2 fades the body in with the Web Animations API, which beats
     any CSS. Cancel it, the way every rebuilt page does. */
  function cancelBodyAnimations() {
    if (document.body.getAnimations) {
      document.body.getAnimations().forEach(function(a) { a.cancel(); });
    }
    document.body.style.setProperty('opacity', '1', 'important');
  }
  cancelBodyAnimations();
  document.addEventListener('DOMContentLoaded', cancelBodyAnimations);
  window.addEventListener('load', cancelBodyAnimations);
  setTimeout(cancelBodyAnimations, 100);
  setTimeout(cancelBodyAnimations, 500);
  setTimeout(cancelBodyAnimations, 1500);

  document.body.classList.add('tp-active');

  /* ── 1. CSS ─────────────────────────────────────────────────────────── */
  var style = document.createElement('style');
  style.innerHTML = `
/* Chrome (nav, mobile overlay, footer) copied verbatim from fs-combined.js.
   Top-level rules and their media blocks are kept separate on purpose: pulled
   flat, the 991px rules would hide the nav links at every width. */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
.p3-nav { position: fixed; top: 0; left: 0; right: 0; height: auto; padding: 16px 40px; display: flex; align-items: center; justify-content: space-between; background: transparent; transition: background 0.3s, box-shadow 0.3s, backdrop-filter 0.3s; z-index: 1000; }
.p3-nav.scrolled { background: rgba(26, 26, 26, 0.95) !important; backdrop-filter: blur(20px) !important; box-shadow: 0 2px 20px rgba(0,0,0,0.15); }
.p3-nav-logo { text-decoration: none; z-index: 10; }
.p3-nav-logo-img { height: 36px; max-height: 36px; }
.p3-nav-links { display: flex; align-items: center; gap: 32px; margin-left: auto; }
.p3-nav-links a { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; font-weight: 500; color: rgba(255,255,255,0.85); text-decoration: none; transition: color 0.2s; }
.p3-nav-links a.w--current, .p3-nav-links a.p3-nav-link.w--current { color: rgba(255,255,255,0.85) !important; font-weight: 500 !important; }
.p3-nav.scrolled .p3-nav-links a.w--current { color: rgba(255,255,255,0.85) !important; font-weight: 500 !important; }
.p3-nav-cta { background: #D93A3A; color: #fff !important; padding: 10px 24px; border-radius: 50px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; font-weight: 600; text-decoration: none; transition: background 0.2s, transform 0.2s; margin-left: 0; }
.p3-nav-cta:hover { background: #b52f2f; transform: translateY(-1px); }
.pp-mob-menu { display: none; flex-direction: column; gap: 5px; cursor: pointer; z-index: 1001; }
.pp-mob-menu span { width: 24px; height: 2.5px; background: #fff; border-radius: 2px; transition: all 0.3s; }
.pp-mob-menu.open span:nth-child(1) { transform: rotate(45deg) translate(8px, 8px); }
.pp-mob-menu.open span:nth-child(2) { opacity: 0; }
.pp-mob-menu.open span:nth-child(3) { transform: rotate(-45deg) translate(7px, -7px); }
.pp-mob-overlay { position: fixed; inset: 0; background-color: rgba(26, 10, 16, 0.97); z-index: 999; display: none; flex-direction: column; justify-content: center; align-items: center; gap: 28px; opacity: 0; transform: translateY(-100%); transition: opacity 0.3s, transform 0.3s; overflow-y: auto; }
.pp-mob-overlay.open { display: flex !important; opacity: 1; transform: translateY(0); }
.pp-mob-overlay-link, .pp-mob-overlay-cta { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.25rem; font-weight: 500; color: #fff; opacity: 0.85; text-decoration: none; transition: color 0.2s; }
.pp-mob-overlay-link.w--current { opacity: 0.85 !important; font-weight: 500 !important; }
.pp-mob-overlay-cta { opacity: 1; background: #D93A3A; color: #fff; padding: 12px 32px; border-radius: 100px; display: inline-block; text-align: center; margin-top: 8px; font-size: 1rem; font-weight: 600; }
.p3-footer { background: #0a0a0a; padding: 64px 40px 32px; color: #fff; }
.p3-footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; max-width: 1180px; margin: 0 auto; }
.p3-footer-brand p { color: rgba(255,255,255,0.5); font-size: 0.85rem; line-height: 1.6; margin-top: 12px; }
.p3-footer-logo { height: 36px; margin-bottom: 8px; }
.p3-footer-tagline { color: rgba(255,255,255,0.5); font-size: 13px; line-height: 1.6; margin-top: 12px; }
.p3-footer-location { color: rgba(255,255,255,0.5); font-size: 13px; margin-top: 4px; }
.p3-footer-col-title { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.8); margin-bottom: 16px; }
.p3-footer-col { display: flex; flex-direction: column; gap: 10px; }
.p3-footer-link { color: rgba(255,255,255,0.6); font-size: 13px; text-decoration: none; transition: color 0.2s; }
.p3-footer-link:hover { color: #fff; }
.p3-footer-bottom { margin-top: 40px; border-top: 1px solid rgba(255,255,255,0.08); }

@media (max-width: 991px) {
  .pp-mob-menu { display: flex; }
  .p3-nav-links, .p3-nav-cta { display: none !important; }
  .p3-nav { padding: 16px !important; height: 64px !important; }
  .p3-nav .p3-nav-logo-img { max-height: 36px !important; height: 36px !important; }
}

@media (max-width: 768px) {
  .p3-footer-grid { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 24px 16px !important; }
  .p3-footer-brand { grid-column: 1 / -1; }
  .p3-footer-bottom { flex-wrap: wrap; justify-content: center; text-align: center; }
}

/* body.tp-active is this page's equivalent of body.fm-active. */
body.tp-active { background: #fff; margin: 0; padding: 0; opacity: 1 !important; }
/* Hide the old template's own page content; ours replaces it. */
body.tp-active > *:not(#tp-root):not(#p3nav):not(#pp-mob-overlay):not(.p3-footer):not(script):not(style):not(link) { display: none !important; }

/* ── Page ────────────────────────────────────────────────────────────── */
/* fs-combined.js leans on Webflow's base CSS for the space between the last
   nav link and the CTA. This page states it, so the two never collide. */
.p3-nav { gap: 32px; }

#tp-root { font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif; color: #1a1a1a; -webkit-font-smoothing: antialiased; line-height: 1.6; background: #fff; }
#tp-root img { max-width: 100%; display: block; }
#tp-root a { color: inherit; }
#tp-root h1, #tp-root h2 { font-family: 'Bricolage Grotesque', sans-serif; line-height: 1.2; }

/* Hero: the same maroon band the rest of the site opens on. */
.tp-hero { background: linear-gradient(135deg, #2e0614 0%, #4A1020 55%, #5a1226 100%); color: #fff; padding: 150px 40px 64px; position: relative; overflow: hidden; }
.tp-hero::after { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 85% 20%, rgba(217,58,58,0.42), transparent 55%); pointer-events: none; }
.tp-hero-inner { max-width: 1180px; margin: 0 auto; position: relative; z-index: 1; }
.tp-eyebrow { font-size: 12px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.6); margin-bottom: 14px; }
.tp-hero h1 { font-size: clamp(2.1rem, 5vw, 3.2rem); font-weight: 700; letter-spacing: -0.02em; margin-bottom: 16px; color: #fff; }
.tp-hero h1 .accent { color: #D93A3A; }
.tp-hero p { font-size: 1.05rem; color: rgba(255,255,255,0.8); max-width: 62ch; }
.tp-updated { display: inline-block; margin-top: 22px; padding: 7px 15px; border-radius: 20px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.16); font-size: 13px; color: rgba(255,255,255,0.85); }

/* Two columns on desktop: contents rail, then the document. */
.tp-body { max-width: 1180px; margin: 0 auto; padding: 56px 40px 96px; display: grid; grid-template-columns: 250px minmax(0, 1fr); gap: 56px; align-items: start; }
.tp-toc { position: sticky; top: 96px; }
.tp-toc-title { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #8A8580; margin-bottom: 12px; }
.tp-toc a { display: block; font-size: 13.5px; color: #4A4540; padding: 6px 0 6px 12px; border-left: 2px solid #ECE9E6; text-decoration: none; transition: color .15s, border-color .15s; }
.tp-toc a:hover { color: #D93A3A; border-left-color: #D93A3A; }
.tp-toc a.tp-current { color: #4A1020; border-left-color: #D93A3A; font-weight: 600; }

.tp-doc { max-width: 74ch; }
.tp-section { scroll-margin-top: 96px; padding-bottom: 34px; }
.tp-section + .tp-section { border-top: 1px solid #ECE9E6; padding-top: 34px; }
.tp-section h2 { font-size: 1.35rem; font-weight: 600; color: #4A1020; margin-bottom: 14px; letter-spacing: -0.01em; }
.tp-section p { font-size: 15.5px; color: #3a3437; margin-bottom: 14px; }
.tp-section p:last-child { margin-bottom: 0; }
.tp-section p strong { color: #1a1a1a; font-weight: 600; }
.tp-bullet { padding-left: 18px; position: relative; margin-bottom: 8px !important; }
.tp-bullet::before { content: ''; position: absolute; left: 0; top: 10px; width: 6px; height: 6px; border-radius: 50%; background: #D93A3A; }
#tp-root .tp-section a { color: #D93A3A; text-decoration: underline; }

@media (max-width: 991px) {
  .tp-hero { padding: 120px 24px 48px; }
  .tp-body { grid-template-columns: 1fr; gap: 28px; padding: 36px 24px 72px; }
  .tp-toc { position: static; border: 1px solid #ECE9E6; border-radius: 14px; padding: 16px; background: #FAF7F4; }
  .tp-toc-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 0 16px; }
}
@media (max-width: 600px) { .tp-toc-inner { grid-template-columns: 1fr; } }


/* Chrome family (Sep 2026 parity pass). Family only: the nav, overlay and footer are body-level siblings that inherit Webflow's body line-height (30.006px), the value every nav measurement depends on, so line-height is never set here. Element selectors as well as the containers, because Webflow's compiled stylesheet sets Inter directly on .p3-nav-cta, .p3-footer-col-title, .p3-footer-tagline and .pp-mob-overlay-link, and a direct rule beats inheritance. */
.p3-nav, .pp-mob-overlay, .p3-footer, .p3-nav .p3-nav-links a, .p3-nav .p3-nav-link, .p3-nav .p3-nav-cta, .pp-mob-overlay a, .pp-mob-overlay .pp-mob-overlay-link, .pp-mob-overlay .pp-mob-overlay-cta, .p3-footer h4, .p3-footer p, .p3-footer a, .p3-footer .p3-footer-col-title, .p3-footer .p3-footer-tagline, .p3-footer .p3-footer-location, .p3-footer .p3-footer-link { font-family: 'Plus Jakarta Sans', sans-serif; }

/* ═══ Public-site nav v2 (Sep 2026). Shared by the nine public pages; source of truth is Website Folder/site-chrome/apply-nav.py, re-run it rather than editing this block by hand. Selectors carry three classes on purpose: pages own rules like .pp-mob-overlay a:last-child (0,2,1) and .dl-page a (0,1,1) that would otherwise win. ═══ */
.p3-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; display: flex; align-items: center; justify-content: space-between; gap: 0; height: auto; padding: 16px 40px; background: transparent; transition: background 0.3s, box-shadow 0.3s, backdrop-filter 0.3s; }
.p3-nav.scrolled { background: rgba(26, 26, 26, 0.95) !important; -webkit-backdrop-filter: blur(20px); backdrop-filter: blur(20px) !important; box-shadow: 0 2px 20px rgba(0,0,0,0.15); }
.p3-nav .p3-nav-logo { display: block; flex: none; margin: 0; padding: 0; text-decoration: none; z-index: 10; }
.p3-nav .p3-nav-logo-img, .p3-nav .p3-nav-logo img { height: 36px; max-height: 36px; width: auto; display: block; }
.p3-nav .p3-nav-links { display: flex; align-items: center; gap: 32px; margin-left: auto; }
.p3-nav .p3-nav-links a, .p3-nav .p3-nav-links .p3-nav-link { margin: 0; padding: 0; background: none; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; font-weight: 500; color: rgba(255,255,255,0.85); text-decoration: none; white-space: nowrap; opacity: 1; transition: color 0.2s; }
.p3-nav .p3-nav-links a:hover, .p3-nav .p3-nav-links a[aria-current='page'] { color: #fff; }
.p3-nav .p3-nav-links .pp-home-desktop-hide { display: none !important; } /* the legacy homepage script (p3hpshared) still injects a Home link; keep it hidden until that script is unregistered */
.p3-nav .p3-nav-actions { display: flex; align-items: center; gap: 10px; margin-left: 32px; flex: none; }
.p3-nav .p3-nav-actions .p3-nav-btn, .pp-mob-overlay .p3-menu .p3-menu-actions .p3-nav-btn { display: inline-flex; align-items: center; justify-content: center; height: 36px; margin: 0; padding: 0 18px; border-radius: 999px; border: 1px solid transparent; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13.5px; font-weight: 600; line-height: 1; letter-spacing: 0.01em; text-decoration: none; white-space: nowrap; opacity: 1; cursor: pointer; transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease; }
.p3-nav .p3-nav-actions .p3-nav-btn:focus-visible, .pp-mob-overlay .p3-menu .p3-nav-btn:focus-visible { outline: 2px solid #fff; outline-offset: 3px; }
.p3-nav .p3-nav-actions .p3-nav-btn-enterprise, .pp-mob-overlay .p3-menu .p3-menu-actions .p3-nav-btn-enterprise { background: #FAF8F6; border-color: #FAF8F6; color: #4A1020; }
.p3-nav .p3-nav-actions .p3-nav-btn-enterprise:hover, .pp-mob-overlay .p3-menu .p3-menu-actions .p3-nav-btn-enterprise:hover { background: #fff; border-color: #fff; color: #2E0614; transform: translateY(-1px); box-shadow: 0 8px 20px -6px rgba(0,0,0,0.5); }
.p3-nav .p3-nav-actions .p3-nav-btn-login, .pp-mob-overlay .p3-menu .p3-menu-actions .p3-nav-btn-login { background: #D93A3A; border-color: #D93A3A; color: #fff; }
.p3-nav .p3-nav-actions .p3-nav-btn-login:hover, .pp-mob-overlay .p3-menu .p3-menu-actions .p3-nav-btn-login:hover { background: #C33232; border-color: #C33232; color: #fff; transform: translateY(-1px); box-shadow: 0 8px 20px -6px rgba(217,58,58,0.7); }
.p3-nav .p3-nav-actions .p3-nav-btn:active, .pp-mob-overlay .p3-menu .p3-menu-actions .p3-nav-btn:active { transform: translateY(0); box-shadow: none; }
.p3-nav .pp-mob-menu { display: none; flex-direction: column; align-items: center; justify-content: center; gap: 4px; width: 44px; height: 44px; margin: -4px -12px -4px 0; padding: 0; background: none; border: 0; color: #fff; cursor: pointer; z-index: 1001; }
.p3-nav .pp-mob-menu span { display: block; width: 18px; height: 2px; margin: 0; border-radius: 2px; background: currentColor; transition: transform 0.25s ease, opacity 0.2s ease; }
.p3-nav .pp-mob-menu.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.p3-nav .pp-mob-menu.open span:nth-child(2) { opacity: 0; }
.p3-nav .pp-mob-menu.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
/* !important on the drawer layout: the still-registered legacy homepage script (p3hpshared) injects its own .pp-mob-overlay rules AFTER this file, centered and at z-index 99, which is how the drawer came out centered and under the bar there. */
.pp-mob-overlay { position: fixed !important; inset: 0 !important; z-index: 1002 !important; display: none; flex-direction: row !important; justify-content: flex-end !important; align-items: stretch !important; gap: 0 !important; padding: 0 !important; background: rgba(12, 4, 8, 0.62) !important; opacity: 1 !important; transform: none !important; transition: none !important; }
.pp-mob-overlay.open { display: flex !important; }
.pp-mob-overlay .p3-menu-scrim, .pp-mob-overlay a.p3-menu-scrim:last-child { position: absolute; inset: 0; display: block; margin: 0; padding: 0; background: none; }
.pp-mob-overlay .p3-menu { position: relative; width: min(88vw, 340px); height: 100%; display: flex; flex-direction: column; gap: 22px; padding: 20px 20px 28px; overflow-y: auto; color: #fff; background: linear-gradient(178deg, #3a0c18 0%, #4a1020 42%, #220810 100%); box-shadow: -12px 0 40px rgba(0,0,0,0.35); animation: p3-menu-in 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
@keyframes p3-menu-in { from { transform: translateX(24px); opacity: 0; } to { transform: none; opacity: 1; } }
.pp-mob-overlay .p3-menu .p3-menu-top { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.pp-mob-overlay .p3-menu .p3-menu-logo { height: 36px; width: auto; display: block; }
.pp-mob-overlay .p3-menu .p3-menu-top .p3-menu-close { display: inline-flex; align-items: center; min-height: 40px; margin: 0; padding: 0 16px; border: 1px solid rgba(255,255,255,0.24); border-radius: 999px; background: none; color: #fff; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px; font-weight: 600; text-decoration: none; opacity: 1; }
.pp-mob-overlay .p3-menu .p3-menu-nav { display: flex; flex-direction: column; }
.pp-mob-overlay .p3-menu .p3-menu-nav a { display: flex; align-items: center; min-height: 52px; margin: 0; padding: 0; border: 0; border-bottom: 1px solid rgba(255,255,255,0.12); border-radius: 0; background: none; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 17px; font-weight: 500; color: rgba(255,255,255,0.9); text-decoration: none; opacity: 1; }
.pp-mob-overlay .p3-menu .p3-menu-nav a:hover, .pp-mob-overlay .p3-menu .p3-menu-nav a[aria-current='page'] { color: #fff; }
.pp-mob-overlay .p3-menu .p3-menu-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.pp-mob-overlay .p3-menu .p3-menu-actions .p3-nav-btn { height: 44px; font-size: 14px; }
.pp-mob-overlay .p3-menu .p3-menu-download { margin: auto 0 0; display: block; padding: 16px 18px; border: 1px solid rgba(255,255,255,0.16); border-radius: 14px; background: rgba(255,255,255,0.07); color: #fff; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 14px; font-weight: 500; line-height: 1.4; text-decoration: none; opacity: 1; }
.pp-mob-overlay .p3-menu .p3-menu-download-eyebrow { display: block; margin-bottom: 6px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,0.6); }
.pp-mob-overlay .p3-menu .p3-menu-download-title { display: block; margin-bottom: 4px; font-family: 'Bricolage Grotesque', sans-serif; font-size: 18px; font-weight: 600; letter-spacing: -0.005em; color: #fff; }
.pp-mob-overlay .p3-menu .p3-menu-download-cta { display: inline-block; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px; font-weight: 600; color: #ff8a8a; }
@media (max-width: 991px) {
  .p3-nav .pp-mob-menu { display: flex; }
  .p3-nav .p3-nav-links, .p3-nav .p3-nav-actions { display: none !important; }
  .p3-nav { padding: 16px !important; height: 64px !important; }
  .p3-nav .p3-nav-logo-img, .p3-nav .p3-nav-logo img { max-height: 36px !important; height: 36px !important; }
}
`;
  document.head.appendChild(style);

  /* ── 2. Fonts ───────────────────────────────────────────────────────── */
  var fontPreconnect = document.createElement('link');
  fontPreconnect.rel = 'preconnect';
  fontPreconnect.href = 'https://fonts.gstatic.com';
  fontPreconnect.crossOrigin = 'anonymous';
  document.head.appendChild(fontPreconnect);
  var fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Plus+Jakarta+Sans:wght@400..800&display=swap';
  document.head.appendChild(fontLink);

  /* ── 3. Nav + mobile overlay (body-level siblings) ──────────────────── */
  var nav = document.createElement('div');
  nav.id = 'p3nav';
  nav.className = 'p3-nav';
  nav.innerHTML = `<a href="https://www.pulseofp3.org/" class="p3-nav-logo" aria-label="Pulse of Perseverance Project"><img src="https://cdn.prod.website-files.com/69b02f65f0068e9fb16f09f7/69b02f65f0068e9fb16f0df1_P3%20Logo.svg" alt="P3 - Pulse of Perseverance" class="p3-nav-logo-img"></a>
  <div class="p3-nav-links">
    <a href="https://www.pulseofp3.org/for-students" class="p3-nav-link">For Students</a>
    <a href="https://www.pulseofp3.org/for-mentors" class="p3-nav-link">For Mentors</a>
    <a href="https://www.pulseofp3.org/platform" class="p3-nav-link">Platform</a>
    <a href="https://www.pulseofp3.org/about/about" class="p3-nav-link">About</a>
  </div>
  <div class="p3-nav-actions">
    <a href="https://enterprise.pulseofp3.org/overview" class="p3-nav-btn p3-nav-btn-enterprise">Enterprise</a>
    <a href="https://platform.pulseofp3.org/" class="p3-nav-btn p3-nav-btn-login">Login</a>
  </div>
  <button type="button" class="pp-mob-menu" id="hamburger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>`;
  document.body.insertBefore(nav, document.body.firstChild);

  var overlay = document.createElement('div');
  overlay.id = 'pp-mob-overlay';
  overlay.className = 'pp-mob-overlay';
  overlay.innerHTML = `<a class="p3-menu-scrim" href="javascript:void(0)" aria-hidden="true" tabindex="-1"></a>
  <div class="p3-menu" role="dialog" aria-modal="true" aria-label="Menu">
    <div class="p3-menu-top">
      <img src="https://cdn.prod.website-files.com/69b02f65f0068e9fb16f09f7/69b02f65f0068e9fb16f0df1_P3%20Logo.svg" alt="P3" class="p3-menu-logo">
      <a class="p3-menu-close" href="javascript:void(0)" role="button">Close</a>
    </div>
    <nav class="p3-menu-nav" aria-label="Site">
      <a href="https://www.pulseofp3.org/for-students">For Students</a>
      <a href="https://www.pulseofp3.org/for-mentors">For Mentors</a>
      <a href="https://www.pulseofp3.org/platform">Platform</a>
      <a href="https://www.pulseofp3.org/about/about">About</a>
    </nav>
    <div class="p3-menu-actions">
      <a href="https://enterprise.pulseofp3.org/overview" class="p3-nav-btn p3-nav-btn-enterprise">Enterprise</a>
      <a href="https://platform.pulseofp3.org/" class="p3-nav-btn p3-nav-btn-login">Login</a>
    </div>
    <a class="p3-menu-download" href="https://www.pulseofp3.org/download">
      <span class="p3-menu-download-eyebrow">Free on iOS and Android</span>
      <span class="p3-menu-download-title">Get the P3 app</span>
      <span class="p3-menu-download-cta">Download the app</span>
    </a>
  </div>`;
  document.body.insertBefore(overlay, nav.nextSibling);

  /* ── 4. The document ────────────────────────────────────────────────── */
  var root = document.createElement('div');
  root.id = 'tp-root';
  root.innerHTML = `
    <header class="tp-hero">
      <div class="tp-hero-inner">
        <p class="tp-eyebrow">Pulse of Perseverance Project</p>
        <h1>Terms &amp; <span class="accent">Policies</span></h1>
        <p>How the P3 app, website and services work, what we do with your information, and what we expect of everyone who uses them.</p>
        <span class="tp-updated">Last updated September 6, 2026</span>
      </div>
    </header>
    <div class="tp-body">
      <aside class="tp-toc" aria-label="Contents">
        <p class="tp-toc-title">Contents</p>
        <div class="tp-toc-inner"><a href="#overview">Overview</a><a href="#account-membership">Account &amp; Membership</a><a href="#user-content">User Content</a><a href="#information-we-collect">Information We Collect</a><a href="#how-we-use-your-information">How We Use Your Information</a><a href="#information-sharing-disclosure">Information Sharing &amp; Disclosure</a><a href="#ai-assisted-features">AI-Assisted Features</a><a href="#data-security">Data Security</a><a href="#minor-children-policy">Minor / Children Policy</a><a href="#changes-to-our-terms-policies">Changes to our Terms &amp; Policies</a><a href="#conflict-of-interest">Conflict of Interest</a><a href="#external-communications-policy">External Communications Policy</a><a href="#media-consent-policy">Media Consent Policy</a><a href="#intellectual-property">Intellectual Property</a><a href="#liability-limitations-disclaimer">Liability Limitations &amp; Disclaimer</a><a href="#indemnification">Indemnification</a><a href="#whistleblower-policy">Whistleblower Policy</a><a href="#mentor-moderation-review">Mentor Moderation / Review</a><a href="#termination">Termination</a><a href="#governing-law">Governing Law</a><a href="#contact-us">Contact Us</a></div>
      </aside>
      <div class="tp-doc"><section class="tp-section" id="overview"><h2>Overview</h2><p>Welcome to the Pulse of Perseverance Mentoring App (“App”, “Service”, “we”, “us”, or “our”). These Terms and Policies govern your use of our mobile application, website, and services. They also outline how we protect your personal information and define legal expectations for all users, partners, mentors, and employees. By accessing or using our services, you agree to these Terms and Policies. If you do not agree, please discontinue use.</p></section><section class="tp-section" id="account-membership"><h2>Account &amp; Membership</h2><p>By creating an account on our App, you agree to provide accurate, complete, and updated information. You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our App or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p></section><section class="tp-section" id="user-content"><h2>User Content</h2><p>The App allows you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material (“Content”). You are responsible for the Content that you post on or through the App, including its legality, reliability, and appropriateness.</p></section><section class="tp-section" id="information-we-collect"><h2>Information We Collect</h2><p><strong>Information You Provide:</strong> When you register an account, we may collect personal information such as your name, email address, profile picture, and other information you choose to provide. When you use the App’s features, such as messaging or video calls, we collect the content of your communications and any other information you voluntarily share.</p><p>This includes the career timeline you build, a résumé you choose to upload for review, and your conversations with the Pulse assistant. These are stored on your P3 account so they are available to you on any device you sign in to.</p><p><strong>Automatically Collected Information:</strong> When you use the App, we may automatically collect certain information, including your device type, operating system, unique device identifiers, IP address, and usage data.</p></section><section class="tp-section" id="how-we-use-your-information"><h2>How We Use Your Information</h2><p><strong>To Provide Services:</strong> We use your information to provide the mentoring services offered through the App, including matching mentors with mentees, facilitating communications, and tracking progress.</p><p><strong>Personalisation:</strong> We may use your information to personalize your experience within the App, such as recommending relevant mentors or resources.</p><p><strong>Communication:</strong> We may use your contact information to send you important notifications, updates, or promotional messages related to the App.</p></section><section class="tp-section" id="information-sharing-disclosure"><h2>Information Sharing &amp; Disclosure</h2><p><strong>With Mentors/Mentees:</strong> Your profile information and communications may be shared with your mentor/mentee to facilitate the mentoring relationship.</p><p><strong>Service Providers:</strong> We may share your information with third-party service providers who assist us in operating the App and providing services, such as hosting, analytics, and customer support.</p><p><strong>Legal Compliance:</strong> We may disclose your information in response to lawful requests from government authorities or as required by applicable law.</p></section><section class="tp-section" id="ai-assisted-features"><h2>AI-Assisted Features</h2><p>Certain optional features — such as career-pathway discovery, resume review, and the Pulse assistant — use third-party artificial-intelligence services to generate personalized guidance. When you choose to use one of these features, the information you provide for it (for example, your profile details, your questions, or résumé text you upload) is transmitted to our sub-processors — Anthropic, PBC (AI processing) and Cloudflare, Inc. (application delivery and secure request relay) — solely to generate your results. Anthropic processes this information under commercial terms that do not use your data to train its models. We do not use these features to make automated decisions that produce legal or similarly significant effects about you.</p><p>Your Pulse conversations are saved to your P3 account rather than to one device, so a conversation you start on your phone is there when you sign in on the web, and the reverse. You can archive any conversation from either app. Archiving removes it from your conversations on every device you use and deletes it permanently after 30 days, and you can restore it yourself at any point in those 30 days. Nobody at P3 can read your conversations, and they are excluded from the reports we run on our own usage.</p><p>The Pulse assistant does not retain a memory of its own between replies. Each time it answers, we send it the profile information you have given P3 and the conversation on screen, and it keeps nothing afterwards. Pulse and in-app messaging with mentors are available only to users aged 18 and over.</p></section><section class="tp-section" id="data-security"><h2>Data Security</h2><p>We implement security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.</p></section><section class="tp-section" id="minor-children-policy"><h2>Minor / Children Policy</h2><p>The App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe that a child under 13 has provided us with personal information, please contact us immediately.</p><p>Separately, the Pulse assistant and in-app messaging between mentors and mentees are limited to users aged 18 and over, and the App enforces this.</p></section><section class="tp-section" id="changes-to-our-terms-policies"><h2>Changes to our Terms &amp; Policies</h2><p>We reserve the right to update or modify our Terms &amp; Policies at any time. Any changes will be effective upon posting the revised policy within the App. Your continued use of the App after the changes constitutes your acceptance of the revised Terms &amp; Policies.</p></section><section class="tp-section" id="conflict-of-interest"><h2>Conflict of Interest</h2><p>The purpose of this Conflict of Interest Policy is to ensure that decisions made at Pulse of Perseverance (P3) are based on the best interests of the organization and its mission to empower youth through mentorship and opportunity, and not on personal gain.</p><p>P3 expects all individuals affiliated with the organization - including board members, employees, mentors, and volunteers - to uphold the highest standards of ethical conduct. Individuals must avoid situations where their personal, financial, or professional interests conflict with, or could be perceived to conflict with, the interests of P3 or compromise their ability to make impartial decisions.</p><p>Having a conflict of interest does not necessarily amount to a breach in policy, however, failure to disclose a conflict of interest may constitute a breach. This policy is not intended to prevent relationships or activities that could benefit P3, but rather to ensure that any potential conflicts are disclosed, reviewed, and managed responsibly. The guiding principle is transparency. Conflicts must be addressed early and openly to maintain the trust of our students, mentors, supporters, and community.</p><p><strong>Definition of Conflict of Interest:</strong> A conflict of interest arises when a person covered by this policy has a personal, professional, or financial interest that could interfere with their duty to act in the best interests of P3. Conflicts may be actual, perceived, or potential. Examples include (but are not limited to):</p><p class="tp-bullet">Having a financial interest in a company doing business with P3</p><p class="tp-bullet">Receiving gifts or favors that could influence decision-making</p><p class="tp-bullet">Family or romantic relationships that affect hiring, mentoring, or partnerships</p><p class="tp-bullet">Using P3 resources or confidential information for personal benefit</p><p><strong>Duty to Disclose:</strong> Covered individuals must promptly disclose any actual or potential conflict of interest in writing to the CEO/President. This includes disclosing: outside employment or consulting arrangements, related-party transactions, personal relationships with partners, mentees/mentors, or donors that extend beyond program scope, etc.</p><p><strong>Process for Handling Conflicts:</strong> The individual must recuse themselves from any discussions or decisions related to the conflict. The conflict will be reviewed by the CEO/President (or Board if it involves leadership). A written record of the disclosure and decision will be maintained. In serious cases, corrective action may include termination of the relationship or position.</p><p><strong>Confidentiality:</strong> Information disclosed in connection with a conflict of interest will be kept confidential, shared only with those involved in the review and resolution process.</p><p><strong>Annual Acknowledgment:</strong> All board members and staff must agree to this policy annually to affirm that they have received, read, and understood this policy, agree to comply with it, and promptly disclose any potential conflicts.</p><p>Questions about this policy or specific situations should be directed to: drmax@pulseofp3.org</p></section><section class="tp-section" id="external-communications-policy"><h2>External Communications Policy</h2><p>Pulse of Perseverance (P3) is committed to telling powerful stories that reflect the spirit and impact of our mission — while protecting the dignity and privacy of the students, mentors, staff, and partners who make our work possible. Our Media &amp; Communications Policy outlines how content such as images, videos, audio recordings, and testimonials may be used across platforms, and how requests for such content are to be managed internally and externally.</p><p>Use of Stakeholder Media by P3 Staff</p><p>All media involving P3 stakeholders including students, mentors, families, staff, and partners; must be used in a respectful, mission-aligned manner. Staff are permitted to use images, videos, recordings, and testimonials only if the individuals have agreed to P3’s Media Consent Agreement via app registration, employment contract, or another approved channel. However, even with consent in place, no media may be posted or published on social media, websites, reports, or any public platform without seeking prior approval from P3 leadership or the designated communications lead. This includes internally produced photos, interviews, or program footage.</p><p>Requests from External Media or Vendors</p><p>All inquiries from journalists, media outlets, or external vendors seeking access to P3 images, interviews, quotes, or testimonials must be directed to team@pulseofp3.org. No member of staff, mentor, student, or affiliate is authorized to speak on behalf of P3 or share media content externally without written approval; and the P3 leadership team must review all requests to ensure accuracy, alignment with our mission, and the appropriate use of personal stories and likenesses.</p><p>Use of P3 Media by External Partners</p><p>Third-party vendors, contractors, or collaborators who have access to media involving P3 stakeholders (e.g., videographers, photographers, designers) must adhere to this policy as well as our brand guidelines; and may not use, publish, or distribute any such content without prior written approval from P3. Once again, all use of images or testimonials must align with P3’s values and brand standards.</p><p>Use of Brand Assets and Logos</p><p>The Pulse of Perseverance name, logo, and visual identity are the intellectual property of the organization and may not be used by external parties without express written permission. Approved partners may request brand assets for campaigns or events at team@pulseofp3.org</p><p>Dignity and Accuracy</p><p>Whether content is created by internal staff or third parties, all media must portray individuals with dignity and respect. Images or stories should not be edited or framed in a way that distorts context, promotes stereotypes, or exploits participants.</p></section><section class="tp-section" id="media-consent-policy"><h2>Media Consent Policy</h2><p>By registering with the Pulse of Perseverance (P3) mobile app, programs, and platform, I hereby grant permission to P3 and its authorized representatives to use my name, image, likeness, voice, and/or written or recorded testimonials in promotional, educational, and informational materials. This includes, but is not limited to: photographs, videos, recordings, testimonials/quotes, and other forms of media captured or submitted via the platform and/or scholarship application process.</p><p>I understand that these materials may be used in print, online, and digital formats, including the P3 website, social media, presentations, newsletters, fundraising campaigns, and reports shared with funders, partners, or the public. I also understand that my image or words may be edited, copied, exhibited, or distributed and waive any right to inspect or approve the finished product.</p><p>This consent is granted voluntarily and without expectation of compensation. I acknowledge that participation in P3 programs is not conditioned upon providing media consent, and that I may withdraw my consent at any time by contacting team@pulseofp3.org. Upon withdrawal, P3 will make reasonable efforts to discontinue use of my likeness or testimonials in future publications. By registering for and using the P3 mobile app, I acknowledge that I have read and understood this Media Consent Policy and agree to its terms.</p></section><section class="tp-section" id="intellectual-property"><h2>Intellectual Property</h2><p>Users retain ownership of the content they create and upload to the Pulse of Perseverance platform. This includes, but is not limited to, videos, graphics, and written content. By submitting content to the platform, users grant Pulse of Perseverance a non-exclusive, royalty-free, perpetual, irrevocable, worldwide license to use, distribute, reproduce, display, and perform the content in connection with promoting and operating the App and its services. This license allows P3 to share content internally and externally for educational, promotional, and operational purposes while acknowledging and respecting the creator’s ownership.</p></section><section class="tp-section" id="liability-limitations-disclaimer"><h2>Liability Limitations &amp; Disclaimer</h2><p>Pulse of Perseverance is not liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of, or inability to use, the App or any user-generated content therein. We do not endorse or take responsibility for the accuracy or reliability of any content posted by users or third parties. Interactions between users, mentors, or third-party service providers are solely the responsibility of the individuals involved, and Pulse of Perseverance disclaims all liability arising from such interactions.</p></section><section class="tp-section" id="indemnification"><h2>Indemnification</h2><p>As a registered user, you agree to defend, indemnify, and hold harmless Pulse of Perseverance, its officers, directors, employees, and agents from and against any claims, actions, or demands, including legal and accounting fees, arising or resulting from your breach of these Terms, your misuse of the App, or your infringement of any intellectual property or other rights of any third party. This includes claims resulting from user-generated content that is unlawful, harmful, defamatory, or otherwise objectionable.</p></section><section class="tp-section" id="whistleblower-policy"><h2>Whistleblower Policy</h2><p>Pulse of Perseverance (P3) is committed to maintaining a culture of integrity, accountability, and transparency. This Whistleblower Policy is designed to encourage anyone affiliated with P3 - including board members, partners, and employees to report concerns about unethical, illegal, or improper conduct without fear of retaliation.</p><p>Concerns may include financial fraud, discrimination, harassment, policy violations, or behavior that puts students or staff at risk. P3 prohibits any form of retaliation against individuals who report in good faith. All reports will be taken seriously, handled with discretion, and investigated promptly. False reports made knowingly are discouraged and may result in disciplinary action. This policy is shared during initial onboarding and reviewed annually to ensure it remains clear and accessible to everyone involved with the organisation.</p><p><strong>Reports can be made confidentially or anonymously by email:</strong> team@pulseofp3.org</p></section><section class="tp-section" id="mentor-moderation-review"><h2>Mentor Moderation / Review</h2><p>To ensure the safety and well-being of the students we serve, all external mentors seeking to join the Pulse of Perseverance (P3) platform are required to undergo a profile review prior to being approved for participation. This screening may include, but is not limited to: verification of identity, cursory review of any criminal history, and any national sex offender registries. Random background checks will also be done on a routine basis.</p><p>P3 reserves the right to disqualify any applicant based on the results of the background check, particularly if the findings are inconsistent with our mission to provide a safe and supportive environment for youth. All background information will be handled confidentially and used solely for the purpose of determining eligibility to mentor on the platform. By applying to be a mentor, individuals consent to this screening process and agree to provide any necessary information or documentation to complete the review. If this process is successful, approval will be granted via the P3 administrative platform lead and the mentor shall hence be notified via email that they have been approved.</p><p>Further questions, or procedural appeals should be directed to: team@pulseofp3.org</p></section><section class="tp-section" id="termination"><h2>Termination</h2><p>We may terminate or suspend your account and bar access to the App immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p></section><section class="tp-section" id="governing-law"><h2>Governing Law</h2><p>These Terms shall be governed and construed in accordance with the laws of the United States of America (USA), without regard to its conflict of law provisions.</p></section><section class="tp-section" id="contact-us"><h2>Contact Us</h2><p>If you have any questions about these Terms &amp; Policies:</p><p class="tp-bullet"><strong>General Enquiries:</strong> <a href="mailto:thomas@pulseofp3.org">thomas@pulseofp3.org</a></p><p class="tp-bullet"><strong>Privacy &amp; Media Inquiries:</strong> <a href="mailto:team@pulseofp3.org">team@pulseofp3.org</a></p><p class="tp-bullet"><strong>Conflict of Interest:</strong> <a href="mailto:drmax@pulseofp3.org">drmax@pulseofp3.org</a></p></section></div>
    </div>
  `;
  document.body.insertBefore(root, document.body.lastChild);

  /* ── 5. Footer (body-level sibling) ─────────────────────────────────── */
  var footer = document.createElement('section');
  footer.className = 'p3-footer';
  footer.innerHTML = `<div class="p3-footer-grid"><div class="p3-footer-brand"><img src="https://cdn.prod.website-files.com/69b02f65f0068e9fb16f09f7/69b02f65f0068e9fb16f0df1_P3%20Logo.svg" loading="lazy" alt="P3 - Pulse of Perseverance" class="p3-footer-logo"><p class="p3-footer-tagline">Unlocking life-changing opportunities for young visionaries. Free on iOS &amp; Android.</p><p class="p3-footer-location">Chicago, IL &middot; Founded 2018</p></div><div class="p3-footer-col"><h4 class="p3-footer-col-title">Platform</h4><a href="https://pulseofp3.org/for-students" class="p3-footer-link">For Students</a><a href="https://pulseofp3.org/partner" class="p3-footer-link">For Institutions</a><a href="https://pulseofp3.org/for-mentors" class="p3-footer-link">For Mentors</a><a href="https://pulseofp3.org/scholarships" class="p3-footer-link">Scholarships</a></div><div class="p3-footer-col"><h4 class="p3-footer-col-title">About</h4><a href="https://pulseofp3.org/about/about" class="p3-footer-link">Our Story</a><a href="https://pulseofp3.org/about/about#team" class="p3-footer-link">Team</a><a href="https://drive.google.com/file/d/1IrFocCsboO6mLZsG3GAlHjmKv_V7a9Sn/view?usp=drive_link" class="p3-footer-link">Annual Report</a><a href="https://pulseofp3.org/about/in-the-press" class="p3-footer-link">Press</a></div><div class="p3-footer-col"><h4 class="p3-footer-col-title">Connect</h4><a href="https://www.instagram.com/pulseofp3/" class="p3-footer-link">Instagram</a><a href="https://www.linkedin.com/company/pulseofperseverance/" class="p3-footer-link">LinkedIn</a><a href="https://www.youtube.com/@PulseofPerseverance" target="_blank" class="p3-footer-link">YouTube</a><a href="https://pulseofp3.org/donate" class="p3-footer-link">Donate</a></div></div><div class="p3-footer-bottom" style="display:flex;justify-content:center;align-items:center;gap:4px;padding-top:24px;flex-wrap:wrap;"><p style="margin:0;color:rgba(255,255,255,0.4);font-size:12px;">&copy; 2026 Pulse of Perseverance Project. All rights reserved.</p><a href="https://www.pulseofp3.org/app-terms-conditions" class="p3-footer-link" style="font-size:12px;text-decoration:underline;color:rgba(255,255,255,0.4);">Terms &amp; Policies</a></div>`;
  document.body.appendChild(footer);

  /* ── 6. Behaviour ───────────────────────────────────────────────────── */
  window.addEventListener('scroll', function() {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  var hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      overlay.classList.toggle('open');
      hamburger.classList.toggle('open');
    });
  }
  overlay.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() {
      overlay.classList.remove('open');
      if (hamburger) hamburger.classList.remove('open');
    });
  });

  /* Contents rail follows the reader.

     This was an IntersectionObserver watching a thin band under the nav, and
     it marked the section BEFORE the one being read. The band was the top
     156px of the viewport, so a normal-length section centred on screen sat
     entirely below it and the band still held the tail of the section above.
     Measured on staging: 2 of 21 sections marked correctly, and the two that
     worked were the only ones taller than the viewport.

     So read the positions instead. The current section is the last one whose
     top has passed a reading line just below the nav, which is true wherever
     the section starts and however tall it is. */
  var links = {};
  var order = [];
  root.querySelectorAll('.tp-toc a').forEach(function(a) {
    var id = a.getAttribute('href').slice(1);
    links[id] = a;
    order.push(id);
  });
  var sections = order.map(function(id) { return document.getElementById(id); });
  var READING_LINE = 130; /* the nav is 82px tall; clear it, then a little air */
  var ticking = false;

  function markCurrent() {
    ticking = false;
    /* Before the first heading reaches the line, the reader is in the first
       section, not in none of them. */
    var current = order[0];
    for (var i = 0; i < sections.length; i++) {
      if (sections[i] && sections[i].getBoundingClientRect().top <= READING_LINE) {
        current = order[i];
      }
    }
    /* The last sections are shorter than the run of page left below them, so
       they can never reach the line. At the bottom, the last one is what is
       being read. */
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      current = order[order.length - 1];
    }
    order.forEach(function(id) {
      links[id].classList.toggle('tp-current', id === current);
    });
  }
  function requestMark() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(markCurrent);
  }
  window.addEventListener('scroll', requestMark, { passive: true });
  window.addEventListener('resize', requestMark);
  markCurrent();

  /* A deep link from another page (/app-privacy-policy sends readers to the
     privacy sections) lands on the right heading once the page is built. */
  if (window.location.hash) {
    var target = root.querySelector(window.location.hash);
    if (target) setTimeout(function() { target.scrollIntoView(); }, 60);
  }
})();
