import ProductTable from '../../productTable/index.js';
import createDataCell from '../../table/createDataCell.js';
import createTableHeadCell from '../../table/createTableHeadCell.js';
import getChildrenToList from '../../utils/getChildrenToList.js';
import {
  ACTION_PURCHASE,
  CLASS_NAME_PRODUCT_ITEM,
  DICT_CLASS_NAME_PRODUCT,
  DICT_PROPS_BUTTON,
  ERROR_CANNOT_PURCHASE,
  HEADER_PURCHASE,
  ID_TABLE_PURCHASE,
  LIST_DATASET,
} from './const.js';
import createElement from '../../utils/createElement.js';
import { sellProduct } from '../../../library/storage/products.js';
import {
  getChargedCoinOfConsumer,
  subtractChargedCoinOfConsumer,
} from '../../../library/storage/consumerCoin.js';

class PurchasableProductTable extends ProductTable {
  constructor(products) {
    super(ID_TABLE_PURCHASE);
    this.setTableRows(
      products,
      CLASS_NAME_PRODUCT_ITEM,
      DICT_CLASS_NAME_PRODUCT
    );
    this.appendTableHeadCell(createTableHeadCell(HEADER_PURCHASE));
    this.addButtonCells();

    this.table.onclick = this.onClick.bind(this);
  }

  addButtonCells() {
    this.getTableRows().forEach((row) => {
      const buttonCell = createDataCell('');
      const button = createElement('button', DICT_PROPS_BUTTON);
      button.dataset.action = ACTION_PURCHASE;

      getChildrenToList(row).forEach((dataCell, i) => {
        button.dataset[LIST_DATASET[i]] = dataCell.innerText;
      });

      buttonCell.appendChild(button);
      row.appendChild(buttonCell);
    });
  }

  [ACTION_PURCHASE](e, product) {
    window.location.reload();
    const { productName, productPrice } = product;

    if (getChargedCoinOfConsumer() < productPrice) {
      alert(ERROR_CANNOT_PURCHASE);
      return;
    }
    sellProduct(productName);
    subtractChargedCoinOfConsumer(productPrice);
  }

  onClick(event) {
    const { action, ...rest } = event.target.dataset;

    if (action) {
      this[action](event, rest);
    }
  }
}

export default PurchasableProductTable;
