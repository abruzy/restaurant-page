const unorderList = document.createElement('ul');
unorderList.setAttribute('class', 'menu-grid');

const list1 = document.createElement('li');
unorderList.appendChild(list1);
const menuBox1 = document.createElement('div');
menuBox1.setAttribute('class', 'menu-box menu-img-1');
list1.appendChild(menuBox1);
const menuInfo1 = document.createElement('div');
menuInfo1.setAttribute('class', 'menu-info');
menuBox1.appendChild(menuInfo1);

const list2 = document.createElement('li');
unorderList.appendChild(list2);
const menuBox2 = document.createElement('div');
menuBox2.setAttribute('class', 'menu-box menu-img-2');
list2.appendChild(menuBox2);
const menuInfo2 = document.createElement('div');
menuInfo2.setAttribute('class', 'menu-info');
menuBox2.appendChild(menuInfo2);

const list3 = document.createElement('li');
unorderList.appendChild(list3);
const menuBox3 = document.createElement('div');
menuBox3.setAttribute('class', 'menu-box menu-img-3');
list3.appendChild(menuBox3);
const menuInfo3 = document.createElement('div');
menuInfo3.setAttribute('class', 'menu-info');
menuBox3.appendChild(menuInfo3);

const list4 = document.createElement('li');
unorderList.appendChild(list4);
const menuBox4 = document.createElement('div');
menuBox4.setAttribute('class', 'menu-box menu-img-4');
list4.appendChild(menuBox4);
const menuInfo4 = document.createElement('div');
menuInfo4.setAttribute('class', 'menu-info');
menuBox4.appendChild(menuInfo4);

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
  const recipeContainer = document.createElement('div');
  recipeContainer.setAttribute('class', 'recipe-container');
  recipeContainer.appendChild(unorderList);
  const title1 = createRecipeTitle('Sharwama');
  const desc1 = createdRecipeDesc('Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis a possimus doloribus ex deserunt necessitatibus optio voluptatibus, autem debitis iusto praesentium.');

  menuInfo1.appendChild(title1);
  menuInfo1.appendChild(desc1);

  const title2 = createRecipeTitle('Pizza');
  const desc2 = createdRecipeDesc('Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis a possimus doloribus ex deserunt necessitatibus optio voluptatibus, autem debitis iusto praesentium.');

  menuInfo2.appendChild(title2);
  menuInfo2.appendChild(desc2);

  const title3 = createRecipeTitle('Beans');
  const desc3 = createdRecipeDesc('Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis a possimus doloribus ex deserunt necessitatibus optio voluptatibus, autem debitis iusto praesentium.');

  menuInfo3.appendChild(title3);
  menuInfo3.appendChild(desc3);

  const title4 = createRecipeTitle('Burger');
  const desc4 = createdRecipeDesc('Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis a possimus doloribus ex deserunt necessitatibus optio voluptatibus, autem debitis iusto praesentium.');

  menuInfo4.appendChild(title4);
  menuInfo4.appendChild(desc4);

  return recipeContainer;
};

export default createRecipeDisplay;