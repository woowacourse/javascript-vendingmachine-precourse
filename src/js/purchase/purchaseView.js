import { PURCHASE_PAGE_TEMPLATE } from "../template/purchase-template.js";

export default class PurchaseView {
  renderPage = (container) => {
    this.render(container, PURCHASE_PAGE_TEMPLATE);
  };

  renderPurchaseTable = (tableBody, products) => {
    const purchaseRows = this.createPurchaseRow(products);
    tableBody.innerHTML = purchaseRows;
  };

  createPurchaseRow = (products) => {
    return products
      .map(({ name, price, quantity }) => {
        return `
        <tr class="product-purchase-item">
          <td class="product-purchase-name" data-product-name=${name}>${name}</td>
          <td class="product-purchase-price" data-product-price=${price}>${price}</td>
          <td class="product-purchase-quantity" data-product-quantity=${quantity}>${quantity}</td>
          <td><button class="purchase-button">구매하기</button></td>
        </tr>
        `;
      })
      .join("");
  };

  renderChargedAmount = (container, amount) => {
    container.innerText = `${amount}`;
  };

  render = (container, template) => {
    container.insertAdjacentHTML("beforeend", template);
  };
}
