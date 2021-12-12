export default class Validation {
  checkManageInput(name, price, quantity) {
    if(this.checkManageInputName(name)
    && this.checkManageInputPrice(price)
    && this.checkManageInputQuantity(quantity)) {
        return true;
    }
    return false;
  }

  checkManageInputName(name) {
    if(name === undefined || !name.trim()) {
        return false;
    }
    return true;
  }

  checkManageInputPrice(price) {
    if(price%10 !== 0 || price < 100 || Number.isNaN(Number(price)) || !price.trim()) {
        return false;
    }
    return true;
  }

  checkManageInputQuantity(quantity) {
    if(Number.isNaN(Number(quantity)) || !quantity.trim()) {
        return false;
    }
    return true;
  }
}