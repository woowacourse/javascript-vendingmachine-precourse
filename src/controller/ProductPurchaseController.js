import { getRandomCoinList } from '../utils/getRandomCoinList.js';
import { getCoinReturnListTemplate } from '../utils/template/productPurchaseTemplate.js';
import { isValidChargeData } from '../utils/validation/productPurchaseValidation.js';

class ProductPurchaseController {
  constructor(vendingMachine, view, currentTabMenu) {
    this.vendingMachine = vendingMachine;
    this.view = view;

    if (currentTabMenu === 'product-purchase-menu') {
      this.initScreen();
    }
  }

  initScreen() {
    const tabMenu = this.vendingMachine.getLocalStorage();
    this.view.showProductPurchaseScreen(
      tabMenu['product_add_menu'],
      tabMenu['product_purchase_menu']
    );

    this.initDOM();
    this.initEventListener();
  }

  initDOM() {
    this.$charge_amount = document.getElementById('charge-amount');
    this.$coin_return_table = document.getElementById('coin-return-table');
    this.$coin_return_button = document.getElementById('coin-return-button');
    this.$charge_form = document.getElementById('charge-form');
    this.$charge_input = document.getElementById('charge-input');

    this.$product_purchase_quantities = document.getElementsByClassName(
      'product-purchase-quantity'
    );
    this.$product_purchase_names = document.getElementsByClassName('product-purchase-name');
    this.$product_purchase_prices = document.getElementsByClassName('product-purchase-price');
    this.$purchase_buttons = document.getElementsByClassName('purchase-button');
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
    tabMenu['product_purchase_menu']['chargeAmount'] += chargeNumber;

    this.vendingMachine.setLocalStorage(tabMenu);
  };

  renderChargeValue = (tabMenu) => {
    this.$charge_amount.innerText = tabMenu['product_purchase_menu']['chargeAmount'];
  };

  getPurchaseProductIdx = (tabMenu, name) => {
    return tabMenu['product_add_menu'].findIndex((product) => product.name === name);
  };

  isValidProductPurchase = (tabMenu, purchaseProductIdx, price) => {
    if (tabMenu['product_add_menu'][purchaseProductIdx].quantity - 1 < 0) {
      alert('해당 물품이 품절이 되어, 구매할 수 없습니다');
      return false;
    }

    if (tabMenu['product_purchase_menu']['chargeAmount'] - price < 0) {
      alert('투입한 금액이 부족하여, 해당 물품을 구매할 수 없습니다');
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
    tabMenu['product_add_menu'][purchaseProductIdx].quantity -= 1;
    tabMenu['product_purchase_menu']['chargeAmount'] -= price;

    this.vendingMachine.setLocalStorage(tabMenu);
  };

  renderProductPurchaseContent = (idx, tabMenu, purchaseProductIdx) => {
    this.$charge_amount.innerText = tabMenu['product_purchase_menu']['chargeAmount'];
    this.$product_purchase_quantities[idx].innerText =
      tabMenu['product_add_menu'][purchaseProductIdx].quantity;
  };

  descendingSort(coinList) {
    return Object.keys(coinList)
      .map((coin) => parseInt(coin, 10))
      .sort((a, b) => b - a);
  }

  getReturnCoin(chargeAmount, descendingKey, coinList) {
    let returnCoin = Math.floor(chargeAmount / descendingKey);

    returnCoin =
      returnCoin < coinList[descendingKeys + ''] ? returnCoin : coinList[descendingKey + ''];

    return returnCoin;
  }

  changeTabMenuContent(tabMenu, returnCoin, descendingKey) {
    tabMenu['vending_machine_manage_menu']['coinList'][descendingKey + ''] -= returnCoin;
    tabMenu['vending_machine_manage_menu']['chargeAmount'] -= returnCoin * descendingKey;
    tabMenu['product_purchase_menu']['chargeAmount'] -= returnCoin * descendingKey;
  }

  coinReturnLogic() {
    const tabMenu = this.vendingMachine.getLocalStorage();
    const { coinList } = tabMenu['vending_machine_manage_menu'];
    const descendingKeys = this.descendingSort(coinList);
    const coinReturnList = { 500: 0, 100: 0, 50: 0, 10: 0 };
    let chargeAmount = tabMenu['product_purchase_menu']['chargeAmount'];

    for (let i = 0; i < descendingKeys.length; i++) {
      const returnCoin = this.getReturnCoin(chargeAmount, this.descendingKeys[i], coinList);
      this.changeTabMenuContent(tabMenu, returnCoin, descendingKeys[i]);
      chargeAmount -= returnCoin * descendingKeys[i];
      coinReturnList[descendingKeys[i] + ''] += returnCoin;
    }
    tabMenu['product_purchase_menu']['coinList'] = coinReturnList;
    this.renderReturnCoinLogicContent(tabMenu);
    this.leftChargeAmountLogic(tabMenu, chargeAmount);
  }

  renderReturnCoinLogicContent = (tabMenu) => {
    this.$charge_amount.innerText = tabMenu['product_purchase_menu']['chargeAmount'];
    this.$coin_return_table.innerHTML = getCoinReturnListTemplate(
      tabMenu['product_purchase_menu']['coinList']
    );
  };

  leftChargeAmountLogic(tabMenu, leftChargeAmount) {
    const coinList = getRandomCoinList(leftChargeAmount);

    tabMenu['vending_machine_manage_menu']['chargeAmount'] += leftChargeAmount;

    Object.keys(coinList).forEach((coinKey) => {
      tabMenu['vending_machine_manage_menu']['coinList'][coinKey] += coinList[coinKey];
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
