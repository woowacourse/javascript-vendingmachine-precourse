import VendingMachine from '../model/VendingMachine.js';
import { $id } from '../utils/dom.js';
import View from '../view/View.js';

class Controller {
  constructor() {
    this.vendingMachine = new VendingMachine();
    this.view = new View();

    this.init();
  }

  init() {
    this.view.showTabMenuScreen();
    this.initDOM();
    this.initScreen();
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
    this.view.hideScreen();
    this.renderCurrentTabMenu(currentTabMenu);
  }

  renderCurrentTabMenu(tabMenu) {
    switch (tabMenu) {
      case 'product-add-menu':
        this.view.showProduceAddScreen();
        break;
      case 'vending-machine-manage-menu':
        this.view.showVendingMachineManageScreen();
        break;
      case 'product-purchase-menu':
        this.view.showProductPurchaseScreen();
        break;
    }
  }

  isEmpty(inputValue) {
    return inputValue === '';
  }
  isContainsBlank(productNameInput) {
    return productNameInput.replace(/ /g, '').length === 0;
  }

  isNumberType(productNameInput) {
    return !isNaN(Number(productNameInput));
  }

  isInValidInteger(inputValue) {
    return !Number.isInteger(Number(inputValue));
  }

  isValidateProductAdd() {
    const productNameInput = $id('product-name-input').value;
    const productPriceInput = $id('product-price-input').value;
    const productQuantityInput = $id('product-quantity-input').value;

    if (this.isEmpty(productNameInput)) {
      alert('상품명을 입력해주세요.  ex) 사이다');
      return false;
    }

    if (this.isContainsBlank(productNameInput)) {
      alert('공백이 아닌 상품명을 입력해주세요.  ex) 사이다');
      return false;
    }

    if (this.isNumberType(productNameInput)) {
      alert('숫자 타입이 아닌 상품명을 입력해주세요.  ex) 사이다');
      return false;
    }

    if (this.isEmpty(productPriceInput)) {
      alert('상품의 가격을 입력해주세요.  ex) 1500');
      return false;
    }

    if (this.isInValidInteger(productPriceInput)) {
      alert('상품의 가격은 100원부터 시작하며, 10원으로 나누어 떨어져야 합니다.  ex)1500');
      return false;
    }
  }

  triggerProductAddSubmitEvent() {
    $id('product-add-form').addEventListener('submit', (e) => {
      e.preventDefault();

      if (this.isValidateProductAdd()) {
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
