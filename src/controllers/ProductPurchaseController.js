import ProductPurchaseModel from "../models/ProductPurchaseModel.js";

export default class ProductPurchaseController {
  constructor($app) {
    this.purchaseModel = new ProductPurchaseModel();
    this.$app = $app;
    this.validInsertMoney;
    this.loacalTotalInsertMoney;
    this.localProductList;
    this.purchaseProduct;
    this.puchaseMoneyResult;
    this.chargeResult;
    this.localReturnCharge;
    this.productPurchaseField = document.createElement('div');
    this.render();
    this.setEvent();
    this.setInsertMoney();
    this.renderMoney();
    this.renderAblePurchase();
    this.setPurchaseEvent();
    this.setReutrnEvent();
    this.renderRetrunCharge();
  }

  renderPorductPurchase() {
    this.productPurchaseField.style = ("display: block");
    // this.renderMoney();
    this.setInsertMoney()
    this.renderAblePurchase();
  }

  getInsertMoney() {
    this.validInsertMoney && this.purchaseModel.setLocalInsertMoney(this.validInsertMoney);
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

  purchaseProductEvent() {
    this.purchaseModel.setPurchaseProduct(this.purchaseProduct);
    this.purchaseProductResult = this.purchaseModel.getPurchaseResult();
    this.puchaseMoneyResult = this.purchaseModel.getPuchaseMoneyResult();
    this.renderLocalPurchase()
    this.renderMoney();
  }

  returnCharge() {
    this.chargeResult = this.purchaseModel.setMinCharge();
    this.setInsertMoney();
    this.renderChargeResult();
  }

  renderRetrunCharge() {
    this.localReturnCharge = this.purchaseModel.getReturnCharge();
    this.renderChargeResult();
  }

}