import PurchaseView from '../../view/purchase/purchaseView.js';

export default class PurchaseController {
  constructor(appModel) {
    this.purchaseView = new PurchaseView();
    this.appModel = appModel;
  }

  init() {
    this.purchaseView.init();

    this.purchaseView.renderPurchaseTab(this.appModel.products);
  }
}
