import {ID, STORAGE_KEY} from '../../utils/constants.js';
import {createInputElement} from '../../utils/domUtil.js';
import {getLocalStorage} from '../../utils/localStorage.js';
import Component from '../core/Component.js';

export default class PurchaseContainer extends Component {
  init() {
    this.$state = {
      purchaseAmount: getLocalStorage(STORAGE_KEY.PURCHASE_CHARGE_AMOUNT, 0),
      vendingMachineAmount: getLocalStorage(STORAGE_KEY.VENDING_MACHINE_CHARGE_AMOUNT, 0),
      vendingMachinecoins: getLocalStorage(STORAGE_KEY.VENDING_MACHINE_CHARGE_COIN, {}),
      products: getLocalStorage(STORAGE_KEY.PRODUCT_MANAGE, [])
    };
  }

  mounted() {}

  template() {
    return `
    <div>
      <h2>금액 투입</h2>
      ${this.printChargeForm()}
    </div>
    <span>투입한 금액: </span>
    <span id=${ID.CHARGE_AMOUNT}>${this.$state.purchaseAmount ? this.$state.purchaseAmount : ''}</span>
    <div>
      <h2>구매할 수 있는 상품 현황</h2>
      <div id="product-table-container"></div>
    </div>
    <div>
      <h2>잔돈</h2>
      <div id="vending-machine-charge-container"></div>
    </div>
    `;
  }

  setEvent() {
    this.addEvent('submit', `#purchase-charge-form`, (event) => {
      event.preventDefault();
      event.stopPropagation();

      this.setState({});
      this.setEvent();
    });
  }

  printChargeForm() {
    return `
        <form id="purchase-charge-form">
          ${createInputElement('text', ID.CHARGE_INPUT, '투입할금액')}
          <button id=${ID.CHARGE_BUTTON}>투입하기</button>
        </form>
    `;
  }
}
