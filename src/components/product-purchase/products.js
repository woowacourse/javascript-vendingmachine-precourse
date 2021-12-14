import Component from '../../essential/component.js';
import * as CONSTANTS from '../../utils/constants.js';
import { loadFromStorage } from '../../utils/storage.js';

const HEAD = `
  <br/>
  <table>
    <thead>
      <th>상품명</th>
      <th>가격</th>
      <th>수량</th>
      <th>구매</th>
    </thead>
    <tbody id="product-purchase-tbody">
`;

const BODY = products => `
  ${products
    .map(
      ({ name, price, quantity }, index) => `
      <tr class="product-purchase-item">
        <td class="product-purchase-name">${name}</td>
        <td class="product-purchase-price">${price}</td>
        <td class="product-purchase-quantity">${quantity}</td>
        <td
          data-product-index="${index}" data-product-name="${name}"
          data-product-price="${price}" data-product-quantity="${quantity}">
          <input type="button" class="purchase-button" value="구매하기" />
        </td>
      </tr>
  `,
    )
    .join('')}
`;

const TAIL = `
    </tbody>
  <table>
`;

export default class Products extends Component {
  setup() {
    this.$state = {
      products: loadFromStorage(CONSTANTS.STORAGE_PRODUCTS_KEY),
    };
  }

  template() {
    return HEAD + BODY(this.$state.products) + TAIL;
  }

  setEvent() {
    this.addEvent('click', '.purchase-button', ({ target }) => {
      let index = target.parentElement.dataset.productIndex;
      this.$props.checkPurchase(index);

      this.setState({
        products: loadFromStorage(CONSTANTS.STORAGE_PRODUCTS_KEY),
      });
    });
  }
}
