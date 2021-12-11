import { PURCHASE_PAGE_TEMPLATE } from "../template/purchase-template.js";
import { render } from "../util/render.js";
import { CLASS } from "../util/constant.js";

export default class PurchaseView {
  renderPage = (container) => {
    render(container, PURCHASE_PAGE_TEMPLATE);
  };

  renderPurchaseTable = (tableBody, products) => {
    const purchaseRows = this.createPurchaseRow(products);
    tableBody.innerHTML = purchaseRows;
  };

  createPurchaseRow = (products) => {
    return products
      .map(({ name, price, quantity }) => {
        return `
        <tr class=${CLASS.PRODUCT_PURCHASE_ITEM}>
          <td class=${CLASS.PRODUCT_PURCHASE_NAME} data-product-name=${name}>${name}</td>
          <td class=${CLASS.PRODUCT_PURCHASE_PRICE} data-product-price=${price}>${price}</td>
          <td class=${CLASS.PRODUCT_PURCHASE_QUANTITY} data-product-quantity=${quantity}>${quantity}</td>
          <td><button class=${CLASS.PURCHASE_BUTTON}>구매하기</button></td>
        </tr>
        `;
      })
      .join("");
  };

  renderChargedAmount = (container, amount) => {
    container.innerText = `${amount}`;
  };
}
