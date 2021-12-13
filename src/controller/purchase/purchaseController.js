import PurchaseView from '../../view/purchase/purchaseView.js';

export default class PurchaseController {
  constructor() {
    this.purchaseView = new PurchaseView();
  }

  init() {
    this.purchaseView.init();

    this.purchaseView.renderPurchaseTab();
  }
}
