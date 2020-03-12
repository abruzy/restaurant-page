const aboutContainer = document.getElementById('content');

const createHeading = text => {
  const heading = document.createElement('h2');
  heading.innerHTML = text;
  return heading;
};

const createParagraph = text => {
  const paragraph = document.createElement('p');
  paragraph.setAttribute('class', 'about');
  paragraph.innerHTML = text;
  return paragraph;
};

const createAboutDisplay = () => {
  const heading = createHeading('ABOUT US');
  const paragraph = createParagraph('Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ex natus eaque mollitia? Porro iusto at delectus sapiente, asperiores saepe doloribus voluptatem qui! Expedita sapiente excepturi tempore dolores reprehenderit totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque libero ullam at adipisci obcaecati nesciunt temporibus numquam nostrum, eum unde provident assumenda optio ex distinctio velit sapiente, molestias nemo ratione.');

  aboutContainer.innerHTML = '';
  aboutContainer.appendChild(heading);
  aboutContainer.appendChild(paragraph);
};

export default createAboutDisplay;