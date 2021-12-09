export const PRODUCT_MANAGE_TEMPLATE = `
  <tr class="product-manage-item">
    <td class="product-manage-name">상품명</td>
    <td class="product-manage-price">가격</td>
    <td class="product-manage-quantity">수량</td>
  </tr>`;

export const PRODUCT_SECTION_TEMPLATE = `
  <h3>상품 추가하기</h3>
  <form>
    <input type="text" id="product-name-input" placeholder="상품명" />
    <input type="number" id="product-price-input" placeholder="가격" />
    <input type="number" id="product-quantity-input" placeholder="수량" />
    <button id="product-add-button">추가하기</button>
  </form>
  <h3>상품 현황</h3>
  <table id="product-manage-table">
    ${PRODUCT_MANAGE_TEMPLATE}
  </table>
`;

export function printProductTemplate(product) {
  return `
    <tr class="product-manage-item">
      <td class="product-manage-name">${product.productName}</td>
      <td class="product-manage-price">${product.price}</td>
      <td class="product-manage-quantity">${product.quantity}</td>
    </tr>
`;
}

export const CHARGE_SECTION_TEMPLATE = `
  <h3>자판기 동전 충전하기</h3>
  <form>
    <input type="number" id="vending-machine-charge-input" placeholder="자판기가 보유할 금액" />
    <button id="vending-machine-charge-button">충전하기</button>
  </form>
  <div>보유 금액: <span id="vending-machine-charge-amount"></span> </div>
  <h3>자판기가 보유한 동전</h3>
  <table>
    <tr>
      <td>동전</td>
      <td>개수</td>
    </tr>
    <tr>
      <td>500원</td>
      <td>
        <span id="vending-machine-coin-500-quantity">0</span>개
      </td>
    </tr>
    <tr>
      <td>100원</td>
      <td>
        <span id="vending-machine-coin-100-quantity">0</span>개
      </td>
    </tr>
    <tr>
      <td>50원</td>
      <td>
        <span id="vending-machine-coin-50-quantity">0</span>개
      </td>
    </tr>
    <tr>
      <td>10원</td>
      <td>
        <span id="vending-machine-coin-10-quantity">0</span>개
      </td>
    </tr>
  </table>
`;
