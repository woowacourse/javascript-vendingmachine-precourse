import ProductPurchaseModel from "../models/ProductPurchaseModel.js";

export default class ProductPurchaseController {
  constructor($app) {
    this.purchaseModel = new ProductPurchaseModel();
    this.$app = $app;
    this.insertMoney;
    this.loacalTotalInsertMoney;
    this.puchaseMoneyResult;
    this.localProductList;
    this.productPurchaseField = document.createElement('div');
    this.render();
    this.setEvent();
    this.setInsertMoney();
    this.renderMoney();
    this.renderAblePurchase();
  }

  getInsertMoney() {
    this.insertMoney && this.purchaseModel.setLocalInsertMoney(this.insertMoney);
    this.setInsertMoney();
  }

  setInsertMoney() {
    this.loacalTotalInsertMoney = this.purchaseModel.getLocalInsertMoney();
    this.renderMoney();
  }

  renderAblePurchase() {
    this.localProductList = this.purchaseModel.getLocalProductList();
    this.localProductList && this.renderLocalPurchase();
  }

}