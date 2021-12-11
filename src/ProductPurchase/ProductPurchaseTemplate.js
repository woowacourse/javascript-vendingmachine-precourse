export default class ProductPurcahseTemplate {
  constructor() {
    this.makeBasicTemplate();
  }

  makeBasicTemplate() {
    this.productPurchaseScreen = document.createElement('div');
    this.title = document.createElement('h2');
    this.title.innerText = '금액 투입';
    this.productPurchaseScreen.append(this.title);
  }

  template() {
    return this.productPurchaseScreen;
  }
}
