import { HTML_OF_PRODUCT_ADD_PART, HTML_OF_PRODUCT_STATUS_TABLE } from '../utils/html.js';

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
        const product = JSON.parse(localStorage.getItem('Product'));

        if(localStorage.getItem('Product') === null) {
            localStorage.setItem('Product', JSON.stringify({[name]:{values: [price, quantity]}}));
        }else {
            product[name] = {values: [price, quantity]};
            localStorage.setItem('Product', JSON.stringify(product));
        }
    }

    static showTable() {
        const product = JSON.parse(localStorage.getItem('Product'));

        document.getElementById('product-add-table').innerHTML = HTML_OF_PRODUCT_STATUS_TABLE + `
        ${Object.keys(product).map((name) => `
        <tr class="product-manage-item">
          <td class="product-manage-name">${name}</td>
          <td class="product-manage-price">${product[name]["values"][0]}</td>
          <td class="product-manage-quantity">${product[name]["values"][1]}</td>
        </tr>`).join('')}`;
    }
}
