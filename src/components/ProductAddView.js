import { HTML_OF_PRODUCT_ADD_PART, HTML_OF_PRODUCT_STATUS_TABLE } from '../utils/html.js';
import { PRODUCT, VALUES } from '../utils/constants.js';

export default class ProductAddView {
  static render() {
    document.getElementById('bottom-container').innerHTML =
      HTML_OF_PRODUCT_ADD_PART + HTML_OF_PRODUCT_STATUS_TABLE;
  }

  static addEvent() {
    document.getElementById('product-add-button').addEventListener('click', (e) => {
        e.preventDefault();

        const name = document.getElementById('product-name-input').value;
        const price = document.getElementById('product-price-input').value;
        const quantity = document.getElementById('product-quantity-input').value;

        this.addProduct(name, price, quantity);
        this.showTable();
    });
  }

    static addProduct(name, price, quantity) {
        const product = JSON.parse(localStorage.getItem(PRODUCT));

        if(localStorage.getItem(PRODUCT) === null) {
            localStorage.setItem(PRODUCT, JSON.stringify({[name]:{values: [price, quantity]}}));
        }else {
            product[name] = {values: [price, this.checkAlreadyHave(name, price, quantity, product)]};
            localStorage.setItem(PRODUCT, JSON.stringify(product));
        }
    }

    static checkAlreadyHave(name, price, quantity, product) {
        if(product[name] !== undefined && product[name][VALUES][0] === price) {
            return parseInt(product[name][VALUES][1]) + parseInt(quantity);
        };

        return quantity;
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
