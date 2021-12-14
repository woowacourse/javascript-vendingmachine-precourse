import { getProducts } from "../../../models/getSetItems.js";
import { convertHyphenToSpace } from "../../../utils/productNameConverter.js";

// 상품을 테이블에 삽입
const insertProductToTable = (name, price, quantity) => {
  const $productTable = document.getElementById("product-table");

  $productTable.innerHTML += `
    <tr class="product-manage-name">
      <td class="product-manage-name">${name}</td>
      <td class="product-manage-price">${price}</td>
      <td class="product-manage-quantity">${quantity}</td>
    </tr>
  `;
};

// 빈 테이블 생성
const makeEmptyTable = () => {
  const $productTable = document.getElementById("product-table");

  $productTable.innerHTML = `
    <th>상품명</th>
    <th>가격</th>
    <th>수량</th>
  `;
};

// 모든 상품 보여주기
const showProducts = () => {
  const strOfProducts = getProducts();

  makeEmptyTable();

  if (strOfProducts) {
    const products = strOfProducts.split(",");

    products.forEach(product => {
      const productInfo = product.split("/");
      productInfo[0] = convertHyphenToSpace(productInfo[0]);
      insertProductToTable(productInfo[0], productInfo[1], productInfo[2]);
    });
  }
};

export { showProducts };
