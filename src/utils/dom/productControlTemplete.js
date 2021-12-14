import { PRODUCT } from "../constants.js";

export const productControlTemplete =  `
  <h2>상품 추가하기</h2>
  <form id="product-control-form">
    <input id="product-name-input" type="text" placeholder="상품명" />
    <input id="product-price-input" type="number" placeholder="가격" />
    <input id="product-quantity-input" type="number" placeholder="수량" />
    <button id="product-add-button" type="submit" >추가하기</button>
  </form>
  <h2>상품 현황</h2>
  <table style="border: 1px solid black">
    <tbody id="product-control-wrap">
      <thead>
        <td class="product-manage-name" style="border: 1px solid black">상품명</td>
        <td class="product-manage-price" style="border: 1px solid black">가격</td>
        <td class="product-manage-quantity" style="border: 1px solid black">수량</td>
      </thead>
    </tbody>
  </table>
`;

export function renderProductList(product) {
  const divFragment = document.createElement('tr');
  divFragment.className = "product-manage-item";
  divFragment.innerHTML = `<td class="product-manage-name" style="border: 1px solid black">${product[PRODUCT.NAME]}</td>
    <td class="product-manage-price" style="border: 1px solid black">${product[PRODUCT.PRICE]}</td>
    <td class="product-manage-quantity" style="border: 1px solid black">${product[PRODUCT.COUNT]}</td>`;
  
  return divFragment;
}