import Component from '../../../core/Component.js';
import { validatePurchasable } from '../../../utils/validations.js';

export default class ProductPurchaseSection extends Component {
  setup() {
    const { items, chargedAmount } = this.props;
    this.state = { items, chargedAmount };
  }

  template() {
    const { items } = this.state;
    const row = (id, name, price, quantity) => `
        <tr
          class='product-purchase-item'
          data-product-id='${id}'
        >
          <td class='product-purchase-name' data-product-name='${name}'>${name}</td>
          <td class='product-purchase-price' data-product-price='${price}'>${price}</td>
          <td class='product-purchase-quantity' data-product-quantity='${quantity}'>${quantity}</td>
          <td><button class='purchase-button'>구매하기</button></td>
        </tr>
    `;

    return `
      <h3>구매할 수 있는 상품 현황</h3>
      <table>
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
        <th>구매</th>
        ${[...items.items.entries()]
          .filter((item) => item[1].quantity > 0)
          .reduce(
            (acc, [id, { name, price, quantity }]) =>
              `${acc}${row(id, name, price, quantity)}`,
            ''
          )}
      </table>
    `;
  }

  setEvent() {
    this.addEvent('click', '.purchase-button', ({ target }) => {
      const tr = target.closest('tr');
      const { productId } = tr.dataset;
      const { productPrice } = tr.querySelector(
        '.product-purchase-price'
      ).dataset;

      if (!validatePurchasable(this.state.chargedAmount, Number(productPrice)))
        return;

      this.props.purchase(Number(productId));
    });
  }
}