import Component from '../../core/Component.js';
import PurchaseTable from '../table/PurchaseTable.js';

export default class ProductPurchase extends Component {
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
    this.addEvent('click', '.purchase-button', this.handlePurchase.bind(this));
  }

  handlePurchase(event) {
    const { purchase } = this._props;
    const primaryKey = event.target.closest('tr').dataset.primary;

    purchase(primaryKey);
  }
}
