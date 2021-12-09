export const DOM = {
  $APP: document.querySelector('#app'),
  $PRODUCT_ADD_MENU: document.querySelector('#product-add-menu'),
  $VENDING_MACHINE_MANAGE_MENU: document.querySelector('#vending-machine-manage-menu'),
  $PRODUCT_PURCHASE_MENU: document.querySelector('#product-purchase-menu'),
  $VENDING_MACHINE_SECTION: document.querySelector('#vending-machine-section'),
};

export const TEMPLATE = {
  PRODUCT_ADD_MENU: `
  <h2>상품 추가하기</h2>
  <input type='text' placeholder='상품명' id='product-name-input' />
  <input type='number' placeholder='가격' id='product-price-input' />
  <input type='number' placeholder='수량' id='product-quantity-input' />
  <button id='product-add'>추가하기</button>

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

export const NUMBER = {};
