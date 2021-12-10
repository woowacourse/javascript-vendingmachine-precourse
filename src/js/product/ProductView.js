import { PRODUCT_PAGE_TEMPLATE } from "../template/product-template.js";

export default class ProductView {
  renderPage = (container) => {
    this.render(container, PRODUCT_PAGE_TEMPLATE);
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

  render = (container, template) => {
    container.insertAdjacentHTML("beforeend", template);
  };
}
