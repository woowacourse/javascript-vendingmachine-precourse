const makeTableHeader = (headerElements) => {
  const $tableHeader = document.createElement('thead');

  const $tableRow = document.createElement('tr');
  headerElements.forEach((header) => {
    const $th = document.createElement('th');
    $th.appendChild(document.createTextNode(header));
    $tableRow.appendChild($th);
  });

  $tableHeader.appendChild($tableRow);
  return $tableHeader;
};

const makeTable = (headerElements, id) => {
  const $table = document.createElement('table');
  $table.setAttribute('id', id);

  const $tableHeader = makeTableHeader(headerElements);
  $table.appendChild($tableHeader);

  return $table;
};

export default makeTable;
