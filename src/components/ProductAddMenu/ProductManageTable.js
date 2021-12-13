import Component from '../../core/Component.js';

export default class ProductManageTable extends Component {
  setup() {
    const { items } = this.props;
    this.state = { items };
  }

  // TODO: 아이템 목록 직접 접근 안하게 수정
  template() {
    return `
      <h3>상품 현황</h3>
      <table>
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
        ${[...this.state.items.items.entries()].reduce(
          (acc, [id, item]) => `${acc}
        <tr class='product-manage-item' data-product-id=${id}>
          <td class='product-manage-name'>${item.name}</td>
          <td class='product-manage-price'>${item.price}</td>
          <td class='product-manage-quantity'>${item.quantity}</td>
        </tr>`,
          ''
        )}
      </table>
    `;
  }
}
