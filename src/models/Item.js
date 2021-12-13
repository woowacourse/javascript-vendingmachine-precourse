import tc from '../core/utils/tc.js';

export default class Item {
  constructor(
    id,
    name,
    price,
    quantity,
    _0 = tc(id, 'number'),
    _1 = tc(name, 'string'),
    _2 = tc(price, 'number'),
    _3 = tc(quantity, 'number')
  ) {
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
