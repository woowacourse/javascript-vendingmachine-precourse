import Component from '../../core/Component.js';
import PurchaseTable from '../table/PurchaseTable.js';
import { SELECTOR } from '../../constants/selector.js';

export default class PurchaseList extends Component {
  init() {
    this._props.state.add(this);
  }

  domTemplate() {
    const { state } = this._props;
    const createTable = new PurchaseTable('구매할 수 있는 상품 현황', [
      '상품명',
      '가격',
      '수량',
      '구매',
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
