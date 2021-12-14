import tc from '../core/utils/tc.js';

export default class Item {
  constructor(
    name,
    price,
    quantity,
    _0 = tc(name, 'string'),
    _1 = tc(price, 'number'),
    _2 = tc(quantity, 'number')
  ) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // TODO: 예외 처리 수정
  purchase() {
    if (this.quantity <= 0) {
      throw new Error('out of stock');
    }

    this.quantity -= 1;
  }

  toString() {
    const { name, price, quantity } = this;

    return `${name}(${price}원) * ${quantity}개`;
  }
}
