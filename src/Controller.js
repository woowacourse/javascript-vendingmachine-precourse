export default class Controller {
  constructor({ tabView, productManagementView }, store) {
    this.tabView = tabView;
    this.productManagementView = productManagementView;

    this.store = store;

    this.subscribeViewEvents();

    this.render();
  }

  subscribeViewEvents() {
    this.productManagementView.on('@addProduct', (event) => {
      this.store.addProduct(event.detail.product);
      const foo = this.store.getProductList();
      console.log(foo);
      this.productManagementView.show(foo);
    });
  }

  render() {
    this.productManagementView.show(
      JSON.parse(this.store.storage.getItem('productList')),
    );
  }
}
