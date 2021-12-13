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

const CHARGE_VIEW = document.createElement("div");

const PURCHASE_VIEW = document.createElement("div");

export { COMMON_VIEW, MANAGE_VIEW, CHARGE_VIEW, PURCHASE_VIEW };
