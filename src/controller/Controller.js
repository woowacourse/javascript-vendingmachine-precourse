import VendingMachine from '../model/VendingMachine.js';
import { $id } from '../utils/dom.js';
import { getVendingMachineCoinListTemplate, productManageItemTemplate } from '../utils/template.js';
import {
  isValidCharge,
  isValidProductAddData,
  isValidVendingMachineCharge,
} from '../utils/validation.js';
import View from '../view/View.js';

class Controller {
  constructor() {
    this.vendingMachine = new VendingMachine();
    this.view = new View();

    this.init();
  }

  init() {
    this.view.showTabMenuScreen();
    this.initScreen();
    this.initDOM();

    this.triggerTabMenuClickEvent();
  }

  initDOM() {
    this.$product_purchase_menu = document.getElementById('product-purchase-menu');
    this.$vending_machine_manage_menu = document.getElementById('vending-machine-manage-menu');
    this.$product_add_menu = document.getElementById('product-add-menu');
  }

  initScreen() {
    const initTabMenu = this.vendingMachine.getCurrentTabMenu();
    this.renderCurrentTabMenu(initTabMenu);
  }

  initProductAddInputValue() {
    $id('product-name-input').value = '';
    $id('product-price-input').value = '';
    $id('product-quantity-input').value = '';
  }

  initVendingMachineChargeInputValue() {
    $id('vending-machine-charge-input').value = '';
  }

  getRandomCoinList(chargeInputValue) {
    const randomCoinList = { 500: 0, 100: 0, 50: 0, 10: 0 };
    let sum = 0;

    while (chargeInputValue !== sum) {
      const number = MissionUtils.Random.pickNumberInList([500, 100, 50, 10]);

      if (sum + number > chargeInputValue) {
        continue;
      }

      randomCoinList[number] += 1;
      sum += number;
    }

    return randomCoinList;
  }

  render(currentTabMenu) {
    if (currentTabMenu == this.vendingMachine.getCurrentTabMenu()) {
      return;
    }

    this.vendingMachine.setCurrentTabMenu(currentTabMenu);
    this.renderCurrentTabMenu(currentTabMenu);
  }

  renderCurrentTabMenu(currentTabMenu) {
    const tabMenu = this.vendingMachine.getLocalStorage();

    switch (currentTabMenu) {
      case 'product-add-menu':
        this.view.showProductAddScreen(tabMenu);
        this.triggerProductAddSubmitEvent();
        break;
      case 'vending-machine-manage-menu':
        this.view.showVendingMachineManageScreen(tabMenu);
        this.triggerVendingMachineChargeSubmitEvent();
        break;
      case 'product-purchase-menu':
        this.view.showProductPurchaseScreen(tabMenu);
        this.triggerChargeSubmitEvent();
        this.triggerPurchaseClickEvent();
        break;
    }
  }

  renderProductManageList(productNameInput, productPriceInput, productQuantityInput) {
    const tabMenu = this.vendingMachine.getLocalStorage();

    tabMenu['product_add_menu'] = [
      ...tabMenu['product_add_menu'],
      { name: productNameInput, price: productPriceInput, quantity: productQuantityInput },
    ];

    const productManageListText =
      ` <tr><th>상품명</th><th>가격</th><th>수량</th></tr>` +
      tabMenu['product_add_menu']
        .map((item) => productManageItemTemplate(item.name, item.price, item.quantity))
        .join('');

    $id('product-status-table').innerHTML = productManageListText;

    this.vendingMachine.setLocalStorage(tabMenu);
  }

