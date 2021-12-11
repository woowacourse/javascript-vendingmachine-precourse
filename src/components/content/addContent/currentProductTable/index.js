import Table from '../../../table/index.js';
import createElement from '../../../utils/createElement.js';
import { LIST_KEY_PRODUCT } from '../../../const.js';
import {
  CLASS_NAME_PRODUCT_ITEM,
  DICT_CLASS_NAME_PRODUCT,
  DICT_TABLE_HEADERS,
  ID_TABLE_CURRENT_PRODUCT,
} from './const.js';
import createDataCell from '../../../table/createDataCell.js';

class CurrentProductTable extends Table {
  constructor(products) {
    super(ID_TABLE_CURRENT_PRODUCT);
    this.setTableHeader(LIST_KEY_PRODUCT.map((key) => DICT_TABLE_HEADERS[key]));
    this.setTableRows(products);
  }

  setTableRows(products) {
    products.forEach((product) => {
      const tr = createElement('tr', { className: CLASS_NAME_PRODUCT_ITEM });
      LIST_KEY_PRODUCT.forEach((key) => {
        tr.appendChild(
          createDataCell(product[key], {
            className: DICT_CLASS_NAME_PRODUCT[key],
          })
        );
      });
      this.appendTableRow(tr);
    });
  }
}

export default CurrentProductTable;
