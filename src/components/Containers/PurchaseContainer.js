import {CLASS, ID, STORAGE_KEY, TABLE_MENU} from '../../utils/constants.js';
import {createInputElement, createTable} from '../../utils/domUtil.js';
import {getLocalStorage, setLocalStorage} from '../../utils/localStorage.js';
import {isValidPurchaseInput, isValidPurchaseProduct} from '../../utils/validation.js';
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

  mounted() {
    this.$target.querySelector(`#product-table-container`).innerHTML = this.printProductTable();
  }

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
    this.purchaseChargeFormClickHandler();
    this.productPurchaseButtonClickHandler();
  }

  printChargeForm() {
    return `
        <form id="purchase-charge-form">
          ${createInputElement('text', ID.CHARGE_INPUT, '투입할금액')}
          <button id=${ID.CHARGE_BUTTON}>투입하기</button>
        </form>
    `;
  }

  printProductTable() {
    const ths = ['상품명', '가격', '수량', '구매'];

    return createTable(TABLE_MENU.PURCHASE, ths, this.$state.products);
  }

  purchaseChargeFormClickHandler() {
    this.addEvent('submit', `#purchase-charge-form`, (event) => {
      event.preventDefault();
      event.stopPropagation();

      const purchaseAmountValue = Number.parseInt(this.$target.querySelector(`#${ID.CHARGE_INPUT}`).value, 10);
      if (isValidPurchaseInput(purchaseAmountValue)) {
        this.setState({purchaseAmount: this.$state.purchaseAmount + purchaseAmountValue});
        setLocalStorage(STORAGE_KEY.PURCHASE_CHARGE_AMOUNT, this.$state.purchaseAmount);
        this.setEvent();
      }
    });
  }

  productPurchaseButtonClickHandler() {
    this.addEvent('click', `.${CLASS.PURCHASE_BUTTON}`, (event) => {
      const {index} = event.target.dataset;
      const {price, quantity} = this.$state.products[index];

      if (isValidPurchaseProduct(this.$state.purchaseAmount, price, quantity)) {
        this.$state.products[index].quantity = this.$state.products[index].quantity - 1;
        this.setState({purchaseAmount: this.$state.purchaseAmount - price});
        setLocalStorage(STORAGE_KEY.PRODUCT_MANAGE, this.$state.products);
        setLocalStorage(STORAGE_KEY.PURCHASE_CHARGE_AMOUNT, this.$state.purchaseAmount);
        this.setEvent();
      }
    });
  }
}
