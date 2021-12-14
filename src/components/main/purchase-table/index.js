import Component from '../../../core/Component.js';

export default class PurchaseTable extends Component {
  template() {
    const { stock } = this.$props;
    return `
      <h3>구매할 수 있는 상품 현황</h3>
      <table>
        <thead>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
            <th>구매</th>
          </tr>
        </thead>
        <tbody>${this.getTableRow(stock)}</tbody>
      </table>
    `;
  }

  getTableRow(data) {
    return `
      ${data
        .map(
          ({ name, price, quantity }) => `
              <tr class="product-purchase-item">
                <td data-product-name=${name} class="product-purchase-name">${name}</td>
                <td data-product-price=${price} class="product-purchase-price">${price}</td>
                <td data-product-quantity=${quantity} class="product-purchase-quantity">${quantity}</td>
                <td><button data-product-name=${name} class="purchase-button">구매하기</button></td>
              </tr>
            `
        )
        .join('')}    
    `;
  }

  setEvent() {
    const { purchase } = this.$props;

    this.addEvent('click', '.purchase-button', ({ target }) => {
      purchase(target.dataset.productName);
    });
  }
}
