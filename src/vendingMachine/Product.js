const ADDED_PRODUCT_ID = 'product-manage-item';
const PRODUCT_MANAGE_NAME_ID = 'product-manage-name';
const PRODUCT_MANAGE_PRICE_ID = 'product-manage-price';
const PRODUCT_MANAGE_QUANTITY_ID = 'product-manage-quantity';

export default class Product {
  constructor({ name, price, quantity }) {
    this.name = name.trim();
    this.price = price;
    this.quantity = quantity;
  }

  addedTemplate() {
    return `
      <tr class="${ADDED_PRODUCT_ID}"align="center" bgcolor="white" height="40">
        <td class="${PRODUCT_MANAGE_NAME_ID}" align="center" width="160">${this.name}</td>
        <td class="${PRODUCT_MANAGE_PRICE_ID}" align="center" width="100">${this.price}</td>
        <td class="${PRODUCT_MANAGE_QUANTITY_ID}" align="center" width="100">${this.quantity}</td>
      </tr>
    `;
  }

  render(dom) {
    dom.insertAdjacentHTML('beforeend', this.addedTemplate());
  }
}
