import ProductPurchaseController from "../controllers/ProductPurchaseController.js";
import { productPurchaseTemplete, renderAblePurchaseProductList } from "../utils/dom/productPurchaseTemplete.js";

export default class ProductPurchaseView extends ProductPurchaseController {

  render() {
    this.productPurchaseField.innerHTML = productPurchaseTemplete;
    this.$app.append(this.productPurchaseField);
  }

  setEvent() {
    this.productPurchaseField.querySelector('#charge-button').addEventListener('click', (e) => {
      e.preventDefault();
      this.insertMoney = this.productPurchaseField.querySelector('input').value;
      this.renderMoney();
      this.getInsertMoney();
    })
  }

  renderMoney() {
    const $moneyWrap = document.querySelector('#charge-amount');
    this.puchaseMoneyResult 
    ? $moneyWrap.innerText = this.puchaseMoneyResult
    : this.loacalTotalInsertMoney && !this.insertMoney ? $moneyWrap.innerText = this.loacalTotalInsertMoney : "";
    !this.loacalTotalInsertMoney && this.insertMoney ? $moneyWrap.innerText = this.insertMoney : "";
    this.loacalTotalInsertMoney && this.insertMoney ? $moneyWrap.innerText = (Number(this.insertMoney) + Number(this.loacalTotalInsertMoney)) : ""; 
  }

  renderLocalPurchase() {
    const $produtAblePurchaseWrap = document.querySelector('#product-purchase-wrap');
    $produtAblePurchaseWrap.innerHTML = "";
    this.purchaseProductResult
    ? this.purchaseProductResult.map(v => $produtAblePurchaseWrap.append(renderAblePurchaseProductList(v)))
    : this.localProductList.map(v => $produtAblePurchaseWrap.append(renderAblePurchaseProductList(v)));
  }

}