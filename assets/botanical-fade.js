(function () {
  var body = document.body;
  if (!body || (!body.classList.contains('boutique-luxury') && !body.classList.contains('botanical-scroll-bg'))) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var minVisibility = 0.01;
  var maxVisibility = 0.17;
  var ticking = false;

  function updateBotanicalFade() {
    var fadeDistance = Math.max(220, window.innerHeight * 0.32);
    var progress = Math.min(window.scrollY / fadeDistance, 1);
    var easedProgress = 1 - Math.pow(1 - progress, 1.65);
    var visibility = reduceMotion ? 0.055 : maxVisibility - ((maxVisibility - minVisibility) * easedProgress);

    body.style.setProperty('--olive-bg-opacity', visibility.toFixed(3));
    body.style.setProperty('--olive-wash', (1 - visibility).toFixed(3));
    ticking = false;
  }

  function requestBotanicalFade() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateBotanicalFade);
  }

  updateBotanicalFade();
  window.addEventListener('scroll', requestBotanicalFade, { passive: true });
  window.addEventListener('resize', requestBotanicalFade);
})();
