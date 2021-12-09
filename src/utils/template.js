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
    <tr class="product-manage-item">
      <td class="product-manage-name">상품명</td>
      <td class="product-manage-price">가격</td>
      <td class="product-manage-quantity">수량</td>
    </tr>
  </table>
`;

export const PRODUCT_MANAGE_TEMPLATE = `
  <tr class="product-manage-item">
    <td class="product-manage-name">상품명</td>
    <td class="product-manage-price">가격</td>
    <td class="product-manage-quantity">수량</td>
  </tr>`;

export function printProductTemplate(product) {
  return `
    <tr class="product-manage-item">
      <td class="product-manage-name">${product.productName}</td>
      <td class="product-manage-price">${product.price}</td>
      <td class="product-manage-quantity">${product.quantity}</td>
    </tr>
`;
}
