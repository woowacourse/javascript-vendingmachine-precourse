import Component from '../../essential/component.js';
import * as CONSTANTS from '../../utils/constants.js';
import { loadFromStorage, saveToStorage } from '../../utils/storage.js';

const HEAD = `
<h3>상품 현황</h3>
  <table>
    <thead>
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
    </thead>
    <tbody>
`;

const BODY = products => `
  ${products
    .map(
      ({ name, price, quantity }) => `
      <tr class="product-manage-item">
        <td class="product-manage-name">${name}</td>
        <td class="product-manage-price">${price}</td>
        <td class="product-manage-quantity">${quantity}</td>
      </tr>
  `,
    )
    .join('')}
`;

const TAIL = `
    </tbody>
  </table>
`;

export default class Table extends Component {
  setup() {
    this.$state = {
      products: loadFromStorage(CONSTANTS.STORAGE_PRODUCTS_KEY),
    };

    this.checkProps();
  }

  checkProps() {
    if (this.$props) {
      let product = this.$props.product;

      this.$state.products.push(product);
      saveToStorage(CONSTANTS.STORAGE_PRODUCTS_KEY, this.$state.products);
    }
  }

  template() {
    return HEAD + BODY(this.$state.products) + TAIL;
  }
}
