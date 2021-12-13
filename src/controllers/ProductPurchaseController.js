export default class ProductPurchaseController {
  constructor($app) {
    this.$app = $app;
    this.productPurchaseField = document.createElement('div');
    this.render();
  }
}