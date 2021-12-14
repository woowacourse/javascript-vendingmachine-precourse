import { $id } from '../utils/dom.js';
import { productManageItemTemplate } from '../utils/template.js';
import { isValidProductAddData } from '../utils/validation.js';

class ProductAddController {
  constructor(vendingMachine, view, currentTabMenu) {
    this.vendingMachine = vendingMachine;
    this.view = view;

    if (currentTabMenu === 'product-add-menu') {
      this.init();
    }
  }

  init() {
    const tabMenu = this.vendingMachine.getLocalStorage();
    this.view.showProductAddScreen(tabMenu['product_add_menu']);
    this.triggerProductAddSubmitEvent();
  }

  initProductAddInputValue() {
    $id('product-name-input').value = '';
    $id('product-price-input').value = '';
    $id('product-quantity-input').value = '';
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

  render(currentTabMenu) {
    if (currentTabMenu === this.vendingMachine.getCurrentTabMenu()) {
      return;
    }

    this.vendingMachine.setCurrentTabMenu(currentTabMenu);
    this.renderCurrentTabMenu();
  }

  renderCurrentTabMenu() {
    const tabMenu = this.vendingMachine.getLocalStorage();

    this.view.showProductAddScreen(tabMenu['product_add_menu']);
    this.triggerProductAddSubmitEvent();
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

  triggerTabMenuClickEvent() {
    this.$product_add_menu.addEventListener('click', (e) => {
      const currentTabMenu = e.target.id;
      this.render(currentTabMenu);
    });
  }
}

export default ProductAddController;
