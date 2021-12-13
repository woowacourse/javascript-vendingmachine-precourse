import Component from '../../core/Component.js';
import PurchaseTable from '../table/PurchaseTable.js';
import { SELECTOR } from '../../constants/selector.js';
import { DISPLAY } from '../../constants/display.js';

export default class PurchaseList extends Component {
  init() {
    this._props.state.add(this);
  }

  domTemplate() {
    const { state } = this._props;
    const createTable = new PurchaseTable(DISPLAY.TITLE_PURCHASE_LIST, [
      DISPLAY.TEXT_PRODUCT_NAME,
      DISPLAY.TEXT_PRODUCT_PRICE,
      DISPLAY.TEXT_PRODUCT_QUANTITY,
      DISPLAY.TEXT_PURCHASE,
    ]);
    const $purchaseTable = createTable.setContents(state.value).result;

    return $purchaseTable;
  }

  bindEvents() {
    this.addEvent(
      'click',
      SELECTOR.PURCHASE_BUTTON,
      this.bindPurchaseClick.bind(this)
    );
  }

  bindPurchaseClick({ target }) {
    const { handlePurchase } = this._props;
    const primaryKey = target.closest('tr').dataset.primary;

    handlePurchase(primaryKey);
  }
}
