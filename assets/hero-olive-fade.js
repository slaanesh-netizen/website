(function () {
  var body = document.body;
  if (!body || !body.classList.contains('boutique-luxury')) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ticking = false;

  function updateHeroOliveFade() {
    var hero = document.querySelector('.hero, .about-hero, .privacy-hero');
    if (!hero) return;

    var fadeDistance = Math.max(260, Math.min(520, hero.offsetHeight * 0.55));
    var progress = Math.min(window.scrollY / fadeDistance, 1);
    var wash = reduceMotion ? 0.84 : 0.76 + ((0.94 - 0.76) * progress);

    body.style.setProperty('--hero-olive-wash', wash.toFixed(3));
    ticking = false;
  }

  function requestHeroOliveFade() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateHeroOliveFade);
  }

  updateHeroOliveFade();
  window.addEventListener('scroll', requestHeroOliveFade, { passive: true });
  window.addEventListener('resize', requestHeroOliveFade);
})();
