import { getProductMangeListTemplate } from '../utils/template/productAddTemplate.js';
import { isValidProductAddData } from '../utils/validation/productAddValidation.js';

class ProductAddController {
  constructor(vendingMachine, view, currentTabMenu) {
    this.vendingMachine = vendingMachine;
    this.view = view;

    if (currentTabMenu === 'product-add-menu') {
      this.initScreen();
    }
  }

  initScreen() {
    const tabMenu = this.vendingMachine.getLocalStorage();
    this.view.showProductAddScreen(tabMenu['product_add_menu']);

    this.initDOM();
    this.initEventListener();
  }

  initDOM() {
    this.$product_name_input = document.getElementById('product-name-input');
    this.$product_price_input = document.getElementById('product-price-input');
    this.$product_quantity_input = document.getElementById('product-quantity-input');
    this.$product_status_table = document.getElementById('product-status-table');
    this.$product_add_form = document.getElementById('product-add-form');
  }

  initEventListener() {
    this.triggerProductAddFormSubmitEvent();
  }

  showScreen(currentTabMenu) {
    if (currentTabMenu === this.vendingMachine.getCurrentTabMenu()) {
      return;
    }

    this.vendingMachine.setCurrentTabMenu(currentTabMenu);
    this.initScreen();
  }

  productAddSubmitLogic(name, price, quantity) {
    const tabMenu = this.vendingMachine.getLocalStorage();

    this.changeLocalStorageProductAddMenuValue(tabMenu, name, price, quantity);
    this.renderProductAddMenuContent(tabMenu);
  }

  changeLocalStorageProductAddMenuValue = (tabMenu, name, price, quantity) => {
    tabMenu['product_add_menu'] = [...tabMenu['product_add_menu'], { name, price, quantity }];

    this.vendingMachine.setLocalStorage(tabMenu);
  };

  renderProductAddMenuContent(tabMenu) {
    const productManageListTemplate = getProductMangeListTemplate(tabMenu['product_add_menu']);
    this.$product_status_table.innerHTML = productManageListTemplate;
  }

  initProductAddInputValue() {
    this.$product_name_input.value = '';
    this.$product_price_input.value = '';
    this.$product_quantity_input.value = '';
  }

  triggerProductAddFormSubmitEvent() {
    this.$product_add_form.addEventListener('submit', (e) => {
      e.preventDefault();

      const productName = this.$product_name_input.value;
      const productPrice = this.$product_price_input.value;
      const productQuantity = this.$product_quantity_input.value;

      if (isValidProductAddData(productName, productPrice, productQuantity)) {
        this.initProductAddInputValue();
        this.productAddSubmitLogic(productName, productPrice, productQuantity);
      }
    });
  }
}

export default ProductAddController;
