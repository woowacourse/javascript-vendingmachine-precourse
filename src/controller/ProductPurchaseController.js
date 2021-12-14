import { getRandomCoinList } from '../utils/getRandomCoinList.js';
import { getCoinReturnListTemplate } from '../utils/template/productPurchaseTemplate.js';
import { isValidChargeData } from '../utils/validation/productPurchaseValidation.js';

class ProductPurchaseController {
  constructor(vendingMachine, view, currentTabMenu) {
    this.vendingMachine = vendingMachine;
    this.view = view;

    if (currentTabMenu === 'product-purchase-menu') {
      this.showScreen();
    }
  }

  showScreen() {
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
    this.triggerChargeSubmitEvent();
    this.triggerPurchaseClickEvent();
    this.triggerCoinReturnClickEvent();
  }

  purchaseItem(name, price, idx) {
    const tabMenu = this.vendingMachine.getLocalStorage();
    const purchaseItemIdx = tabMenu['product_add_menu'].findIndex((item) => item.name === name);

    if (tabMenu['product_add_menu'][purchaseItemIdx].quantity - 1 < 0) {
      alert('해당 물품이 품절이 되어, 구매할 수 없습니다');
      return;
    }
    if (tabMenu['product_purchase_menu']['chargeAmount'] - price < 0) {
      alert('투입한 금액이 부족하여, 해당 물품을 구매할 수 없습니다');
      return;
    }

    tabMenu['product_add_menu'][purchaseItemIdx].quantity -= 1;
    tabMenu['product_purchase_menu']['chargeAmount'] -= price;

    this.$charge_amount.innerText = tabMenu['product_purchase_menu']['chargeAmount'];

    const productPurchaseQuantity = this.$product_purchase_quantities[idx];
    productPurchaseQuantity.innerText = tabMenu['product_add_menu'][purchaseItemIdx].quantity;

    this.vendingMachine.setLocalStorage(tabMenu);
  }

  getCoinReturnList() {
    const tabMenu = this.vendingMachine.getLocalStorage();
    let { chargeAmount } = tabMenu['product_purchase_menu'];
    const { coinList } = tabMenu['vending_machine_manage_menu'];

    const coinReturnList = { 500: 0, 100: 0, 50: 0, 10: 0 };

    const descendingKeys = Object.keys(coinList)
      .map((coin) => parseInt(coin, 10))
      .sort((a, b) => b - a);

    for (let i = 0; i < descendingKeys.length; i++) {
      let maxNumber = Math.floor(chargeAmount / descendingKeys[i]);
      maxNumber =
        maxNumber < coinList[descendingKeys[i].toString()]
          ? maxNumber
          : coinList[descendingKeys[i].toString()];

      tabMenu['vending_machine_manage_menu']['coinList'][descendingKeys[i].toString()] -= maxNumber;
      chargeAmount -= maxNumber * descendingKeys[i];
      tabMenu['vending_machine_manage_menu']['chargeAmount'] -= maxNumber * descendingKeys[i];
      tabMenu['product_purchase_menu']['chargeAmount'] -= maxNumber * descendingKeys[i];
      coinReturnList[descendingKeys[i].toString()] += maxNumber;
    }

    tabMenu['product_purchase_menu']['coinList'] = coinReturnList;

    this.$charge_amount.innerText = tabMenu['product_purchase_menu']['chargeAmount'];
    this.$coin_return_table.innerHTML = getCoinReturnListTemplate(
      tabMenu['product_purchase_menu']['coinList']
    );

    this.vendingMachine.setLocalStorage(tabMenu);
    this.renderVendingMachineChargeLocalStorage(chargeAmount);

    return coinReturnList;
  }

  render(currentTabMenu) {
    if (currentTabMenu == this.vendingMachine.getCurrentTabMenu()) {
      return;
    }

    this.vendingMachine.setCurrentTabMenu(currentTabMenu);
    this.showScreen();
  }

  renderCharge(chargeInput) {
    const chargeNumber = parseInt(chargeInput, 10);
    const tabMenu = this.vendingMachine.getLocalStorage();
    tabMenu['product_purchase_menu']['chargeAmount'] += chargeNumber;

    this.$charge_amount.innerText = tabMenu['product_purchase_menu']['chargeAmount'];

    this.vendingMachine.setLocalStorage(tabMenu);
  }

  renderVendingMachineChargeLocalStorage(vendingMachineChargeNumber) {
    const tabMenu = this.vendingMachine.getLocalStorage();
    const coinList = getRandomCoinList(vendingMachineChargeNumber);

    tabMenu['vending_machine_manage_menu']['chargeAmount'] += vendingMachineChargeNumber;
    Object.keys(coinList).forEach((coin) => {
      tabMenu['vending_machine_manage_menu']['coinList'][coin] += coinList[coin];
    });

    this.vendingMachine.setLocalStorage(tabMenu);
  }

  triggerCoinReturnClickEvent() {
    this.$coin_return_button.addEventListener('click', () => {
      this.getCoinReturnList();
    });
  }

  triggerPurchaseClickEvent() {
    for (let idx = 0; idx < this.$purchase_buttons.length; idx++) {
      this.$purchase_buttons[idx].addEventListener('click', () => {
        const name = this.$product_purchase_names[idx].dataset.productName;
        const price = this.$product_purchase_prices[idx].dataset.productPrice;

        this.purchaseItem(name, parseInt(price, 10), idx);
      });
    }
  }

  triggerChargeSubmitEvent() {
    this.$charge_form.addEventListener('submit', (e) => {
      e.preventDefault();
      const chargeInput = this.$charge_input.value;

      if (isValidChargeData(chargeInput)) {
        this.renderCharge(chargeInput);
      }
    });
  }

  triggerTabMenuClickEvent() {
    this.$product_purchase_menu.addEventListener('click', (e) => {
      const currentTabMenu = e.target.id;
      this.render(currentTabMenu);
    });
  }
}

export default ProductPurchaseController;
