import ProductPurchase from '../elements/ProductPurchase.js';

export default class ProductPurchaseUtil {
  constructor() {
    this.productPurchase = new ProductPurchase();
    this.purchaseCoin = 0;
    this.addPurchaseCoin();
  }

  addPurchaseCoin() {
    this.productPurchase.submit.addEventListener('click', e => {
      e.preventDefault();
      console.log('submit');
      if (this.getPurchaseCoin(this.productPurchase.input)) {
        console.log(this.purchaseCoin);
      }
    });
  }

  getPurchaseCoin(input) {
    this.purchaseCoin = Number(input.value);

    return this.purchaseCoin;
  }
}
