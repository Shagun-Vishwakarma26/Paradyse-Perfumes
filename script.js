/* =============================================
   PARADYSE PERFUMES — JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ---- MOBILE NAV ----
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('nav-mobile');
  burger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
  // Close mobile nav on link tap
  document.querySelectorAll('.mob-link, .mob-cta').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.remove('open'));
  });

  // ---- STICKY NAV STYLE ----
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.background = 'rgba(8,6,8,0.96)';
    } else {
      nav.style.background = 'rgba(8,6,8,0.88)';
    }
  }, { passive: true });

  // ---- SCROLL REVEAL ----
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));

  // ---- SMOOTH SCROLL for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- PRODUCT IMAGE FALLBACK ----
  document.querySelectorAll('.product-img-wrap img').forEach(img => {
    img.addEventListener('error', function() {
      this.style.display = 'none';
      this.parentElement.style.background =
        'radial-gradient(ellipse at 40% 30%, rgba(201,168,76,0.18) 0%, transparent 70%), #1a1520';
    });
  });

  // ---- PARALLAX HERO GLOWS (subtle, desktop only) ----
  if (window.innerWidth > 768) {
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      const glow1 = document.querySelector('.hero-glow-1');
      const glow2 = document.querySelector('.hero-glow-2');
      if (glow1) glow1.style.transform = `translate(${x * 0.6}px, ${y * 0.6}px)`;
      if (glow2) glow2.style.transform = `translate(${-x * 0.4}px, ${-y * 0.4}px)`;
    }, { passive: true });
  }

  // ---- HERO AUTO-SCROLL HINT (hide after scroll) ----
  const scrollHint = document.querySelector('.hero-scroll-hint');
  if (scrollHint) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        scrollHint.style.opacity = '0';
        scrollHint.style.pointerEvents = 'none';
      }
    }, { passive: true, once: true });
  }

});
