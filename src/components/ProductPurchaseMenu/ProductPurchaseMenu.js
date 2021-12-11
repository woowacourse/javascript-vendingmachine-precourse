import Component from '../../core/Component.js';
import $ from '../../helpers.js';
import isValidChargeAmount from '../../utils/isValidChargeAmount.js';

export default class ProductPurchaseMenu extends Component {
  setup() {
    const { chargeAmount, items, coins } = this.props;

    this.state = {
      chargeAmount,
      items,
      coins,
      change: { '500': 0, '100': 0, '50': 0, '10': 0 },
    };
  }

  template() {
    const { chargeAmount, items } = this.state;

    return `
      <h3>금액 투입</h3>
      <form>
        <input type='number' placeholder='투입할 금액' id='charge-input'></input>
        <button type='submit' id='charge-button'>투입하기</button
      </form>
      <p>투입한 금액: <span id='charge-amount'>${chargeAmount}</span></p>
      <h3>구매할 수 있는 상품 현황</h3>
      <table>
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
        <th>구매</th>
        ${items.items
          .filter((item) => item.quantity > 0)
          .map((item) => {
            return `
            <tr
              class='product-purchase-item'
              data-product-id='${item.id}'
              data-product-name='${item.name}'
              data-product-price='${item.price}'
              data-product-quantity='${item.quantity}'
            >
              <td class='product-purchase-name'>${item.name}</td>
              <td class='product-purchase-price'>${item.price}</td>
              <td class='product-purchase-quantity'>${item.quantity}</td>
              <td><button class='purchase-button'>구매하기</button></td>
            </tr>
          `;
          })
          .join('')}
      </table>
      <h3>잔돈</h3>
      <button type='submit' id='coin-return-button'>반환하기</button>
      <table>
        <th>동전</th>
        <th>개수</th>
        <tr>
          <td>500원</td>
          <td id='coin-500-quantity'>${this.state.change['500']}개</td>
        </tr>
        <tr>
          <td>100원</td>
          <td id='coin-100-quantity'>${this.state.change['100']}개</td>
        </tr>
        <tr>
          <td>50원</td>
          <td id='coin-50-quantity'>${this.state.change['50']}개</td>
        </tr>
        <tr>
          <td>10원</td>
          <td id='coin-10-quantity'>${this.state.change['10']}개</td>
        </tr>
      </table>
    `;
  }

  setEvent() {
    this.addEvent('click', '#charge-button', (e) => {
      e.preventDefault();

      const chargeAmount = $('#charge-input').valueAsNumber;

      if (!isValidChargeAmount(chargeAmount)) {
        alert('error');

        return;
      }

      this.props.charge(chargeAmount);
    });

    this.addEvent('click', '.purchase-button', (e) => {
      e.preventDefault();

      const { productId, productPrice } = e.target.closest('tr').dataset;
      const { chargeAmount } = this.state;

      if (productPrice > chargeAmount) {
        alert('error');

        return;
      }

      this.props.purchase(Number(productId), productPrice);
    });

    this.addEvent('click', '#coin-return-button', (e) => {
      e.preventDefault();

      alert('hi');
    });
  }
}
