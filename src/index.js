import createHomeDisplay from './createHomeDisplay';
import createRecipeDisplay from './createRecipeDisplay';
import createContactDisplay from './createContactDisplay';

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

recipeBtn.addEventListener('click', () => {
  selectedNav(this);
  createRecipeDisplay();
});

contactBtn.addEventListener('click', () => {
  selectedNav(this);
  createContactDisplay();
});

createHomeDisplay();
