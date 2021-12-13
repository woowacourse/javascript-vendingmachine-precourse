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
      vendingMachineCoins: getLocalStorage(STORAGE_KEY.VENDING_MACHINE_CHARGE_COIN, {}),
      products: getLocalStorage(STORAGE_KEY.PRODUCT_MANAGE, []),
      returnCoins: {}
    };
  }

  mounted() {
    this.$target.querySelector(`#product-table-container`).innerHTML = this.printProductTable();
    this.$target.querySelector(`#purchase-charge-table-container`).innerHTML = this.printChargeTable();
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
      <button id=${ID.COIN_RETURN_BUTTON}>반환하기</button>
      <div id="purchase-charge-table-container"></div>
    </div>
    `;
  }

  setEvent() {
    this.purchaseChargeFormClickHandler();
    this.productPurchaseButtonClickHandler();
    this.coinReturnButtonClickHandler();
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

  printChargeTable() {
    const ths = ['동전', '개수'];

    return createTable(TABLE_MENU.PURCHASE_CHARGE, ths);
  }

  printCoinQuantity(coins) {
    this.$target.querySelector(`#${ID.COIN_500_QUANTITY}`).innerText = `${coins['500'] ? coins['500'] : '0'}개`;
    this.$target.querySelector(`#${ID.COIN_100_QUANTITY}`).innerText = `${coins['100'] ? coins['100'] : '0'}개`;
    this.$target.querySelector(`#${ID.COIN_50_QUANTITY}`).innerText = `${coins['50'] ? coins['50'] : '0'}개`;
    this.$target.querySelector(`#${ID.COIN_10_QUANTITY}`).innerText = `${coins['10'] ? coins['10'] : '0'}개`;
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

  coinReturnButtonClickHandler() {
    this.addEvent('click', `#${ID.COIN_RETURN_BUTTON}`, () => {
      this.returnCoin(this.$state.purchaseAmount, this.$state.vendingMachineCoins);

      this.printCoinQuantity(this.$state.returnCoins);
      this.setEvent();
    });
  }

  returnCoin(amount, coins) {
    const returnCoins = {};
    Object.entries(coins)
      .sort((a, b) => b[0] - a[0])
      .forEach(([coin, quantity]) => {
        if (Number.parseInt(amount / coin, 10) >= quantity) {
          returnCoins[coin] = quantity;
        } else {
          returnCoins[coin] = Number.parseInt(amount / coin, 10);
        }
        amount = amount - coin * returnCoins[coin];
        this.setState({
          purchaseAmount: amount,
          vendingMachineCoins: Object.assign(this.$state.vendingMachineCoins, {[coin]: quantity - returnCoins[coin]}),
          returnCoins
        });
      });
  }
}
