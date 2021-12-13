export default class VendingMachine {
  constructor() {
    this.productList = [];
    this.ownChange = 0;
    this.userMoney = 0;
    this.returnMoney = 0;
  }

  addProduct(name, price, quantity) {
    const isInclude = this.productList.some((product) => product.name === name);
    if (!isInclude) {
      this.productList.push({ name, price, quantity });
      return;
    }
    this.productList.map((product) => {
      if (product.name === name) {
        product.price = price;
        product.quantity += quantity;
        return false;
      }
    });
  }
}
