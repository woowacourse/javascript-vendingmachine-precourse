class PurchaseView {
  constructor() {}

  render() {}

  template() {
    return `
      <section id="purchase-tab">
        <form>
          <h3>금액 투입</h3>
          <input id="charge-input" type="number" placeholder="투입할 금액" />
          <button id="charge-button">투입하기</button>
          <div>투입한 금액: <span id="charge-amount">0원</span></div>
        </form>
        <h3>구매할 수 있는 상품 현황</h3>
        <table>
          <tr>
            <th>상품명</th>
            <th>가격</th>
            <th>수량</th>
            <th>구매</th>
          </tr>
          <tr class="product-purchase-item">
            <td class="product-purchase-name" data-product-name="임시상품">임시상품</td>
            <td class="product-purchase-price" data-product-price="1000">1000</td>
            <td class="product-purchase-quantity" data-product-quantity="20">20</td>
            <td><button class="purchase-button">구매하기</button></td>
          </tr>
        </table>
        <h3>잔돈</h3>
        <button id="coin-return-button">반환하기</button>
        <table>
          <tr>
            <th>동전</th>
            <th>개수</th>
          </tr>
          <tr>
            <td>500원</td>
            <td id="coin-500-quantity">0개</td>
          </tr>
          <tr>
            <td>100원</td>
            <td id="coin-100-quantity">0개</td>
          </tr>
          <tr>
            <td>50원</td>
            <td id="coin-50-quantity">0개</td>
          </tr>
          <tr>
            <td>10원</td>
            <td id="coin-10-quantity">0개</td>
          </tr>
        </table>
      </section>
    `;
  }
}

export default PurchaseView;
