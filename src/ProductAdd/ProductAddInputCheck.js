export default class ProductAddInputCheck {
  result(name, price, quantity) {
    if (
      this.constructor.name(name) &&
      this.constructor.price(price) &&
      this.constructor.quantity(quantity)
    ) {
      return true;
    }
    return false;
  }

  static name(name) {
    if (name.length < 1) {
      alert('상품명을 입력해주세요.');
      return false;
    }
    return true;
  }

  static price(price) {
    const numPrice = Number(price);
    if (price !== String(numPrice) || numPrice < 100 || numPrice % 10 !== 0) {
      alert('가격 입력이 잘못되었습니다. 다시 입력해주세요.');
      return false;
    }
    return true;
  }

  static quantity(quantity) {
    const numQuantity = Number(quantity);
    if (quantity !== String(numQuantity) || numQuantity < 1) {
      alert('수량 입력이 잘못되었습니다. 다시 입력해주세요.');
      return false;
    }
    return true;
  }
}
