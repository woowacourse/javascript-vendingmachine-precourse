import VendingMachine from '../model/VendingMachine.js';
import { $id } from '../utils/dom.js';
import { productManageItemTemplate } from '../utils/template.js';
import { isValidProductAddData } from '../utils/validation.js';
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
    this.triggerProductAddSubmitEvent();
  }

  initDOM() {
    this.$product_purchase_menu = document.getElementById('product-purchase-menu');
    this.$vending_machine_manage_menu = document.getElementById('vending-machine-manage-menu');
    this.$produce_add_menu = document.getElementById('product-add-menu');
  }

  initScreen() {
    const initTabMenu = this.vendingMachine.getCurrentTabMenu();
    this.renderCurrentTabMenu(initTabMenu);
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
        this.view.showProduceAddScreen(tabMenu);
        break;
      case 'vending-machine-manage-menu':
        this.view.showVendingMachineManageScreen();
        break;
      case 'product-purchase-menu':
        this.view.showProductPurchaseScreen();
        break;
    }
  }

  initProductAddInputValue() {
    $id('product-name-input').value = '';
    $id('product-price-input').value = '';
    $id('product-quantity-input').value = '';
  }

  renderProductManageList() {
    const tabMenu = this.vendingMachine.getLocalStorage();

    const productManageListText = tabMenu['product_add_menu']
      .map((item) => productManageItemTemplate(item.name, item.price, item.quantity))
      .join('');

    $id('product-status-table').innerHTML =
      ` <tr><th>상품명</th><th>가격</th><th>수량</th></tr>` + productManageListText;

    this.vendingMachine.setLocalStorage(tabMenu);
  }

  triggerProductAddSubmitEvent() {
    $id('product-add-form').addEventListener('submit', (e) => {
      e.preventDefault();

      const productNameInput = $id('product-name-input').value;
      const productPriceInput = $id('product-price-input').value;
      const productQuantityInput = $id('product-quantity-input').value;

      if (isValidProductAddData(productNameInput, productPriceInput, productQuantityInput)) {
        this.initProductAddInputValue();

        const tabMenu = this.vendingMachine.getLocalStorage();

        tabMenu['product_add_menu'] = [
          ...tabMenu['product_add_menu'],
          { name: productNameInput, price: productPriceInput, quantity: productQuantityInput },
        ];

        this.renderProductManageList();
        this.vendingMachine.setLocalStorage(tabMenu);
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

    this.$produce_add_menu.addEventListener('click', (e) => {
      const currentTabMenu = e.target.id;
      this.render(currentTabMenu);
    });
  }
}

export default Controller;
