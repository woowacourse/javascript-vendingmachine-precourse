import Component from '../../core/Component.js';
import ProductTable from '../table/ProductTable.js';
import { DISPLAY } from '../../constants/display.js';

export default class ProductList extends Component {
  init() {
    this._props.state.add(this);
  }

  domTemplate() {
    const { state } = this._props;

    const createTable = new ProductTable(DISPLAY.TITLE_PRODUCT_STATE, [
      DISPLAY.TEXT_PRODUCT_NAME,
      DISPLAY.TEXT_PRODUCT_PRICE,
      DISPLAY.TEXT_PRODUCT_QUANTITY,
    ]);
    const $productTable = createTable.setContents(state.value).result;

    return $productTable;
  }
}
