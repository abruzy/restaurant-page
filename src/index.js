import createNavDisplay from './createNavDisplay';
import createHomeDisplay from './createHomeDisplay';
import createRecipeDisplay from './createRecipeDisplay';
import createAboutDisplay from './createAboutDisplay';
import createContactDisplay from './createContactDisplay';

const container = document.querySelector('#content');

container.appendChild(createNavDisplay());
container.appendChild(createHomeDisplay());

// nodes

const navBtns = document.querySelectorAll('.nav-item');
const homeBtn = document.getElementById('home');
const recipeBtn = document.getElementById('recipe');
const aboutBtn = document.getElementById('about');
const contactBtn = document.getElementById('contact');

navBtns.forEach(button => {
  button.addEventListener('click', function clickedButton() {
    navBtns.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});

// event handlers

homeBtn.addEventListener('click', () => {
  createHomeDisplay();
});

recipeBtn.addEventListener('click', () => {
  container.innerHTML = '';
  container.appendChild(createNavDisplay());
  container.appendChild(createRecipeDisplay());
});

aboutBtn.addEventListener('click', () => {
  container.innerHTML = '';
  container.appendChild(createNavDisplay());
  container.appendChild(createAboutDisplay());
});

contactBtn.addEventListener('click', () => {
  container.innerHTML = '';
  container.appendChild(createNavDisplay());
  container.appendChild(createContactDisplay());
});
