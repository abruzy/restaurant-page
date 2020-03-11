const contactContainer = document.querySelector('#content');

const createTableData = (data) => {
  const tableData = document.createElement('td');
  tableData.innerHTML = data;

  return tableData;
};

const createTableHeading = (heading) => {
  const tableHeading = document.createElement('th');
  tableHeading.innerHTML = heading;

  return tableHeading;
};

const createTableRow = (heading, data) => {
  const tableRow = document.createElement('tr');
  tableRow.appendChild(createTableHeading(heading));
  tableRow.appendChild(createTableData(data));

  return tableRow;
};

const createTable = () => {
  const table = document.createElement('table');
  table.classList.add('contact-table');
  table.appendChild(createTableRow('EMAIL:', 'test@test.com'));
  table.appendChild(createTableRow('PHONE:', '415.555.2530<br>415.555.9932​'));
  table.appendChild(createTableRow('ADDRESS:', '1523 Market St  Suite 100<br>San Francisco, CA 94118'));

  return table;
};

const createTitle = (text) => {
  const title = document.createElement('h2');
  title.textContent = text;

  return title;
};

const createContactDisplay = () => {
  const title = createTitle('CONTACT US');
  const infoTable = createTable();

  contactContainer.classList.add('backdrop');
  contactContainer.innerHTML = '';
  contactContainer.appendChild(title);
  contactContainer.appendChild(infoTable);
};

export default createContactDisplay;