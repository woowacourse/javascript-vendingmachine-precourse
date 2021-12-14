import { EXCEPTIONS } from '../configs/constants.js';

export default class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  isOutOfStock() {
    return this.quantity <= 0;
  }

  // TODO: 예외 처리 수정
  purchase() {
    if (this.isOutOfStock()) {
      throw EXCEPTIONS.OUT_OF_STOCK;
    }

    this.quantity -= 1;
  }

  toString() {
    const { name, price, quantity } = this;

    return `${name}(${price}원) * ${quantity}개`;
  }

  toObject() {
    const { name, price, quantity } = this;

    return { name, price, quantity };
  }
}
