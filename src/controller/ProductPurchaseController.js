import { ID, CLASS, TAB_MENU, PRODUCT_PURCHASE } from '../utils/constants.js';
import { getRandomCoinList } from '../utils/getRandomCoinList.js';
import { getCoinReturnListTemplate } from '../utils/template/productPurchaseTemplate.js';
import { isValidChargeData } from '../utils/validation/productPurchaseValidation.js';

class ProductPurchaseController {
  constructor(vendingMachine, view, currentTabMenu) {
    this.vendingMachine = vendingMachine;
    this.view = view;

    if (currentTabMenu === ID.PRODUCT_PURCHASE_MENU) {
      this.initScreen();
    }
  }

  initScreen() {
    const tabMenu = this.vendingMachine.getLocalStorage();
    this.view.showProductPurchaseScreen(
      tabMenu[TAB_MENU.PRODUCT_ADD_MENU],
      tabMenu[TAB_MENU.PRODUCT_PURCHASE_MENU]
    );

    this.initDOM();
    this.initEventListener();
  }

  initDOM() {
    this.$charge_amount = document.getElementById(ID.CHARGE_AMOUNT);
    this.$coin_return_table = document.getElementById(ID.COIN_RETURN_TABLE);
    this.$coin_return_button = document.getElementById(ID.COIN_RETURN_BUTTON);
    this.$charge_form = document.getElementById(ID.CHARGE_FORM);
    this.$charge_input = document.getElementById(ID.CHARGE_INPUT);

    this.$product_purchase_quantities = document.getElementsByClassName(
      CLASS.PRODUCT_PURCHASE_QUANTITY
    );
    this.$product_purchase_names = document.getElementsByClassName(CLASS.PRODUCT_PURCHASE_NAME);
    this.$product_purchase_prices = document.getElementsByClassName(CLASS.PRODUCT_PURCHASE_PRICE);
    this.$purchase_buttons = document.getElementsByClassName(CLASS.PURCHASE_BUTTON);
  }

  initEventListener() {
    this.triggerChargeFormSubmitEvent();
    this.triggerPurchaseButtonClickEvent();
    this.triggerCoinReturnButtonClickEvent();
  }

  showScreen(currentTabMenu) {
    if (currentTabMenu == this.vendingMachine.getCurrentTabMenu()) {
      return;
    }

    this.vendingMachine.setCurrentTabMenu(currentTabMenu);
    this.initScreen();
  }

  chargeSubmitLogic(chargeInput) {
    const tabMenu = this.vendingMachine.getLocalStorage();
    const chargeNumber = parseInt(chargeInput, 10);

    this.changeLocalStorageChargeAmountValue(tabMenu, chargeNumber);
    this.renderChargeValue(tabMenu);
  }

  changeLocalStorageChargeAmountValue = (tabMenu, chargeNumber) => {
    tabMenu[TAB_MENU.PRODUCT_PURCHASE_MENU]['chargeAmount'] += chargeNumber;

    this.vendingMachine.setLocalStorage(tabMenu);
  };

  renderChargeValue = (tabMenu) => {
    this.$charge_amount.innerText = tabMenu[TAB_MENU.PRODUCT_PURCHASE_MENU]['chargeAmount'];
  };

  getPurchaseProductIdx = (tabMenu, name) => {
    return tabMenu[TAB_MENU.PRODUCT_ADD_MENU].findIndex((product) => product.name === name);
  };

  isValidProductPurchase = (tabMenu, purchaseProductIdx, price) => {
    if (tabMenu[TAB_MENU.PRODUCT_ADD_MENU][purchaseProductIdx].quantity - 1 < 0) {
      alert(PRODUCT_PURCHASE.QUANTITY_LIMIT_ERROR_MESSAGE);
      return false;
    }

    if (tabMenu[TAB_MENU.PRODUCT_PURCHASE_MENU]['chargeAmount'] - price < 0) {
      alert(PRODUCT_PURCHASE.NOT_ENOUGH_MONEY_ERROR_MESSAGE);
      return false;
    }

    return true;
  };

  purchaseProductLogic(idx, name, price) {
    const tabMenu = this.vendingMachine.getLocalStorage();
    const purchaseProductIdx = this.getPurchaseProductIdx(tabMenu, name);

    if (this.isValidProductPurchase(tabMenu, purchaseProductIdx, price)) {
      this.changeLocalStorageValue(tabMenu, purchaseProductIdx, price);
      this.renderProductPurchaseContent(idx, tabMenu, purchaseProductIdx);
    }
  }

