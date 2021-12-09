export default class Item {
  constructor(name, price, quantity, id = Date.now()) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  purchase() {
    this.quantity -= 1;
  }

  toHTML() {
    return `
      <tr class='product-manage-item' data-product-id=${this.id}>
        <td class='product-manage-name'>${this.name}</td>
        <td class='product-manage-price'>${this.price}</td>
        <td class='product-manage-quantity'>${this.quantity}</td>
      </tr>
    `;
  }

  toString() {
    const { name, price, quantity } = this;

    return `${name}(${price}원) * ${quantity}개`;
  }
}
