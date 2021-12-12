import Component from '../../core/Component.js';
import PurchaseTable from '../table/PurchaseTable.js';
import { SELECTOR } from '../../constants/selector.js';

export default class PurchaseList extends Component {
  init() {
    this._props.state.add(this);
  }

  domTemplate() {
    const { state } = this._props;
    const createTable = new PurchaseTable('구매할 수 있는 상품 현황');
    const $purchaseTable = createTable.setContents(state.value).result;

    return $purchaseTable;
  }

  bindEvent() {
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
