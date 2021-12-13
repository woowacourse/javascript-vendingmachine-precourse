export default function productPurchase() {
  let productPurchaseHtml = `
  <div>
    <h2>금액 투입</h2>
    <form>
      <input type="number" id="charge-input" maxlength="20" placeholder="투입할 금액" />
      <button id="charge-button">투입하기</button>
    </form>
    <p>투입한 금액: <span id="charge-amount"></span>원</p>
  </div>
  <div>
    <h2>구매할 수 있는 상품 현황</h2>
    <table >
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
  <div class="changes">
    <h3>잔돈</h3>
    <button id="coin-return-button">반환하기</button>
    <table >
      <thead>
        <tr>
          <th>동전</th>
          <th>개수</th>
        </tr>
      </thead>
      <tbody>
       
      </tbody>
    </table>
  </div>
  `;
  return productPurchaseHtml;
}
