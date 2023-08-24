// Select the header element
const header = document.querySelector('header');

// Select the menu element by its ID
const menu = document.querySelector('.menu');
// console.log('menu', menu);

// Select the nav element by its ID
const nav = document.querySelector('.nav');
console.log(nav);

// Select the toc-heading element by its ID
const tocHeading = document.querySelector('.toc-heading');

// Initialize a variable to store the current heading text
let tocHeadingText = '';

// Function that runs when the user scrolls
function onScroll() {
  // Select all h1, h2, and h3 elements in the document
  document.querySelectorAll('h1, h2, h3').forEach((el) => {
    // calculate the top offset of the heading from the viewport
    const elTop = el.offsetTop - window.scrollY;

    // set the tocHeadingText based on the scroll position
    if (
      elTop + el.offsetHeight < header.offsetHeight + 20 &&
      tocHeadingText !== el.innerHTML
    ) {
      tocHeadingText = el.innerHTML;
    } else if (
      elTop + el.offsetHeight >= header.offsetHeight + 20 &&
      tocHeadingText === el.innerHTML
    ) {
      tocHeadingText = '';
    }

    // Toggle visibility of menu, nav, and toc-heading based on tocHeadingText.

    if (tocHeadingText) {
      // Show menu, hide nav links, and show toc-heading if tocHeadingText is not empty.
      // show menu
      if (menu.classList.contains('menu--hidden')) {
        menu.classList.remove('menu--hidden');
      }
      // hide nav
      if (!nav.classList.contains('nav--hidden')) {
        nav.classList.add('nav--hidden');
      }
      // show toc-heading
      if (tocHeading.classList.contains('toc-heading--hidden')) {
        tocHeading.classList.remove('toc-heading--hidden');
      }
    } else {
      // hide menu
      if (!menu.classList.contains('menu--hidden')) {
        menu.classList.add('menu--hidden');
      }
      // show nav
      if (nav.classList.contains('nav--hidden')) {
        nav.classList.remove('nav--hidden');
      }
      // hide toc-heading
      if (!tocHeading.classList.contains('toc-heading--hidden')) {
        tocHeading.classList.add('toc-heading--hidden');
      }
    }

    // Update the toc-heading text if tocHeadingText is changed
    if (tocHeading.innerHTML !== tocHeadingText) {
      tocHeading.innerHTML = tocHeadingText;
    }
  });
}

// Function that runs when the menu is clicked
function onMenuClick() {
  alert('menu is clicked');
}

// Add a scroll event listener to the document
document.addEventListener('scroll', onScroll);

// Add a click event listener to the menu element
menu.addEventListener('click', onMenuClick);
