export const productPurchaseTemplete = `
  <h2>금액 투입</h2>
  <form id="charge-form">
    <input id="charge-input" type="number" placeholder="투입할 금액" />
    <button id="charge-button">투입하기</button>
  </form>
  <div>
    <span>투입한 금액:</span>
    <span id="charge-amount"></span>
  </div>
  <h2>구매할 수 있는 상품 현황</h2>
  <table style="border: 1px solid black">
    <tbody id="product-purchase-wrap">
      <td style="border: 1px solid black">상품명</td>
      <td style="border: 1px solid black">가격</td>
      <td style="border: 1px solid black">수량</td>
      <td style="border: 1px solid black">구매</td>
    </tbody>
  </table>
  <h2>잔돈</h2>
  <button id="coin-return-button">반환하기</button>
  <table style="border: 1px solid black">
    <thead>
      <td style="border: 1px solid black">동전</td>
      <td style="border: 1px solid black">개수</td>
    </thead>
    <tr>
      <td style="border: 1px solid black">500원</td>
      <td id="coin-500-quantity" style="border: 1px solid black"></td>
    </tr>
    <tr>
      <td style="border: 1px solid black">100원</td>
      <td id="coin-100-quantity" style="border: 1px solid black"></td>
    </tr>
    <tr>
      <td style="border: 1px solid black">50원</td>
      <td id="coin-50-quantity" style="border: 1px solid black"></td>
    </tr>
    <tr>
      <td style="border: 1px solid black">10원</td>
      <td id="coin-10-quantity" style="border: 1px solid black"></td>
    </tr>
  </table>
`;