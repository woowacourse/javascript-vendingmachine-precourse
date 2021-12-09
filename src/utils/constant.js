export const DOM = {
  $APP: '#app',
  $PRODUCT_ADD_MENU: '#product-add-menu',
  $VENDING_MACHINE_MANAGE_MENU: '#vending-machine-manage-menu',
  $PRODUCT_PURCHASE_MENU: '#product-purchase-menu',
  $VENDING_MACHINE_SECTION: '#vending-machine-section',
  $PRODUCT_NAME_INPUT: '#product-name-input',
  $PRODUCT_PRICE_INPUT: '#product-price-input',
  $PRODUCT_QUANTITY_INPUT: '#product-quantity-input',
  $PRODUCT_ADD_BUTTON: '#product-add-button',
  $PRODUCT_MANAGE_TBODY: '#product-manage-tbody',
};

export const TEMPLATE = {
  MAIN: `
  <header id="vending-machine-header">
    <h1>🥤자판기🥤</h1>
    <button id="product-add-menu">상품 관리</button>
    <button id="vending-machine-manage-menu">잔돈 충전</button>
    <button id="product-purchase-menu">상품 구매</button>
  </header>
  <section id="vending-machine-section"></section>
  `,
  PRODUCT_ADD_MENU: `
  <h3>상품 추가하기</h3>
  <input type='text' placeholder='상품명' id='product-name-input' />
  <input type='number' placeholder='가격' id='product-price-input' />
  <input type='number' placeholder='수량' id='product-quantity-input' />
  <button id='product-add-button'>추가하기</button>

  <h3>상품 현황</h3>
  <table id='product-manage-table'>
    <thead>
      <tr>
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
      </tr>
    </thead>
    <tbody id="product-manage-tbody"></tbody>
  </table>
  `,
  PRODUCT_MANAGE_TBODY(productName, productPrice, productQuantity) {
    return `
    <td class="product-manage-name">${productName}</td>
    <td class="product-manage-price">${productPrice}</td>
    <td class="product-manage-quantity">${productQuantity}</td>
    `;
  },
  VENDING_MACHINE_MANAGE_MENU: `
  <h3>자판기 동전 충전하기</h3>
  <input type="number" placeholder="자판기가 보유할 금액" id="vending-machine-charge-input"/>
  <button id="vending-machine-charge-button">충전하기</button>
  <br /><br />
  <span id='vending-machine-charge-amount'>보유 금액: </span>
  <br /><br /><br />
  <h3>자판기가 보유한 동전</h3>
  <table id='vending-machine-manage-table'>
    <thead>
      <tr>
        <th>동전</th>
        <th>개수</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>500원</th>
        <td id='vednig-machine-coin-500-quantity'>0개</td>
      </tr>
      <tr>
        <th>100원</th>
        <td id='vending-machine-coin-100-quantity'>0개</td>
      </tr>
      <tr>
        <th>50원</th>
        <td id='vending-machine-coin-50-quantity'>0개</td>
      </tr>
      <tr>
        <th>10원</th>
        <td id='vending-machine-coin-10-quantity'>0개</td>
      </tr>
    </tbody>
  </table>
  `,
};

export const NUMBER = {
  BLANK_CHECK_LENGTH: 1,
  UNIT_CHECK_TEN: 10,
  ZERO: 0,
};

export const ERROR_MESSAGE = {
  PRODUCT_BLANK(placeholder) {
    return `${placeholder}을 입력해주세요.`;
  },
  PRODUCT_POSITIVE_INTEGER: '양의 정수를 입력해주세요.',
  PRODUCT_UNIT_OF_TEN: '상품 가격은 10원 단위로 입력해주세요.',
  PRODUCT_MORE_THAN_ONE_HUNDRED: '상품 가격은 100원 이상으로 입력해주세요.',
};
