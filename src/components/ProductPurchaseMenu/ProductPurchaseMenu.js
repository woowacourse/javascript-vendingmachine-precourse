import Component from '../../core/Component.js';
import $ from '../../helpers.js';
import isValidChargeAmount from '../../utils/isValidChargeAmount.js';

export default class ProductPurchaseMenu extends Component {
  setup() {
    const { chargedAmount, items, coins, returnedCoins } = this.props;

    this.state = {
      chargedAmount,
      items,
      coins,
      returnedCoins: returnedCoins.toObject(),
    };
  }

  // TODO: item, returnedCoins 목록 직접 접근 안하게 수정
  template() {
    const { chargedAmount, items, returnedCoins } = this.state;

    return `
      <h3>금액 투입</h3>
      <form>
        <input type='number' placeholder='투입할 금액' id='charge-input'></input>
        <button type='submit' id='charge-button'>투입하기</button
      </form>
      <p>투입한 금액: <span id='charge-amount'>${chargedAmount.toString()}</span></p>
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
      <h3>잔돈</h3>
      <button type='submit' id='coin-return-button'>반환하기</button>
      <table>
        <th>동전</th>
        <th>개수</th>
        <tr>
          <td>500원</td>
          <td id='coin-500-quantity'>${returnedCoins['500']}개</td>
        </tr>
        <tr>
          <td>100원</td>
          <td id='coin-100-quantity'>${returnedCoins['100']}개</td>
        </tr>
        <tr>
          <td>50원</td>
          <td id='coin-50-quantity'>${returnedCoins['50']}개</td>
        </tr>
        <tr>
          <td>10원</td>
          <td id='coin-10-quantity'>${returnedCoins['10']}개</td>
        </tr>
      </table>
    `;
  }

  setEvent() {
    this.addEvent('click', '#charge-button', (e) => {
      e.preventDefault();

      const chargingAmount = $('#charge-input').valueAsNumber;

      if (!isValidChargeAmount(chargingAmount)) {
        alert('error');

        return;
      }

      this.props.charge(chargingAmount);
    });

    this.addEvent('click', '.purchase-button', (e) => {
      e.preventDefault();

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

    // TODO: 동전이 없을 경우 예외 처리, 잔돈 반환 후 동전 상태 저장, 다른 탭에 갔다 왔을 때 잔돈 상태 유지
    this.addEvent('click', '#coin-return-button', (e) => {
      e.preventDefault();

      this.props.returnChange();
    });
  }
}
