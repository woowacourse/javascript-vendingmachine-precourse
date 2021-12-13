export default class ProductPurchaseController {
  constructor($app) {
    this.$app = $app;
    this.insertMoney;
    this.productPurchaseField = document.createElement('div');
    this.render();
    this.setEvent();
  }
}