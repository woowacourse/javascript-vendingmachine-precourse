export default class ProductPurchaseMenu {
  constructor(view) {
    this.view = view;
    this.render();
  }

  render() {
    this.view.showProductPurchase();
  }
}
