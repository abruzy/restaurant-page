const recipeContainer = document.getElementById('content');

const createRecipeTitle = text => {
  const title = document.createElement('h3');
  title.innerHTML = text;
  return title;
};

const createdRecipeDesc = text => {
  const desc = document.createElement('p');
  desc.innerHTML = text;
  return desc;
};

const createRecipeDisplay = () => {
  const menuContainer = document.querySelectorAll('.menu-info');
  const title = createRecipeTitle('Sharwama');
  const desc = createdRecipeDesc('Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis a possimus doloribus ex deserunt necessitatibus optio voluptatibus, autem debitis iusto praesentium.');

  menuContainer.appendChild(title);
  menuContainer.appendChild(desc);

  recipeContainer.innerHTML = '';
  recipeContainer.appendChild(menuContainer);
};

export default createRecipeDisplay;