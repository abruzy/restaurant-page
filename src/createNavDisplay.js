const brandName = text => {
  const brand = document.createElement('a');
  brand.setAttribute('class', 'brand');
  brand.innerHTML = text;
  const img = document.createElement('img');
  img.setAttribute('src', '../img/cooking.svg');
  img.setAttribute('alt', 'logo');
  brand.appendChild(img);
  return brand;
};

const createLinks = () => {
  const menuContianer = document.createElement('ul');
  menuContianer.setAttribute('class', 'mid-links');
  const list = document.createElement('li');

  const homeLink = document.createElement('a');
  homeLink.setAttribute('id', 'home');
  homeLink.setAttribute('class', 'nav-item active');
  homeLink.innerText = 'Home';

  const recipeLink = document.createElement('a');
  recipeLink.setAttribute('id', 'recipe');
  recipeLink.setAttribute('class', 'nav-item');
  recipeLink.innerText = 'Recipes';

  const aboutLink = document.createElement('a');
  aboutLink.setAttribute('id', 'about');
  aboutLink.setAttribute('class', 'nav-item');
  aboutLink.innerText = 'About';

  const contactLink = document.createElement('a');
  contactLink.setAttribute('id', 'contact');
  contactLink.setAttribute('class', 'nav-item');
  contactLink.innerText = 'Contact';

  list.appendChild(homeLink);
  list.appendChild(recipeLink);
  list.appendChild(aboutLink);
  list.appendChild(contactLink);
  menuContianer.appendChild(list);
  return menuContianer;
};

const createBookButton = text => {
  const bookButton = document.createElement('button');
  bookButton.setAttribute('class', 'book-meal');
  bookButton.innerHTML = text;
  return bookButton;
};


const createNavDisplay = () => {
  const navContainer = document.createElement('nav');
  const leftNav = brandName('Abruzy');
  const middleNav = createLinks();
  const rightNav = createBookButton('Book a Meal');

  navContainer.appendChild(leftNav);
  navContainer.appendChild(middleNav);
  navContainer.appendChild(rightNav);
  return navContainer;
};

export default createNavDisplay;