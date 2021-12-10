import { PRODUCT_PAGE_TEMPLATE } from "../template/product-template.js";
import { render } from "../util/render.js";
import { CLASS } from "../util/constant.js";

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
        <tr class=${CLASS.PRODUCT_MANAGE_ITEM}>
          <td class=${CLASS.PRODUCT_MANAGE_NAME}>${name}</td>
          <td class=${CLASS.PRODUCT_MANAGE_PRICE}>${price}</td>
          <td class=${CLASS.PRODUCT_MANAGE_QUANTITY}>${quantity}</td>
        </tr>
        `;
      })
      .join("");
  };
}
