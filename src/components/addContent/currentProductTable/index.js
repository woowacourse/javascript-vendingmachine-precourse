import ProductTable from '../../productTable/index.js';
import {
  CLASS_NAME_PRODUCT_ITEM,
  DICT_CLASS_NAME_PRODUCT,
  ID_TABLE_CURRENT_PRODUCT,
} from './const.js';

class CurrentProductTable extends ProductTable {
  constructor(products) {
    super(ID_TABLE_CURRENT_PRODUCT);
    this.setTableRows(
      products,
      CLASS_NAME_PRODUCT_ITEM,
      DICT_CLASS_NAME_PRODUCT
    );
  }
}

export default CurrentProductTable;
