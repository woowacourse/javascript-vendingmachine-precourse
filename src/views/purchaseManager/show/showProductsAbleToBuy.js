import { onClickPurchaseButton } from "../../../controllers/purchaseManager/eventHandlers.js";
import { getProducts } from "../../../utils/getSetItems.js";
import { convertHyphenToSpace } from "../../../utils/productNameConverter.js";

// 상품을 테이블에 삽입
const insertAbleProductsToTable = (name, price, quantity) => {
  const $ableBuyProductTable = document.getElementById(
    "able-buy-product-table",
  );
  const spaceName = convertHyphenToSpace(name);
  $ableBuyProductTable.innerHTML += `
    <tr class="product-purchase-item">
      <td class="product-purchase-name" data-product-name=${name}>${spaceName}</td>
      <td class="product-purchase-price" data-product-price=${price}>${price}</td>
      <td class="product-purchase-quantity" data-product-quantity=${quantity}>${quantity}</td>
      <td><button class="purchase-button">구매하기</button></td>
    </tr>
  `;
};

// 빈 테이블 생성
const makeEmptyTable = () => {
  const $ableBuyProductTable = document.getElementById(
    "able-buy-product-table",
  );

  $ableBuyProductTable.innerHTML = `
    <th>상품명</th>
    <th>가격</th>
    <th>수량</th>
    <th>구매</th>
  `;
};

// 재고가 있는 상품 보여주기
const showProductsAbleToBuy = () => {
  makeEmptyTable();
  const strOfProducts = getProducts();

  if (strOfProducts) {
    const products = strOfProducts.split(",");
    products.forEach(product => {
      const info = product.split("/");
      if (info[2] > 0) {
        insertAbleProductsToTable(info[0], info[1], info[2]);
      }
    });
  }
  onClickPurchaseButton();
};

export { showProductsAbleToBuy };
