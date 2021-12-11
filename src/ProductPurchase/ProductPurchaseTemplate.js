export default class ProductPurcahseTemplate {
  constructor() {
    this.app = document.getElementById('app');
    this.productPurchaseScreen = document.createElement('div');
    this.app.append(this.productPurchaseScreen);
    this.makeBasicTemplate();
  }

  makeBasicTemplate() {
    this.title = document.createElement('h2');
    this.title.innerText = '금액 투입';
    this.productPurchaseScreen.append(this.title);
  }

  template() {
    return this.productPurchaseScreen;
  }
}
