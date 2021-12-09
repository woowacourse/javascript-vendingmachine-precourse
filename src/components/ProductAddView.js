import { HTML_OF_PRODUCT_ADD_PART } from '../utils/html.js';

export default class ProductAddView {
  static render() {
    document.getElementById('bottom-container').innerHTML =
      HTML_OF_PRODUCT_ADD_PART;
  }

  static addEvent() {
    document.getElementById('product-add-button').addEventListener('click', (e) => {
        e.preventDefault();

        const name = document.getElementById('product-name-input').value;
        const price = document.getElementById('product-price-input').value;
        const quantity = document.getElementById('product-quantity-input').value;

        console.log(name, price, quantity);
    });
  }
}
