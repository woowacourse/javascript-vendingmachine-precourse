import { HTML_OF_PRODUCT_ADD_PART, HTML_OF_PRODUCT_STATUS_TABLE } from '../utils/html.js';
import { PRODUCT, VALUES } from '../utils/constants.js';

export default class ProductAddView {
  static render() {
    this.showPage();

    if(localStorage.getItem(PRODUCT) !== null) {
        this.showTable();
    }
  }

  static showPage() {
    document.getElementById('bottom-container').innerHTML =
      HTML_OF_PRODUCT_ADD_PART + HTML_OF_PRODUCT_STATUS_TABLE;
  }

  static showTable() {
    const product = JSON.parse(localStorage.getItem(PRODUCT));

    document.getElementById('product-add-table').innerHTML = HTML_OF_PRODUCT_STATUS_TABLE + `
    ${Object.keys(product).map((name) => `
    <tr class="product-manage-item">
      <td class="product-manage-name">${name}</td>
      <td class="product-manage-price">${product[name][VALUES][0]}</td>
      <td class="product-manage-quantity">${product[name][VALUES][1]}</td>
    </tr>`).join('')}`;
  }
}
