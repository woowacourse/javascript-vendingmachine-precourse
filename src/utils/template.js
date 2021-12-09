export const PRODUCT_BASIC_TEMPLATE = `
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
