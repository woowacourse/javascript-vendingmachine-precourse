export default class Product {
  static instance;

  constructor() {
    if (Product.instance) return Product.instance;
    if (localStorage.getItem('currentProducts') == null)
      this.currentProducts = [];
    else
      this.currentProducts = JSON.parse(
        localStorage.getItem('currentProducts')
      );
    if (localStorage.getItem('chargeCost') == null) this.chargeCost = 0;
    else this.chargeCost = Number(localStorage.getItem('chargeCost'));
    Product.instance = this;
  }

  addProduct(name, price, quantity) {
    const product = {
      name,
      price,
      quantity,
    };
    this.currentProducts.push(product);
    this.setLocalStorage();
  }

  additionalInputCharge(inputCharge) {
    this.chargeCost += inputCharge;
    this.setLocalStorage();
    return this.chargeCost;
  }

  purchaseProduct(index) {
    let selectProduct = this.currentProducts[index];
    if (this.chargeCost < selectProduct.price) {
      alert('상품을 구입할 돈이 부족합니다.');
      return true;
    }
    this.chargeCost -= selectProduct.price;
    selectProduct.quantity -= 1;
    if (selectProduct.quantity == 0) {
      this.currentProducts.splice(index, 1);
    }
    this.setLocalStorage();
  }

  setChargeCost(changedChargeCost) {
    this.chargeCost = changedChargeCost;
    this.setLocalStorage();
  }

  getChargeCost() {
    return this.chargeCost;
  }

  getProduct() {
    return this.currentProducts;
  }

  setLocalStorage() {
    localStorage.setItem(
      'currentProducts',
      JSON.stringify(this.currentProducts)
    );
    localStorage.setItem('chargeCost', this.chargeCost);
  }
}
