import {
  CLASS,
  ID,
  NUM_10,
  NUM_100,
  NUM_50,
  NUM_500,
  STORAGE_KEY,
  TABLE_HEADER,
  TABLE_MENU,
  ZERO
} from '../../utils/constants.js';
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
    this.$target.querySelector(`#${ID.PRODUCT_TABLE_CONTAINER}`).innerHTML = this.printProductTable();
    this.$target.querySelector(`#${ID.PURCHASE_CHARGE_TABLE_CONTAINER}`).innerHTML = this.printChargeTable();
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
      <div id=${ID.PRODUCT_TABLE_CONTAINER}></div>
    </div>
    <div>
      <h2>잔돈</h2>
      <button id=${ID.COIN_RETURN_BUTTON}>반환하기</button>
      <div id=${ID.PURCHASE_CHARGE_TABLE_CONTAINER}></div>
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
        <form id=${ID.PURCHASE_CHARGE_FORM}>
          ${createInputElement('text', ID.CHARGE_INPUT, '투입할 금액')}
          <button id=${ID.CHARGE_BUTTON}>투입하기</button>
        </form>
    `;
  }

  printProductTable() {
    return createTable(TABLE_MENU.PURCHASE, TABLE_HEADER.PURCHASE, this.$state.products);
  }

  printChargeTable() {
    return createTable(TABLE_MENU.PURCHASE_CHARGE, TABLE_HEADER.CHARGE);
  }

  printCoinQuantity(coins) {
    this.$target.querySelector(`#${ID.COIN_500_QUANTITY}`).innerText = `${coins[NUM_500] ? coins[NUM_500] : ZERO}개`;
    this.$target.querySelector(`#${ID.COIN_100_QUANTITY}`).innerText = `${coins[NUM_100] ? coins[NUM_100] : ZERO}개`;
    this.$target.querySelector(`#${ID.COIN_50_QUANTITY}`).innerText = `${coins[NUM_50] ? coins[NUM_50] : ZERO}개`;
    this.$target.querySelector(`#${ID.COIN_10_QUANTITY}`).innerText = `${coins[NUM_10] ? coins[NUM_10] : ZERO}개`;
  }

  purchaseChargeFormClickHandler() {
    this.addEvent('submit', `#${ID.PURCHASE_CHARGE_FORM}`, (event) => {
      event.preventDefault();
      event.stopPropagation();

      const purchaseAmountValue = Number.parseInt(this.$target.querySelector(`#${ID.CHARGE_INPUT}`).value, 10);
      if (isValidPurchaseInput(purchaseAmountValue)) {
        this.setState({purchaseAmount: this.$state.purchaseAmount + purchaseAmountValue});
        this.saveChargedPurchaseAmountResultInStorage();
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
        this.savePurchaseResultInStorage();
      }
    });
  }

  coinReturnButtonClickHandler() {
    this.addEvent('click', `#${ID.COIN_RETURN_BUTTON}`, () => {
      this.returnCoin(this.$state.purchaseAmount, this.$state.vendingMachineCoins);

      this.printCoinQuantity(this.$state.returnCoins);
    });
  }

  returnCoin(amount, coins) {
    const returnCoins = {};
    Object.entries(coins)
      .sort((a, b) => b[0] - a[0])
      .forEach(([coin, quantity]) => {
        if (Number.parseInt(amount / coin, 10) >= quantity) returnCoins[coin] = quantity;
        else returnCoins[coin] = Number.parseInt(amount / coin, 10);

        amount = amount - coin * returnCoins[coin];
        this.setState({
          purchaseAmount: amount,
          vendingMachineAmount: this.$state.vendingMachineAmount - coin * returnCoins[coin],
          vendingMachineCoins: Object.assign(this.$state.vendingMachineCoins, {[coin]: quantity - returnCoins[coin]}),
          returnCoins
        });
      });
    this.saveReturnCoinResultInStroage();
  }

  saveReturnCoinResultInStroage() {
    setLocalStorage(STORAGE_KEY.VENDING_MACHINE_CHARGE_AMOUNT, this.$state.vendingMachineAmount);
    setLocalStorage(STORAGE_KEY.VENDING_MACHINE_CHARGE_COIN, this.$state.vendingMachineCoins);
    setLocalStorage(STORAGE_KEY.PURCHASE_CHARGE_AMOUNT, this.$state.purchaseAmount);
  }

  savePurchaseResultInStorage() {
    setLocalStorage(STORAGE_KEY.PRODUCT_MANAGE, this.$state.products);
    setLocalStorage(STORAGE_KEY.PURCHASE_CHARGE_AMOUNT, this.$state.purchaseAmount);
  }

  saveChargedPurchaseAmountResultInStorage() {
    setLocalStorage(STORAGE_KEY.PURCHASE_CHARGE_AMOUNT, this.$state.purchaseAmount);
  }
}
