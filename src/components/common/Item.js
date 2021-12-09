export default class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  toHTML() {
    return `
      <tr class='product-manage-item'>
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
