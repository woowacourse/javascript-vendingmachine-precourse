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
  <h2>상품 추가하기</h2>
  <input type='text' placeholder='상품명' id='product-name-input' />
  <input type='number' placeholder='가격' id='product-price-input' />
  <input type='number' placeholder='수량' id='product-quantity-input' />
  <button id='product-add-button'>추가하기</button>

  <h2>상품 현황</h2>
  <table id='product-manage-table'>
    <thead>
      <tr>
        <th>상품명</th>
        <th>가격</th>
        <th>수량</th>
      </tr>
    </thead>
    <tbody id="product-manage-tbody">
      <tr class="product-manage-item">
        <td class="product-manage-name">콜라</td>
        <td class="product-manage-price">1500</td>
        <td class="product-manage-quantity">20</td>
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
};
