export const productPurchaseTemplate = `
  <div>
    <h3>금액 투입</h3>
    <form>
      <input type="number" id="charge-input" placeholder="투입할 금액"/>
      <button id="charge-button">투입하기</button>
    </form>
    <p>투입한 금액: <span id="charge-amount"></span></p>
  </div>
  <br/>
  <div>
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
      <tbody id="product-purchase-list"></tbody>
    </table>
  </div>
  <br/>
  <div>
    <h3>잔돈</h3>
    <button id="coin-return-button">반환하기</button>
    <table>
      <thead>
        <tr>
          <th>동전</th>
          <th>개수</th>
        </tr>
      </thead>
      <tbody id="coin-return-result">
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
`;

export const purchaseAbleListTemplate = ({ name, price, quantity }) => `
  <tr class='product-purchase-item'>
    <td class='product-purchase-name' data-product-name='${name}'>${name}</td>
    <td class='product-purchase-price' data-product-price='${price}'>${price}</td>
    <td class='product-purchase-quantity' data-product-quantity='${quantity}'>${quantity}</td>
    <td><button class="purchase-button">구매하기</button></td>
  </tr>
`;

export const returnedCoinTemplate = (unit, quantity) => `
  <tr>
    <td>${unit}원</td>
    <td id="coin-${unit}-quantity">${quantity}개</td>
  </tr>
`;
