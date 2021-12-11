export default class Item {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // TODO: 예외 처리 수정
  purchase() {
    if (this.quantity <= 0) {
      throw 'out of stock';
    }

    this.quantity -= 1;
  }

  toString() {
    const { name, price, quantity } = this;

    return `${name}(${price}원) * ${quantity}개`;
  }
}
