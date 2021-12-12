import Table from '../table/index.js';
import createElement from '../utils/createElement.js';
import createDataCell from '../table/createDataCell.js';
import { TABLE_HEADER } from './const.js';
import { LIST_KEY_PRODUCT } from '../const.js';

class ProductTable extends Table {
  constructor(id) {
    super(id);
    this.setTableHeader(TABLE_HEADER);
  }

  setTableRows(products, productItemClassName, classNameDictionary) {
    products.forEach((product) => {
      const tr = createElement('tr', { className: productItemClassName });
      LIST_KEY_PRODUCT.forEach((key) => {
        tr.appendChild(
          createDataCell(product[key], {
            className: classNameDictionary[key],
          })
        );
      });
      this.appendTableRow(tr);
    });
  }
}

export default ProductTable;
