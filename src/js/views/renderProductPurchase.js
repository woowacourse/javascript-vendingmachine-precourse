import $ from '../utils/dom.js';

const renderProductPurchase = () => {
  $('section').innerHTML = `
    <div id="product-purchase-content">
      <div id="charge-input-wrap">
        <h3>금액 투입</h3>
        <form id="charge-input-form">
          <input type="number" id="charge-input">
          <button id="charge-button">투입하기</button>
        </form>
        투입한 금액: <span id="charge-amount"></span>
      </div>

      <div id="product-purchase-list-wrap">
        <h3>구매할 수 있는 상품 현황</h3>
        <table id="product-purchase-table">
          <thead>
            <tr>
              <th>상품명</th>
              <th>가격</th>
              <th>수량</th>
              <th>구매</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>

      <div id="coin-return-wrap">
        <h3>잔돈</h3>
        <button type="button" id="coin-return-button">반환하기</button>
        <table id="coin-return-table">
          <thead>
            <tr>
              <th>동전</th>
              <th>개수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>500원</td>
              <td id="coin-500-quantity"></td>
            </tr>
            <tr>
              <td>100원</td>
              <td id="coin-100-quantity"></td>
            </tr>
            <tr>
              <td>50원</td>
              <td id="coin-50-quantity"></td>
            </tr>
            <tr>
              <td>10원</td>
              <td id="coin-10-quantity"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    `;
};

export default renderProductPurchase;