  changeLocalStorageValue = (tabMenu, purchaseProductIdx, price) => {
    tabMenu[TAB_MENU.PRODUCT_ADD_MENU][purchaseProductIdx].quantity -= 1;
    tabMenu[TAB_MENU.PRODUCT_PURCHASE_MENU]['chargeAmount'] -= price;

    this.vendingMachine.setLocalStorage(tabMenu);
  };

  renderProductPurchaseContent = (idx, tabMenu, purchaseProductIdx) => {
    this.$charge_amount.innerText = tabMenu[TAB_MENU.PRODUCT_PURCHASE_MENU]['chargeAmount'];
    this.$product_purchase_quantities[idx].innerText =
      tabMenu[TAB_MENU.PRODUCT_ADD_MENU][purchaseProductIdx].quantity;
  };

  descendingSort(coinList) {
    return Object.keys(coinList)
      .map((coin) => parseInt(coin, 10))
      .sort((a, b) => b - a);
  }

  getReturnCoin(chargeAmount, descendingKey, coinList) {
    let returnCoin = Math.floor(chargeAmount / descendingKey);

    returnCoin =
      returnCoin < coinList[descendingKey + ''] ? returnCoin : coinList[descendingKey + ''];

    return returnCoin;
  }

  changeTabMenuContent(tabMenu, returnCoin, descendingKey) {
    tabMenu[TAB_MENU.VENDING_MACHINE_MANAGE_MENU]['coinList'][descendingKey + ''] -= returnCoin;
    tabMenu[TAB_MENU.VENDING_MACHINE_MANAGE_MENU]['chargeAmount'] -= returnCoin * descendingKey;
    tabMenu[TAB_MENU.PRODUCT_PURCHASE_MENU]['chargeAmount'] -= returnCoin * descendingKey;
  }

  coinReturnLogic() {
    const tabMenu = this.vendingMachine.getLocalStorage();
    const { coinList } = tabMenu[TAB_MENU.VENDING_MACHINE_MANAGE_MENU];
    const descendingKeys = this.descendingSort(coinList);
    const coinReturnList = { 500: 0, 100: 0, 50: 0, 10: 0 };
    let chargeAmount = tabMenu[TAB_MENU.PRODUCT_PURCHASE_MENU]['chargeAmount'];

    for (let i = 0; i < descendingKeys.length; i++) {
      const returnCoin = this.getReturnCoin(chargeAmount, descendingKeys[i], coinList);
      this.changeTabMenuContent(tabMenu, returnCoin, descendingKeys[i]);
      chargeAmount -= returnCoin * descendingKeys[i];
      coinReturnList[descendingKeys[i] + ''] += returnCoin;
    }
    tabMenu[TAB_MENU.PRODUCT_PURCHASE_MENU]['coinList'] = coinReturnList;
    this.renderReturnCoinLogicContent(tabMenu);
    this.leftChargeAmountLogic(tabMenu, chargeAmount);
  }

  renderReturnCoinLogicContent = (tabMenu) => {
    this.$charge_amount.innerText = tabMenu[TAB_MENU.PRODUCT_PURCHASE_MENU]['chargeAmount'];
    this.$coin_return_table.innerHTML = getCoinReturnListTemplate(
      tabMenu[TAB_MENU.PRODUCT_PURCHASE_MENU]['coinList']
    );
  };

  leftChargeAmountLogic(tabMenu, leftChargeAmount) {
    const coinList = getRandomCoinList(leftChargeAmount);

    tabMenu[TAB_MENU.VENDING_MACHINE_MANAGE_MENU]['chargeAmount'] += leftChargeAmount;

    Object.keys(coinList).forEach((coinKey) => {
      tabMenu[TAB_MENU.VENDING_MACHINE_MANAGE_MENU]['coinList'][coinKey] += coinList[coinKey];
    });

    this.vendingMachine.setLocalStorage(tabMenu);
  }

  triggerCoinReturnButtonClickEvent() {
    this.$coin_return_button.addEventListener('click', () => {
      this.coinReturnLogic();
    });
  }

  triggerPurchaseButtonClickEvent() {
    for (let idx = 0; idx < this.$purchase_buttons.length; idx++) {
      this.$purchase_buttons[idx].addEventListener('click', () => {
        const name = this.$product_purchase_names[idx].dataset.productName;
        const price = this.$product_purchase_prices[idx].dataset.productPrice;

        this.purchaseProductLogic(idx, name, parseInt(price, 10));
      });
    }
  }

  triggerChargeFormSubmitEvent() {
    this.$charge_form.addEventListener('submit', (e) => {
      e.preventDefault();

      const chargeInput = this.$charge_input.value;

      if (isValidChargeData(chargeInput)) {
        this.chargeSubmitLogic(chargeInput);
      }
    });
  }
}

export default ProductPurchaseController;
