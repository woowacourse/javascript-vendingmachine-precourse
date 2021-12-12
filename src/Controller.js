export default class Controller {
  constructor({ tabView, productManagementView, chargingChangeView }, store) {
    this.tabView = tabView;
    this.productManagementView = productManagementView;
    this.chargingChangeView = chargingChangeView;

    this.store = store;

    this.subscribeViewEvents();

    this.render();
  }

  subscribeViewEvents() {
    this.productManagementView.on('@addProduct', (event) => {
      this.store.addProduct(event.detail.product);
      const foo = this.store.getProductList();
      this.productManagementView.show(foo);
    });
    this.chargingChangeView.on('@chargeChanges', (event) => {
      this.store.chargeChanges(event.detail.changes);
      const foo = this.store.getCurrentChanges();
      console.log(foo);
      this.chargingChangeView.show(foo);
    })
  }

  render() {
    this.productManagementView.hide(
      JSON.parse(this.store.storage.getItem('productList')),
    );

    this.chargingChangeView.show(
      JSON.parse(this.store.storage.getItem('changeList')),
    );

  }
}
