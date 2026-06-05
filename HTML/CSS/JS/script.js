// Dark mode toggle with hide/show behavior.
const themeToggle = document.getElementById('themeToggle');
const modeButton = document.getElementById('darkModeBtn');
const hideButton = document.getElementById('hideToggleBtn');
const revealButton = document.getElementById('revealToggleBtn');

const preferredTheme = localStorage.getItem('theme');
const savedHidden = localStorage.getItem('themeToggleHidden') === 'true';

function applyTheme(mode) {
  document.documentElement.dataset.theme = mode;
  modeButton.textContent = mode === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', mode);
}

function setToggleHidden(hidden) {
  themeToggle.classList.toggle('theme-toggle--closed', hidden);
  localStorage.setItem('themeToggleHidden', hidden);
}

modeButton.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
});

hideButton.addEventListener('click', () => setToggleHidden(true));
revealButton.addEventListener('click', () => setToggleHidden(false));

if (preferredTheme) {
  applyTheme(preferredTheme);
} else {
  const darkPreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(darkPreferred ? 'dark' : 'light');
}

setToggleHidden(savedHidden);