  renderVendingMachineCharge(vendingMachineChargeInput) {
    const vendingMachineChargeNumber = parseInt(vendingMachineChargeInput, 10);
    const tabMenu = this.vendingMachine.getLocalStorage();
    const coinList = this.getRandomCoinList(vendingMachineChargeNumber);

    tabMenu['vending_machine_manage_menu']['chargeAmount'] += vendingMachineChargeNumber;

    Object.keys(coinList).forEach((coin) => {
      tabMenu['vending_machine_manage_menu']['coinList'][coin] += coinList[coin];
    });

    $id('vending-machine-coin-list').innerHTML = getVendingMachineCoinListTemplate(
      tabMenu['vending_machine_manage_menu']['coinList']
    );

    $id('vending-machine-charge-amount').innerText =
      tabMenu['vending_machine_manage_menu']['chargeAmount'];

    this.vendingMachine.setLocalStorage(tabMenu);
  }

  renderCharge(chargeInput) {
    const chargeNumber = parseInt(chargeInput, 10);
    const tabMenu = this.vendingMachine.getLocalStorage();
    tabMenu['product_purchase_menu']['chargeAmount'] += chargeNumber;

    $id('charge-amount').innerText = tabMenu['product_purchase_menu']['chargeAmount'];

    this.vendingMachine.setLocalStorage(tabMenu);
  }

  purchaseItem(name, price, idx) {
    const tabMenu = this.vendingMachine.getLocalStorage();
    const purchaseItemIdx = tabMenu['product_add_menu'].findIndex((item) => item.name === name);

    tabMenu['product_add_menu'][purchaseItemIdx].quantity -= 1;
    tabMenu['product_purchase_menu']['chargeAmount'] -= price;

    $id('charge-amount').innerText = tabMenu['product_purchase_menu']['chargeAmount'];

    const productPurchaseQuantity = document.getElementsByClassName('product-purchase-quantity')[
      idx
    ];
    productPurchaseQuantity.innerText = tabMenu['product_add_menu'][purchaseItemIdx].quantity;

    this.vendingMachine.setLocalStorage(tabMenu);
  }

  triggerPurchaseClickEvent() {
    const $purchaseButtons = document.getElementsByClassName('purchase-button');

    for (let idx = 0; idx < $purchaseButtons.length; idx++) {
      $purchaseButtons[idx].addEventListener('click', (e) => {
        const name =
          document.getElementsByClassName('product-purchase-name')[idx].dataset.productName;
        const price =
          document.getElementsByClassName('product-purchase-price')[idx].dataset.productPrice;

        this.purchaseItem(name, parseInt(price, 10), idx);
      });
    }
  }

  triggerChargeSubmitEvent() {
    $id('charge-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const chargeInput = $id('charge-input').value;

      if (isValidCharge(chargeInput)) {
        this.renderCharge(chargeInput);
      }
    });
  }

  triggerProductAddSubmitEvent() {
    $id('product-add-form').addEventListener('submit', (e) => {
      e.preventDefault();

      const productNameInput = $id('product-name-input').value;
      const productPriceInput = $id('product-price-input').value;
      const productQuantityInput = $id('product-quantity-input').value;

      if (isValidProductAddData(productNameInput, productPriceInput, productQuantityInput)) {
        this.renderProductManageList(productNameInput, productPriceInput, productQuantityInput);
        this.initProductAddInputValue();
      }
    });
  }

  triggerVendingMachineChargeSubmitEvent() {
    $id('vending-machine-charge-form').addEventListener('submit', (e) => {
      e.preventDefault();

      const vendingMachineChargeInput = $id('vending-machine-charge-input').value;

      if (isValidVendingMachineCharge(vendingMachineChargeInput)) {
        this.initVendingMachineChargeInputValue();
        this.renderVendingMachineCharge(vendingMachineChargeInput);
      }
    });
  }

  triggerTabMenuClickEvent() {
    this.$product_purchase_menu.addEventListener('click', (e) => {
      const currentTabMenu = e.target.id;
      this.render(currentTabMenu);
    });

    this.$vending_machine_manage_menu.addEventListener('click', (e) => {
      const currentTabMenu = e.target.id;
      this.render(currentTabMenu);
    });

    this.$product_add_menu.addEventListener('click', (e) => {
      const currentTabMenu = e.target.id;
      this.render(currentTabMenu);
    });
  }
}

export default Controller;
