import createElement from '../utils/createElement.js';
import getChildrentoList from '../utils/getChildrenToList.js';
import createTable from './createTable.js';
import createTableHeadCell from './createTableHeadCell.js';

class Table {
  constructor(id) {
    this.table = createTable(id);
    this.thead = createElement('thead');
    this.tbody = createElement('tbody');

    this.table.appendChild(this.thead);
    this.table.appendChild(this.tbody);
  }

  getTable() {
    return this.table;
  }

  getTableRows() {
    return getChildrentoList(this.tbody);
  }

  setTableHeader(headers) {
    headers.forEach((header) =>
      this.thead.appendChild(createTableHeadCell(header))
    );
  }

  appendTableHeadCell(th) {
    this.thead.appendChild(th);
  }

  appendTableRow(tr) {
    this.tbody.appendChild(tr);
  }
}

export default Table;
