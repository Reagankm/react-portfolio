// Shows the back-to-top button once the reader has scrolled down a bit
(function () {
  var button = document.querySelector('.to-top');
  if (!button) return;
  function update() {
    button.classList.toggle('is-visible', window.scrollY > 400);
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();
