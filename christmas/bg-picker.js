// Preview tool: a bar at the top for trying each of the app's backgrounds.
// Only appears when the site is opened locally, so it never shows on the live site.
// The choice is remembered across pages (per browser).
(function () {
  var host = location.hostname;
  if (host !== 'localhost' && host !== '127.0.0.1') return;

  // Tile sizes match the app's svgBackgroundsMap (utilities/constants.ts)
  var BACKGROUNDS = [
    { file: 'sunburst-red.svg', name: 'Sunburst (red)', tile: '800px 800px', repeat: 'repeat' },
    { file: 'sunburst-green.svg', name: 'Sunburst (green)', tile: '800px 800px', repeat: 'repeat' },
    { file: 'dragon-scales.svg', name: 'Dragon scales', tile: '100px 1000px', repeat: 'repeat-x' },
    { file: 'polka-dots.svg', name: 'Polka dots', tile: '90px 90px', repeat: 'repeat' },
    { file: 'bermuda-square.svg', name: 'Bermuda square', tile: '1000px 1000px', repeat: 'repeat-x' },
    { file: 'abstract-envelope.svg', name: 'Envelope', tile: '1400px 700px', repeat: 'repeat' },
    { file: 'diagonal-stripes.svg', name: 'Diagonal stripes', tile: '250px 250px', repeat: 'repeat' }
  ];

  // Pages live at /, /privacy/ and /terms/, so find assets relative to style.css
  var cssLink = document.querySelector('link[rel="stylesheet"][href$="style.css"]');
  var base = cssLink ? cssLink.getAttribute('href').replace(/style\.css$/, '') : '';

  function load(key, fallback) {
    try { return localStorage.getItem(key) || fallback; } catch (e) { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* preview only */ }
  }

  var state = {
    file: load('bgPicker.file', BACKGROUNDS[0].file),
    mode: load('bgPicker.mode', 'fill')
  };

  function apply() {
    var bg = BACKGROUNDS.filter(function (b) { return b.file === state.file; })[0] || BACKGROUNDS[0];
    var root = document.documentElement.style;
    root.setProperty('--bg-image', "url('" + base + 'assets/backgrounds/' + bg.file + "')");
    root.setProperty('--bg-size', state.mode === 'fill' ? 'cover' : bg.tile);
    root.setProperty('--bg-repeat', state.mode === 'fill' ? 'no-repeat' : bg.repeat);
    fillBtn.setAttribute('aria-pressed', String(state.mode === 'fill'));
    tileBtn.setAttribute('aria-pressed', String(state.mode === 'tile'));
  }

  var bar = document.createElement('div');
  bar.className = 'bg-picker';

  var label = document.createElement('label');
  label.textContent = 'Background';
  var select = document.createElement('select');
  BACKGROUNDS.forEach(function (bg) {
    var option = document.createElement('option');
    option.value = bg.file;
    option.textContent = bg.name;
    select.appendChild(option);
  });
  select.value = state.file;
  select.addEventListener('change', function () {
    state.file = select.value;
    save('bgPicker.file', state.file);
    apply();
  });
  label.appendChild(select);

  function modeButton(mode, text) {
    var button = document.createElement('button');
    button.type = 'button';
    button.textContent = text;
    button.addEventListener('click', function () {
      state.mode = mode;
      save('bgPicker.mode', mode);
      apply();
    });
    return button;
  }
  var fillBtn = modeButton('fill', 'Fill window');
  var tileBtn = modeButton('tile', 'Tile like the app');

  var modes = document.createElement('div');
  modes.appendChild(fillBtn);
  modes.appendChild(tileBtn);

  bar.appendChild(label);
  bar.appendChild(modes);
  document.body.prepend(bar);
  document.body.classList.add('has-bg-picker');
  apply();
})();
