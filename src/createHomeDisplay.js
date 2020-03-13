const createDescription = text => {
  const description = document.createElement('h1');
  description.innerHTML = text;
  return description;
};

const createQoute = text => {
  const qoute = document.createElement('p');
  qoute.innerHTML = text;
  return qoute;
};

const createOrderButton = text => {
  const orderButton = document.createElement('button');
  orderButton.setAttribute('class', 'order');
  orderButton.innerHTML = text;
  return orderButton;
};

const createHomeDisplay = () => {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  const description = createDescription('Experience our <br> Best Food !');
  const qoute = createQoute('Anywhere with Free Delivery.');
  const orderButton = createOrderButton('Order Now');
  container.appendChild(description);
  container.appendChild(qoute);
  container.appendChild(orderButton);

  return container;
};

export default createHomeDisplay;