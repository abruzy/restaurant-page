import createHomeDisplay from './createHomeDisplay';

// nodes

const navBtns = document.querySelectorAll('.nav-item');
const homeBtn = document.getElementById('home');
const recipeBtn = document.getElementById('recipe');
const aboutBtn = document.getElementById('about');
const contactBtn = document.getElementById('contact');

const selectedNav = clickedButton => {
  navBtns.forEach((btn) => {
    if (btn === clickedButton) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
};

// event handlers

homeBtn.addEventListener('click', () => {
  selectedNav(this);
  createHomeDisplay();
});

createHomeDisplay();
