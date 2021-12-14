import Component from '../../core/Component.js';

export default class ProductPurchaseSection extends Component {
  setup() {
    const { items } = this.props;
    this.state = { items };
  }

  template() {
    const { items } = this.state;

    // TODO: item 목록 직접 접근 안하게 수정
    return `
      <h3>구매할 수 있는 상품 현황</h3>
      <table>
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
        <th>구매</th>
        ${[...items.items.entries()]
          .filter(([id, item]) => item.quantity > 0)
          .map(([id, item]) => {
            return `
            <tr
              class='product-purchase-item'
              data-product-id='${id}'
            >
              <td class='product-purchase-name' data-product-name='${item.name}'>${item.name}</td>
              <td class='product-purchase-price' data-product-price='${item.price}'>${item.price}</td>
              <td class='product-purchase-quantity' data-product-quantity='${item.quantity}'>${item.quantity}</td>
              <td><button class='purchase-button'>구매하기</button></td>
            </tr>
          `;
          })
          .join('')}
      </table>
    `;
  }

  setEvent() {
    this.addEvent('click', '.purchase-button', (e) => {
      const { productPrice } = e.target
        .closest('tr')
        .querySelector('.product-purchase-price').dataset;
      const { productId } = e.target.closest('tr').dataset;
      const { chargedAmount } = this.state;
      const id = Number(productId);
      const price = Number(productPrice);

      if (price > chargedAmount) {
        alert(`not enough money`);

        return;
      }

      this.props.purchase(id);
    });
  }
}
