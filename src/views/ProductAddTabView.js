import TabView from './TabView.js';
import productAddTemplate from '../templates/product-add-template.js';
import { ID } from '../constants/selectors.js';

export default class ProductAddTabView extends TabView {
  initialRender(products) {
    this.contentContainer.innerHTML = productAddTemplate.main;
    this.initElements();
    this.updateProductManageTableItems(products);
  }

  initElements() {
    super.initElements();
    this.tableBody = document.getElementById(ID.PRODUCT_MANAGE.TABLE).querySelector('tbody');
  }

  update(products) {
    this.updateProductManageTableItems(products);
    this.clearAllInput();
  }

  updateProductManageTableItems(products) {
    this.tableBody.innerHTML = '';
    products.forEach((product) => {
      this.tableBody.innerHTML += productAddTemplate.tableItem(product);
    });
  }
}
