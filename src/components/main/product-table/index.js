import Component from '../../../core/Component.js';

export default class ProductTable extends Component {
  template() {
    const { stock } = this.$props;
    return `
      <h3>상품 현황</h3>
      <table>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody>${this.getTableRows(stock)}</tbody>
      </table>
    `;
  }

  getTableRows(data) {
    console.log(data);
    return `
      ${data
        .map(
          ({ name, price, quantity }) => `
            <tr class="product-manage-item">
              <td class="product-manage-name">${name}</td>
              <td class="product-manage-price">${price}</td>
              <td class="product-manage-quantity">${quantity}</td>
            </tr>
          `
        )
        .join('')}
      `;
  }
}
