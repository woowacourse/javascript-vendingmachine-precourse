const COMMON_VIEW = `
  <h1>🍹자판기🍹</h1>
  <button id = "product-add-menu">상품 관리</button>
  <button id = "vending-machine-manage-menu">잔돈 충전</button>
  <button id = "product-purchase-menu">상품 구매</button>
  `;

const MANAGE_VIEW = `
  <h2>상품 추가하기</h2>
  <input placeholder="상품명" id="product-name-input"/>
  <input placeholder="가격" id="product-price-input"/>
  <input placeholder="수량" id="product-quantity-input"/>
  <button id=" product-add-button">추가하기</button>
  <h2>상품 현황</h2>
  <table>
    <th>상품명</th><th>가격</th><th>수량</th>
    <tr className = "product-manage-item">
    </tr>
  </table>
  `;

const CHARGE_VIEW = `
  <h2>자판기 동전 충전하기</h2>
  <input placeholder="자판기가 보유할 금액" id="vending-machine-charge-input"/>
  <text>보유금액: </text>
  <text id="vending-machine-charge-amount"></text>
  <h2>자판기가 보유한 동전</h2>
  <table>
    <th>동전</th><th>개수</th>
    <tr>
      <td>500원</td> <td id="vending-machine-coin-500-quantity"></td>
    </tr>
    <tr>
      <td>100원</td> <td id="vending-machine-coin-100-quantity"></td>
    </tr>
    <tr>
      <td>50원</td> <td id="vending-machine-coin-50-quantity"></td>
    </tr>
    <tr>
      <td>10원</td> <td id="vending-machine-coin-10-quantity"></td>
    </tr>
  </table>
  `;
const PURCHASE_VIEW = document.createElement("div");

export { COMMON_VIEW, MANAGE_VIEW, CHARGE_VIEW, PURCHASE_VIEW };
