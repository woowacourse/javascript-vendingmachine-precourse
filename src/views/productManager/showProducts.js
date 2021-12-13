import { getProducts } from "../../utils/getSetItems.js";

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

const makeEmptyTable = () => {
  const $productTable = document.getElementById("product-table");

  $productTable.innerHTML = `
    <th>상품명</th>
    <th>가격</th>
    <th>수량</th>
  `;
};

const showProducts = () => {
  const strOfProducts = getProducts();

  makeEmptyTable();

  if (strOfProducts) {
    const products = strOfProducts.split(",");

    products.forEach(product => {
      const productInfo = product.split("/");
      insertProductToTable(productInfo[0], productInfo[1], productInfo[2]);
    });
  }
};

export { showProducts };
