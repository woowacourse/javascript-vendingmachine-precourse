import { productManageItemTemplate } from '../utils/template.js';
import { isValidProductAddData } from '../utils/validation/productAddValidation.js';

class ProductAddController {
  constructor(vendingMachine, view, currentTabMenu) {
    this.vendingMachine = vendingMachine;
    this.view = view;

    if (currentTabMenu === 'product-add-menu') {
      this.showScreen();
    }
  }

  showScreen() {
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
    this.triggerProductAddSubmitEvent();
  }

  initProductAddInputValue() {
    this.$product_name_input.value = '';
    this.$product_price_input.value = '';
    this.$product_quantity_input.value = '';
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

    this.$product_status_table.innerHTML = productManageListText;

    this.vendingMachine.setLocalStorage(tabMenu);
  }

  render(currentTabMenu) {
    if (currentTabMenu === this.vendingMachine.getCurrentTabMenu()) {
      return;
    }

    this.vendingMachine.setCurrentTabMenu(currentTabMenu);
    this.showScreen();
  }

  triggerProductAddSubmitEvent() {
    this.$product_add_form.addEventListener('submit', (e) => {
      e.preventDefault();

      const productNameInput = this.$product_name_input.value;
      const productPriceInput = this.$product_price_input.value;
      const productQuantityInput = this.$product_quantity_input.value;

      if (isValidProductAddData(productNameInput, productPriceInput, productQuantityInput)) {
        this.renderProductManageList(productNameInput, productPriceInput, productQuantityInput);
        this.initProductAddInputValue();
      }
    });
  }

  triggerTabMenuClickEvent() {
    this.$product_add_menu.addEventListener('click', (e) => {
      const currentTabMenu = e.target.id;
      this.render(currentTabMenu);
    });
  }
}

export default ProductAddController;
