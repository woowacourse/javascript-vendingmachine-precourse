import { PRODUCT_PAGE_TEMPLATE } from "../template/product-template.js";
import { render } from "../util/render.js";

export default class ProductView {
  renderPage = (container) => {
    render(container, PRODUCT_PAGE_TEMPLATE);
  };

  renderProductTable = (tableBody, products) => {
    const productRows = this.createProductRow(products);
    tableBody.innerHTML = productRows;
  };

  createProductRow = (products) => {
    return products
      .map(({ name, price, quantity }) => {
        return `
        <tr class="product-manage-item">
          <td class="product-manage-name">${name}</td>
          <td class="product-manage-price">${price}</td>
          <td class="product-manage-quantity">${quantity}</td>
        </tr>
        `;
      })
      .join("");
  };
}
