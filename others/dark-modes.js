// Define a constant key for the theme in local storage
const KEY_THEME = 'theme';

// Select the theme selection element with the class 'select-theme'
const selectThemeEl = document.querySelector('.select-theme');

// Create a media query for detecting dark theme preference
const mediaDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');

// Function to return a string indicating the media preference for dark or light theme
function printMediaDarkTheme() {
  return mediaDarkTheme.matches ? 'MEDIA DARK THEME' : 'MEDIA LIGHT THEME';
}

// Log the status of the dark theme media query
console.log('darkTheme', mediaDarkTheme);

// Function to apply the selected theme
function applyTheme(theme) {
  console.log('apply theme: ', theme);
  console.log(printMediaDarkTheme());

  // Remove existing theme classes from the document body
  document.body.classList.remove('light-theme');
  document.body.classList.remove('dark-theme');

  // Check media preference for dark theme and apply the appropriate class
  if (mediaDarkTheme.matches) {
    if (theme === 'light') {
      console.log('add light-theme');
      document.body.classList.add('light-theme');
    } else {
      // Do nothing for other themes when dark mode is preferred
    }
  } else {
    if (theme === 'dark') {
      console.log('add dark-theme');
      document.body.classList.add('dark-theme');
    }
  }
}

// Retrieve the saved theme from local storage
let savedTheme = localStorage.getItem(KEY_THEME);
console.log('savedTheme', savedTheme, typeof savedTheme);

// If a saved theme exists, set the theme selection and apply the theme
if (savedTheme != null) {
  selectThemeEl.value = savedTheme;
  applyTheme(savedTheme);
}

// Listen for changes in the media query (e.g., dark mode preference change)
mediaDarkTheme.addEventListener('change', (e) => {
  applyTheme(savedTheme);
});

// Listen for changes in the theme selection
selectThemeEl.addEventListener('change', (e) => {
  console.log('selectTheme changed to', e.target.value);
  const theme = e.target.value;

  // Store the selected theme in local storage or remove the key if 'default' is selected
  if (theme === 'light' || theme === 'dark') {
    localStorage.setItem(KEY_THEME, theme);
  } else {
    localStorage.removeItem(KEY_THEME);
  }

  // Apply the selected theme and update the saved theme variable
  applyTheme(theme);
  savedTheme = theme;
});

// btnToggleTheme.addEventListener('click', () => {
//   if (!darkTheme.matches) {
//     document.body.classList.toggle('dark-theme');
//     var theme = document.body.classList.contains('dark-theme')
//       ? 'dark'
//       : 'light';
//   } else {
//     document.body.classList.toggle('light-theme');
//     var theme = document.body.classList.contains('light-theme')
//       ? 'light'
//       : 'dark';
//   }

//   localStorage.setItem(KEY_DARK_THEME, theme);
// });
