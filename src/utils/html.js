export const HTML_OF_TITLE = `<h1>🥤자판기🥤</h1>`;

export const HTML_OF_MENU_BUTTONS = `
  <button id="product-add-menu">상품 관리</button>
  <button id="vending-machine-manage-menu">잔돈 충전</button>
  <button id="product-purchase-menu">상품 구매</button>`;
export const HTML_OF_BOTTOM_CONTAINER = `<div id="bottom-container"></div>`;

// 상품 관리 부분
export const HTML_OF_PRODUCT_ADD_PART = `
  <h4>상품 추가하기</h4>
  <input type="text" placeholder="상품명" id="product-name-input"></input>
  <input type="number" placeholder="가격" id="product-price-input"></input>
  <input type="number" placeholder="수량" id="product-quantity-input"></input>
  <button id="product-add-button">추가하기</button>
  <h4>상품 현황</h4>
  <table border="1px" cellspacing="0" cellpadding="5">
    <thead>
      <th>상품명</th>
      <th>가격</th>
      <th>수량</th>
    </thead>
  </table>`;

// 잔돈 충전 부분
export const HTML_OF_MACHINE_MANAGE_PART = `
  <h4>자판기 동전 충전하기</h4>
  <input type="number" placeholder="자판기가 보유할 금액" id="vending-machine-charge-input"></input>
  <button id="vending-machine-charge-button">충전하기</button><br><br>
  <span>보유 금액:</span>
  <span id="vending-machine-charge-amount"></span><br><br>
  <h4>자판기가 보유한 동전</h4>
  <table border="1px" cellspacing="0" cellpadding="5">
    <thead>
      <th>동전</th>
      <th>개수</th>
    </thead>
  </table>`;

// 상품 구매 부분
export const HTML_OF_PRODUCT_PURCHASE_PART = `
  <h4>금액 투입</h4>
  <input type="number" placeholder="투입할 금액" id="charge-input"></input>
  <button id="charge-button">투입하기</button><br><br>
  <span>투입한 금액:</span>
  <span id="charge-amount"></span><br><br>
  <h4>구매할 수 있는 상품 현황</h4>
  <table border="1px" cellspacing="0" cellpadding="5">
    <thead>
      <th>상품명</th>
      <th>가격</th>
      <th>수량</th>
      <th>구매</th>
    </thead>
  </table>
  <h4>잔돈</h4>
  <button id="coin-return-button">반환하기</button><br><br>
  <table border="1px" cellspacing="0" cellpadding="5">
    <thead>
      <th>동전</th>
      <th>개수</th>
    </thead>
  </table>`;
