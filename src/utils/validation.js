export default class Validation {
  checkManageInput(product) {
    if (this.checkManageInputName(product.name) && this.checkManageInputPrice(product.price) && this.checkManageInputQuantity(product.quantity)) {
      return true;
    }
    return false;
  }

  checkManageInputName(name) {
    if (name === undefined || !name.trim()) {
      return false;
    }
    return true;
  }

  checkManageInputPrice(price) {
    if (price % 10 !== 0 || price < 100 || Number.isNaN(Number(price)) || !price.trim()) {
      return false;
    }
    return true;
  }

  checkManageInputQuantity(quantity) {
    if (Number.isNaN(Number(quantity)) || !quantity.trim()) {
      return false;
    }
    return true;
  }

  checkMoneyInput(money) {
    if (Number.isNaN(Number(money)) || !money.trim()) {
      return false;
    }
    if (Number(money) < 0 || Number(money) % 10 !== 0) {
      return false;
    }
    return true;
  }

  checkPurchasePossible(productPrice, productQuantity, insertedMoney) {
    return productQuantity > 0 && productPrice <= insertedMoney;
  }
}