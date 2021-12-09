export class VendingMachineModel {
  products = JSON.parse(localStorage.getItem('products')) || [];
  coins = {
    500: 0,
    100: 0,
    50: 0,
    10: 0,
  };
  insertedMoney = 0;

  addProduct(productName, price, quantity) {
    this.products = [...this.products, { productName, price, quantity }];
    localStorage.setItem('products', JSON.stringify(this.products));
    return this.products;
  }
}
