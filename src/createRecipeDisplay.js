const menuContainer = document.getElementById('content');

const recipeContainer = document.createElement('div');
recipeContainer.setAttribute('class', 'recipe-container');
const unorderList = document.createElement('ul');
unorderList.setAttribute('class', 'menu-grid');

recipeContainer.appendChild(unorderList);
const list = document.createElement('li');
unorderList.appendChild(list);

const menuBox = document.createElement('div');
menuBox.setAttribute('class', 'menu-box menu-img-1');
list.appendChild(menuBox);

const menuInfo = document.createElement('div');
menuInfo.setAttribute('class', 'menu-info');
menuBox.appendChild(menuInfo);


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
  const title = createRecipeTitle('Sharwama');
  const desc = createdRecipeDesc('Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis a possimus doloribus ex deserunt necessitatibus optio voluptatibus, autem debitis iusto praesentium.');

  menuInfo.appendChild(title);
  menuInfo.appendChild(desc);

  menuContainer.innerHTML = '';
  menuContainer.appendChild(recipeContainer);
};

export default createRecipeDisplay;