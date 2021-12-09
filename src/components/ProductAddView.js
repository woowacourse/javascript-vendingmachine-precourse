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
        
        this.addProduct(name, price, quantity);

        const product = JSON.parse(localStorage.getItem('Product'));
        
        document.getElementById('product-add-table').innerHTML = `
        <thead>
          <th>상품명</th>
          <th>가격</th>
          <th>수량</th>
        </thead>
        ${Object.keys(product).map((name) => `
        <tr>
          <td align="center">${name}</td>
          <td align="center">${product[name]["values"][0]}</td>
          <td align="center">${product[name]["values"][1]}</td>
        </tr>`).join('')}`;
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
}
